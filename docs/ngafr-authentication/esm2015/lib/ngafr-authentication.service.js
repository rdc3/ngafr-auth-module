/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this._user = null;
        this.loggedIn = new BehaviorSubject(this._loggedIn);
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
        this._loggedIn = true;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    loginErrorCallback(data) {
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
/** @nocollapse */ NgafrAuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgafrAuthenticationService_Factory() { return new NgafrAuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: NgafrAuthenticationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgafrAuthenticationService.prototype._loggedIn;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthenticationService.prototype._user;
    /** @type {?} */
    NgafrAuthenticationService.prototype.loggedIn;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nYWZyLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvbmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU92RCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBT3JDLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBTm5DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsVUFBSyxHQUFTLElBQUksQ0FBQztRQUMzQixhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxTQUFJLEdBQTBCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUIsQ0FBQzs7OztJQUVoRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsU0FBZSxFQUFFLEVBQUU7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDQSxVQUFVOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuRCxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFhO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxJQUEyQztRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQTZCO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxlQUFlOzs7Ozs7OztJQVV0QiwrQ0FBMEI7Ozs7O0lBQzFCLDJDQUEyQjs7SUFDM0IsOENBQXlFOztJQUN6RSwwQ0FBOEQ7O0lBQzlELHVEQUF5RTs7Ozs7SUFFN0QsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LCBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSB9IGZyb20gJ2ZpcmViYXNldWktYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGZpcmViYXNlL2F1dGgtdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5nYWZyQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2dnZWRJbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgPSBudWxsO1xyXG4gIGxvZ2dlZEluOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2xvZ2dlZEluKTtcclxuICB1c2VyOiBCZWhhdmlvclN1YmplY3Q8VXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX3VzZXIpO1xyXG4gIGhpZGVMb2dPdXRCdXR0b24kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZkF1dGg6IEFuZ3VsYXJGaXJlQXV0aCkgeyB9XHJcblxyXG4gIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8dm9pZCB8IFVzZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGhTdGF0ZS5waXBlKG1hcCgoZkJhc2VVc2VyOiBVc2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXI6ICcsIChmQmFzZVVzZXIgJiYgZkJhc2VVc2VyLmVtYWlsKSA/IGZCYXNlVXNlci5kaXNwbGF5TmFtZSA6ICdHdWVzdCcpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlZEluID0gKCEhZkJhc2VVc2VyICYmICEhZkJhc2VVc2VyLmVtYWlsKTtcclxuICAgICAgICB0aGlzLl91c2VyID0gZkJhc2VVc2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ2dlZEluLnZhbHVlICE9PSB0aGlzLl9sb2dnZWRJbilcclxuICAgICAgICAgIHRoaXMubG9nZ2VkSW4ubmV4dCh0aGlzLl9sb2dnZWRJbik7XHJcbiAgICAgICAgdGhpcy51c2VyLm5leHQoZkJhc2VVc2VyKTtcclxuICAgICAgICByZXR1cm4gZkJhc2VVc2VyO1xyXG4gICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlKSA9PiBvZihjb25zb2xlLmxvZygnZXhjZXB0aW9uOicsIGUpKVxyXG4gICAgICApKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMubG9nZ2VkSW4ubmV4dChmYWxzZSk7XHJcbiAgICB0aGlzLmFmQXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlTG9nT3V0QnV0dG9uKGhpZGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaGlkZUxvZ091dEJ1dHRvbiQubmV4dChoaWRlKTtcclxuICB9XHJcblxyXG4gIGxvZ2luU3VjY2Vzc0NhbGxiYWNrKGRhdGE6IEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQpIHtcclxuICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvZ2luRXJyb3JDYWxsYmFjayhkYXRhOiBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSkge1xyXG4gICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19