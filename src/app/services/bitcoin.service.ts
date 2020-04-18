import { Injectable } from '@angular/core';


import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class bitcoinService {

  public async getRate(coins) {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    console.log('rate', res.data);
    return res.data
  }

  public async getMarketPrice(numOfMonths = 6) {
    const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${numOfMonths}months&format=json&cors=true`)
    const data = res.data.values.map(value => [new Date(+(value.x + '000')), value.y])
    const marketPriceData = {
      title: res.data.name,
      description: res.data.description,
      unit: res.data.unit,
      data: data
    }
    return marketPriceData
  }

  public async getConfirmedTransactions(numOfMonths = 6) {
    const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=${numOfMonths}months&format=json&cors=true`)
      const data = res.data.values.map(value => [new Date(+(value.x + '000')), value.y])
      const confirmedTransactionsData = {
        title: res.data.name,
        description: res.data.description,
        unit: res.data.unit,
        data: data
    }
    return confirmedTransactionsData;
  }

  constructor() { }
}
