import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} My Movie App. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
