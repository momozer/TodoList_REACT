import { Component, OnInit } from '@angular/core';
import data from '../data/userData';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {

  users : any = data;
  
  constructor() { 
  

}
  
  Afficher(id:number){
    this.users[id].check = !this.users[id].check;
  }
  

  ngOnInit(): void {
    for (let user of this.users) {
    this.users;
    user.check = false;
  }
  }

  supprimer (i : number) {
    this.users.splice(i, 1)
  }

  
}
