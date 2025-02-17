import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

interface PlayerScore {
  score: number;
  date: Date;// Saving scores whit date
}

// install following:
//npm install canvas-confetti
// Alla olevaa ei ehkä tarvitse?
//npm i --save-dev @types/canvas-confetti

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public scores: PlayerScore[] = []; // List of previous 5 rounds
  public score: number = 0;   // current score
  private scoresKey = 'topScores'


  constructor() {
    this.loadScores();
  }


  endRound(): void {

    if (this.score > 0) {
      this.scores.push({ score: this.score, date: new Date() });


      if (this.scores.length > 5) {
        this.scores.shift();//shift() deletes the oldest value
      }
    }
    console.log('top 5: ', this.scores)
    this.saveScores(); //Saves scores to LocalStorage

    this.triggerConfetti();
  }

  private saveScores(): void {
    localStorage.setItem(this.scoresKey, JSON.stringify(this.scores));
  }

  private loadScores(): void {
    const savedScores = localStorage.getItem(this.scoresKey);
    if (savedScores) {
      this.scores = JSON.parse(savedScores);
    }
  }

  // Adds points and triggers the confetti
  addPoints(points: number): number {
    this.score += points;
    this.triggerConfetti();
    return this.score;
  }

  getTopScores(): PlayerScore[] {
    console.log('Returning top scores:', this.scores);
    return this.scores;
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
