import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss';

const NotFoundPage = () => (
	<div>
        <h1>Page not Found</h1>
        <p><Link to="/">Head home</Link></p>
	</div>
);

export default NotFoundPage;
