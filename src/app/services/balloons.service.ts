import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalloonService {
  private balloons: { x: number }[] = [];

  constructor() { }


  // Generoi ilmapallot
  generateBalloons(count: number): { x: number }[] {
    this.balloons = [];
    for (let i = 0; i < count; i++) {
      this.balloons.push({ x: Math.random() * 100 }); // Satunnainen sijainti
    }
    return this.balloons;
  }

  // Palauttaa ilmapallot
  getBalloons(): { x: number }[] {
    return this.balloons;
  }

  // Poista ilmapallo listasta
  popBalloon(index: number): void {
    this.balloons.splice(index, 1);
  }
}
