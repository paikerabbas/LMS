package com.saien.lmsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saien.lmsbackend.model.User;
import com.saien.lmsbackend.service.AuthService;

/**
 * @author Paiker Abbas
 *
 */
@RestController
@CrossOrigin
public class AuthController {

	@Autowired
	AuthService authService;
	
	@PostMapping("/login")
	public User login(@RequestBody User user) throws Exception {
		return authService.authUser(user);
	}
}
