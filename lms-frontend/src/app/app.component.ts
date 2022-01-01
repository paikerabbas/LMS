import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lms-frontend';

  isLoggedIn!: boolean;

  loggedInUser: any;

  constructor(private _router: Router, private _authService: AuthService) {
    this._authService.currentUser.subscribe((data) => {
      if (data.name !== undefined) {
        this.isLoggedIn = true;
        this.loggedInUser = 'Welcome ' + this.capitalize(data.name);
      }
      console.log(this.loggedInUser);
    });
  }

  ngOnInit(): void {
    // console.log(this._router.url); //  /routename
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  onLogout() {
    console.log('logout clicked..');
    this.isLoggedIn = false;
    this._authService.setUser(new User());
    this._router.navigate(['/login']);
  }
}
