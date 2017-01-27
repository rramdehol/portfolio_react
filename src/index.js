// React App Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import $ from "jquery";

// Custom Components
import App from './App';
import Home from "./route-components/Home.jsx"
import Skills from "./route-components/Skills.jsx"
import Work from "./route-components/Work.jsx"
import About from "./route-components/About.jsx"
import Resume from "./route-components/Resume.jsx"
// Styling
import './index.css';


ReactDOM.render(
  <Router history = {hashHistory}>
  	<Route path="/" component = {App}>
  		<IndexRoute component={Home}/>
  		<Route path ="/skills" component={Skills}/>
  		<Route path ="/work" component={Work}/>
  		<Route path ="/about" component={About}/>
  		<Route path ="/resume" component={Resume}/>
  	</Route>
  </Router>,
  document.getElementById('root')
);
