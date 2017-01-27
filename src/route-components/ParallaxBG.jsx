// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router"

class ParallaxBG extends Component{
	render(){
		return(
			<div className= {"parallax-target "+this.props.section} 
			data-parallax = {this.props.data_parallax}
			data-image-src = {this.props.data_image_src}>
			</div>
		)	
	}
}
export default ParallaxBG;