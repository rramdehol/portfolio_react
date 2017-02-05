import React, { Component } from 'react';
import { Link } from 'react-router';
import Autotyper from "../shared-components/Autotyper.jsx"
// import Button from '../shared-components/Button';

class Splash extends Component {
	render(){
		return(
			<div id="splash-page">
				<div>
					<h1>THIS IS THE SPLASH PAGE</h1>
					<Autotyper message={"Hi I'm Ryan Ramdehol and I'm a React Web Developer"} createdWith = {"This portfolio was created in React JS"} contactMessage={"find me on gitHub"} gitHubLink={"https://github.com/rramdehol"} gitHubName={"@rramdehol"} clickMessage={"or click the button below"}/>
					<Link id="get-to-know-me" className="btn btn-success" to="/home">Get To Know Me</Link>
				</div>
			</div>
		)
	}
}

export default Splash;