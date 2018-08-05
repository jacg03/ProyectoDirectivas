import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejng-class',
  templateUrl: './ejng-class.component.html',
  styleUrls: ['./ejng-class.component.css']
})
export class EjngClassComponent implements OnInit {
  puntuacion:number;

  constructor() { }

  ngOnInit() {
  }

  suspendido() {
    return this.puntuacion <= 5;
  }

}
