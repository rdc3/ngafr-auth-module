import { Injectable } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgafrAuthenticationService {
  private _loggedIn = false;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this._loggedIn);
  private _user: firebase.User = null;
  user: BehaviorSubject<firebase.User> = new BehaviorSubject(this._user);
  hideLogOutButton$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private afAuth: AngularFireAuth,
  ) { }
  isUserLoggedIn(): Observable<void | firebase.User> {
      return this.afAuth.authState.pipe(map((fBaseUser: firebase.User) => {
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
    // console.log('successCallback', data);
    this._loggedIn = true;
    // this.router.navigate(['page']);
  }

  loginErrorCallback(data: FirebaseUISignInFailure) {
    // console.warn('errorCallback', data);
    this._loggedIn = false;
  }
  // isUserLoggedIn(): boolean {
  //   return this.loggedIn;
  // }
}
