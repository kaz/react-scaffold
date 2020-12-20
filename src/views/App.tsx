import styled from "@emotion/styled";
import React from "react";
import { HashRouter, Link as _Link, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import logo from "../../public/logo.svg";
import Clock from "../components/Clock";
import Converter from "../components/Converter";
import * as mixins from "../styles/mixins";

const Container = styled.div({
	textAlign: "center",
});
const Header = styled.header({
	backgroundColor: "#282c34",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "calc(10px + 2vmin)",
	color: "white",
});
const Logo = styled.img({
	height: "40vmin",
	pointerEvents: "none",
	"@media (prefers-reduced-motion: no-preference)": {
		"&": {
			animation: `${mixins.logoSpin} infinite 20s linear`,
		},
	},
});
const Paragraph = styled.p({
	margin: "0.4rem",
});
const Link = styled(_Link)({
	color: "#61dafb",
});

const Component = () => {
	return (
		<Container>
			<Header>
				<Logo src={logo} alt="logo" />
				<HashRouter>
					<Paragraph>
						<Clock />
					</Paragraph>
					<Paragraph>
						<Link className="App-link" to="/usd">
							BTC/USD
						</Link>{" "}
						<Link className="App-link" to="/jpy">
							BTC/JPY
						</Link>
					</Paragraph>
					<Paragraph>
						<RecoilRoot>
							<React.Suspense fallback="Loading ...">
								<Switch>
									<Route exact path="/usd">
										<Converter target="USD" />
									</Route>
									<Route exact path="/jpy">
										<Converter target="JPY" />
									</Route>
								</Switch>
							</React.Suspense>
						</RecoilRoot>
					</Paragraph>
				</HashRouter>
			</Header>
		</Container>
	);
};
export default Component;
