import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
    chart: {
        type: 'bar',
        backgroundColor: '#3b3c3e'
    },
    title: {
        text: 'Monthly Sales(In Millions)',
         style: {
         color: 'white',
         font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
    },
    xAxis: {
        categories: ['200', '100', '50', '30', '20']
    },
    yAxis: {
        min: 0,

    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
         itemStyle:{
                 color: 'white'
              }
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Profit',
        data: [2, 2, 2, 2, 1],
        color: '#ebe834',
    }, {
        name: 'Sales',
        data: [6, 4, 3, 2, 3],
        color: '#22ff33',
    }]
};
}
}

