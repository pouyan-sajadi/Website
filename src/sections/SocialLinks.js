// src/components/sections/SocialLinks.js
import React from 'react';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="mailto:pouyan.sajadi@gmail.com">
        <img src={mail} alt="Email" />
      </a>
      <a href="https://scholar.google.com/citations?user=7McvDK0AAAAJ&hl=en">
        <img src={google} alt="Google Scholar" />
      </a>
      <a href="https://github.com/pouyan-sajadi">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/pouyan-sajadi/">
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default SocialLinks;