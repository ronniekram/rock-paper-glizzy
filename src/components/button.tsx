import tw, { styled } from "twin.macro";

// ========== TYPES
export type ButtonProps = {
	size: `SM` | `LG`;
	label: string;
	onClick?: () => void;
};

// ========== STYLES
const bothBtn = tw`font-regular text-base line-height[19.2px] letter-spacing[2.5px] rounded-md transition duration-300 ease-in-out uppercase`;

const LgButton = styled.button`
	background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
	${tw`width[13.75rem] height[3rem]`};
	${tw`text-copy-dark hover:(text-rock-100)`};
	${bothBtn};
`;

const SmButton = styled.button`
	${tw`width[8rem] height[2.5rem]`};
	${tw`text-white hover:(text-copy-dark bg-white)`};
	${tw`bg-transparent border border-white`};
	${bothBtn};
`;

// ========== COMPONENTS
const Button = ({ size, label, onClick }: ButtonProps) => {
	return size === `SM` ? (
		<SmButton type="button" onClick={onClick}>
			{label}
		</SmButton>
	) : (
		<LgButton type="button" onClick={onClick}>
			{label}
		</LgButton>
	);
};

export default Button;
