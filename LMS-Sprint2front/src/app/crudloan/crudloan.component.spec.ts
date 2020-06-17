import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudloanComponent } from './crudloan.component';

describe('CrudloanComponent', () => {
  let component: CrudloanComponent;
  let fixture: ComponentFixture<CrudloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
