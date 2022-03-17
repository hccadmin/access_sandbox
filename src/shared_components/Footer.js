import React from 'react';
import Image from 'react-bootstrap/Image';
import footerLogo from "../images/logo_footer.svg";

const Footer = () => {
  return (
    <footer className="access-footer">
      <div className="footer-padding">
        <a href="/"><Image src={ footerLogo } fluid /></a>
        <p className="footer-tagline">ACCESS (Access to Childhood Cancer Essentials) FORECAST</p>
        <div className="footer-credit">
          <p>Developed by<br />
          <a target="_blank" rel="noreferrer noopener" href="https://healthcommcore.org">
            Health Communication Core
          </a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
