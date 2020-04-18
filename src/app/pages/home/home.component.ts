import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user.service';
import { bitcoinService } from '../../services/bitcoin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private userService : userService, private bitcoinService : bitcoinService, private router: Router) { }
  
  // DATA
  user : any
  bitcoinRate : number
  title: string = 'Your last 3 Moves'

  ngOnInit(): void {
    this.user = this.loadUserInfo()
    if (this.user) this.loadBitcoinRateAsnyc()
  }

  bitcoinToUSDRate() {
    const rateUSD = 1 / this.bitcoinRate
    return rateUSD.toLocaleString()
  }

  get moves() {
    this.user.moves.sort((a,b) => b.at - a.at)
    return this.user.moves.filter((move, index) => index < 3)
  }
  
  // FUNCTIONS
  loadUserInfo() {
    return this.userService.getUser()
  }

  async loadBitcoinRateAsnyc() {
    this.bitcoinRate = await this.bitcoinService.getRate(1)
  }

  usersCoinsValue() {
    const btcReverse = 1 / this.bitcoinRate
    return (this.user.coins * btcReverse).toLocaleString()
  }

  goToSignUpPage() {
    this.router.navigate([`/signup`])
  }

  doLogout() {
    this.userService.doLogout()
    this.user = this.userService.getUser();
    window.location.reload();
  }

}
