import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialInteligenceComponent } from './artificial-inteligence.component';

describe('ArtificialInteligenceComponent', () => {
  let component: ArtificialInteligenceComponent;
  let fixture: ComponentFixture<ArtificialInteligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtificialInteligenceComponent]
    });
    fixture = TestBed.createComponent(ArtificialInteligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
