import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejng-for',
  templateUrl: './ejng-for.component.html',
  styleUrls: ['./ejng-for.component.css']
})
export class EjngForComponent implements OnInit {
  frutas = ['manzana', 'pera', 'mango', 'piña'];
  constructor() { }

  ngOnInit() {
  }

}
