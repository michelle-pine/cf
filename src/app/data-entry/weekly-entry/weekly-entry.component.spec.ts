import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEntryComponent } from './weekly-entry.component';

describe('WeeklyEntryComponent', () => {
  let component: WeeklyEntryComponent;
  let fixture: ComponentFixture<WeeklyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
