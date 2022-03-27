import React, {
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";
import Button from "./button";
import { Token } from "./moves";

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
	${tw`height[11.375rem] md:(height[24.6875rem])`};
	${tw`flex justify-between items-center`};
	${tw`mx-auto`};
`;

const TokenWrapper = styled.div`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`md:(width[18.288125rem] height[18.75rem])`};
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
			return <Token size="MATCH" name="paper" />;
		case `SCISSORS`:
			return <Token size="MATCH" name="scissors" />;
		case `LIZARD`:
			return <Token size="MATCH" name="lizard" />;
		case `SPOCK`:
			return <Token size="MATCH" name="spock" />;
		default:
			return <Token size="MATCH" name="rock" />;
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
	ifVal(`ROCK`, `LIZARD`, `USER`);
	ifVal(`LIZARD`, `SPOCK`, `USER`);
	ifVal(`SPOCK`, `SCISSORS`, `USER`);
	ifVal(`SPOCK`, `ROCK`, `USER`);
	ifVal(`PAPER`, `SPOCK`, `USER`);
	ifVal(`LIZARD`, `PAPER`, `USER`);
	ifVal(`SCISSORS`, `LIZARD`, `USER`);
	// ROCK, PAPER, SCISSORS, LIZARD, SPOCK --> HOUSE WINS
	ifVal(`LIZARD`, `ROCK`, `HOUSE`);
	ifVal(`SPOCK`, `LIZARD`, `HOUSE`);
	ifVal(`SCISSORS`, `SPOCK`, `HOUSE`);
	ifVal(`ROCK`, `SPOCK`, `HOUSE`);
	ifVal(`SPOCK`, `PAPER`, `HOUSE`);
	ifVal(`PAPER`, `LIZARD`, `HOUSE`);
	ifVal(`LIZARD`, `SCISSORS`, `HOUSE`);
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
				<div tw="flex flex-col items-center mr-8 md:(flex flex-col-reverse items-center) lg:(mr-0)">
					<TokenWrapper>{userToken}</TokenWrapper>
					<Text>you picked</Text>
				</div>

				{width >= 1024 && (
					<div tw="w-max text-center mx-14">
						<h2 tw="text-white font-bold text-[56px] line-height[67.2px] mb-4">
							{winner === `USER` && `YOU WIN!`}
							{winner === `HOUSE` && `YOU LOSE!`}
							{!winner && `IT'S A TIE!`}
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
				<div tw="flex flex-col items-center ml-8 md:(flex flex-col-reverse items-center) lg:(ml-0)">
					<TokenWrapper>{houseToken}</TokenWrapper>
					<Text>the house picked</Text>
				</div>
			</Wrapper>

			{width < 1024 && (
				<div tw="w-max mx-auto text-center">
					<h2 tw="text-white font-bold text-[56px] line-height[67.2px] mt-4">
						{winner === `USER` && `YOU WIN!`}
						{winner === `HOUSE` && `YOU LOSE!`}
						{!winner && `IT'S A TIE!`}
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
