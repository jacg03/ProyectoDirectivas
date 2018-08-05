import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejng-style',
  templateUrl: './ejng-style.component.html',
  styleUrls: ['./ejng-style.component.css']
})
export class EjngStyleComponent implements OnInit {
  puntuacion:number;
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    return this.puntuacion >= 5 ? "red" : "blue";
  }

}
