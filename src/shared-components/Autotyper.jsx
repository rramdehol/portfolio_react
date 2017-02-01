// React Stuff  
import React, { Component } from 'react';

class Autotyper extends Component{
	render(){
		return(
			<div id="auto-type-box">
				<p id="first-line">{this.props.message}</p>
				<p id="second-line">{this.props.createdWith}</p> 
	  			<p id="third-line">{this.props.contactMessage} <a id="gitlink" href={this.props.gitHubLink}>{this.props.gitHubName}</a>
	  			<span> {this.props.clickMessage}</span>;)<span className="blink">|</span></p>	
			</div>
		)
	}
}

export default Autotyper;