import React from 'react';
import '../styles/index.scss';

// import footerStyles from './footer.module.scss';


const Footer = (props) => (

        <footer>
            <p>Created by {props.author}, ©2019</p>
        </footer>
    )
Footer.defaultProps = { // using default props
        author: 'Bill Vasilopoulos'
    };

export default Footer;
