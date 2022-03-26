import React, {
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";
import Button from "./button";
import {
	Rock,
	Paper,
	Scissors,
	Lizard,
	Spock,
} from "./moves";

// ========== TYPES
export type RPS = `ROCK` | `PAPER` | `SCISSORS`;
export type LS =
	| `ROCK`
	| `PAPER`
	| `SCISSORS`
	| `LIZARD`
	| `SPOCK`;

type GameProps = {
	gameType: `RPS` | `LS`;
	userChoice: RPS | LS;
	setChoice: Dispatch<SetStateAction<LS | null>>;
	houseChoice: RPS | LS;
	setHouseChoice: Dispatch<SetStateAction<LS>>;
	score: number;
	setScore: Dispatch<SetStateAction<number>>;
};

// ========== STYLES
const Wrapper = styled.div`
	${tw`width[19.4375rem] height[11.375rem]`};
	${tw`md:(width[39rem] height[24.6875rem])`};
	${tw`lg:(width[46.875rem])`};
	${tw`flex justify-between items-center`};
	${tw`mx-auto`};
`;

const TokenWrapper = styled.div`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`md:(width[12.375rem] height[12.6875rem])`};
	${tw`flex justify-center items-center`};
`;

const Text = styled.h2`
	${tw`text-white text-center uppercase font-bold`};
	${tw`text-[15px] line-height[32px] letter-spacing[1.88px]`};
	${tw`md:(text-[24px] line-height[32px] letter-spacing[3px])`};
	${tw`mt-4 md:(mb-16)`};
`;

// ========== FUNCTIONS WHOMST HELP
const rps: RPS[] = [`ROCK`, `PAPER`, `SCISSORS`];
const ls: LS[] = [
	`ROCK`,
	`PAPER`,
	`SCISSORS`,
	`LIZARD`,
	`SPOCK`,
];

const returnToken = (token: LS) => {
	switch (token) {
		case `PAPER`:
			return <Paper size="MATCH" />;
		case `SCISSORS`:
			return <Scissors size="MATCH" />;
		case `LIZARD`:
			return <Lizard size="MATCH" />;
		case `SPOCK`:
			return <Spock size="MATCH" />;
		default:
			return <Rock size="MATCH" />;
	}
};

const determineWinner = (
	user: LS,
	house: LS,
	setWinner: Dispatch<SetStateAction<`USER` | `HOUSE` | null>>
) => {
	const ifVal = (
		a: LS,
		b: LS,
		w: `USER` | `HOUSE` | null
	) => {
		if (user === a && house === b) {
			setWinner(w);
		}
	};
	// ROCK, PAPER, SCISSORS --> USER WINS
	ifVal(`ROCK`, `SCISSORS`, `USER`);
	ifVal(`SCISSORS`, `PAPER`, `USER`);
	ifVal(`PAPER`, `ROCK`, `USER`);
	// ROCK, PAPER, SCISSORS --> HOUSE WINS
	ifVal(`SCISSORS`, `ROCK`, `HOUSE`);
	ifVal(`PAPER`, `SCISSORS`, `HOUSE`);
	ifVal(`ROCK`, `PAPER`, `HOUSE`);
	// ROCK, PAPER, SCISSORS, LIZARD, SPOCK --> USER WINS
	// ROCK, PAPER, SCISSORS, LIZARD, SPOCK --> HOUSE WINS
};

// ========== COMPONENTS
const Game = ({
	gameType,
	userChoice,
	setChoice,
	houseChoice,
	setHouseChoice,
	score,
	setScore,
}: GameProps) => {
	const [winner, setWinner] = useState<
		`USER` | `HOUSE` | null
	>(null);
	const { width } = useWindowSize();
	const userToken = returnToken(userChoice);
	const houseToken = returnToken(houseChoice);

	useEffect(() => {
		determineWinner(userChoice, houseChoice, setWinner);
	}, []);

	useEffect(() => {
		if (winner === `USER`)
			setTimeout(() => setScore(score + 1), 500);
	}, [winner]);

	return (
		<>
			<Wrapper>
				{/* USER CHOICE  */}
				<div tw="flex flex-col items-center md:(flex flex-col-reverse items-center width[14.40625rem])">
					<TokenWrapper>{userToken}</TokenWrapper>
					<Text>you picked</Text>
				</div>

				{width >= 1024 && (
					<div tw="w-max text-center">
						<h2 tw="text-white font-bold text-[56px] line-height[67.2px] mb-4">
							{winner === `USER` ? `YOU WIN!` : `YOU LOSE!`}
						</h2>
						<Button
							size="LG"
							label="play again"
							onClick={() => {
								gameType === `RPS`
									? setHouseChoice(
											rps[Math.floor(Math.random() * 3)]
									  )
									: setHouseChoice(
											ls[Math.floor(Math.random() * 5)]
									  );
								setChoice(null);
								setWinner(null);
							}}
						/>
					</div>
				)}
				{/* HOUSE CHOICE  */}
				<div tw="flex flex-col items-center md:(flex flex-col-reverse items-center width[14.40625rem])">
					<TokenWrapper>{houseToken}</TokenWrapper>
					<Text>the house picked</Text>
				</div>
			</Wrapper>

			{width < 1024 && (
				<div tw="w-max mx-auto text-center">
					<h2 tw="text-white font-bold text-[56px] line-height[67.2px] mt-4">
						{winner === `USER` ? `YOU WIN!` : `YOU LOSE!`}
					</h2>
					<Button
						size="LG"
						label="play again"
						onClick={() => {
							setChoice(null);
							setWinner(null);
						}}
					/>
				</div>
			)}
		</>
	);
};

export default Game;
