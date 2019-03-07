import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User [];
  constructor(private userServices: UserService)
  {
    this.friends = this.userServices.getFriends(); 
  }

  ngOnInit() {
  }

}