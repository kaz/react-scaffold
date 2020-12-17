import React from "react";
import { css, Global } from "@emotion/react";

const styles = css({
	body: {
		margin: 0,
		fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
	},
});

const Component = () => {
	return <Global styles={styles} />;
};
export default Component;