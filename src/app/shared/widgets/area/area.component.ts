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

    title: {
        text: 'Daily Sales'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Time'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 0 to 10'
        }
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
                    verticalAlign: 'bottom'
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

