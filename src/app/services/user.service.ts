import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private friends: User [];
  constructor() {
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
    let user6: User = {
      nick: 'Chucho el salvador',
      email: 'chava@correo.com',
      friend: true,
      uid: 6
    };
    this.friends = [user1, user2, user3, user4, user5];
   }

   getFriends(){
     return this.friends;
   }
}
