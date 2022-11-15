package com.fullstack.EmployeeManagement.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository ;

    public List<Employee> findAllEmployees()
    {
        List<Employee> l = new ArrayList<>();
        employeeRepository.findAll().forEach(employee -> l.add(employee));
        return l;
    }
}
