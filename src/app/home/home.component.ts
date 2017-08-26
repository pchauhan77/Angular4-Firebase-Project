import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myemail:any;
  constructor(public afAuth:AngularFireAuth)
   {
     
    }

  ngOnInit() {
    const user=firebase.auth().currentUser;
console.log("user",user);
this.myemail=user.email;
  }
  signout()
  {
    console.log("Inside Logout");
    this.afAuth.auth.signOut();
  }



}
