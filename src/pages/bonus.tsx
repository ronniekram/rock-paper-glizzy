import Layout from "../components/layout";
import "twin.macro";
import {
	Rock,
	Paper,
	Scissors,
	Lizard,
	Spock,
} from "../components/moves";

const Bonus = (): JSX.Element => {
	return (
		<Layout>
			<div tw="text-2xl m-10">Hello world!</div>
		</Layout>
	);
};
export default Bonus;
