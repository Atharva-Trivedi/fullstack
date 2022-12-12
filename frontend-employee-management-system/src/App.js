// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {ListEmployeesComponentWithNavigate} from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
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
						<Route path = '/' exact element = {<ListEmployeesComponentWithNavigate/>}> </Route>
						<Route path = '/employees' exact element = {<ListEmployeesComponentWithNavigate/>}></Route> 
						<Route path = '/update-employee/:id' exact element = {<UpdateEmployeeComponent/>}></Route>

					</Routes>
				</div>
			<FooterComponent/>
			</div>
		</Router>
	</div>
  );
}

export default App;
