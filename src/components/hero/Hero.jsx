import React from 'react';
import "./Hero.css"
import HeroImg from "../../assest/hero-title.png"
import HeroIcon from "../../assest/hero-bitmap1.png"
import HeroIcon2 from "../../assest/hero-bitmap2.png"
import HeroIcon3 from "../../assest/hero-bitmap3.png"


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <img className='HeroImg' src={HeroImg} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        <button>ALL SERVICES</button>
      </div>
      <div className='hero-icon'>
        <div className="hero-icon-block block1">
          <img src={HeroIcon} alt="" />
          <h6>PROJECT AND CONSTRUCTION MANAGEMENT</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        </div>
        <div className="hero-icon-block block2">
          <img src={HeroIcon2} alt="" />
          <h6>STRUCTURE AUDIT AND MAINTENANCE</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        </div>
        <div className="hero-icon-block block3">
          <img src={HeroIcon3} alt="" />
          <h6>FACTORY CONSTRUCTION AND MODELING</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
        </div>

      </div>
    </div>
  )
}

export default Hero