import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartData;
  @Output() onRangeChange = new EventEmitter<any>();

  chart = {
    type: 'LineChart',
    options:  {
      colors: ['blue'],
      width: '300'
    } 
}

  rangeChange(months, name) {
    const rangeInfo = {
      months,
      name
    }
    this.onRangeChange.emit(rangeInfo)
  }

  constructor() { }

  ngOnInit(): void {
  }
}

