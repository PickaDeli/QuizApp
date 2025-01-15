import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.enableDarkTheme();//Tämä pakottaa tumman teeman käyttöön
  }
  private enableDarkTheme(): void {
    document.body.classList.add('dark-theme');// Asetetaan body-elementille dark theme -luokka
    console.log('Dark theme enabled');
  }
}
