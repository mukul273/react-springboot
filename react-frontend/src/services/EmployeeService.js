import React, { Component } from 'react';
import axios from 'axios';

const employee_api_base = "http://localhost:8081/api/v1/employees";
const employee_create_api = "http://localhost:8081/api/v1/create";
const employee_getEmployeeById_api = "http://localhost:8081/api/v1/getEmployee/";
const employee_update_api = "http://localhost:8081/api/v1/updateEmployee";
const employee_delete_api = "http://localhost:8081/api/v1/deleteemp";

class EmployeeService {
    getEmployees() {
        return axios.get(employee_api_base);
    }
    createEmployee(employee) {
        return axios.post(employee_create_api, employee);
    }
    getEmployeeById(employeeId) {
        return axios.get(employee_getEmployeeById_api + '/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(employee_update_api + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(employee_delete_api + '/' + employeeId);
    }

}
export default new EmployeeService();