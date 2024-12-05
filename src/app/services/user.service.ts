import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';

  constructor() { }
  setUserName(username: string) {
    this.username
    console.log('käyttäjänimi=', this.username)
  }
}

