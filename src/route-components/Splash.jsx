import React, { Component } from 'react';
import { Link } from 'react-router';
import Typist from 'react-typist';
// Custom React Components
import CoverVideo from '../shared-components/CoverVideo.jsx'


class Splash extends Component {
	render(){
		return(
			<div id="splash-page">
				<CoverVideo id='cover-video'/>
				<img id='logo' src='/images/logo_final.svg'/>
				<h1 id='splash-title'>Ryan Ramdehol</h1>
				<div id='splash-intro'>
					<Typist startDelay={2500} >
						Hey there name's Ryan and welcome to my Portfolio. Thanks<br/>
						for stopping by.This portfolio was built using ReactJS.<br/>
						Find me on gitHub <a target='blank' href='https://github.com/rramdehol'>@rramdehol</a> or click the button below to<br/>
						get to know me and see some of my work ;)
					</Typist>
				</div>
				<div id="get-to-know-me-button" >
					<Link id="get-to-know-me" className="btn btn-warning center-block" to="/home">Get To Know Me</Link>
				</div>
			</div>
		)
	}
}

export default Splash;