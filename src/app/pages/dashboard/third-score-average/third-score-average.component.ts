import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-third-score-average',
  templateUrl: './third-score-average.component.html',
  styleUrls: ['./third-score-average.component.scss']
})
export class ThirdScoreAverageComponent implements AfterViewInit {
  options: any = {};
  themeSubscription: any;

  constructor() { }

  ngAfterViewInit() {
    this.options = {
      color: ['#ED8322'],
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      xAxis: [
        {
          type: 'category',
          data: [
            'JAN',
            'FEV',
            'MAR',
            'ABR',
            'JUN',
            'JUL',
          ],
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: [9.0, 12.4, 13.7, 10.7, 12.7, 13.8, 15.0, 12],
        },
      ],
    };
  }

}
