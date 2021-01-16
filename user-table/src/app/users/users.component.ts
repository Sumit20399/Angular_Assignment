import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      name: 'Anup',
      username: 'anupvasudeva',
      email: 'anup@nagarro.com'
     
    },
    {
      name: 'Aryan',
      username: 'aryankumar',
      email: 'aryan@nagarro.com'
     
    },
    {
      name: 'Gourav',
      username: 'gouravgoyal',
      email: 'gourav@nagarro.com'
     
    },
    {
      name: 'Sahil',
      username: 'sahilgarg',
      email: 'sahil@nagarro.com'
    
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
