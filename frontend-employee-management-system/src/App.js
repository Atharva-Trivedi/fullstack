// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";function App() {
  return (
	<div>
		<Router>
			<div className="container">
			<HeaderComponent/>
				<div className='container'>
					<Routes>
						<Route path = '/' element = {<ListEmployeesComponent/>}> </Route>
						<Route path = '/employees' element = {<ListEmployeesComponent/>}></Route>
					</Routes>
				</div>
			<FooterComponent/>
			</div>
		</Router>
	</div>
  );
}

export default App;
