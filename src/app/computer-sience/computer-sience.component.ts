import { Component, OnInit } from '@angular/core';
import { ComputerSienceService } from './computer-sience.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-computer-sience',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [HttpClient],
  templateUrl: './computer-sience.component.html',
  styleUrl: './computer-sience.component.css'
})
export class ComputerSienceComponent implements OnInit {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: any = null;
  selectedAnswer: string = '';
  // correct answer?

  constructor(private questionService: ComputerSienceService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionService.getQuestionsByCategory().subscribe({
      next: (data) => {
        console.log('Rajapinta palautti dataa:', data);  // Näyttää kaiken palautetun datan
        if (data && data.results) {
          console.log('Kysymykset:', data.results);  // Näyttää vain 'results'-kentän
          if (data.results.length > 0) {
            this.questions = data.results;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            console.log('Kysymykset ladattu:', this.questions);
          } else {
            console.error('Ei kysymyksiä saatavilla');
          }
        } else {
          console.error('Datassa ei ole "results"-kenttää');
        }
      },
      error: (error) => {
        console.error('API-pyyntö epäonnistui:', error);
      }
    });
  }

  //Gets all answers from the API
  getAllAnswers(): string[] {
    if (this.currentQuestion) {
      return [this.currentQuestion.correct_answer, ...this.currentQuestion.incorrect_answers];
    }
    return [];  // Palauttaa tyhjän taulukon, jos currentQuestion on null
  }

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = '';
    }
    else {
      // Something to do with the fact that the quiz has ended.
    }
  }

}
