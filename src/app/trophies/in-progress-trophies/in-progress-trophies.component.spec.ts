import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressTrophiesComponent } from './in-progress-trophies.component';

describe('InProgressTrophiesComponent', () => {
  let component: InProgressTrophiesComponent;
  let fixture: ComponentFixture<InProgressTrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressTrophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
