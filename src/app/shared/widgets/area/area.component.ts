import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
   chart: {
        backgroundColor: '#3b3c3e',

    },
    title: {
        text: 'Daily Sales',
        style: {
         color: 'white',
         font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }

    },
     xAxis:{
             accessibility: {
            rangeDescription: 'Range: 1 to 10'
        }
            },
    yAxis: {
        title: {
          text: 'Time'
        },
    tickAmount: 8,
        },



    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    series: this.data,
    exporting: {
        enabled: true,
    },


    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'top',
                     itemStyle:{
                 color: 'white'
              }
                }
            }
        }]
    }

};
HC_exporting(Highcharts);
setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
}
}

