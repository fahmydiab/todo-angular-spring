package com.example.rest.webservice.restfulwebservices.basic;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new AuthenticationBean("You are authenticated");
	}
}
