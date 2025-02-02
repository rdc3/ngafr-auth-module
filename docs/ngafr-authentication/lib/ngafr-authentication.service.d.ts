import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '@firebase/auth-types';
import * as ɵngcc0 from '@angular/core';
export declare class NgafrAuthenticationService {
    private afAuth;
    private _loggedIn;
    private _user;
    loggedIn: BehaviorSubject<boolean>;
    user: BehaviorSubject<User>;
    hideLogOutButton$: BehaviorSubject<boolean>;
    constructor(afAuth: AngularFireAuth);
    isUserLoggedIn(): Observable<void | User>;
    logout(): void;
    hideLogOutButton(hide: boolean): void;
    loginSuccessCallback(data: FirebaseUISignInSuccessWithAuthResult): void;
    loginErrorCallback(data: FirebaseUISignInFailure): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgafrAuthenticationService, never>;
}

//# sourceMappingURL=ngafr-authentication.service.d.ts.map