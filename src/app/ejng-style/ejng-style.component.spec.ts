import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngStyleComponent } from './ejng-style.component';

describe('EjngStyleComponent', () => {
  let component: EjngStyleComponent;
  let fixture: ComponentFixture<EjngStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
