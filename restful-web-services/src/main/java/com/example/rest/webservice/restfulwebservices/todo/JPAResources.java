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
public class JPAResources {

//  @Autowired
//  private TodoHardcodedService todoHardcodedService;

  @Autowired
  private TodoJpaRepository todoJpaRepository;

  @GetMapping("/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
//	  return todoHardcodedService.findall();
	  return todoJpaRepository.findByUsername(username);

  }
  @GetMapping("/jpa/users/{username}/todos/{id}")
  public Todo getAllTodos(@PathVariable String username,
  @PathVariable long id) {
	  return todoJpaRepository.findById(id).get();
//    return todoHardcodedService.findById(id);

  }

  @RequestMapping(path="/jpa/users/{username}/todos/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<Void> deleteTodo(@PathVariable
  String username, @PathVariable long id){

//    Todo todo =
//    todoHardcodedService.deleteById(id);
	  todoJpaRepository.deleteById(id);
	  
    
      return ResponseEntity.noContent().build();
    
//    return ResponseEntity.notFound().build();
  }
  
  @PutMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(
		  @PathVariable
		  String username, 
		  @PathVariable long id, @RequestBody Todo todo){
	  Todo todoUpdated = 
			  todoJpaRepository.save(todo);
//			  todoHardcodedService.save(todo);
	  return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
  }
  
  @PostMapping("/jpa/users/{username}/todos")
  public ResponseEntity<Void> createTodo(
		  @PathVariable String username, @RequestBody Todo todo){
	  System.out.println(username+"++++++++++++++++++++++++++++++++");
	  todo.setUsername(username);
	  Todo createdTodo = todoJpaRepository.save(todo);
	  
//			  todoHardcodedService.save(todo);
	  
	  URI uri =
			  ServletUriComponentsBuilder.fromCurrentRequest().path("{id}")
	  .buildAndExpand(createdTodo.getId()).toUri();
	  
	  return ResponseEntity.created(uri).build();
	  
  }
}
