import React, {useState} from "react";
import "./navbar.css";
import bplogo2 from "../../assets/bplogo2.png"

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");



    const navToggle = () =>{
        active === "nav__menu"
        ? setActive("nav__menu nav__active"):setActive("nav__menu");

        // TogglerIcon
        toggleIcon === "nav__toggler"
        ? setToggleIcon("nav__toggler toggle")
        : setToggleIcon("nav__toggler");
    };
    return (
        <div>
           <div className="nav">
            <div>
            <a href="/" className='nav_brand' id="logo">
            <img src={bplogo2} alt="" />
            </a>
            </div>
         <div className="navmenu">
         <ul className={active}>
                <li className='nav__item'><a href="/marchant" className='nav__link'>Marchant</a></li>
                <li className='nav__item'><a href="/about" className='nav__link'>FAQ</a></li>
                <li className='nav__item'><a href="/contact" className='nav__link'>Contact Us</a></li>
                <li className='nav__item'><a href="#" className='nav__link'>Blog</a></li>
                <li className='nav__item' id="buypower"><a href="#" className='nav__link'>Buy Electricity</a></li>
            </ul>
         </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
           </div>
        </div>
    );
}

export default Navbar;