import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthGuardGuard implements CanActivate {
  constructor(private authService:AuthServiceService) {
    
  }
  ngOnInit(){

  }
    isUserLoggedIn:boolean= false
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let userData = localStorage.getItem('user');
    if(userData){
      this.isUserLoggedIn = true;
    }
    return this.isUserLoggedIn;

  }
}