import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  users = users;

  constructor(){ }
  ngOnInit(): void {
  }

}

