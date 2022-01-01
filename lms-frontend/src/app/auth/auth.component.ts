import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  userLoginFailed = false;

  loggedInUserName!: string;
  loginUser = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router, // private accountService: AccountService, // private alertService: AlertService
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    console.log(this.form);

    const name = this.f.username.value;
    const password = this.f.password.value;

    const user = new User();
    user.name = name;
    user.password = password;

    this.loggedInUserName = name;

    this.loading = true;

    // putting delay to enjoy the loading spinner
    (async () => {
      // Do something before delay
      console.log('before delay');

      await new Promise((f) => setTimeout(f, 1000));

      this._authService.login(user).subscribe(
        (data) => {
          console.log(data);
          console.log('login successful');
          this._authService.setUser(user);
          this._router.navigateByUrl('/dashboard');
        },
        (error) => {
          this.userLoginFailed = true;
          this.loading = false;
        }
      );

      // Do something after
      console.log('after delay');
    })();

    // this.loading = true;

    // this.accountService
    //   .login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe({
    //     next: () => {
    //       // get return url from query parameters or default to home page
    //       const returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    //       this._router.navigateByUrl(returnUrl);
    //     },
    //     error: (error) => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     },
    //   });
  }
}
