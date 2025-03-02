import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ // List all components here
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule],
  bootstrap: [AppComponent] // AppComponent starts the app
})
export class AppModule {}
