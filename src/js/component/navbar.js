import React from "react";
import { Link } from "react-router-dom";
import pok from "../../img/pok.png"
import logo from "../../img/pika.png"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3 bg-danger">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img  style={{height:"50px"}} src={pok}/></span>
			</Link>
			<Link to="Favortio">Favoritos</Link>
			<Link>
			<Link to ="/"><div><img id="logopoke" src="http://3.bp.blogspot.com/-tujIjHfvP3w/To7YqBR0LsI/AAAAAAAAAD0/Yo29SvB8WLc/s1600/atrapalosya_logo.png"/></div></Link>
			</Link>
			<div className="ml-auto">
			<Link to="/demo">
				<div id="logo"></div>
			</Link>
			</div>
		</nav>
	);
};
