import * as React from "react";
import { GlobalStyles } from "twin.macro";
import { Global, css } from "@emotion/react";

const fonts = css`
	@font-face {
		font-family: "Barlow Semi Condensed";
		src: url("../assets/fonts/BarlowSemiCondensed-600.ttf")
			format("ttf");
		font-style: normal;
		font-weight: 600;
		font-display: fallback;
	}
	@font-face {
		font-family: "Barlow Semi Condensed";
		src: url("../assets/fonts/BarlowSemiCondensed-700.ttf")
			format("ttf");
		font-style: normal;
		font-weight: 700;
		font-display: fallback;
	}
`;

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<div {...rest}>
		<GlobalStyles />
		<Global styles={fonts} />
		{children}
	</div>
);

export default Layout;
