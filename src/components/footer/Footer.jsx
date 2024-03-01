import React, { Component } from 'react'
import "./Footer.css"
import "../../App.css"
import LOGO from "../../assest/header-logo.png"
import Socials from "../../assest/socials.png"


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="footer-ittem">
            <div className="footer-block footer-block1">
              <p>COMPANY</p><br />
              <img src={LOGO} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
            <div className="footer-block footer-block2" >
              <div className="footer-block-small small1">
                <ul>
                  <li>LINKS</li>
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>SERVICES</li>
                  <li>PROJECTS</li>
                  <li>CONTACT US</li>
                </ul>
              </div>
              <div className="footer-block-small small2">
                <ul>
                  <li>FAQ</li>
                  <li>TERMS</li>
                  <li>CAREERS</li>
                </ul>
              </div>
              <div className="footer-block-small small3">
              <ul>
                  <li>BLOG</li>
                  <li>PARTNERS </li>
                  <li>NEWS</li>
                </ul>
              </div>
            </div>
      
            <div className="footer-block footer-block3">
              <p>CONTACT US</p>
              <p>213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name<br/>
                +23 994 233 4022<br/>
                info@konstruct.com</p>
            </div>
            <div className="footer-block footer-block4">
              <img src={Socials} alt="" />
            
            </div>
            
          </div>  
        </div> 
        
      </div>
    )
  }
}
