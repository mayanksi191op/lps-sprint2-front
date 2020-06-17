import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedapplicationssComponent } from './rejectedapplicationss.component';

describe('RejectedapplicationssComponent', () => {
  let component: RejectedapplicationssComponent;
  let fixture: ComponentFixture<RejectedapplicationssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedapplicationssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedapplicationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
