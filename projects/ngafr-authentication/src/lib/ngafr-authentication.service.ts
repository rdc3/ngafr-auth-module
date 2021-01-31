import { Injectable } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})

export class NgafrAuthenticationService {
  private _loggedIn = false;
  private _user: User = null;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this._loggedIn);
  user: BehaviorSubject<User> = new BehaviorSubject(this._user);
  hideLogOutButton$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private afAuth: AngularFireAuth) { }

  isUserLoggedIn(): Observable<void | User> {
      return this.afAuth.authState.pipe(map((fBaseUser: User) => {
        console.log('User: ', (fBaseUser && fBaseUser.email) ? fBaseUser.displayName : 'Guest');
        this._loggedIn = (!!fBaseUser && !!fBaseUser.email);
        this._user = fBaseUser;
        if (this.loggedIn.value !== this._loggedIn)
          this.loggedIn.next(this._loggedIn);
        this.user.next(fBaseUser);
        return fBaseUser;
      }),
        catchError((e) => of(console.log('exception:', e))
      ));
  }

  logout() {
    this.loggedIn.next(false);
    this.afAuth.signOut();
  }

  hideLogOutButton(hide: boolean) {
    this.hideLogOutButton$.next(hide);
  }

  loginSuccessCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    this._loggedIn = true;
  }

  loginErrorCallback(data: FirebaseUISignInFailure) {
    this._loggedIn = false;
  }
}
