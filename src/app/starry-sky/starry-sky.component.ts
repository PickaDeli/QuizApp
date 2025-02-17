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

  ngOnInit() {
    this.generateStars(300); // Generate 300 stars in the sky
  }

  generateStars(num: number) {
    for (let i = 0; i < num; i++) {
      const top = Math.random() * 100 + '%';  // Random location on the y- axis
      const left = Math.random() * 100 + '%'; // Random location on the x- axis
      const size = (Math.random() * 2 + 1) + 'px';
      const duration = (Math.random() * 2 + 1.5) + 's'; // Random duration for the animation
      const delay = (Math.random() * 3) + 's'; // Random delay for the animation
      this.stars.push({ top, left, size, duration, delay });
    }
  }
}
