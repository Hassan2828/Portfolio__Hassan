import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} duration={500} smooth={true} offset={-100}  className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} duration={500} smooth={true} offset={-50} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
            <Link activeClass='active' to='works' spy={true} duration={500} smooth={true} offset={-50} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} duration={500} smooth={true} offset={-50} className='desktopMenuListItem' onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
            }}>
            <img src={contactImg} alt="" className='desktopMenuImg' />
                Contact Me
            </button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
           <div className="navMenu" style={{display : showMenu ? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} duration={500} smooth={true} offset={-100}  className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} duration={500} smooth={true} offset={-50} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} duration={500} smooth={true} offset={-50} className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} duration={500} smooth={true} offset={-50} className='listItem' onClick={()=> setShowMenu(false)}>Clients</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} duration={500} smooth={true} offset={-50} className='listItem' onClick={()=> setShowMenu(false)}>Clients</Link>
        </nav>
    )
}

export default Navbar