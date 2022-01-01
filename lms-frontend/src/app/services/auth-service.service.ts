import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
    console.log('currentUsercurrentUser');
    console.log(this.currentUser);
    this.currentUser.subscribe((data) => {
      console.log('current user ----------> ', data);
    });
    this.currentUserSubject.subscribe((data) => {
      console.log('observable run........');
      console.log(data);
    });
  }

  public login(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8585/login', user);
  }

  public setUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  public get currentUserValue(): Subject<User> {
    return this.currentUserSubject;
  }
}
