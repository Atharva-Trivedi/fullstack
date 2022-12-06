import React, { Component } from 'react';


class CreateEmployeeComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            firstName : "",
            secondName : ""
        }
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Add Employee </h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                        value = {this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                        <label className='mt-3 ml-2'> Second Name </label>
                                        <input placeholder='Second Name' name='secondName' className='form-control '
                                        value = {this.state.secondName} onChange={this.changeSecondNameHandler}/>
                                    </div>
                                </form>
                                <button className='btn-primary m-3 green'>Save</button>
                                <button className='btn-primary m-3 red'>Cancel</button>
                            </div>
                        </div>
                        
                    </div>
                </div>         
            </div>
            
        );
    }
}

export default CreateEmployeeComponent;