import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/index.scss';
import headerStyles from './header.module.scss';

const Header = (props) => (
	<header className={headerStyles.header}>

            <h1>
						<Link className={headerStyles.title}to="/">
							{props.title}
						</Link>
						</h1>
                {/* {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>} */}
						<nav>
            <ul className={headerStyles.navList}>
                <li>
                    <NavLink className={headerStyles.navItem} to="/" activeClassName={headerStyles.activeNavItem} exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={headerStyles.navItem} to="/portfolio" activeClassName={headerStyles.activeNavItem} exact={true}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink className={headerStyles.navItem} to="/contact" activeClassName={headerStyles.activeNavItem} >Contact</NavLink>
                </li>
            </ul>
        </nav>
	</header>
);

Header.defaultProps = { // using default props
	title: 'Portfolio'
};

export default Header;
