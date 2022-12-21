package com.fullstack.EmployeeManagement.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class EmployeeController
{
    @Autowired
    private EmployeeService employeeService = new EmployeeService();

    @RequestMapping(value = "/employees" , method = RequestMethod.GET)
    public List<Employee> getAllEmployees()
    {
        return employeeService.findAllEmployees();
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id)
    {
        System.out.println(id);
        return employeeService.getEmployee(id);
    }
    @RequestMapping(value = "/employees" , method = RequestMethod.POST)
    public void addEmployee(@RequestBody Employee employee)
    {
        employeeService.addEmployee(employee);
    }

    @RequestMapping(value = "/employees/{id}",method = RequestMethod.DELETE )
    public void deleteEmployee(@PathVariable Long id)
    {
        employeeService.deleteEmployee(id);
    }

    @RequestMapping(value = "/employees",method = RequestMethod.PUT)
    public void updateEmployee(@RequestBody Employee employee)
    {  
        System.out.println(123);
        System.out.println(employee);
        employeeService.updateEmployee(employee);
    }
}