import { Component, OnInit } from '@angular/core';
import { ComputerSienceService } from './computer-sience.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-computer-sience',
  standalone: true,
  imports: [CommonModule],
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
    this.questionService.GetQuestionsByCategory().subscribe((data) => {
      this.questions = data;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    });
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
