package com.fullstack.EmployeeManagement.employee;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee,Long> {

    // public void deleteById(Integer id);
}
