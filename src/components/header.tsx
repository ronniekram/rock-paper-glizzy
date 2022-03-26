import { useContext } from "react";
import { Link } from "gatsby";
import Popup from "reactjs-popup";
import tw, { styled } from "twin.macro";
import Score from "./score";
import { GameContext } from "../context/game-context";
import logo from "../assets/images/logo.svg";
import logoBonus from "../assets/images/logo-bonus.svg";
import question from "../assets/images/question-circle.svg";

const Wrapper = styled.div`
	border: 3px solid rgba(255, 255, 255, 0.289199);
	${tw`border-radius[5px]`};
	${tw`p-3`}
	${tw`width[19.4375] height[6rem]`};
	${tw`md:(width[46.875rem] height[9.375rem])`};
	${tw`flex items-center justify-between`};
`;

const image = [tw`h-full`];

const Header = () => {
	const { gameType } = useContext(GameContext);

	return (
		<Wrapper>
			<div tw="flex items-end">
				{gameType === `RPS` ? (
					<Link to="/bonus">
						<img
							src={logo}
							alt="Rock Paper Scissors"
							css={[image]}
						/>
					</Link>
				) : (
					<Link to="/">
						<img
							src={logoBonus}
							alt="Rock Paper Scissors Lizard Spock"
							css={[image]}
						/>
					</Link>
				)}
				<Popup
					trigger={
						<span tw="text-white opacity-80 hover:(opacity-100) transition duration-200 ease-in-out">
							<img src={question} alt="Question tooltip" />
						</span>
					}
					on="hover"
				>
					<div
						tw="width[3.5rem] height[3rem] p-0.5 rounded"
						css={[
							`background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%); box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);`,
						]}
					>
						<p tw="text-xs font-regular text-copy-dark line-height[16px] letter-spacing[0.5px] uppercase">
							{gameType === `RPS`
								? `Click the image to the left to play a bonus game.`
								: `Click the image to the left to go back to regular Rock Paper Scissors.`}
						</p>
					</div>
				</Popup>
			</div>
			<Score />
		</Wrapper>
	);
};

export default Header;
