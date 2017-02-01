// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router";
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from "react-bootstrap";

class BootstrapReactNavBar extends Component{
	render(){
		return(
			<Navbar inverse collapseOnSelect fixedTop>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <Link to="/">Ryan Ramdehol</Link>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem className= "menu-item" eventKey={1} href="#featured-projects">Back To Top</NavItem>
			        <NavItem className= "menu-item" eventKey={2} href="#featured-projects">Featured Projects</NavItem>
			        <NavItem className= "menu-item" eventKey={2} href="#about">About Me</NavItem>
			        <NavItem className= "menu-item" eventKey={2} href="#skills">Languages & Skills</NavItem>
			        <NavItem className= "menu-item" eventKey={2} href="#work-experience">Work Exprience</NavItem>
			        <NavItem className= "menu-item" eventKey={2} href="#resume"><Link to="/resume">Resume</Link></NavItem>
			        {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Action</MenuItem>
			          <MenuItem eventKey={3.2}>Another action</MenuItem>
			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
			        </NavDropdown>*/}
			      </Nav>
			    </Navbar.Collapse>
			</Navbar>
		)
	}
}

export default BootstrapReactNavBar;