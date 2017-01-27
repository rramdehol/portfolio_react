// React Stuff  
import React, { Component } from 'react';
import {Carousel, Link} from "react-bootstrap";
// jQuery
import $ from "jquery";


class BootstrapCarousel extends Component{
	// Live Scroll With jQuery
	componentDidMount() {
		$('a[href^="#"]').on('click', function(event) {
    			var target = $(this.getAttribute('href'));
    			if( target.length ) {
        			event.preventDefault();
        		$('html, body').stop().animate({
            	scrollTop: target.offset().top
        		}, 2500);
    		}
		});
	}
	render(){
		return(
			<div id="featured-projects" className="section">
			<div id="featured-projects-header">Featured Projects</div>
			<Carousel className="carousel" height={400} >
			    <Carousel.Item>
			      <img className= "carousel-image" width={1000} height={400} alt="900x500" src="http://i.imgur.com/yE2rIaL.jpg"/>
			      <Carousel.Caption>
			        <h3>www.CaniGo.co</h3>
			        <div><a href = "http://www.canigo.co/#/" target="_blank">Live Demo</a></div>
			        <div><a href="https://github.com/rramdehol/www.CaniGo.co" target="_blank">GitHub Repo</a></div>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img className= "carousel-image" width={1000} height={400} alt="900x500" src="http://i.imgur.com/Yao3UVe.jpg"/>
			      <Carousel.Caption>
			        <h3>Second slide label</h3>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img className= "carousel-image" width={900} height={500} alt="900x500" src="http://i.imgur.com/yVhQ3o8.jpg"/>
			      <Carousel.Caption>
			        <h3>Third slide label</h3>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
			</div>
		);
	}
}
export default BootstrapCarousel;