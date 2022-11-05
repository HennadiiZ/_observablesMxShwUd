import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// 172. Analyzing Angular Observables
  // npm install --save rxjs@6
  // npm install --save rxjs-compat

// 173. Getting Closer to the Core of Observables
// 174. Building a Custom Observable

// 175. Errors & Completion

// try 
// 