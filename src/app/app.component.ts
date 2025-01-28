import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarrySkyComponent } from './starry-sky/starry-sky.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StarrySkyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sugar Hoof';
}
