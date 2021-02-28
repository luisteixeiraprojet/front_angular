import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyTimesheetsComponent } from './all-my-timesheets.component';

describe('AllMyTimesheetsComponent', () => {
  let component: AllMyTimesheetsComponent;
  let fixture: ComponentFixture<AllMyTimesheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyTimesheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
