import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyRightComponent } from './smiley-right.component';

describe('SmileyRightComponent', () => {
  let component: SmileyRightComponent;
  let fixture: ComponentFixture<SmileyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileyRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
