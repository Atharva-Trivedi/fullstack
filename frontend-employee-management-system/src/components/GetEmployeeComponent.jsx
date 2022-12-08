import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class GetEmployeeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            emailId : ""
        }
        this.getEmployeeHandler = this.getEmployeeHandler.bind(this);

    }

    getEmployeeHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className='container'>
                </div>
            </div>
        );
    }
}