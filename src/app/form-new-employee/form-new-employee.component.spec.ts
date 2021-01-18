import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewEmployeeComponent } from './form-new-employee.component';

describe('FormNewEmployeeComponent', () => {
  let component: FormNewEmployeeComponent;
  let fixture: ComponentFixture<FormNewEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
