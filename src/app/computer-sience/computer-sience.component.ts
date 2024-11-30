import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-computer-sience',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [HttpClient],
  templateUrl: './computer-sience.component.html',
  styleUrl: './computer-sience.component.css'
})
export class ComputerSienceComponent implements OnInit {

  constructor(public questionService: QuestionService) { }

  apiUrl = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=easy'
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
    this.questionService.selectAnswer(answer);  // Kutsutaan palvelun selectAnswer-metodia
  }



  // Loads the next question
  nextQuestion(): void {
    this.questionService.nextQuestion();
  }
}


