import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule }     from './my-routing/my-routing-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
 apiKey: "AIzaSyBS1i2-oF3ZeeMXxs7oLJsIYKF8VlA4wu4",
  authDomain: "web-project-1-661fa.firebaseapp.com",
  databaseURL: "https://web-project-1-661fa.firebaseio.com",
  projectId: "web-project-1-661fa",
  storageBucket: "web-project-1-661fa.appspot.com",
  messagingSenderId: "180804958211"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
