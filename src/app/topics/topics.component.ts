import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {
  username: string = '';

  constructor(private UserService: UserService) { }

  ngOnInit(): any {
    this.username = this.UserService.getUserName();
  }

}
