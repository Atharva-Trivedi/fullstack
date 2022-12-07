import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            firstName : "",
            secondName : "",
            emailId : ""
        }
        this.cancel=this.cancel.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
    }
    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId : event.target.value});
    }
    submitHandler = (event) => {
        event.preventDefault() ;
        console.log(this.state.firstName + "xy" + this.state.lastName);
        let employee = { firstName : this.state.firstName, lastName : this.state.lastName , emailId : this.state.emailId};
        EmployeeService.createEmployee(employee);
    };
    cancel= () => {
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div >
                <div className='container'>
                    <div className='row'>
                        <div className='card col-6 offset-md-3'>
                            <h3 className='text-center'> Add Employee </h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                        value = {this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                        <label className='mt-3 ml-2'> Last Name </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control '
                                        value = {this.state.lastName} onChange={this.changeLastNameHandler}/>

                                        <label className='mt-3 ml-2'> Email Id</label>
                                        <input placeholder='Email Id' name='emailId' className='form-control '
                                        value = {this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                </form>
                                <button className='btn btn-success ' onClick={this.submitHandler}>Submit</button>
                                <button className='btn btn-danger m-3' onClick={this.cancel}>Cancel</button>
                            </div>
                        </div>
                        
                    </div>
                </div>         
            </div>
            
        );
    }
}

export default CreateEmployeeComponent;