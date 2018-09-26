import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyLeftComponent } from './smiley-left.component';

describe('SmileyLeftComponent', () => {
  let component: SmileyLeftComponent;
  let fixture: ComponentFixture<SmileyLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileyLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
