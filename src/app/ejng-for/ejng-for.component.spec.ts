import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjngForComponent } from './ejng-for.component';

describe('EjngForComponent', () => {
  let component: EjngForComponent;
  let fixture: ComponentFixture<EjngForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjngForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjngForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
