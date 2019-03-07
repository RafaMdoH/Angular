import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User [];
  friend: User;
  constructor(private activatedRoute: ActivatedRoute) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    let user1: User = {
      nick: 'Rafa',
      subnick: 'Hola',
      age: 26,
      email: 'rafa@correo.com',
      friend: true,
      uid: 1
    };

    let user2: User = {
      nick: 'Isra',
      email: 'isra@correo.com',
      friend: false,
      uid: 2
    };
    let user3: User = {
      nick: 'Beto',
      email: 'beto@correo.com',
      friend: true,
      uid: 3
    };
    let user4: User = {
      nick: 'Noe',
      email: 'noe@correo.com',
      friend: true,
      uid: 4
    };
    let user5: User = {
      nick: 'Chucho el salvador',
      email: 'chava@correo.com',
      friend: false,
      uid: 5
    };
    this.friends = [user1, user2, user3, user4, user5];
    this.friend = this.friends.find( (record) => {
      return record.uid == this.friendId;
    } );
    console.log(this.friend);
    
    
   }

  ngOnInit() {
  }

}
