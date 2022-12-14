package com.fullstack.EmployeeManagement.employee;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    public Optional<Employee> findByEmailId(String emailId);
}
