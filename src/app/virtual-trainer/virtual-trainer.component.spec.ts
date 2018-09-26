import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTrainerComponent } from './virtual-trainer.component';

describe('VirtualTrainerComponent', () => {
  let component: VirtualTrainerComponent;
  let fixture: ComponentFixture<VirtualTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
