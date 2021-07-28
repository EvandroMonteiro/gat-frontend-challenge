import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierProvidersComponent } from './supplier-providers.component';

describe('SupplierProvidersComponent', () => {
  let component: SupplierProvidersComponent;
  let fixture: ComponentFixture<SupplierProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
