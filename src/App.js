// React Stuff  
import React, { Component } from 'react';
// Include jQuery
import $ from "jquery";
// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// Bootstrap JS
// Custom Components
import "./App.css"
import Home from "./route-components/Home.jsx"
import Skills from "./route-components/Skills.jsx"
import Work from "./route-components/Work.jsx"
import About from "./route-components/About.jsx"
import Resume from "./route-components/Resume.jsx"
import ParallaxBG from "./route-components/ParallaxBG.jsx"
import BootstrapNavBar2 from "./shared-components/BootstrapNavBar2.jsx"
import BootstrapCarousel from "./shared-components/BootstrapCarousel.jsx"
// Custom packages
import "../node_modules/parallax-js/source/parallax.js"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-lg-12">
            <BootstrapNavBar2/>
          </div>
        </div>
        <div className = "row">
          <div className = "col-lg-12">
            <BootstrapCarousel/>
            <ParallaxBG section="section-1" data_parallax="scroll" data_image_src="http://i.imgur.com/yE2rIaL.jpg"/>
            <About/>
            <ParallaxBG section="section-2" data_parallax="scroll" data_image_src="http://i.imgur.com/Yao3UVe.jpg"/>
            <Skills/>
            <Work/>
            <Resume/>
          </div>
        </div>
        {/*{this.props.children}*/}
      </div>
    );
  }
}

export default App;
