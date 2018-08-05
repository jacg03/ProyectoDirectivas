import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngSwitchComponent } from './ejng-switch.component';

describe('EjngSwitchComponent', () => {
  let component: EjngSwitchComponent;
  let fixture: ComponentFixture<EjngSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
