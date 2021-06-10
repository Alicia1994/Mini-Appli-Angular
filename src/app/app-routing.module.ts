import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


const routes: Routes = [
  { path: '', component: UserListComponent }, //path = localhost:4200
      { path: 'users/:userId', component: CartDetailsComponent }, // ramène vers details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
