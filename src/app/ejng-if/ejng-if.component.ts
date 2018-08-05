import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejng-if',
  templateUrl: './ejng-if.component.html',
  styleUrls: ['./ejng-if.component.css']
})
export class EjngIFComponent implements OnInit {
  nombre:string;
  capital:string;

  constructor() { }

  ngOnInit() {
  }

  getResultado() {
    return this.capital === 'Ciudad de Mexico' ? true : false;
  }

}
