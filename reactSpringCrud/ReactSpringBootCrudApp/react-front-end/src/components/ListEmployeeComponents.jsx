import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService'

class ListEmployeeComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key = {employee.id}>
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
export default ListEmployeeComponents