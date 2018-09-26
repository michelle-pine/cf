import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChallengeComponent } from './weekly-challenge.component';

describe('WeeklyChallengeComponent', () => {
  let component: WeeklyChallengeComponent;
  let fixture: ComponentFixture<WeeklyChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
