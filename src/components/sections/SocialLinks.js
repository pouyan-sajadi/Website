// src/components/sections/SocialLinks.js
import React from 'react';
import './SocialLinks.css';
import google from '../../assets/google.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';

const SocialLinks = () => {
  const links = [
    {
      icon: mail,
      url: 'mailto:pouyan.sajadi@gmail.com',
      label: 'Email'
    },
    {
      icon: google,
      url: 'https://scholar.google.com/citations?user=7McvDK0AAAAJ&hl=en',
      label: 'Google Scholar'
    },
    {
      icon: github,
      url: 'https://github.com/pouyan-sajadi',
      label: 'GitHub'
    },
    {
      icon: linkedin,
      url: 'https://www.linkedin.com/in/pouyan-sajadi/',
      label: 'LinkedIn'
    }
  ];

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.label}
        >
          <img src={link.icon} alt={link.label} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;