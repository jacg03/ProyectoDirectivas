import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjngIFComponent } from './ejng-if/ejng-if.component';
import { FormsModule } from '@angular/forms';
import { EjngStyleComponent } from './ejng-style/ejng-style.component';
import { EjngClassComponent } from './ejng-class/ejng-class.component';
import { EjngForComponent } from './ejng-for/ejng-for.component';
import { EjngSwitchComponent } from './ejng-switch/ejng-switch.component';
import { EjngDirectiveDirective } from './directivas/ejng-directive.directive';
import { EjngDirectiveComponent } from './ejng-directive/ejng-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    EjngIFComponent,
    EjngStyleComponent,
    EjngClassComponent,
    EjngForComponent,
    EjngSwitchComponent,
    EjngDirectiveDirective,
    EjngDirectiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
