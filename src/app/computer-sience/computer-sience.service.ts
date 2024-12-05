import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerSienceService {
  // This is the url for this category API
  // private apiUrl = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=easy'

  // // constructor for HTTPClient, that is only availeble in this category
  // constructor(private http: HttpClient) { }

  // // function that gets questions from the API and saves them to url-variable?
  // getQuestionsByCategory(): Observable<any> {
  //   // Name of the function, Observale = asyncronic <any[]> = type of data array expected
  //   // returns http get from api.Url
  //   return this.http.get<any>(this.apiUrl);

  // }

  //   private username: string | null = null;
  //   // Asetetaan käyttäjänimi
  //   setUsername(username: string): void {
  //     this.username = username;
  //   }
  //   // Haetaan käyttäjänimi
  //   getUsername(): string | null {
  //     return this.username;
  //   }
}
