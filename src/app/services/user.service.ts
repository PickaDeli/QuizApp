import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';

  constructor() { }


  setUserName(username: string): void {
    console.log('käyttäjänimi=', this.username)
    this.username = username;

  }

  getUserName(): string {
    return this.username;
  }

  getUserName() {
    return this.username;
  }
}

