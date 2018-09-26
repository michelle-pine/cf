import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMenuTopComponent } from './pat-menu-top.component';

describe('PatMenuTopComponent', () => {
  let component: PatMenuTopComponent;
  let fixture: ComponentFixture<PatMenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatMenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
