import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-final-page',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive
  ],
  templateUrl: './final-page.component.html',
  styleUrl: './final-page.component.css'
})
export class FinalPageComponent {

  totalscore: number = 0;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    // Hae kokonaispisteet pelin päätyttyä
    this.totalscore = this.scoreService.getScore();
    console.log('Your score is:', this.totalscore)
  }


}

