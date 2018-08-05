import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngClassComponent } from './ejng-class.component';

describe('EjngClassComponent', () => {
  let component: EjngClassComponent;
  let fixture: ComponentFixture<EjngClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
