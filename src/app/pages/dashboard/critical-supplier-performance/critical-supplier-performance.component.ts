import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-critical-supplier-performance',
  templateUrl: './critical-supplier-performance.component.html',
  styleUrls: ['./critical-supplier-performance.component.scss']
})
export class CriticalSupplierPerformanceComponent implements AfterViewInit {
  options: any = {};
  themeSubscription: any;

  constructor() { }

  ngAfterViewInit() {
    this.options = {
      color: ['#43DE97', '#EDA654', '#3996EA'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}',
      },
      xAxis: [
        {
          type: 'category',
          data: ['JAN', 'FEV', 'MAR', 'ABR'],
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: '#7C828A',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#7C828A',
            },
          },
        },
      ],
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'line',
          data: [15, 3, 9, 8, 11],
        },
        {
          type: 'line',
          data: [10, 12, 15, 8, 16],
        },
        {
          type: 'line',
          data: [10, 11, 8, 5, 1],
        },
      ],
    };
  }

}
