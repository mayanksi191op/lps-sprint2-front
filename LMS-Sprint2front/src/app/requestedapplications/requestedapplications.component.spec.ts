import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedapplicationsComponent } from './requestedapplications.component';

describe('RequestedapplicationsComponent', () => {
  let component: RequestedapplicationsComponent;
  let fixture: ComponentFixture<RequestedapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedapplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
