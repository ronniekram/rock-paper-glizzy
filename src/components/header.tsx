import { Link } from "gatsby";
import Popup from "reactjs-popup";
import tw, { styled } from "twin.macro";
import Score from "./score";
import logo from "../assets/images/logo.svg";
import logoBonus from "../assets/images/logo-bonus.svg";
import question from "../assets/images/question-circle.svg";

const Wrapper = styled.div`
	border: 3px solid rgba(255, 255, 255, 0.289199);
	${tw`border-radius[5px]`};
	${tw`py-2.5 pr-2.5 pl-6 mt-8 md:(py-[18px] pl-8 pr-6 mt-12)`}
	${tw`width[19.4375rem] height[6rem]`};
	${tw`md:(width[39rem] height[9.375rem])`};
	${tw`lg:(width[46.875rem] height[9.375rem])`};
	${tw`flex items-center justify-between`};
	${tw`mx-auto`}
`;

const image = [tw`h-12 md:(h-24)`];

const Header = ({
	gameType,
	score,
}: {
	gameType: `RPS` | `LS`;
	score: number;
}) => {
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
						<span tw="text-white opacity-80 hover:(opacity-100) transition duration-200 ease-in-out ml-1.5 mb-0.5 md:(mb-1.5)">
							<img
								src={question}
								alt="Question tooltip"
								tw="w-3 h-3 md:(w-4 h-4)"
							/>
						</span>
					}
					on="hover"
					position="right center"
				>
					<div
						tw="width[12rem] height[2.5rem] px-3.5 rounded flex items-center bg-opacity-50"
						css={[
							`background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%); box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);`,
						]}
					>
						<p tw="text-xs font-regular text-copy-dark line-height[12px]">
							{gameType === `RPS`
								? `Click the image to the left to play a bonus game.`
								: `Click the image to the left to go back to regular Rock Paper Scissors.`}
						</p>
					</div>
				</Popup>
			</div>
			<Score score={score} />
		</Wrapper>
	);
};

export default Header;
