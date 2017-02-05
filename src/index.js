// React App Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import $ from "jquery";

// Custom Components
import App from './App';
import Home from "./route-components/Home.jsx"
import Splash from "./route-components/Splash.jsx"
import Resume from "./route-components/Resume.jsx"
// Styling
import './index.css';


ReactDOM.render(
  <Router history = {hashHistory}>
  	<Route path="/" component = {App}>
  		<IndexRoute component={Splash}/>
      	<Route path ="/home" component={Home}/>
  		<Route path ="/resume" component={Resume}/>
  	</Route>
  </Router>,
  document.getElementById('root')
);
