import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Actual',
            type: 'spline',
            data: [0, 2, 8, 19, 25, 40, 60],
            color: '#ff5722',
    }, {
      name: 'Projected',
      data: [0,18, 25, 30, 45, 50, 55],
      color: '#2fffe3',
    }];
  }
}
