import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import { ScoreContext } from "../context/score-context";

const Wrapper = styled.div`
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
	background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
	${tw`width[5rem] height[4.5rem]`};
	${tw`xl:(width[9.375rem] height[7.125rem])`};
	${tw`text-center`};
	${tw`py-2.5 xl:(py-4)`};

	p {
		line-height: 19px;
		letter-spacing: 2.5px;
		${tw`text-[10px] font-regular font-display uppercase`};
		${tw`xl:(text-base)`};
		${tw`text-copy-score`};
	}

	h1 {
		${tw`text-copy-header text-[40px] font-bold`};
		${tw`xl:(text-[64px])`};
	}
`;

const Score = () => {
	const { score } = useContext(ScoreContext);

	return (
		<Wrapper>
			<p>score</p>
			<h1>{score}</h1>
		</Wrapper>
	);
};

export default Score;
