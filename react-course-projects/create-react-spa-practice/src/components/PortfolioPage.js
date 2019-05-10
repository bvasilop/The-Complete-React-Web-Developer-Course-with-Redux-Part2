import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss';

const PortfolioPage = () => (
	<div>
		<h1>My Work</h1>
		<p>Checkout the stuff I've done</p>
		<Link to="/portfolio/1">Item One</Link>
		<Link to="/portfolio/2">Item Two</Link>
		<Link to="/portfolio/3">Item Three</Link>
		<Link to="/portfolio/4">Item Four</Link>
	</div>
);

export default PortfolioPage;
