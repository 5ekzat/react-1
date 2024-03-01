import React from 'react'
import LOGO from "../../assest/projeco.png"
import "./Nav.css"

export const Nav = () => {
  return (
    <nav>
        <div className="nav-Logo">
         <img src={LOGO} alt="" />
        </div>
        <div className="list">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>WORK</li>
            <li>CONTACT</li>
        </div>
    </nav>
  )
}
export default Nav;
