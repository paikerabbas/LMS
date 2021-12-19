import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // private accountService: AccountService, // private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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

    if (
      this.f.username.value === 'user' &&
      this.f.password.value === 'password'
    ) {
      console.log('login successful');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.userLoginFailed = true;
    }

    // this.loading = true;

    // this.accountService
    //   .login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe({
    //     next: () => {
    //       // get return url from query parameters or default to home page
    //       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //       this.router.navigateByUrl(returnUrl);
    //     },
    //     error: (error) => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     },
    //   });
  }
}
