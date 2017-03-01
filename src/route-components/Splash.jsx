import React, { Component } from 'react';
import { Link } from 'react-router';
import Autotyper from "../shared-components/Autotyper.jsx"
import Typist from 'react-typist'


class Splash extends Component {
	render(){
		return(
			<div id="splash-page">
				<div>
					<h1>THIS IS THE SPLASH PAGE</h1>
					<Typist startDelay={2000} >
						Hey there my name is Ryan Ramdehol and welcome to my Portfolio<br/>
						This portfolio was built with React JS<br/>
						Find me on gitHub <a target='blank' href='https://github.com/rramdehol'>@rramdehol</a><br/>
						or click the button below to get to know me ;)
					</Typist>
					<Link id="get-to-know-me" className="btn btn-success" to="/home">Get To Know Me</Link>
				</div>
			</div>
		)
	}
}

export default Splash;