import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
// import { useNavigate } from 'react-router-dom';

// function navigateToAddEmployee (){
//     useNavigate('/add-employee');
// }
class ListEmployeesComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
                employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        // this.navigateToAddEmployee = this.navigateToAddEmployee.bind(this);

    }
    
    componentDidMount()
    {
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees : response.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }
    
    render()
    {
        return (
            <div>
                <h2 className='tc pa3'>Employees List</h2>
                <div className='row'>
                    <nav href = 'add-employee'><div className='tc'><a href='add-employee'>Add Employee</a></div></nav>
                </div>
                <div className='row'>
                    <table className='table table-bordered table-striped'>

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeesComponent ;