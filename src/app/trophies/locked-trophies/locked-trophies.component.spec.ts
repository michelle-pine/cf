import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedTrophiesComponent } from './locked-trophies.component';

describe('LockedTrophiesComponent', () => {
  let component: LockedTrophiesComponent;
  let fixture: ComponentFixture<LockedTrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedTrophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedTrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
