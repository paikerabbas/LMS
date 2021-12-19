package com.saien.lmsbackend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.saien.lmsbackend.model.Student;

/**
 * @author Paiker Abbas
 *
 */
@Service
public class StudentService {

	static List<Student> list = new ArrayList<>();

	static {
		Student st1 = new Student(1001, "Amit", "Class IX");
		list.add(st1);
		Student st2 = new Student(1002, "Asgar", "Class X");
		list.add(st2);
		Student st3 = new Student(1003, "Umesh", "Class XII");
		list.add(st3);
	}

	public Student getSingleStudent(Integer studentId) {

		Optional<Student> matchedStudent = list.stream().filter(x -> (x.getId() == studentId.intValue())).findFirst();
		if (matchedStudent.isPresent()) {
			return matchedStudent.get();
		}
		return null;

	}

}
