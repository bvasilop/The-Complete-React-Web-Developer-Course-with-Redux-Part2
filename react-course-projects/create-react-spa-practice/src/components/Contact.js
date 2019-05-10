import React from 'react';
import '../styles/index.scss';


const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>If you are interested in connecting with me about other projects, I'd love to hear from you!</p>
            <h2>Contact Info:</h2>
            <ul className="contacts">
                <li >
                    <a href="mailto:bvasilop@gmail.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Send me an Email!">
                        bvasilop@gmail.com
                    </a>
                        </li>
                <li>
                    <a href="https://www.billvas.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Visit my website!">
                        billvas.com
                    </a>
                </li>
            </ul>

        </div>
    )
};
export default Contact;
