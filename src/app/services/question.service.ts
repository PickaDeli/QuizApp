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
  answersShuffled: boolean = false; //To track if the answes has been suffled



  constructor(
    private http: HttpClient,
    private router: Router,
    private scoreservice: ScoreService,
  ) { }

  // Function that gets questions from the API and saves them to url-variable
  getQuestionsByCategory(apiUrl: string): Observable<any> {

    return this.http.get<any>(apiUrl);

  }


  // Loads the questions and checks that the data coming from the API is ok.
  loadQuestions(apiUrl: string): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      this.getQuestionsByCategory(apiUrl).subscribe({
        next: (data) => {
          console.log('Data from API:', data);
          if (data && data.results && data.results.length > 0) {
            this.questions = data.results;
            this.currentQuestionIndex = 0;
            this.currentQuestion = this.questions[this.currentQuestionIndex];

            // Debugging output to check question structure
            console.log('Current question:', this.currentQuestion);

            if (this.currentQuestion.correct_answer && Array.isArray(this.currentQuestion.incorrect_answers)) {
              this.shuffleAnswers(this.currentQuestion);
            } else {
              console.error('Invalid question data:', this.currentQuestion);
            }
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

  // Gets all answers and shuffles them
  getAllAnswers(): string[] {
    if (this.currentQuestion && this.currentQuestion.shuffledAnswers) {
      return this.currentQuestion.shuffledAnswers;
    }
    return [];
  }

  // For shuffeling the answers
  shuffleAnswers(question: any): void {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }

    question.shuffledAnswers = allAnswers;
  }


  // Saves the answer and checks if it is correct
  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    console.log('You have made a choise.')

    // Checks if the answer is correct
    if (answer === this.currentQuestion.correct_answer) {
      this.isAnswerCorrect = true;
      console.log('Your answer is correct.')
    }

    else {
      this.isAnswerCorrect = false;
      console.log('Your answer is incorrect.')
    }

    this.answerSelected = true;

    // Moves to next question with delay
    setTimeout(() => {
      this.nextQuestion();
    }, 2000); //Adjust the delay as needed.
  }


  // Loads up the next wuestion and resets selected answer
  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.shuffleAnswers(this.currentQuestion);
      this.selectedAnswer = '';
      this.isAnswerCorrect = false;
      this.answerSelected = false; //To reset the selected answer
    }

    else {
      this.scoreservice.triggerConfetti();
      this.router.navigate(['/finalPage']);
      this.scoreservice.endRound();
    }
  }

}
