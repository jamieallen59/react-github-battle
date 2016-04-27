import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';
import MainContainer from './MainContainer';

// class Home extends Component {
// 	render() {
// 		return(
// 			<div> Hello from Home! </div>
// 		)
// 	}
// };

// NOTE: new stateless function syntax
// https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.4tfmwbobe
const Home = () => {
	return (
		<MainContainer>
			<h1>Github Battle</h1>
			<p className='lead'>Some fancy motto</p>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-success'>Get Started</button>
			</Link>
		</MainContainer>
	)
}

module.exports = Home;
