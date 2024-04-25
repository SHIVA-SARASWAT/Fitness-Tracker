import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean = false
  username: string = '';
  constructor(private userAuthService: AuthServiceService, private router: Router) {

  }
  ngOnInit() {
    // user logged in or not
    this.router.events.subscribe((route: any) => {
      if (localStorage.getItem('user')) {
        const user = localStorage.getItem('user');
        const username = user && JSON.parse(user).username
        this.username = username
        this.userLoggedIn = true;

      }
    })

  }
  onClickLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['user-auth']);
    this.userLoggedIn = false;
    // this.userAuthService.isUserLoggedIn = false
  }
}
