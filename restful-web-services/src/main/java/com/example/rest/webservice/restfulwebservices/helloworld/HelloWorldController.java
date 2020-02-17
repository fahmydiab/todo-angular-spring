package com.example.rest.webservice.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

  @RequestMapping(method= RequestMethod.GET, path = "/hello-world")
  public String helloWorld(){
    return "Hello World";
  }
  @RequestMapping(method= RequestMethod.GET, path = "/hello-world/path-var/{name}")
  public HelloWorldBean helloWorldPathVar(@PathVariable final String name) {
    return new HelloWorldBean(String.format("Hello World, %s", name));
  }
  @GetMapping(path = "/hello-world-bean")
  public HelloWorldBean helloWorldBean(){
  // throw new RuntimeException("Error!!!!!!!!!");
   return new HelloWorldBean("Hello World!!!!!!!!!!!!!!");
  }
}
