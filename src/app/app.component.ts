import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarrySkyComponent } from './starry-sky/starry-sky.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StarrySkyComponent,
    DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sugar Hoof';
}
