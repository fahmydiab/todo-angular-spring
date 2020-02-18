import { AUTH_USER } from './../service/basic-auth.service';
import { TododtaService } from './../service/data/tododta.service';
import { Todo } from './../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(
    private todoService: TododtaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(this.id, '', false, new Date());

    // tslint:disable-next-line: triple-equals
    if (this.id != -1) {
      this.todoService
        .retrieveTodo(sessionStorage.getItem(AUTH_USER)
            , this.id)
                  .subscribe(data => (this.todo = data));
    }

  }
  saveTodo() {
    // tslint:disable-next-line: triple-equals
    if (this.id == -1) {
      // create new todo
      this.todoService.createTodo(sessionStorage.getItem(AUTH_USER)
        , this.todo)
          .subscribe(
             data => {
                this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoService.updateTodo(sessionStorage.getItem(AUTH_USER)
            , this.id, this.todo).subscribe(data => {
                console.log(data);
                this.router.navigate(['todos']);
      });
    }
  }
}
