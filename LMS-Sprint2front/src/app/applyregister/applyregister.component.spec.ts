import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyregisterComponent } from './applyregister.component';

describe('ApplyregisterComponent', () => {
  let component: ApplyregisterComponent;
  let fixture: ComponentFixture<ApplyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
