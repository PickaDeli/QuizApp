import { Component, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


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

  constructor(private scoreService: ScoreService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.totalscore = this.scoreService.getScore();// Haetaan kokonaispisteet pelin päätyttyä
    console.log('Your score is:', this.totalscore)

    this.topScores = this.scoreService.getTopScores();
    console.log('Top scores on init:', this.topScores);


  }
  endRound(): void {
    console.log('endRound method is called');
    this.scoreService.endRound(); // Lisää kierroksen kokonaispisteet top 5:een
    this.topScores = this.scoreService.getTopScores(); // Päivitä top 5
    console.log('Updated top 5:', this.topScores);

    //this.cdRef.detectChanges(); // Pakotetaan näkymän päivitys
  }



}

