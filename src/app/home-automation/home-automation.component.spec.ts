import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomationComponent } from './home-automation.component';

describe('HomeAutomationComponent', () => {
  let component: HomeAutomationComponent;
  let fixture: ComponentFixture<HomeAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAutomationComponent]
    });
    fixture = TestBed.createComponent(HomeAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
