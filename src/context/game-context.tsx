import { createContext, useState } from "react";

export const GameContext = createContext({
	gameType: `RPS`,
	setGame: () => {},
	score: 0,
	setScore: () => {},
});

export const GameProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	const [gameType, setGame] = useState(`RPS`);
	const [score, setScore] = useState<number>(0);

	return (
		<GameContext.Provider
			gameType={gameType}
			setGame={setGame}
			score={score}
			setScore={setScore}
		>
			{children}
		</GameContext.Provider>
	);
};
