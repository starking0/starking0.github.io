import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialIotComponent } from './industrial-iot.component';

describe('IndustrialIotComponent', () => {
  let component: IndustrialIotComponent;
  let fixture: ComponentFixture<IndustrialIotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialIotComponent]
    });
    fixture = TestBed.createComponent(IndustrialIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
