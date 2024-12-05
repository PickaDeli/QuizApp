import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  username: string = '';

  constructor(private router: Router, private user: UserService) {
    this.username = 'Testi';
  }



  OnSubmit(): void {

    if (this.username) {
      console.log('Osuu ja uppoo', this.username);
      this.user.setUserName(this.username);  // Tallenna käyttäjänimi UserServiceen
      this.router.navigate(['/topics']);  // Siirry aiheen valintanäkymään
      console.log('topics toimii')
    }
    else {
      console.log('Error')
    }
  }
}


