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


  constructor() { }

  endRound(): void {

    if (this.score > 0) {
      this.scores.push({ score: this.score, date: new Date() });
      this.scores.sort((a, b) => b.date.getTime() - a.date.getTime());//laskeva järjestys aikaleiman mukaan

      if (this.scores.length > 5) {//top 5
        this.scores.pop();
      }

      this.triggerConfetti(); // Käynnistä konfetti
      this.resetScore();  // Nollaa pistemäärä seuraavaa kierrosta varten
    }
  }

  // Adds points and triggers the confetti
  addPoints(points: number): number {
    this.score += points;
    this.triggerConfetti();
    return this.score;
  }

  getTopScores(): PlayerScore[] {
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
