import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRiskComponent } from './supplier-risk.component';

describe('SupplierRiskComponent', () => {
  let component: SupplierRiskComponent;
  let fixture: ComponentFixture<SupplierRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
