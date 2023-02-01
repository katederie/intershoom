import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import MainLogo from "../../assets/MainLogo.png";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); 

    return (
        <div className='navbar'>
                <Link style={{textDecoration:"none"}} to="/">
                    <img src={MainLogo} alt="main_logo" className="navbar_logo"/>
                </Link>
                <ul className='navbar_links'>
                    <li>
                        <Link to="/services"> Services</Link>
                     </li>
                    <li>
                        <Link to="/samples">Samples</Link>
                    </li>
                    <li>
                        <Link to="/">Reviews</Link>
                    </li>
                    <li>
                        <HashLink smooth to="/#gallery">Gallery</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#about">About Us</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contacts">Contacts</HashLink>
                    </li>
                </ul>
            <div id="myNav" className='navbar_menu'>
                {toggleMenu
                ? <RiCloseLine color="#d0a86a" size={30} onClick={() => setToggleMenu(false)} />
                : <RiMenuFill color="#d0a86a" size={30} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="scale-in-ver-top">
                    <div className='navbar_menu-links'>
                        <ul>
                            <li>
                                <Link to="/services" >Services</Link>
                            </li>
                            <li>
                                <Link to="/samples">Samples</Link>
                            </li>
                            <li>
                                <Link to="#reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link to="#gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="#about">About Us</Link>
                            </li>
                            <li>
                                <Link to="#contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar