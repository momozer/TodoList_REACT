import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/modele/todo';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss']
})
export class ToDoPageComponent implements OnInit {

  public todoList : Todo[] = [
    new Todo('sortir'),
    new Todo('dormir'),
    new Todo('manger'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addTask = (e: Todo) =>{
    console.log(e);
    this.todoList.push(e);    
  }

}
