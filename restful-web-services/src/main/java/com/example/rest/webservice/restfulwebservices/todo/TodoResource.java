package com.example.rest.webservice.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

  @Autowired
  private TodoHardcodedService todoHardcodedService;

  @GetMapping("/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoHardcodedService.findall();

  }
  @GetMapping("/users/{username}/todos/{id}")
  public Todo getAllTodos(@PathVariable String username,
  @PathVariable long id) {
    return todoHardcodedService.findById(id);

  }

  @RequestMapping(path="/users/{username}/todos/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<Void> deleteTodo(@PathVariable
  String username, @PathVariable long id){

    Todo todo =
    todoHardcodedService.deleteById(id);
    if(todo!=null){
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
  }
  @PutMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(
		  @PathVariable
		  String username, 
		  @PathVariable long id, @RequestBody Todo todo){
	  Todo todoUpdated = 
			  todoHardcodedService.save(todo);
	  return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
  }
  
  @PostMapping("/users/{username}/todos")
  public ResponseEntity<Void> updateTodo(
		  @PathVariable String username, @RequestBody Todo todo){
	  
	  Todo createdTodo = todoHardcodedService.save(todo);
	  
	  URI uri =
			  ServletUriComponentsBuilder.fromCurrentRequest().path("{id}")
	  .buildAndExpand(createdTodo.getId()).toUri();
	  
	  return ResponseEntity.created(uri).build();
	  
  }
}
