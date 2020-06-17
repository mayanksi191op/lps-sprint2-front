import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectapplicationComponent } from './selectapplication.component';

describe('SelectapplicationComponent', () => {
  let component: SelectapplicationComponent;
  let fixture: ComponentFixture<SelectapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
