import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngDirectiveComponent } from './ejng-directive.component';

describe('EjngDirectiveComponent', () => {
  let component: EjngDirectiveComponent;
  let fixture: ComponentFixture<EjngDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
