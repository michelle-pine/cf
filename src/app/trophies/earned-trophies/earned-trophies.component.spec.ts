import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedTrophiesComponent } from './earned-trophies.component';

describe('EarnedTrophiesComponent', () => {
  let component: EarnedTrophiesComponent;
  let fixture: ComponentFixture<EarnedTrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnedTrophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
