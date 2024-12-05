import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';

  constructor() { }
  setUserName(username: string): void {
    this.username = username;
    console.log('käyttäjänimi=', this.username)
  }

  getUserName() {
    return this.username;
  }
}

