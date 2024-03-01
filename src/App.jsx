import React, { Component } from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero"
import "./App.css";
import History from "./components/history/History"; 
import Nav from "./components/nav/Nav";
import GetInTouch from './components/get-in-touch/GetInTouch';
import Signup from './components/signup/Signup';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className='container'>
        <Nav/>
        <History/>
        <Hero/>
       
        </div>
        <GetInTouch/>
       
        <Signup/>

        <Footer/>   
      </div>
    )
  }
}
