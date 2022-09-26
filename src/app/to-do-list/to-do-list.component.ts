import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public todo : void [];
  public inputData : any;

  constructor() {
    this.todo = [];
   }

  ngOnInit(): void {
  }

  add(value:HTMLInputElement){
    this.todo.push(this.inputData);
    value.value = "";
  }

  delete(index:any){
    this.todo.splice(index,1)
  }

}
