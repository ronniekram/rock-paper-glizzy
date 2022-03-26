import tw, { styled } from "twin.macro";
// import { Ripple } from "./ripple";
import lizard from "../assets/images/moves/lizard.svg";
import paper from "../assets/images/moves/paper.svg";
import rock from "../assets/images/moves/rock.svg";
import scissors from "../assets/images/moves/scissors.svg";
import spock from "../assets/images/moves/spock.svg";

// ===== TYPES =====
type Move = {
	size: `THREE` | `FIVE` | `MATCH`;
};

// ===== STYLES =====
const Wrapper = styled.div`
	${tw`cursor-pointer`};
	${tw`transition duration-700 ease-in-out`};
	${tw`hocus:(scale-110)`};
`;

const Three = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`md:(width[12.375rem] height[12.6875rem])`};
`;

const Five = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`md:(width[12.375rem] height[12.6875rem])`};
	${tw`transition duration-200 ease-in-out`};
`;

const Match = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`md:(width[12.375rem] height[12.6875rem])`};
	${tw`transition duration-200 ease-in-out`};
`;

// ===== COMPONENTS =====
export const Lizard = ({ size }: Move) => {
	let move;

	if (size === `THREE`) {
		move = (
			<Wrapper>
				<div>
					<Three src={lizard} />
				</div>
			</Wrapper>
		);
	}
	if (size === `FIVE`) {
		move = (
			<Wrapper>
				<div>
					<Five src={lizard} />
				</div>
			</Wrapper>
		);
	}

	move = (
		<Wrapper>
			<div>
				<Match src={lizard} />
			</div>
		</Wrapper>
	);

	return move;
};

export const Paper = ({ size }: Move) => {
	let move;

	if (size === `THREE`) {
		move = (
			<Wrapper>
				<div>
					<Three src={paper} />
				</div>
			</Wrapper>
		);
	}
	if (size === `FIVE`) {
		move = (
			<Wrapper>
				<div>
					<Five src={paper} />
				</div>
			</Wrapper>
		);
	}

	move = (
		<Wrapper>
			<div>
				<Match src={paper} />
			</div>
		</Wrapper>
	);

	return move;
};

export const Rock = ({ size }: Move) => {
	let move;

	if (size === `THREE`) {
		move = (
			<Wrapper>
				<div>
					<Three src={rock} />
				</div>
			</Wrapper>
		);
	}
	if (size === `FIVE`) {
		move = (
			<Wrapper>
				<div>
					<Five src={rock} />
				</div>
			</Wrapper>
		);
	}

	move = (
		<Wrapper>
			<div>
				<Match src={rock} />
			</div>
		</Wrapper>
	);

	return move;
};

export const Scissors = ({ size }: Move) => {
	let move;

	if (size === `THREE`) {
		move = (
			<Wrapper>
				<div>
					<Three src={scissors} />
				</div>
			</Wrapper>
		);
	}
	if (size === `FIVE`) {
		move = (
			<Wrapper>
				<div>
					<Five src={scissors} />
				</div>
			</Wrapper>
		);
	}

	move = (
		<Wrapper>
			<div>
				<Match src={scissors} />
			</div>
		</Wrapper>
	);

	return move;
};

export const Spock = ({ size }: Move) => {
	let move;

	if (size === `THREE`) {
		move = (
			<Wrapper>
				<div>
					<Three src={spock} />
				</div>
			</Wrapper>
		);
	}
	if (size === `FIVE`) {
		move = (
			<Wrapper>
				<div>
					<Five src={spock} />
				</div>
			</Wrapper>
		);
	}

	move = (
		<Wrapper>
			<div>
				<Match src={spock} />
			</div>
		</Wrapper>
	);

	return move;
};
