import { styled } from "twin.macro";

export const Ripple = styled.div`
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;

	div {
		background: transparent;
		cursor: pointer;
		border: 2px solid white;
		color: white;
		height: fit-content;
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 100%;
		animation: ripple 1.5s linear infinite;
		transition: all 0.7s ease;

		&:hover {
			transform: scale(1.1);
		}
		&:focus {
			outline: none;
		}
	}

	@keyframes ripple {
		0% {
			box-shadow: 0 0 0 0 rgba(white, 0.1),
				0 0 0 1px rgba(white, 0.1), 0 0 0 3px rgba(white, 0.1),
				0 0 0 5px rgba(white, 0.1);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(white, 0.1),
				0 0 0 4px rgba(white, 0.1), 0 0 0 20px rgba(white, 0),
				0 0 0 30px rgba(white, 0);
		}
	}
`;
