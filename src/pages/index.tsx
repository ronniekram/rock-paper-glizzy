import { useState } from "react";
import tw, { styled } from "twin.macro";
import Popup from "reactjs-popup";
import Layout from "../components/layout";
import Header from "../components/header";
import Button from "../components/button";
import Game from "../components/game";
import { Modal } from "../components/rules";
import { Token } from "../components/moves";
import { RPS, LS } from "../components/game";
import bg from "../assets/images/bg-triangle.svg";

const Setup = styled.div`
	background: url(${bg});
	background-size: 70%;
	background-position: center;
	@media (min-width: 768px) {
		background-size: 305px 277px;
	}

	${tw`mx-auto bg-no-repeat`};
	${tw`width[19.5rem] height[17.625rem]`};
	${tw`md:(width[29.75rem] height[26.875rem])`};

	${tw`md:(mt-20)`};
	${tw`flex flex-col justify-between`};
`;

const rps: RPS[] = [`ROCK`, `PAPER`, `SCISSORS`];

const Home = (): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const [score, setScore] = useState(0);
	const [choice, setChoice] = useState<LS | null>(null);
	const [houseChoice, setHouseChoice] = useState<LS>(
		rps[Math.floor(Math.random() * 3)]
	);

	return (
		<Layout>
			<div tw="w-screen h-screen mx-auto flex flex-col justify-between">
				<Header gameType="RPS" score={score} />

				{!choice ? (
					<Setup>
						<div tw="flex items-center justify-between">
							<button
								type="button"
								onClick={() => setChoice(`PAPER`)}
							>
								<Token size="THREE" name="paper" />
							</button>
							<button
								type="button"
								onClick={() => setChoice(`SCISSORS`)}
							>
								<Token size="THREE" name="scissors" />
							</button>
						</div>
						<div tw="flex justify-center">
							<button
								type="button"
								onClick={() => setChoice(`ROCK`)}
							>
								<Token size="THREE" name="rock" />
							</button>
						</div>
					</Setup>
				) : (
					<Game
						gameType="RPS"
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
							gameType="RPS"
						/>
					</Popup>
				</div>
			</div>
		</Layout>
	);
};
export default Home;
