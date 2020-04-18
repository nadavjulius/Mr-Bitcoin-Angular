import { Component, OnInit } from '@angular/core';
import { bitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(private bitcoinService: bitcoinService) { }

  // DATA
  marketPriceData: any;
  confirmedTransactionsData: any;
  // marketPriceDatesRange: number = 6
  // confirmedTransactionsDatesRange: number = 6

  async getMarketPrice(months = 3) {
    const marketPrice = await this.bitcoinService.getMarketPrice(months);
    this.marketPriceData = marketPrice
    this.marketPriceData.dateRange = months
    this.marketPriceData.name = 'marketPrice'
  }
  
  async getConfirmedTransactions(months = 3) {
    const confirmedTransactions = await this.bitcoinService.getConfirmedTransactions(months);
    this.confirmedTransactionsData = confirmedTransactions
    this.confirmedTransactionsData.dateRange = months
    this.confirmedTransactionsData.name = 'confirmedTransactions'
  }

  onRangeChange(data) {
    switch(data.name) {
      case 'confirmedTransactions':
        this.getConfirmedTransactions(data.months)
        break;
      case 'marketPrice':
        this.getMarketPrice(data.months)
        break;
      default:
        console.log('ERROR: cannot identify chart name in statistics component')
    }

  }

  ngOnInit(): void {
    this.getMarketPrice();
    this.getConfirmedTransactions();
   }
}

