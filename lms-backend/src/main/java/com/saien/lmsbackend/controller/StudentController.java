package com.saien.lmsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.saien.lmsbackend.model.Student;
import com.saien.lmsbackend.service.StudentService;

/**
 * @author Paiker Abbas
 *
 */
@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;

	@GetMapping("student/{id}")
	public Student getStudentById(@PathVariable String id) {
		return studentService.getSingleStudent(Integer.parseInt(id));
	}

}
