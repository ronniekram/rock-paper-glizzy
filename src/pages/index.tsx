import { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import Popup from "reactjs-popup";
import Layout from "../components/layout";
import Header from "../components/header";
import { Modal } from "../components/rules";
import { Rock, Paper, Scissors } from "../components/moves";
import bg from "../assets/images/bg-triangle.svg";

const Game = styled.div`
	background: url(${bg});
	background-size: 70%;
	background-position: center;
	@media (min-width: 768px) {
		background-size: 305px 277px;
	}

	${tw`mx-auto bg-no-repeat`};
	${tw`width[19.5rem] height[17.625rem]`};
	${tw`md:(width[29.75rem] height[26.875rem])`};
	${tw`mt-[6.5625rem]`}
	${tw`md:(mt-20)`};
	${tw`flex flex-col justify-between`};
`;

const Button = styled.button`
	${tw`width[8rem] height[2.5rem]`};
	${tw`text-white uppercase`};
	${tw`bg-transparent border border-white`};
	${tw`font-regular text-base line-height[19.2px] letter-spacing[2.5px] rounded-md transition-all duration-300 ease-in-out`};
	${tw`hover:(text-copy-dark bg-white)`};
`;

const Home = (): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const [score, setScore] = useState(0);
	const [size, setSize] = useState<
		`THREE` | `FIVE` | `MATCH`
	>(`THREE`);

	return (
		<Layout>
			<div tw="w-screen h-screen mx-auto">
				<Header gameType="RPS" score={score} />

				<Game>
					<div tw="flex items-center justify-between">
						<Paper size={size} />
						<Scissors size={size} />
					</div>
					<div tw="flex justify-center">
						<Rock size={size} />
					</div>
				</Game>

				<div tw="w-full flex justify-end self-end p-8">
					<Popup
						open={open}
						trigger={<Button type="button">rules</Button>}
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
