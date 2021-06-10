import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../users';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})

export class CartDetailsComponent implements OnInit {
  
  user; 
  // : any;
  // users = users;

  constructor(
    private route : ActivatedRoute,
    ) 
  { }

  ngOnInit() {
    const routesParam = this.route.snapshot.paramMap;
    const id = routesParam.get('userId');
    this.user = users.find(user => user.login.uuid === id)
  }
}