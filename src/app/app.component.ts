import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(private router:Router,public afAuth: AngularFireAuth) {
 afAuth.authState.subscribe(user=>{
if(user!=null)
  {
    this.router.navigate(['/home']);
  }
  else{
    this.router.navigate(['/login']);
  }
 })

}

}
