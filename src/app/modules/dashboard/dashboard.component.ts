import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  position: number;
  Purchased_on: string;
  Material: string;
  Plant: string;
  Postage_date: string;
  Quantity: number;
  Stock_category: string;
  Rate: number;
  Currency: string;
  Value: number;
  Vendor: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position:1, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:2, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:3, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:4, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:5, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:6, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:7, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:8, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:9, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:10, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:11, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:12, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},
  { position:13, Purchased_on: '12 Dec 2015' ,Material: 'T-shirt',Plant: 'AC3012',Postage_date: '13 Dec 2015',Quantity: 3,Stock_category: 'AQC1',Rate: 1312,Currency: 'AUD',Value: 4550,Vendor: 123408},


];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];


  constructor(private dashboardService: DashboardService) { }
  displayedColumns: string[] = [ 'position','Purchased_on','Material','Plant','Postage_date','Quantity','Stock_category','Rate','Currency','Value', 'Vendor'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
  }
  }

