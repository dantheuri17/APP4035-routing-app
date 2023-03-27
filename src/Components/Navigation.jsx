import { Link } from "react-router-dom";

import React from "react";

const Navigation = () => {
	return (
		<div>
			<nav>
				<Link to="/">HOME</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</div>
	);
};

export default Navigation;
