import tw, { styled } from "twin.macro";

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
		height: fit-content;
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 100%;
		transition: all 0.7s ease;

		&:hover {
			transform: scale(1.1);
		}
		&:focus {
			outline: none;
		}
	}
`;

// export const Ripple = styled.div(
// 	({
// 		width,
// 		height,
// 		lgWidth,
// 		lgHeight,
// 	}: {
// 		width: string;
// 		height: string;
// 		lgWidth: string;
// 		lgHeight: string;
// 	}) => [
// 		tw`absolute left-0 right-0 mx-auto my-0`,
// 		tw`flex items-center justify-center`,
// 		`width: ${width}; height: ${height};`,
// 		`@media (min-width: 768px) {
//       width: ${lgWidth};
//       height: ${lgHeight};
//     }`,
// 		`div {
//       ${tw`bg-transparent cursor-pointer`};
//       ${tw`bg-transparent border-2 border-white rounded-full`};
//       ${tw`flex justify-center items-center`};
//       ${tw`focus:(outline-none)`};
//       ${tw`transition duration-700 ease-in-out`};

//       &:hover {
//         animation: ripple 1.5s linear infinite;
//         ${tw`scale-110`};
//       }
//       @media (min-width: 768px) {
//         width: ${width};
//         height: ${height};
//         width: ${lgWidth};
//         height: ${lgHeight};
//       }
//       @keyframes ripple {
//         0% {
//           box-shadow: 0 0 0 0 rgba(white, 0.1),
//             0 0 0 1px rgba(white, 0.1), 0 0 0 3px rgba(white, 0.1),
//             0 0 0 5px rgba(white, 0.1);
//         }
//         100% {
//           box-shadow: 0 0 0 0 rgba(white, 0.1),
//             0 0 0 4px rgba(white, 0.1), 0 0 0 20px rgba(white, 0),
//             0 0 0 30px rgba(white, 0);
//         }
//       }
//     }`,
// 	]
// );

// export const Ripple = styled.div`
// 	div {
// 		background: transparent;
// 		cursor: pointer;
// 		border: 2px solid white;
// 		color: white;
// 		height: fit-content;
// 		width: fit-content;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		border-radius: 100%;
// 		animation: ripple 1.5s linear infinite;
// 		transition: all 0.7s ease;

// 		&:hover {
// 			transform: scale(1.1);
// 		}
// 		&:focus {
// 			outline: none;
// 		}
// 	}

// 	@keyframes ripple {
// 		0% {
// 			box-shadow: 0 0 0 0 rgba(white, 0.1),
// 				0 0 0 1px rgba(white, 0.1), 0 0 0 3px rgba(white, 0.1),
// 				0 0 0 5px rgba(white, 0.1);
// 		}
// 		100% {
// 			box-shadow: 0 0 0 0 rgba(white, 0.1),
// 				0 0 0 4px rgba(white, 0.1), 0 0 0 20px rgba(white, 0),
// 				0 0 0 30px rgba(white, 0);
// 		}
// 	}
// `;
