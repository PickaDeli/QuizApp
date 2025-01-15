import { Component, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { BalloonService } from '../services/balloons.service';

interface PlayerScore {
  score: number;
  date: Date;
}

@Component({
  selector: 'app-final-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './final-page.component.html',
  styleUrl: './final-page.component.css'
})
export class FinalPageComponent implements OnInit {

  totalscore: number = 0;
  topScores: PlayerScore[] = [];
  balloons: { x: number }[] = [];

  constructor(private scoreService: ScoreService, private cdRef: ChangeDetectorRef, private balloonService: BalloonService) { }

  ngOnInit(): void {
    this.totalscore = this.scoreService.getScore();// Haetaan kokonaispisteet pelin päätyttyä
    console.log('Your score is:', this.totalscore)

    this.topScores = this.scoreService.getTopScores();
    console.log('Top scores on init:', this.topScores);

    // Generoidaan vähän palloja!
    this.balloons = this.balloonService.generateBalloons(200);
  }
  endRound(): void {
    console.log('endRound method is called');
    this.scoreService.endRound(); // Lisää kierroksen kokonaispisteet top 5:een
    this.topScores = this.scoreService.getTopScores(); // Päivitä top 5
    console.log('Updated top 5:', this.topScores);

    //this.cdRef.detectChanges(); // Pakotetaan näkymän päivitys
  }

  popBalloon(index: number): void {
    // Poistaa ilmapallot listasta ja päivittää näkymän
    this.balloonService.popBalloon(index);
    this.balloons = this.balloonService.getBalloons();
  }

}

