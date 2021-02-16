import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewAbsenceComponent } from './form-new-absence.component';

describe('FormNewAbsenceComponent', () => {
  let component: FormNewAbsenceComponent;
  let fixture: ComponentFixture<FormNewAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
