/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class NgafrAuthenticationService {
    /**
     * @param {?} afAuth
     */
    constructor(afAuth) {
        this.afAuth = afAuth;
        this._loggedIn = false;
        this.loggedIn = new BehaviorSubject(this._loggedIn);
        this._user = null;
        this.user = new BehaviorSubject(this._user);
        this.hideLogOutButton$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    isUserLoggedIn() {
        return this.afAuth.authState.pipe(map((/**
         * @param {?} fBaseUser
         * @return {?}
         */
        (fBaseUser) => {
            console.log('User: ', (fBaseUser && fBaseUser.email) ? fBaseUser.displayName : 'Guest');
            this._loggedIn = (!!fBaseUser && !!fBaseUser.email);
            this._user = fBaseUser;
            if (this.loggedIn.value !== this._loggedIn)
                this.loggedIn.next(this._loggedIn);
            this.user.next(fBaseUser);
            return fBaseUser;
        })), catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => of(console.log('exception:', e)))));
    }
    /**
     * @return {?}
     */
    logout() {
        this.loggedIn.next(false);
        this.afAuth.signOut();
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    hideLogOutButton(hide) {
        this.hideLogOutButton$.next(hide);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    loginSuccessCallback(data) {
        // console.log('successCallback', data);
        this._loggedIn = true;
        // this.router.navigate(['page']);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    loginErrorCallback(data) {
        // console.warn('errorCallback', data);
        this._loggedIn = false;
    }
}
NgafrAuthenticationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgafrAuthenticationService.ctorParameters = () => [
    { type: AngularFireAuth }
];
/** @nocollapse */ NgafrAuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgafrAuthenticationService_Factory() { return new NgafrAuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: NgafrAuthenticationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgafrAuthenticationService.prototype._loggedIn;
    /** @type {?} */
    NgafrAuthenticationService.prototype.loggedIn;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthenticationService.prototype._user;
    /** @type {?} */
    NgafrAuthenticationService.prototype.user;
    /** @type {?} */
    NgafrAuthenticationService.prototype.hideLogOutButton$;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthenticationService.prototype.afAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYWZyLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25nYWZyLWF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLdkQsTUFBTSxPQUFPLDBCQUEwQjs7OztJQU1yQyxZQUNVLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBTnpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDcEMsU0FBSSxHQUFtQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsc0JBQWlCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBR3JFLENBQUM7Ozs7SUFDTCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsU0FBd0IsRUFBRSxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0EsVUFBVTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDbkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsSUFBYTtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsSUFBMkM7UUFDOUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtDQUFrQztJQUNwQyxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQTZCO1FBQzlDLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsZUFBZTs7Ozs7Ozs7SUFRdEIsK0NBQTBCOztJQUMxQiw4Q0FBeUU7Ozs7O0lBQ3pFLDJDQUFvQzs7SUFDcEMsMENBQXVFOztJQUN2RSx1REFBeUU7Ozs7O0lBRXZFLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCwgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUgfSBmcm9tICdmaXJlYmFzZXVpLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nYWZyQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2dnZWRJbiA9IGZhbHNlO1xyXG4gIGxvZ2dlZEluOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2xvZ2dlZEluKTtcclxuICBwcml2YXRlIF91c2VyOiBmaXJlYmFzZS5Vc2VyID0gbnVsbDtcclxuICB1c2VyOiBCZWhhdmlvclN1YmplY3Q8ZmlyZWJhc2UuVXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX3VzZXIpO1xyXG4gIGhpZGVMb2dPdXRCdXR0b24kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWZBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXHJcbiAgKSB7IH1cclxuICBpc1VzZXJMb2dnZWRJbigpOiBPYnNlcnZhYmxlPHZvaWQgfCBmaXJlYmFzZS5Vc2VyPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoU3RhdGUucGlwZShtYXAoKGZCYXNlVXNlcjogZmlyZWJhc2UuVXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyOiAnLCAoZkJhc2VVc2VyICYmIGZCYXNlVXNlci5lbWFpbCkgPyBmQmFzZVVzZXIuZGlzcGxheU5hbWUgOiAnR3Vlc3QnKTtcclxuICAgICAgICB0aGlzLl9sb2dnZWRJbiA9ICghIWZCYXNlVXNlciAmJiAhIWZCYXNlVXNlci5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5fdXNlciA9IGZCYXNlVXNlcjtcclxuICAgICAgICBpZiAodGhpcy5sb2dnZWRJbi52YWx1ZSAhPT0gdGhpcy5fbG9nZ2VkSW4pXHJcbiAgICAgICAgICB0aGlzLmxvZ2dlZEluLm5leHQodGhpcy5fbG9nZ2VkSW4pO1xyXG4gICAgICAgIHRoaXMudXNlci5uZXh0KGZCYXNlVXNlcik7XHJcbiAgICAgICAgcmV0dXJuIGZCYXNlVXNlcjtcclxuICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZSkgPT4gb2YoY29uc29sZS5sb2coJ2V4Y2VwdGlvbjonLCBlKSlcclxuICAgICAgKSk7XHJcbiAgfVxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMubG9nZ2VkSW4ubmV4dChmYWxzZSk7XHJcbiAgICB0aGlzLmFmQXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG4gIGhpZGVMb2dPdXRCdXR0b24oaGlkZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5oaWRlTG9nT3V0QnV0dG9uJC5uZXh0KGhpZGUpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5TdWNjZXNzQ2FsbGJhY2soZGF0YTogRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3NDYWxsYmFjaycsIGRhdGEpO1xyXG4gICAgdGhpcy5fbG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYWdlJ10pO1xyXG4gIH1cclxuXHJcbiAgbG9naW5FcnJvckNhbGxiYWNrKGRhdGE6IEZpcmViYXNlVUlTaWduSW5GYWlsdXJlKSB7XHJcbiAgICAvLyBjb25zb2xlLndhcm4oJ2Vycm9yQ2FsbGJhY2snLCBkYXRhKTtcclxuICAgIHRoaXMuX2xvZ2dlZEluID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMubG9nZ2VkSW47XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==