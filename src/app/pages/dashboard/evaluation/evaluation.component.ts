import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements AfterViewInit {
  options: any = {};
  themeSubscription: any;

  constructor() { }

  ngAfterViewInit() {
    this.options = {
      // backgroundColor: echarts.bg,
      color: ['#3996EA', '#8BEBF8', '#EA4949'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'bottom',
        data: ['Completas', 'Em andamento', 'Atrasadas'],
        textStyle: {
          color: '#7C828A',
        },
      },
      series: [
        {
          name: 'Countries',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'Completas' },
            { value: 310, name: 'Em andamento' },
            { value: 234, name: 'Atrasadas' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: '#7C828A',
            },
          },
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
        },
      ],
    };
  }

}
