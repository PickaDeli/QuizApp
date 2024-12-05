import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: any = null;
  selectedAnswer: string = '';
  isAnswerCorrect: boolean = false;
  answerSelected: boolean = false; //To track if an answer has been selected

  // constructor for HTTPClient, that is only availeble in this category
  constructor(private http: HttpClient, private router: Router, private scoreservice: ScoreService) { }

  // function that gets questions from the API and saves them to url-variable?
  getQuestionsByCategory(apiUrl: string): Observable<any> {
    // Name of the function, Observale = asyncronic <any[]> = type of data array expected
    // returns http get from api.Url
    return this.http.get<any>(apiUrl);

  }

  loadQuestions(apiUrl: string): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      this.getQuestionsByCategory(apiUrl).subscribe({
        next: (data) => {
          console.log('Data from API:', data);
          if (data && data.results && data.results.length > 0) {
            this.questions = data.results;
            this.currentQuestionIndex = 0;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            console.log('Questions loaded:', this.questions);


            observer.next(this.questions);
            observer.complete();
          } else {
            console.error('No questions available');
            observer.error('No questions available');
          }
        },
        error: (error) => {
          console.error('API call failed:', error);
          observer.error(error);
        }
      });
    });
  }

  getAllAnswers(): string[] {
    if (this.currentQuestion) {
      return [this.currentQuestion.correct_answer, ...this.currentQuestion.incorrect_answers];
    }
    return []; //returns empty if current question is null.
  }

  // Saves the answer and checks if it is correct
  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    console.log('You have made a choise.')

    // Checks if the answer is correct
    if (this.selectedAnswer === this.currentQuestion.correct_answer) {
      this.isAnswerCorrect = true;
      console.log('Your answer is correct.')
    }

    else {
      this.isAnswerCorrect = false;
      console.log('Your answer is incorrect.')
    }
    // Moves to next question
    setTimeout(() => {
      this.nextQuestion();
    }, 1500); //Adjust the delay as needed.
  }


  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = '';
      this.isAnswerCorrect = false;
      this.answerSelected = false; //To reset the selected answer
    }

    else {
      this.scoreservice.triggerConfetti();
      this.router.navigate(['/finalPage']);
    }
  }
}
