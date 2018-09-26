import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatHomeComponent } from './pat-home.component';

describe('PatHomeComponent', () => {
  let component: PatHomeComponent;
  let fixture: ComponentFixture<PatHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
