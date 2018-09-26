import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiscrollDatetimeComponent } from './mobiscroll-datetime.component';

describe('MobiscrollDatetimeComponent', () => {
  let component: MobiscrollDatetimeComponent;
  let fixture: ComponentFixture<MobiscrollDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiscrollDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiscrollDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
