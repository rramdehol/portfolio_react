// React Stuff  
import React, { Component } from 'react';
// React Bootstrap
import {Link} from "react-router";
// Include jQuery
import $ from "jquery";

import Skills from "./Skills.jsx"
import Work from "./Work.jsx"
import About from "./About.jsx"
import BootstrapReactNavBar from "../shared-components/BootstrapReactNavBar.jsx"
import BootstrapCarousel from "../shared-components/BootstrapCarousel.jsx"

class Home extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-lg-12">
            <BootstrapReactNavBar />
          </div>
        </div>
        <div className = "row">
          <div className = "col-lg-12">
            <BootstrapCarousel/>
            <About/>
            <Skills/>
            <Work/>         
            <Link className="btn btn-success" to="/resume">Resume</Link>
          </div>
        </div>
        {/*{this.props.children}*/}
      </div>
    );
  }
}

export default Home;
