import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalSupplierPerformanceComponent } from './critical-supplier-performance.component';

describe('CriticalSupplierPerformanceComponent', () => {
  let component: CriticalSupplierPerformanceComponent;
  let fixture: ComponentFixture<CriticalSupplierPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalSupplierPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalSupplierPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
