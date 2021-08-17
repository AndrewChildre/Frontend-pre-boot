import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Fitness from './components/Fitness';
import Header from './components/Header'
import Values from './components/Values'
import Home from './components/Home'
import Leadership from './components/Leadership'
import GeneralOrders from './components/GeneralOrders'
import RankSys from './components/RankSys';
import Hymn from './components/Hymn'
import M16 from './components/M16'

function App() {
  return (
		<div className='App'>
		

			<main>
				<Header />
				<Router>
					<Route path='/' exact component={Home} />
					<Route path='/values' exact component={Values} />
					<Route path='/fitness' exact component={Fitness} />
					<Route path='/leadership' exact component={Leadership} />
					<Route path='/orders' exact component={GeneralOrders} />
					<Route path='/rank' exact component={RankSys} />
					<Route path='/hymn' exact component={Hymn} /> 
					<Route path='/M16' exact component={M16} />
			
				</Router>
			</main>
		</div>
	);
}

export default App;
