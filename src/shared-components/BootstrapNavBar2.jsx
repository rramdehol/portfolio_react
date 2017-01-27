// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router";

class   BootstrapNavBar2 extends Component{
  render(){
    return(
<nav className ="navbar navbar-inverse navbar-fixed-top">
  <div className ="container-fluid">
   
    <div className ="navbar-header">
      <button type="button" className ="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
        <span className ="sr-only">Toggle navigation</span>
        <span className ="icon-bar"></span>
        <span className ="icon-bar"></span>
        <span className ="icon-bar"></span>
      </button>
      <a className ="navbar-brand" href="#">Ryan Ramdehol</a>
    </div>

    
    <div className ="collapse navbar-collapse" id="navbar">
      <ul className ="nav navbar-nav">
        <li className="menu-item"><a href="#featured-projects">Back to Top</a></li>        
        <li className="menu-item"><a href="#featured-projects">Featured Projects</a></li>
        <li className="menu-item"><a href="#about">About Me</a></li>
        <li className="menu-item"><a href="#skills">Skills & Languages</a></li>
        <li className="menu-item"><a href="#work-experience">Work Experience</a></li>
        <li className="menu-item"><a href="#resume">Resume</a></li>
      </ul>
    </div>
  </div>
</nav>    
)   
  }
}
export default BootstrapNavBar2;