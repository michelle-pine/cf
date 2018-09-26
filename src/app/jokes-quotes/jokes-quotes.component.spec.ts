import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesQuotesComponent } from './jokes-quotes.component';

describe('JokesQuotesComponent', () => {
  let component: JokesQuotesComponent;
  let fixture: ComponentFixture<JokesQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
