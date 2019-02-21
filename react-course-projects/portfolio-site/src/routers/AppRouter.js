import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import PortfolioPage from '../components/PortfolioPage';
import Item from '../components/Item';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
		<Switch>
		  <Route path="/" component={Home} exact={true} />
			<Route path="/portfolio/" component={PortfolioPage} exact={true} />
			<Route path="/portfolio/:id" component={Item} />
			<Route path="/contact" component={Contact} />
			<Route component={NotFoundPage} />
		</Switch>
	</div>
	</BrowserRouter>
);

export default AppRouter;
