<<<<<<< HEAD
import { Component, Input } from '@angular/core';



=======
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
>>>>>>> e18827dfe2dc0f0ff2854fc2f89c485c6500a88a


@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {
<<<<<<< HEAD
  @Input() username: string = '';
=======
  username: string = '';

  constructor(private UserService: UserService) { }

  ngOnInit(): any {
    this.username = this.UserService.getUserName();
  }

>>>>>>> e18827dfe2dc0f0ff2854fc2f89c485c6500a88a
}
