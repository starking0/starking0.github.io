import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanEnergyComponent } from './clean-energy.component';

describe('CleanEnergyComponent', () => {
  let component: CleanEnergyComponent;
  let fixture: ComponentFixture<CleanEnergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleanEnergyComponent]
    });
    fixture = TestBed.createComponent(CleanEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
