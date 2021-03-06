// // Include the Main React Dependencies
// var React = require("react");
// var ReactDOM = require("react-dom");

// // Grabs the Routes
// var App = require("./config/routes");

// // Renders the contents according to the route page
// // Displays the contents in the div app of index.html
// // Note how ReactDOM takes in two parameters (the contents and the location)
// ReactDOM.render(App, document.getElementById("app"));


import React from "react";
import ReactDOM from "react-dom";
import Routes from "./config/routes";
import { Provider } from "react-redux";
import store from "./store";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<Routes/>
	</Provider>, document.getElementById("app"));






// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from './actions/actionCreators';
// import Home from './components/Home';

// function mapStateToProps(state) {
//   return {
//     profile: state.profile
//   }
// }

// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// const App = connect(mapStateToProps, mapDispachToProps)(Home);

// export default App;
