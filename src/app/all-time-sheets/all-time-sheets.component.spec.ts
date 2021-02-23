import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeSheetsComponent } from './all-time-sheets.component';

describe('AllTimeSheetsComponent', () => {
  let component: AllTimeSheetsComponent;
  let fixture: ComponentFixture<AllTimeSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTimeSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
