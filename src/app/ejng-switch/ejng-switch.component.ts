import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejng-switch',
  templateUrl: './ejng-switch.component.html',
  styleUrls: ['./ejng-switch.component.css']
})
export class EjngSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alumnos: any[] = [
    { nombre: 'Jose', aprobado: 'aprobado' },
    { nombre: 'Barron', aprobado: 'reprobado' },
    { nombre: 'Jose 1', aprobado: 'aprobado' },
    { nombre: 'Jose 22', aprobado: 'de panzaso' },
    { nombre: 'Jose 2', aprobado: 'aprobado' },
    { nombre: 'Barron 2', aprobado: 'reprobado' }

  ];
}
