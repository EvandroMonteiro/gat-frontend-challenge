import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-supplier-providers',
  templateUrl: './supplier-providers.component.html',
  styleUrls: ['./supplier-providers.component.scss']
})
export class SupplierProvidersComponent implements AfterViewInit {
  options: any = {};
  themeSubscription: any;

  data1 = [];
  data2 = [];
  data3 = [];
  data4 = [];

  xAxisData = [];

  emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };

  constructor() { }

  ngAfterViewInit() {
    for (var i = 0; i < 5; i++) {
      this.data1.push((Math.random() * 5).toFixed(2));
      this.data2.push(-(Math.random() * 5).toFixed(2));
      this.data3.push((Math.random() + 3).toFixed(2));
      this.data4.push(-Math.random().toFixed(2));
    }

    this.options = {
      color: ['#A83BE2', '#C790E5', '#1371C6', '#73A5D3'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        data: ['NIST', 'CIS', 'LGPD', 'ISO', 'BACEN'],
        name: 'X Axis',
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'one',
          emphasis: this.emphasisStyle,
          data: this.data1
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'one',
          emphasis: this.emphasisStyle,
          data: this.data2
        },
        {
          name: 'bar3',
          type: 'bar',
          stack: 'two',
          emphasis: this.emphasisStyle,
          data: this.data3
        },
        {
          name: 'Score',
          type: 'bar',
          stack: 'two',
          emphasis: this.emphasisStyle,
          data: this.data4
        },
      ],
    };
  }

}
