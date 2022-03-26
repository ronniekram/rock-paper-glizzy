import * as React from "react";
import { GlobalStyles } from "twin.macro";
import "../assets/styles/fonts.css";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div
		{...rest}
		tw="font-display h-screen w-screen overflow-hidden"
		css={[
			`background: radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%);`,
		]}
	>
		<GlobalStyles />
		{children}
	</div>
);

export default Layout;
