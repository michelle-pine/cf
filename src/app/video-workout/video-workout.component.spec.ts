import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWorkoutComponent } from './video-workout.component';

describe('VideoWorkoutComponent', () => {
  let component: VideoWorkoutComponent;
  let fixture: ComponentFixture<VideoWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
