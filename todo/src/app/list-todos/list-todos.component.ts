import { TododtaService } from './../service/data/tododta.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;
  // = [
  //   new Todo(1, 'Learn to dance', false, new Date() ),
  //   new Todo(2, 'Read a book', false, new Date() ),
  //   new Todo(3, 'Visit India', false, new Date() )
  // ];

  constructor(private todoService: TododtaService,
              private router: Router) {}

  ngOnInit() {
    this.newMethod();
  }
  private newMethod() {
    this.todoService.retrieveAllTodods('user').subscribe(res => {
      console.log(res);
      this.todos = res;
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('user', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.newMethod();
      }
    );
    console.log(`delete todo ${id}`);
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
