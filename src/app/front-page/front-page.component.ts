import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  ComputerSienceService: any;

  OnSubmit(form: any): void {
    const username = form.value.username;
    if (username) {
      this.ComputerSienceService.setUsername(username);  // Tallenna käyttäjänimi ComputerSienceServiceen
      //this.router.navigate(['/topics']);  // Siirry aiheen valintanäkymään
    }
  }
}


