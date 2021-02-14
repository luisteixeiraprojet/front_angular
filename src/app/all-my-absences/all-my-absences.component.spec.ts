import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyAbsencesComponent } from './all-my-absences.component';

describe('AllMyAbsencesComponent', () => {
  let component: AllMyAbsencesComponent;
  let fixture: ComponentFixture<AllMyAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyAbsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
