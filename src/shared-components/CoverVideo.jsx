// React Stuff  
import React, { Component } from 'react';
// Include jQuery
import $ from "jquery";

class CoverVideo extends Component{
	render() {
		return(
			<div className ="homepage-hero-module">
    			<div className ="video-container">
			        <div className ="filter"></div>
			        <video autoPlay loop className="fillWidth">
			            <source src='/For_Wes/MP$/For_Wes.mp4' type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
			            <source src='/For_Wes/WEBM/For_Wes.webm' type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
			        </video>
			        <div className ="poster hidden">
			            <img src="/For_Wes/Snapshots/For_Wes.jpg" height="720" width="1280" alt=""/>
			        </div>
			    </div>
			</div>
		)
	}
} 

export default CoverVideo;
