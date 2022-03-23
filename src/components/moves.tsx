import React from "react";
import tw, { styled } from "twin.macro";
import { Ripple } from "./ripple";
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
const Three = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`xl:(width[12.375rem] height[12.6875])`};
`;

const Five = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`xl:(width[12.375rem] height[12.6875])`};
	${tw`transition duration-200 ease-in-out`};
`;

const Match = styled.img`
	${tw`width[8.125rem] height[8.3125rem]`};
	${tw`xl:(width[12.375rem] height[12.6875])`};
	${tw`transition duration-200 ease-in-out`};
`;

// ===== COMPONENTS =====
export const Lizard = ({ size }: Move) => {
	if (size === `THREE`) {
		return (
			<Ripple>
				<div>
					<Three src={lizard} />
				</div>
			</Ripple>
		);
	}
	if (size === `FIVE`) {
		return (
			<Ripple>
				<div>
					<Five src={lizard} />
				</div>
			</Ripple>
		);
	}

	return (
		<Ripple>
			<div>
				<Match src={lizard} />
			</div>
		</Ripple>
	);
};

export const Paper = ({ size }: Move) => {
	if (size === `THREE`) {
		return (
			<Ripple>
				<div>
					<Three src={paper} />
				</div>
			</Ripple>
		);
	}
	if (size === `FIVE`) {
		return (
			<Ripple>
				<div>
					<Five src={paper} />
				</div>
			</Ripple>
		);
	}

	return (
		<Ripple>
			<div>
				<Match src={paper} />
			</div>
		</Ripple>
	);
};

export const Rock = ({ size }: Move) => {
	if (size === `THREE`) {
		return (
			<Ripple>
				<div>
					<Three src={rock} />
				</div>
			</Ripple>
		);
	}
	if (size === `FIVE`) {
		return (
			<Ripple>
				<div>
					<Five src={rock} />
				</div>
			</Ripple>
		);
	}

	return (
		<Ripple>
			<div>
				<Match src={rock} />
			</div>
		</Ripple>
	);
};

export const Scissors = ({ size }: Move) => {
	if (size === `THREE`) {
		return (
			<Ripple>
				<div>
					<Three src={scissors} />
				</div>
			</Ripple>
		);
	}
	if (size === `FIVE`) {
		return (
			<Ripple>
				<div>
					<Five src={scissors} />
				</div>
			</Ripple>
		);
	}

	return (
		<Ripple>
			<div>
				<Match src={scissors} />
			</div>
		</Ripple>
	);
};

export const Spock = ({ size }: Move) => {
	if (size === `THREE`) {
		return (
			<Ripple>
				<div>
					<Three src={spock} />
				</div>
			</Ripple>
		);
	}
	if (size === `FIVE`) {
		return (
			<Ripple>
				<div>
					<Five src={spock} />
				</div>
			</Ripple>
		);
	}

	return (
		<Ripple>
			<div>
				<Match src={spock} />
			</div>
		</Ripple>
	);
};
