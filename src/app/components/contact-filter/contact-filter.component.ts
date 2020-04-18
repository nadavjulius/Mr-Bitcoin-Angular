import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  filterBy = {term: ''}
  @Output() onFilter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onInput() {
    this.onFilter.emit(this.filterBy)
  }
} 