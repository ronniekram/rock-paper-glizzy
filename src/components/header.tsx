import { useContext } from "react";
import tw, { styled } from "twin.macro";
import Score from "./score";
import { GameContext } from "../context/game-context";
import logo from "../assets/images/logo.svg";
import logoBonus from "../assets/images/logo-bonus.svg";

const Wrapper = styled.div`
	border: 3px solid rgba(255, 255, 255, 0.289199);
	${tw`border-radius[5px]`};
	${tw`p-3`}
	${tw`width[19.4375] height[6rem]`};
	${tw`lg:(width[46.875rem] height[9.375rem])`};
	${tw`flex items-center justify-between`};
`;

const image = [tw`h-full`];

const Header = () => {
	const { gameType } = useContext(GameContext);

	return (
		<Wrapper>
			<div>
				{gameType === `RPS` ? (
					<img
						src={logo}
						alt="Rock Paper Scissors"
						css={[image]}
					/>
				) : (
					<img
						src={logoBonus}
						alt="Rock Paper Scissors Lizard Spock"
						css={[image]}
					/>
				)}
			</div>
			<Score />
		</Wrapper>
	);
};

export default Header;
