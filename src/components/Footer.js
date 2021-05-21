import React from 'react';
import '../styles/Footer.css';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FaKeyboard } from 'react-icons/fa'

function Footer() {
  return (
    <div id="contact" className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Thanks for letting me share my interests with you.
        </p>
        <p className='footer-subscription-text'>
        Let's connect!
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Get In Touch</h2>
            <a href='https://www.linkedin.com/in/michelleccodes/' rel="noreferrer" target="_blank"><FaLinkedin className="footer-icon"/><span>LinkedIn</span></a>
            <a href='https://github.com/MichelleCCodes' rel="noreferrer" target="_blank"><FaGithubSquare className="footer-icon"/><span>GitHub</span></a>
            <a href='mailto:mchen0062@gmail.com'><FiMail className="footer-icon"/><span>Email</span></a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <div className='social-logo'>
            <a href="#home" className='navbar-logo'>
              <FaKeyboard className="social-icon"/> michelleccodes
              </a>
            </div>
          </div>
          <small className='website-rights'>michelleccodes © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
