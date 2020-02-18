package com.example.rest.webservice.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

  private static List<Todo> todos = new ArrayList<>();
  private static long idCounter =0;

  static {
    todos.add(new Todo(++idCounter, "fahmy","learn to swim",
    new Date(), false));
    todos.add(new Todo(++idCounter, "fahmy","learn to learn music",
    new Date(), false));
    todos.add(new Todo(++idCounter, "fahmy","learn to play tennis",
    new Date(), false));
  }

  public List<Todo> findall() {

    return todos;
  }
  public Todo save(Todo todo) {
	  if(todo.getId()==-1||todo.getId()==0){
		  todo.setId(++idCounter);
		  todos.add(todo);
		  
	  }else {
		  deleteById(todo.getId());
		  todos.add(todo);
	  }
	  return todo;
  }
  public Todo deleteById(Long id){
    Todo todo = findById(id);

    if (todo == null) return null;
    if(todos.remove(todo)){
      return todo;

    }
    return null;
  }
  
  public Todo findById(Long id) {

    for(Todo todo : todos){
      if(todo.getId() == id) {
        return todo;
      }
    }
    return null;
  }
}
