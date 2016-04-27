import React from 'react';
// http://tddbin.com/#?kata=es6/language/destructuring/object
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

let routes = (
	// https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#no-default-history
	<Router history={ hashHistory }>
		<Route path='/' component={ Main }>
		// https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md
			<IndexRoute component={ Home } />
			<Route path='playerOne' header='Player One' component={ PromptContainer } />
			<Route path='playerTwo/:playerOne' header='Player Two' component={ PromptContainer } />
			<Route path='battle' component={ ConfirmBattleContainer } />
			<Route path='results' component={ ResultsContainer } />
		</Route>
	</Router>
);

module.exports = routes;
