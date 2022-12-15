import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            id : this.props.id,
            firstName : "",
            lastName : "",
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
        console.log(this.props);

        // id : this.state.id ,
        let employee = { id : this.state.id,firstName : this.state.firstName, lastName : this.state.lastName , emailId : this.state.emailId};
        console.log(employee);
        EmployeeService.updateEmployee(employee);   
        this.props.navigate('/employees');
    };
    cancel(){
        this.props.navigate('/employees');
    }
    componentDidMount()
    {
        console.log('Update Component Mounted');
    }
    render() {
        console.log('Update Component rendered');
        // window.location.reload();
        return (
            <div >
                <div className='container'>
                    <div className='row'>
                        <div className='card col-6 offset-md-3'>
                            <h3 className='text-center'>Update Employee </h3>
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
export function UpdateEmployeeComponentWithNavigate(props){
   
    const {id } = useParams() ;
    console.log(id);
    const navigate = useNavigate();
    return <UpdateEmployeeComponent navigate = {navigate} id = {id} ></UpdateEmployeeComponent>
}
export default UpdateEmployeeComponent;