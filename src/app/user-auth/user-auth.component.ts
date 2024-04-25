import { Component } from '@angular/core';
import { signUp, userLogin } from '../data-type';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  constructor(private userAuthService: AuthServiceService, private router: Router) {

  }
  userLoggedIn:boolean = false;
  userNotLoggedIn:string ='';
  signUpUser: boolean = false
  onClickSignUp() {
    this.signUpUser = true;
  }
  onClickLogin() {
    this.signUpUser = false;
  }
  signup(data: signUp) {
    this.userAuthService.userSignup(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['/exercise-module'])
      }
     })
  }
  login(data: userLogin) {
    this.userAuthService.checkUserLoggedIn(data);
  }



}
