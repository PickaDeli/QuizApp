import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { ScoreService } from '../services/score.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geography',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [HttpClient],
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.css'
})
export class GeographyComponent implements OnInit {

  constructor(
    public questionService: QuestionService,
    public scoreService: ScoreService) { }

  apiUrl = 'https://opentdb.com/api.php?amount=15&category=22&difficulty=easy'
  questions: any[] = [];
  currentQuestion: any = null;
  isAnswerCorrect: boolean | null = null;
  selectedAnswer: string = '';

  // Loads questions
  ngOnInit(): void {
    this.questionService.loadQuestions(this.apiUrl).subscribe({
      next: (questions) => {
        console.log('Questions loaded in component:', questions);
      },
      error: (err) => {
        console.error('Error loading questions in component:', err);
      }
    });
  }

  //  Gets all answers
  getAllAnswers(): string[] {
    return this.questionService.getAllAnswers();
  }

  // Gets the selected answer and checks if it is correct or not
  selectAnswer(answer: string): void {
    this.questionService.selectAnswer(answer);
    if (this.questionService.isAnswerCorrect === true) {
      this.scoreService.addPoints(1000);
      console.log('You got +1000 points! Your total score is: ' + this.scoreService.score)
    }
  }

  // for tracking the buttons so that they wont switch places after selecting the answer
  trackByAnswer(index: number, answer: string): string {
    return answer;
  }


  // Loads the next question
  nextQuestion(): void {
    this.questionService.nextQuestion();
  }

}
