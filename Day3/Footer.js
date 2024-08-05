import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#blog">Blog</a>
                <a href="#contact">Contact Us</a>
                <a href="#faqs">FAQs</a>
                <a href="#support">Support & How-To Videos</a>
                <a href="#terms">Terms</a>
                <a href="#privacy">Privacy</a>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <p className="footer-disclaimer">
                © 2024 Intervue Hub, All Rights Reserved. | 1632 1st Avenue #21030, New York, NY 10028
            </p>
        </footer>
    );
};

export default Footer;
