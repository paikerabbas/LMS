package com.saien.lmsbackend.service;

import org.springframework.stereotype.Service;

import com.saien.lmsbackend.model.User;

/**
 * @author Paiker Abbas
 *
 */
@Service
public class AuthService {

	public User authUser(User user) throws Exception {
		if (user.getName().equals("root") && user.getPassword().contentEquals("root")) {
			return user;
		} else {
			throw new Exception("Auth error: user credentials are invalid");
		}
	}
}
