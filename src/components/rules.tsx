import React, {
	Dispatch,
	SetStateAction,
	useContext,
} from "react";
import tw, { styled } from "twin.macro";
import { GameContext } from "../context/game-context";
import rules from "../assets/images/rules/rules-3.svg";
import rulesBonus from "../assets/images/rules/rules-5.svg";
import X from "../assets/images/close.svg";

// ===== TYPES =====
type ModalProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	children: JSX.Element;
};

// ===== STYLES =====
const Image = styled.img`
	${tw`width[19.0625rem] height[16.9375rem]`};
`;

const Wrapper = styled.div`
	${tw`w-screen h-screen`};
	${tw`lg:(width[25rem] height[25.9375rem])`};
	${tw`bg-white`};
	${tw`mx-auto`}
`;

// ===== COMPONENTS =====
export const Modal = ({ open, setOpen }: ModalProps) => {
	const { gameType } = useContext(GameContext);

	return (
		<Wrapper>
			<h1 tw="uppercase text-copy-dark text-center text-[32px]">
				rules
			</h1>
			<div tw="mx-auto">
				{gameType === `RPS` ? (
					<Image src={rules} alt="Rules" />
				) : (
					<Image src={rulesBonus} alt="Rules" />
				)}
			</div>
			<button
				type="button"
				aria-label="Close out rules"
				onClick={() => setOpen(!open)}
				tw="mx-auto"
			>
				<img src={X} alt="Close rules" />
			</button>
		</Wrapper>
	);
};
