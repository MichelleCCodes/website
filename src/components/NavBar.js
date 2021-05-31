import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import '../styles/Navbar.css';
import {FaKeyboard} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href="#home" className='navbar-logo' onClick={closeMobileMenu}>
            <FaKeyboard className="navbar-icon"/>michelleccodes
</a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              < a href="#about" className='nav-links' onClick={closeMobileMenu}>
                about me
              </a>
            </li>
            <li className='nav-item'>
              <a href="#skills"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                skills
              </a>
            </li>
            <li className='nav-item'>
              <a href="#projects"
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                projects
              </a>
            </li>
            <li className='nav-item'>
              <a href="#contact"
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                contact
              </a>
            </li>
          </ul>
          {button && <Button jump="https://docs.google.com/document/d/1z0HLpgZkopheVKhH6NYEcrcNCK9gT1fiWg8tS_PU_Ec/edit?usp=sharing" buttonStyle='btn--outline'>RESUME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
