// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router";

class BootstrapNavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#featured-projects">Ryan Ramdehol</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="menu-item"><a href="#featured-projects">Back to Top</a></li>
						{/*<li className="active" className="menu-item"><Link to="/">Back To The Top</Link></li>*/}
						<li className="menu-item"><a href="#featured-projects">Featured Projects</a></li>
						<li className="menu-item"><a href="#about">About Me</a></li>
						{/*<li className="menu-item"><Link to="skills">Skills</Link></li>*/}
						{/*<li className="menu-item"><Link to="/skills">Skills</Link></li>*/}
						<li className="menu-item"><a href="#skills">Skills & Languages</a></li>
						{/*<li className="menu-item"><Link to="/about">Work Experience</Link></li>*/}
						<li className="menu-item"><a href="#work-experience">Work Experience</a></li>
						{/*<li className="menu-item"><Link to="/resume">Resume</Link></li>*/}
						<li className="menu-item"><a href="#resume">Resume</a></li>
					</ul>
				</div>
			</nav>
		)		
	}
}
export default BootstrapNavBar;