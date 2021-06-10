import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
