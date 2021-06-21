import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRent2Component } from './car-rent2.component';

describe('CarRent2Component', () => {
  let component: CarRent2Component;
  let fixture: ComponentFixture<CarRent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
