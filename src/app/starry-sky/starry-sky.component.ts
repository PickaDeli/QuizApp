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
  stars: Array<{ top: string, left: string, size: string, duration: string, delay: string }> = [];

  // Loads the starts to the sky
  ngOnInit() {
    this.generateStars(300); // Generate 300 stars in the sky
    this.generateStars(300);
  }
  // Random generator that places the stars to the sky and makes them twinkle
  generateStars(num: number) {
    for (let i = 0; i < num; i++) {
      const top = Math.random() * 100 + '%';
      const left = Math.random() * 100 + '%';
      const size = (Math.random() * 2 + 1) + 'px';
      const duration = (Math.random() * 2 + 1.5) + 's';
      const delay = (Math.random() * 3) + 's';
      this.stars.push({ top, left, size, duration, delay });
    }
  }
}
