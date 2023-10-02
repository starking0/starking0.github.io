import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialAutomationComponent } from './industrial-automation.component';

describe('IndustrialAutomationComponent', () => {
  let component: IndustrialAutomationComponent;
  let fixture: ComponentFixture<IndustrialAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialAutomationComponent]
    });
    fixture = TestBed.createComponent(IndustrialAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
