import React, { useState }  from 'react';
import logo from './icon/ReCoin.png';
import { FaInfo } from 'react-icons/fa'
import {CSSTransition} from 'react-transition-group';
function Navbar(props) {
    return (
      <nav className = "navbar">
          <ul className='navbar-nav'>{ props.children }</ul>
          

      </nav>
  
    );
  }
  
  function NavItem(props) {
  
    const [open, setOpen] = useState(false);
  
    return (
      <>
      <li className='nav-item'>
        <a href="#" className='icon-button' onClick={()=>setOpen(!open)}>
          { props.icon }
        </a>
        {open && props.children}
  
      </li>
      <li className='nav-item'><img className='logo' src={logo} alt="logo" width ="150px"/>
      </li>
      </>
      
    );
  }
  
  function DropdownMenu() { 
  
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href ="#" className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
  
          <span className = "icon-right">{props.rightIcon}</span>
  
        </a>
      )
    }
  
    function LoginButton(props) {
      return (
        <a href ="#" className='menu-item'>
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
  
          <span className = "icon-right">{props.rightIcon}</span>
        </a>
      )
    }
  
    return (
      <div className = "dropdown" style = {{ height: menuHeight}}>
        <CSSTransition 
          in = {activeMenu === 'main'} 
          unmountOnExit 
          timeout={500}
          classNames = "menu-primary"
          onEnter={calcHeight}
          >
            <div className = "menu">
              <LoginButton> My Profile </LoginButton>
              <DropdownItem
                className='icon-button' 
                leftIcon = {<FaInfo/>}
                goToMenu = "about"
                >  
              About Us</DropdownItem>
            </div>
        </CSSTransition>
  
        <CSSTransition 
          in = {activeMenu === 'about'} 
          unmountOnExit 
          timeout={500}
          classNames = "menu-secondary"
          onEnter={calcHeight}
          >
            <div className = "menu">
              <DropdownItem
                className='icon-button' 
                goToMenu = "main"
                >Back</DropdownItem>
              <p>Hey UofTHacks. This app has been developed by Shashank, Joshua, Sabrina, and Abdellah that tests a pytorch model that detects trash to encourage users to recycle.</p>
            </div>
            
        </CSSTransition>
      </div>
    );
  }

  export {
      NavItem,Navbar,DropdownMenu
  }