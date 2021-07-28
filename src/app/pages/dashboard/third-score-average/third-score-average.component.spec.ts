import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdScoreAverageComponent } from './third-score-average.component';

describe('ThirdScoreAverageComponent', () => {
  let component: ThirdScoreAverageComponent;
  let fixture: ComponentFixture<ThirdScoreAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdScoreAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdScoreAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
