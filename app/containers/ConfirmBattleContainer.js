import React, { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
	constructor() {
		console.log('getInitialState');
		super()
		this.state = {
			isLoading: true,
			playersInfo: []
		}
		this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		const query = this.props.location.query;

		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then((players) => {
				this.setState({
					isLoading: false,
					playersInfo: [ players[0], players[1] ]
				})
			});
	}
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	handleInitiateBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})
	}
	render() {
		return (
			<ConfirmBattle
				isLoading={ this.state.isLoading }
				onInitiateBattle={ this.handleInitiateBattle }
				playersInfo={ this.state.playersInfo } />
		)
	}
};

ConfirmBattleContainer.contextTypes = { router: PropTypes.object.isRequired }

module.exports = ConfirmBattleContainer;
