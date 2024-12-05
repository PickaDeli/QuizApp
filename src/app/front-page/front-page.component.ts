import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {

  constructor(private router: Router, private user: UserService) {

  }
  username: string = '';
  ComputerSienceService: any;

  OnSubmit(): any {

    if (this.username) {
      this.user.setUserName(this.username);  // Tallenna käyttäjänimi UserServiceen
      this.router.navigate(['/topics']);  // Siirry aiheen valintanäkymään
      console.log('topics toimii')
    }
  }
}


