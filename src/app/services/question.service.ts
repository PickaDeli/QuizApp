import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: any = null;
  selectedAnswer: string = '';
  isAnswerCorrect: boolean = false;

  // constructor for HTTPClient, that is only availeble in this category
  constructor(private http: HttpClient) { }

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
            this.currentQuestionIndex = 0; // Resetoi kysymysindeksin
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            console.log('Questions loaded:', this.questions);

            // Lähetä kysymykset takaisin observerille
            observer.next(this.questions);
            observer.complete();
          } else {
            console.error('No questions available');
            observer.error('No questions available');
          }
        },
        error: (error) => {
          console.error('API call failed:', error);
          observer.error(error); // Lähetä virhe observerille
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

    // Checks if the answer is correct
    if (this.selectedAnswer === this.currentQuestion.correct_answer) {
      // Add SCORE logic here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.isAnswerCorrect = true;
    }

    else {
      this.isAnswerCorrect = false;
    }
  }


  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = '';
      this.isAnswerCorrect = false;
    }

    else {
      //Something to do with the fact that the wuiz has ended
    }
  }
}
