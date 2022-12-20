import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            employee : {}
        }

    }
    componentDidMount()
    {
        EmployeeService.getEmployeeById(this.props.id).then((response) => {
            this.setState({employee : response.data});
            console.log(this.props.id);
            console.log(response);
        });
    }
    render() {
        return (
            <div>
                <table className='table table-bordered table-striped'>
                <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Id</th>
                            </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.employee.id}</td>
                        <td>{this.state.employee.firstName}</td>
                        <td>{this.state.employee.lastName}</td>
                        <td>{this.state.employee.emailId}</td>

                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export function ViewEmployeeComponentWithNavigate(props){
    const {id } = useParams() ;
    return <ViewEmployeeComponent id = {id} ></ViewEmployeeComponent>
}
export default ViewEmployeeComponent ;