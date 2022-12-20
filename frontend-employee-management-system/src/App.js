// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ViewEmployeeComponentWithNavigate } from './components/ViewEmployeeComponent';
import {ListEmployeesComponentWithNavigate} from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { UpdateEmployeeComponentWithNavigate } from './components/UpdateEmployeeComponent';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import { CreateEmployeeComponentWithNavigate } from './components/CreateEmployeeComponent';
function App() {
  return (
	<div>
		<Router>
			<div className="container">
			<HeaderComponent/>
				<div className='container'>
					<Routes>
						<Route path = '/add-employee'  exact element = {<CreateEmployeeComponentWithNavigate/>}></Route>
						<Route path = '/' exact element = {<ListEmployeesComponentWithNavigate/>}> </Route>
						<Route path = '/employees' exact element = {<ListEmployeesComponentWithNavigate/>}></Route> 
						<Route path = '/update-employee/:id' exact element = {<UpdateEmployeeComponentWithNavigate/>}></Route>
						<Route path = '/view-employee/:id' exact element = {<ViewEmployeeComponentWithNavigate/>}></Route>
					</Routes>
				</div>
			<FooterComponent/>
			</div>
		</Router>
	</div>
  );
}

export default App;
