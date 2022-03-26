import React, {
	Dispatch,
	SetStateAction,
	useContext,
} from "react";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";
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
	${tw`md:(width[25rem] height[25.9375rem])`};
	${tw`bg-white`};
	${tw`mx-auto`};
	${tw`flex justify-center items-center`};
	${tw`md:(p-8)`};

	@keyframes anvil {
		0% {
			transform: scale(1) translateY(0px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		1% {
			transform: scale(0.96) translateY(10px);
			opacity: 0;
			box-shadow: 0 0 0 rgba(241, 241, 241, 0);
		}
		100% {
			transform: scale(1) translateY(0px);
			opacity: 1;
			box-shadow: 0 0 500px rgba(241, 241, 241, 0);
		}
	}

	@media (min-width: 768px) {
		-webkit-animation: anvil 0.3s
			cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
		animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9)
			forwards;
	}
`;

// ===== COMPONENTS =====
export const Modal = ({ open, setOpen }: ModalProps) => {
	const { gameType } = useContext(GameContext);
	const { width } = useWindowSize();

	return (
		<Wrapper>
			{width < 768 ? (
				<div tw="flex flex-col justify-between height[36.8125rem]">
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
				</div>
			) : (
				<>
					<div tw="flex items-center justify-between">
						<h1 tw="uppercase text-copy-dark text-center text-[32px]">
							rules
						</h1>
						<button
							type="button"
							aria-label="Close out rules"
							onClick={() => setOpen(!open)}
							tw="mx-auto"
						>
							<img src={X} alt="Close rules" />
						</button>
					</div>
					<div tw="mx-auto mt-12">
						{gameType === `RPS` ? (
							<Image src={rules} alt="Rules" />
						) : (
							<Image src={rulesBonus} alt="Rules" />
						)}
					</div>
				</>
			)}
		</Wrapper>
	);
};
