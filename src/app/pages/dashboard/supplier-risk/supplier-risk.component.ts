import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle, ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  colors: string[];
  xaxis: Object;
  grid: Object;
};

@Component({
  selector: 'app-supplier-risk',
  templateUrl: './supplier-risk.component.html',
  styleUrls: ['./supplier-risk.component.scss']
})
export class SupplierRiskComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "W1",
          data: this.generateData(5, {
            min: 0,
            max: 50
          })
        },
        {
          name: "W2",
          data: this.generateData(5, {
            min: 50,
            max: 90
          })
        },
        {
          name: "W3",
          data: this.generateData(5, {
            min: 0,
            max: 90
          })
        },
        {
          name: "W4",
          data: this.generateData(5, {
            min: 60,
            max: 90
          })
        },
        {
          name: "W5",
          data: this.generateData(5, {
            min: 90,
            max: 90
          })
        },
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: [
        "#ED8322",
        "#F32735",
        "#5D30A5",
        "#EDB729",
        "#6ACBD4",
      ],
      xaxis: {
        type: "category",
        categories: [
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
        ]
      },
      // title: {
      //   text: "HeatMap Chart (Different color shades for each series)"
      // },
      // grid: {
      //   padding: {
      //     right: 20
      //   }
      // }
    };
  }

  public generateData(count: number, { min, max }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (max - min + 1)) + min;
      series.push(y);
      i++;
    }
    return series;
  }

  ngOnInit(): void {
  }
}
