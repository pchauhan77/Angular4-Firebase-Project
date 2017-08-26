import { Component, OnInit ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormBuilder,FormGroup, Validators }   from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 form: FormGroup;
 email:any;
 password:any;
 notlogin:boolean=false;
 constructor(public router: Router, public _FB: FormBuilder,public db: AngularFireDatabase,public afAuth: AngularFireAuth) { 
 	
 }

  ngOnInit() {
  	this.form = this._FB.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
    //console.log('login page');
    
   let mydatabase= this.db.object('/').subscribe(data=>
  {
    console.log(">>>>>",data)
  })

  }

doLogin(pradeep)
{
console.log(pradeep);
this.notlogin=false;
console.log("ehggfggfl",pradeep.email)

this.afAuth.auth.signInWithEmailAndPassword(pradeep.email,pradeep.password).then((loginData)=>{
console.log("login sucess",loginData);
//this.router.navigate(['/home']);
}).catch(e=>{
  console.log(e);
 this.notlogin=true;
})
// You Auth success code is here



}

}
