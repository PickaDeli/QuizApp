import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

interface PlayerScore {
  score: number;
  date: Date;// Pisteet tallennetaan aikaleimalla, jotta voidaan lajitella pelisessioiden mukaan
}

// install following:
//npm install canvas-confetti
// Alla olevaa ei ehkä tarvitse?
//npm i --save-dev @types/canvas-confetti

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public scores: PlayerScore[] = []; // List of top 5
  public score: number = 0;   // Player's current score
  private scoresKey = 'topScores'


  constructor() {
    this.loadScores();
  }


  endRound(): void {

    if (this.score > 0) {
      this.scores.push({ score: this.score, date: new Date() });

      this.scores.sort((a, b) => b.date.getTime() - a.date.getTime()); // Järjestetään aikaleimalla

      if (this.scores.length > 5) {
        this.scores.pop(); //näytetään 5
      }
    }
    console.log('top 5: ', this.scores)
    this.saveScores(); // Tallenna uudet pisteet LocalStorageen

    this.triggerConfetti(); // Käynnistetään konfetti
    // this.resetScore(); // Nollataan pistemäärä
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
