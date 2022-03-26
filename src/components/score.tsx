import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
	background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
	border-radius: 5px;
	${tw`width[5rem] height[4.5rem]`};
	${tw`md:(width[9.375rem] height[7.125rem])`};
	${tw`text-center`};
	${tw`py-2.5 md:(py-4)`};
	${tw`flex items-center justify-center`};

	p {
		line-height: 12px;
		letter-spacing: 2.5px;
		${tw`text-[10px] font-regular uppercase`};
		${tw`md:(text-base line-height[19px])`};
		${tw`text-copy-score`};
		${tw`mb-1.5`};
	}

	h1 {
		${tw`text-copy-dark text-[40px] font-bold`};
		${tw`md:(text-[64px] line-height[64px])`};
		${tw`line-height[40px]`};
	}
`;

const Score = ({ score }: { score: number }) => (
	<Wrapper>
		<div tw="flex flex-col justify-between h-full">
			<p>score</p>
			<h1>{score}</h1>
		</div>
	</Wrapper>
);

export default Score;
