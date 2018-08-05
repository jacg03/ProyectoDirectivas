import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngIFComponent } from './ejng-if.component';

describe('EjngIFComponent', () => {
  let component: EjngIFComponent;
  let fixture: ComponentFixture<EjngIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
