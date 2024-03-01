import React, { Component } from 'react'
import "./Signup.css"

export default class Signup extends Component {
  render() {
    return (
      <div className='signup'>
        <h4>Newsletter Signup</h4>
        <input type="text" placeholder='test@youremail.com'/>
        <button>SIGNUP</button>
      </div>
    )
  }
}
