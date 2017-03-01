// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router"
// Custom Components
import Thumbnail from '../shared-components/Thumbnail.jsx'

class Work extends Component{
	render(){
		return(
			<div id="work-experience" className="section">
				<h1>This is my Work Experience Section</h1>
				<Thumbnail/>
			</div>
		)
	}
}
export default Work;