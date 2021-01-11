import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';
import Program from './Components/Program';
import NavBar from './Components/NavBar';
import Tabling from './Components/Tabling';
import Vendors from './Components/Vendors';

import 'antd/dist/antd.css';
import Sponsors from './Components/Sponsors';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Route exact path="/" component={Intro} />
				<Route path="/tabling" component={Tabling} />
				<Route path="/program" component={Program} />
				<Route path="/vendors" component={Vendors} />
				<Route path="/sponsors" component={Sponsors} />
			</div>
		</Router>
	);
}

export default App;
