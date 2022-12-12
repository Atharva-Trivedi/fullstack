import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

// function navigateToAddEmployee (){
//     useNavigate('/add-employee');
// }
class ListEmployeesComponent extends Component
{
    // navigate = useNavigate();
    constructor(props)
    {
        super(props)
        this.state = {
                employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        // this.navigateToAddEmployee = this.navigateToAddEmployee.bind(this);

    }
    
    componentDidMount()
    {
        EmployeeService.getEmployees().then((response) => {
            this.setState({employees : response.data});
        });
    }
    addEmployee(){
        this.props.navigate('/add-employee');
    }
    editEmployee(id){
       this.props.navigate(`/update-employee/${id}`);
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
                    <nav href = 'get-employee'><div className='tc'><a href='get-employee'>Get Employee</a></div></nav>
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
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                        </td>
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
export function ListEmployeesComponentWithNavigate(props) {
    const navigate = useNavigate();
  
    return <ListEmployeesComponent navigate={navigate}></ListEmployeesComponent>
  }
export default ListEmployeesComponent ;