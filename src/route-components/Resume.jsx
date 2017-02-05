// React Stuff  
import React, { Component } from 'react';
import { Link } from "react-router"
import Autotyper from "../shared-components/Autotyper.jsx"


class Resume extends Component{
	render(){
		return(
			<div id="resume" className="section">
				<h1>This is my Resume Page</h1>
				<p>
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
					quae ab illo inventore veritatis et quasi architecto beatae vitae 
					dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
					eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
					sed quia non numquam eius modi tempora incidunt ut labore et dolore 
					magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis n
					ostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
					aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehend
					erit qui in ea voluptate velit esse quam nihil molestiae consequatur,
					 vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
				</p>
				<Autotyper message={"Hi I'm Ryan Ramdehol and I'm a React Web Developer"} createdWith = {"This portfolio was created in React JS"} contactMessage={"find me on gitHub"} gitHubLink={"https://github.com/rramdehol"} gitHubName={"@rramdehol"} clickMessage={"or click the button below"}/>
				<Link className="btn btn-success" to="/home">Back To Home Page</Link>
			</div>
		)
	}
}
export default Resume;