import React from 'react';
import Home from './Components/Home';
import Pizza from './Components/Pizza';
import { Router, Switch, Route } from 'react-router-dom';
const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/pizza'>
					<Pizza />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
