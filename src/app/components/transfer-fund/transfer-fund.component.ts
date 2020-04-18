import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input() contactName
  @Input() maxCoins
  @Output() emitAmount = new EventEmitter<number>()
  amount: number

  constructor() { }

  ngOnInit(): void {
  }

  doTransfer() {
    if (this.amount && this.amount <= this.maxCoins) {
      this.emitAmount.emit(this.amount)
      this.amount = null
    } else if (this.amount > this.maxCoins) {
      console.log(`your balance of ${this.maxCoins} is insufficient`)
    } else {
      console.log(`enter amount please`)
    }
  }
}