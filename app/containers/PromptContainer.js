import React, { Component, PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
	constructor() {
		super()
		this.state = {
			username: ''
		}
		this.handleUpdateUser = this.handleUpdateUser.bind(this);
		this.handleSubmitUser = this.handleSubmitUser.bind(this);
	}

	handleUpdateUser(e) {
		this.setState({
			username: e.target.value
		})
	}

	handleSubmitUser(e) {
		e.preventDefault();
		let username = this.state.username;

		this.setState({
			username: ''
		});

		if(this.props.routeParams.playerOne) {
		/**
		 * router.push can take an object with a query which holds information
		 * which will be passed down to the page OR simply just the URL name
		 * as a string.
		 */
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	}

	render() {
		return (
			<Prompt
				onSubmitUser={ this.handleSubmitUser }
				onUpdateUser={ this.handleUpdateUser }
				header={ this.props.route.header }
				username={ this.state.username } />
		)
	}
};

PromptContainer.contextTypes = { router: PropTypes.object.isRequired }

module.exports = PromptContainer;
