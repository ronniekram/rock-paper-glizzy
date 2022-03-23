import React, { Dispatch, SetStateAction } from "react";
import tw, { styled } from "twin.macro";
import rules from "../assets/images/rules/rules-3.svg";
import rulesBonus from "../assets/images/rules/rules-5.svg";

// mobile --> full screen, height & width
// desktop --> 25rem x 25.9375rem

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

const ModalWrapper = styled.div`
	${tw`w-screen h-full`};
	${tw`xl:(width[25rem] height[25.9375rem])`};
`;

// ===== COMPONENTS =====
export const Modal = ({ open, setOpen }: ModalProps) => {};

export const Rules = () => {};

export const BonusRules = () => {};
