import React, { Component, PropTypes } from 'react';

const styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		margintop: '30px'
	}
}

class Loading extends Component {
	constructor(props) {
		super()
		this.originalText = props.text;
		this.state = {
			text: this.originalText
		}
	}
	componentDidMount() {
		const stopper = this.originalText + '...';

		this.interval = setInterval(() => {
			if(this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, this.props.speed)
	}
	componentWillUnmount() {
		 clearInterval(this.interval);
	}
	render() {
		return (
			<div style={ styles.container }>
				<p style={ styles.content }>{ this.state.text }</p>
			</div>
		)
	}
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}

Loading.propTypes = {
	text: PropTypes.string,
	speed: PropTypes.number
}

module.exports = Loading;
