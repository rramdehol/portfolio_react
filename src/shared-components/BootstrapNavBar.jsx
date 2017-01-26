// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router";

class BootstrapNavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Ryan Ramdehol</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active" className="menu-item"><Link to="/">Home</Link></li>
						<li className="menu-item"><Link to="/skills">Skills</Link></li>
						<li className="menu-item"><Link to="/work">Work Experience</Link></li>
						<li className="menu-item"><Link to="/about">About</Link></li>
						<li className="menu-item"><Link to="/resume">Resume</Link></li>
					</ul>
				</div>
			</nav>
		)		
	}
}
export default BootstrapNavBar;