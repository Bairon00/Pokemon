import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Principal } from "./views/principal";
import { Pokemones } from "./views/pokemones";
import { Unidad } from "./views/unidad";
import { Prueba } from "./views/prueba";
import { Especies2 } from "./views/Especies2";
import { Favoritos } from "./views/favoritos";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Principal/>
						</Route>
						<Route exact path="/Pokemones">
							<Pokemones/>
						</Route>
						<Route exact path="/Unidad/:name">
							<Unidad/>
						</Route>
						<Route exact path="/Prueba/:name">
							<Prueba/>
						</Route>
						<Route exact path="/Especies2">
							<Especies2/>
						</Route>
						<Route exact path="/Favorito">
							<Favoritos/>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
