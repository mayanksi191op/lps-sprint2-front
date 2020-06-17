import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginredirectComponent } from './loginredirect.component';

describe('LoginredirectComponent', () => {
  let component: LoginredirectComponent;
  let fixture: ComponentFixture<LoginredirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginredirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
