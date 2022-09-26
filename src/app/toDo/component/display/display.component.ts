import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/modele/todo';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() data : Todo[] = [new Todo('null')];
  @Input()
  test : string = ''

  constructor() { }

  ngOnInit(): void {
    console.log(this.test);
  }
  

}
