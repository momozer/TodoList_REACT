import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/modele/todo';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output()
  newTask : EventEmitter<Todo> = new  EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask = (item:HTMLInputElement) =>{
    this.newTask.emit(new Todo(item.value));
    item.value =''    
  }

}
