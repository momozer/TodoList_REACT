import { Component, OnInit } from '@angular/core';
import { DemoModele } from '../modele/demoModele';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  message : string = "message provenant du ts";
  id : number = 45;
  img : string = "https://img-31.ccm2.net/Ji6XAZ2DVBUOMWda_ohC-frNeqM=/1240x/smart/48e1ff8032dc465cb5332b34da10177d/ccmcms-hugo/10557808.jpg"
  nombre : number = 0;
  check : boolean = true;
  date : string = new Date().toUTCString();
  table : DemoModele[] = [
    new DemoModele('Dupont', 'Noelle',  "25-01-1995"),
    new DemoModele('Durant', 'Marie', "15-07-1999"),
    new DemoModele('Ducon', 'Marc', "05-07-1998")
  
  ]

  constructor() { }

  //Hooks qui se lance à  la création du composant
  ngOnInit(): void {
    console.log("le composant demo se crée");
  }

  // methodes:
  displayMessage(e : any): void {
    console.log(e);    
  }
  newNumber (valeur : any) : void {
    // On veut récupérer la nouvelle valuer du nombre
    console.log(valeur.value);
    
  }
  changeColor () : void {
    this.check = !this.check;
  }
  setColor ():string {
    return 'orange';
  }

}
