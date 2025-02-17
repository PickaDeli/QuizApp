import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  username: string = '';

  constructor(private router: Router, private user: UserService) {
    this.username = '';
  }


  OnSubmit(form: NgForm): void {

    if (form.valid) {
      console.log('Osuu ja uppoo', this.username);
      this.user.setUserName(this.username);  // Save the username to UserService
      this.router.navigate(['/topics']);  //  Go to select a topic.
      console.log('topics toimii')
    }
    else {
      console.log('Error')
    }
  }
}


