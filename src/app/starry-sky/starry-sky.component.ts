import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starry-sky',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starry-sky.component.html',
  styleUrl: './starry-sky.component.css'
})
export class StarrySkyComponent implements OnInit {
  stars: Array<{ top: string, left: string }> = [];

  ngOnInit() {
    this.generateStars(300); // Generoidaan taivaalle 300 tähteä
  }

  generateStars(num: number) {
    for (let i = 0; i < num; i++) {
      const top = Math.random() * 100 + '%';  // Satunnainen sijainti y-akselilla
      const left = Math.random() * 100 + '%'; // Satunnainen sijainti x-akselilla
      this.stars.push({ top, left });
    }
  }
}
