import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourScoreComponent } from './your-score.component';

describe('YourScoreComponent', () => {
  let component: YourScoreComponent;
  let fixture: ComponentFixture<YourScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
