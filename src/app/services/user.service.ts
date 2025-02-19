import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';

  constructor() { }


  setUserName(username: string): void {
    console.log('username=', this.username)
    this.username = username;

  }

  getUserName(): string {
    return this.username;
  }


}

