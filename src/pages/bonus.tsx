import { useState } from "react";
import tw, { styled } from "twin.macro";
import Popup from "reactjs-popup";
import Layout from "../components/layout";
import Header from "../components/header";
import Button from "../components/button";
import Game from "../components/game";
import { Modal } from "../components/rules";
import { Token } from "../components/moves";
import { LS } from "../components/game";
import bg from "../assets/images/bg-pentagon.svg";

const Setup = styled.div`
	background: url(${bg});
	background-size: 85%;
	background-position: center;

	${tw`mx-auto bg-no-repeat`};
	${tw`width[19.4375rem] height[21rem]`};
	${tw`md:(width[29.5rem] height[30rem])`};

	${tw`md:(mt-12)`};
	${tw`flex flex-col justify-between`};
`;

const ls: LS[] = [
	`ROCK`,
	`PAPER`,
	`SCISSORS`,
	`LIZARD`,
	`SPOCK`,
];

const Bonus = (): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const [score, setScore] = useState(0);
	const [choice, setChoice] = useState<LS | null>(null);
	const [houseChoice, setHouseChoice] = useState<LS>(
		ls[Math.floor(Math.random() * 5)]
	);

	return (
		<Layout>
			<div tw="w-screen h-screen mx-auto flex flex-col justify-between">
				<Header gameType="LS" score={score} />

				{!choice ? (
					<Setup>
						<div tw="flex justify-center">
							<button
								type="button"
								onClick={() => setChoice(`SCISSORS`)}
							>
								<Token size="FIVE" name="scissors" />
							</button>
						</div>

						<div tw="flex justify-between mb-6">
							<button
								type="button"
								onClick={() => setChoice(`SPOCK`)}
							>
								<Token size="FIVE" name="spock" />
							</button>

							<button
								type="button"
								onClick={() => setChoice(`PAPER`)}
							>
								<Token size="FIVE" name="paper" />
							</button>
						</div>

						<div tw="flex justify-evenly md:(px-10)">
							<button
								type="button"
								onClick={() => setChoice(`LIZARD`)}
							>
								<Token size="FIVE" name="lizard" />
							</button>

							<button
								type="button"
								onClick={() => setChoice(`ROCK`)}
							>
								<Token size="FIVE" name="rock" />
							</button>
						</div>
					</Setup>
				) : (
					<Game
						gameType="LS"
						userChoice={choice}
						setChoice={setChoice}
						houseChoice={houseChoice}
						setHouseChoice={setHouseChoice}
						score={score}
						setScore={setScore}
					/>
				)}

				<div tw="w-full flex justify-center self-end p-8 md:(justify-end)">
					<Popup
						open={open}
						trigger={() => (
							<Button
								size="SM"
								label="rules"
								onClick={() => setOpen(!open)}
							/>
						)}
						modal
						on="click"
						overlayStyle={{
							backgroundColor: `rgba(0, 0, 0, 0.5)`,
						}}
					>
						<Modal
							open={open}
							setOpen={setOpen}
							gameType="LS"
						/>
					</Popup>
				</div>
			</div>
		</Layout>
	);
};
export default Bonus;
