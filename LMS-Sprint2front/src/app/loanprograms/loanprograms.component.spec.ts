import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanprogramsComponent } from './loanprograms.component';

describe('LoanprogramsComponent', () => {
  let component: LoanprogramsComponent;
  let fixture: ComponentFixture<LoanprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
