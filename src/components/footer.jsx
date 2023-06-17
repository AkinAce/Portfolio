import React from 'react';
let year = new Date().getFullYear(); 

const Footer = () => {
    return ( 
        <div className="footer">
            <p>Akintunde Sallam {year}</p>
        </div>     
     );
}
 
export default Footer;