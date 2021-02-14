import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAbsencesComponent } from './all-absences.component';

describe('AllAbsencesComponent', () => {
  let component: AllAbsencesComponent;
  let fixture: ComponentFixture<AllAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAbsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
