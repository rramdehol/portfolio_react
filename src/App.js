// React Stuff  
import React, { Component } from 'react';
// Include jQuery
import $ from "jquery";
// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// Bootstrap JS
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
// Custom Components
import BootstrapNavBar from "./shared-components/BootstrapNavBar.jsx"
import BootstrapCarousel from "./shared-components/BootstrapCarousel.jsx"

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row col-sm-12">
          <BootstrapNavBar/>
          <BootstrapCarousel/>
        </div>
      </div>
    );
  }
}

export default App;
