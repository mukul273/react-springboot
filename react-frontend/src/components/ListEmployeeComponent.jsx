import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployees().then( (res) => {
            this.setState({
                employees: res.data
            });
        });
    }
    addEmployee() {
        this.props.history.push('/add-employee/-1')
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`)
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( (res) => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            });
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th colSpan="3" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map (
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td align="center"><button className="btn btn-info" onClick={ () => this.viewEmployee(employee.id)}>View</button></td>
                                        <td align="center"><button className="btn btn-info" onClick={ () => this.editEmployee(employee.id)}>Update</button></td>
                                        <td align="center"><button className="btn btn-danger" onClick={ () => this.deleteEmployee(employee.id)}>Delete</button></td>
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