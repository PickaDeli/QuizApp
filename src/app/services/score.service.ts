import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

// install following:
//npm install canvas-confetti
// Alla olevaa ei ehkä tarvitse?
//npm i --save-dev @types/canvas-confetti

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public score: number = 0;

  constructor() { }

  // Adds points and triggers the confetti
  addPoints(points: number): number {
    this.score += points;
    this.triggerConfetti();
    return this.score;
  }

  getScore(): number {
    return this.score;
  }

  resetScore(): void {
    this.score = 0;
  }


  triggerConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  }
}
