import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp, userLogin } from '../data-type';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient, private router:Router) { }
  isUserLoggedIn:boolean = false;
  userSignup(data:signUp){
   return this.http.post("http://127.0.0.1:3000/users", data)
  }
  checkUserLoggedIn(data:userLogin){
   this.http.get<userLogin[]>(`http://127.0.0.1:3000/users?username=${data.username}&password=${data.password}`, {observe:'response'}).subscribe((result)=>{
    if(result && result.body && result.body.length){
      localStorage.setItem('user', JSON.stringify(result.body[0]))
      this.isUserLoggedIn = true;
      this.router.navigate(['/'])
    }
    else{
      this.isUserLoggedIn= false;

    }
   })
  }

}
