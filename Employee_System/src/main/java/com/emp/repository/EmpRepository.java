package com.emp.repository;

import com.emp.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpRepository extends JpaRepository<Emp, Integer> {
}
