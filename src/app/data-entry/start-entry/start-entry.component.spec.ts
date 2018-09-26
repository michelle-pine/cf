import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEntryComponent } from './start-entry.component';

describe('StartEntryComponent', () => {
  let component: StartEntryComponent;
  let fixture: ComponentFixture<StartEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
