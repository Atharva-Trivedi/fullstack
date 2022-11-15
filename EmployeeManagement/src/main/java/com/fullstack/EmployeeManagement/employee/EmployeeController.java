package com.fullstack.EmployeeManagement.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController
{
    @Autowired
    private EmployeeService employeeService = new EmployeeService();

    @RequestMapping("/employees")
    public List<Employee> getAllEmployees()
    {
        return employeeService.findAllEmployees();
    }
}