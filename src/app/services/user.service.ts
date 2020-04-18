import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class userService {
  private _user: {};
  private _key: string = 'user'
  private _isLogin: boolean;

  constructor() {
    this._user = this._loadFromStorage();
    if (this._user) this._isLogin = true
    else this._isLogin = false
  }

  public isUserLogin(): Promise<boolean> {
    console.log(this._isLogin)
    return new Promise((resolve, reject) => {
        resolve(this._isLogin);
      }
    );
  }

  public getUser(): {} {
    return JSON.parse(JSON.stringify(this._user));
  }

  public getMaxCoins() {
    return this._user['coins']
  }

  public signUp(name) {
    this._user = { name, coins: 100, moves: [] }
    this._saveToStorage(this._user)
    this._isLogin = true
  }

  public addMove(contact, amount) {
    const move = {
      toId: contact._id,
      to: contact.name, 
      at: Date.now(), 
      amount
    }
    this._user['moves'].push(move);
    this._user['coins']-= amount;
    this._saveToStorage(this._user);
  }

  getMovesByContact(id) {
    return this._user['moves'].filter(move => move.toId === id)
  }

  public doLogout() {
    this._user = null
    this._saveToStorage(this._user)
    this._isLogin = false
  }

  private _saveToStorage(value) {
    var item = JSON.stringify(value)
    localStorage.setItem(this._key, item)
  }

  private _loadFromStorage() {
    var item = localStorage.getItem(this._key)
    var value = JSON.parse(item)
    if (value) return value
    else return null
  }
}
