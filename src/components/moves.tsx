import tw, { styled } from "twin.macro";
import { LS } from "./game";
// import { Ripple } from "./ripple";
import lizardT from "../assets/images/moves/lizard.svg";
import paperT from "../assets/images/moves/paper.svg";
import rockT from "../assets/images/moves/rock.svg";
import scissorsT from "../assets/images/moves/scissors.svg";
import spockT from "../assets/images/moves/spock.svg";

// ===== TYPES =====

const tokens = {
	lizard: lizardT,
	paper: paperT,
	rock: rockT,
	scissors: scissorsT,
	spock: spockT,
};
type Move = {
	size: `THREE` | `FIVE` | `MATCH`;
};

type TokenProps = {
	size: `THREE` | `FIVE` | `MATCH`;
	name: keyof typeof tokens;
};
// ===== STYLES =====
const Wrapper = styled.div`
	${tw`cursor-pointer`};
	${tw`transition duration-700 ease-in-out`};
	${tw`hocus:(scale-110)`};
`;

const three = [
	tw`width[8.125rem] height[8.3125rem]`,
	tw`md:(width[12.375rem] height[12.6875rem])`,
];

const five = [
	tw`width[6rem] height[6.0625rem]`,
	tw`md:(width[9.0625rem] height[9.25rem])`,
];

const match = [
	tw`width[8.125rem] height[8.3125rem]`,
	tw`md:(width[18.288125rem] height[18.75rem])`,
];

// ===== COMPONENTS =====

export const Token = ({ size, name }: TokenProps) => {
	return (
		<Wrapper>
			{size === `THREE` && (
				<img src={tokens[name]} css={[three]} />
			)}
			{size === `FIVE` && (
				<img src={tokens[name]} css={[five]} />
			)}
			{size === `MATCH` && (
				<img src={tokens[name]} css={[match]} />
			)}
		</Wrapper>
	);
};
