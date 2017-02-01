// React Stuff  
import React, { Component } from 'react';
// Include jQuery
import $ from "jquery";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// Bootstrap React 
import "react-bootstrap"
// Custom Components
import "./App.css"
import Home from "./route-components/Home.jsx"
import Skills from "./route-components/Skills.jsx"
import Work from "./route-components/Work.jsx"
import About from "./route-components/About.jsx"
import Resume from "./route-components/Resume.jsx"
import BootstrapReactNavBar from "./shared-components/BootstrapReactNavBar.jsx"
import BootstrapCarousel from "./shared-components/BootstrapCarousel.jsx"
import Autotyper from "./shared-components/Autotyper.jsx"
// Custom packages
import "../node_modules/parallax-js/source/parallax.js"

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
