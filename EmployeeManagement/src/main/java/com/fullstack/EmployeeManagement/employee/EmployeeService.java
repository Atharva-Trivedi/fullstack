package com.fullstack.EmployeeManagement.employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fullstack.EmployeeManagement.exceptions.ResourceNotFoundException;

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
    public Optional<Employee> getEmployee(String emailId)
    {
       return employeeRepository.findByEmailId(emailId);
    }
    public ResponseEntity<Employee> getEmployee(Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Employee Does not exist"));
        return ResponseEntity.ok(employee);
    }
    public void addEmployee(Employee employee)
    {
        employeeRepository.save(employee);
    }
    public void deleteEmployee(Long id)
    {
        employeeRepository.deleteById(id);
    }
    public void updateEmployee(Employee employee)
    {
        employeeRepository.save(employee);
    }
}
