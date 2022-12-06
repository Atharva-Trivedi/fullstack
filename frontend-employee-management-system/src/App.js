// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
function App() {
  return (
	<div>
		<Router>
			<div className="container">
			<HeaderComponent/>
				<div className='container'>
					<Routes>
						<Route path = '/add-employee'  exact element = {<CreateEmployeeComponent/>}></Route>
						<Route path = '/' exact element = {<ListEmployeesComponent/>}> </Route>
						<Route path = '/employees' exact element = {<ListEmployeesComponent/>}></Route> 
					</Routes>
				</div>
			<FooterComponent/>
			</div>
		</Router>
	</div>
  );
}

export default App;
