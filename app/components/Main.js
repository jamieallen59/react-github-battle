import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../main.css');

// class Main extends Component {
// 	render() {
// 		return (
// 			<div className='main-container'>
// 				{ this.props.children }
// 			</div>
// 		)
// 	}
// };

// NOTE: new stateless function syntax
// https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.4tfmwbobe
const Main = (props) => {
	// https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	// use clone element to pass an element props when you don't know what that child would be
	return (
		<div className='main-container'>
			<ReactCSSTransitionGroup
				transitionName='appear'
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
				{ React.cloneElement(props.children, {key: props.location.pathname}) }
			</ReactCSSTransitionGroup>
		</div>
	)
}

module.exports = Main;
