import React, { Component } from 'react';

import "./Header.css";
import BG from "../../assest/bg.png"
import HeaderLogo from "../../assest/header-logo.png"
import TextBottom from "../../assest/Header-text-bottom.png"

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
         <img className='header-logo' src={HeaderLogo} alt="" />
         <img  src={BG}alt="" />

         <div className="header-text">
           <h1>PARTNER WITH KONSTUCT</h1>
           <p>An award-winning construction management firm</p>
         </div>
         <div className="textBottom">
            <img src={TextBottom} alt="" />
         </div>
         
      </div>
    )
  }
}
