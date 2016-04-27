import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = "YOUR_SECRET_ID";
const param = '?client_id=' + id + '&client_secret=' + sec;

const getUserInfo = (username) => {
	// returns a promise
	return axios.get('https://api.github.com/users/' + username + param)
}

const getRepos = (username) => {
	// fetch username repos
	return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

const getTotalStars = (repos) => {
	// calculate all the stars that the user has
	return repos.data.reduce((prev, current) => {
		return prev + current.stargazers_count;
	}, 0)
}

const getPlayersData = (player) => {
	return getRepos(player.login)
		.then(getTotalStars)
		.then((totalStars) => {
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
	// get repos
	// getTotalStars
	// return object with that data
}

const calculateScores = (players) => {
	// return an array, after doing a calculation to determine the winner
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
}

const helpers = {
	getPlayersInfo: function(players) {
		return axios.all(players.map((username) => {
			// axios.all takes an array of promises and then when they
			// are all resolved, moves on to the 'then' statement
			return getUserInfo(username);
		})).then((info) => {
			return info.map((user) => {
				return user.data;
			})
		}).catch((err) => {
			console.warn('Error in getPlayersInfo', err)
		})
	},
	battle: function(players) {
		const playerOneData = getPlayersData(players[0]);
		const playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch((err) => {
				console.warn('Error in getPlayersInfo', err)
			})

	}
};

module.exports = helpers;
