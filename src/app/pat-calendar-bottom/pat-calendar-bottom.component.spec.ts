import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatCalendarBottomComponent } from './pat-calendar-bottom.component';

describe('PatCalendarBottomComponent', () => {
  let component: PatCalendarBottomComponent;
  let fixture: ComponentFixture<PatCalendarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatCalendarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatCalendarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
