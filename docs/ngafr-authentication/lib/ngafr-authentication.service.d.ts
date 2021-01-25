import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
export declare class NgafrAuthenticationService {
    private afAuth;
    private _loggedIn;
    loggedIn: BehaviorSubject<boolean>;
    private _user;
    user: BehaviorSubject<firebase.User>;
    hideLogOutButton$: BehaviorSubject<boolean>;
    constructor(afAuth: AngularFireAuth);
    isUserLoggedIn(): Observable<void | firebase.User>;
    logout(): void;
    hideLogOutButton(hide: boolean): void;
    loginSuccessCallback(data: FirebaseUISignInSuccessWithAuthResult): void;
    loginErrorCallback(data: FirebaseUISignInFailure): void;
}
