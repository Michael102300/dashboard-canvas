import React from 'react';

const Footer = () => {
    return ( 
        <footer className="container">
            <p className="float-right">Subir</p>
            <p>&copy; {( new Date().getFullYear())} Mi proyecto</p>
        </footer>
    );
}
 
export default Footer;
