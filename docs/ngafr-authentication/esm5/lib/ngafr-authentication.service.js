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
var NgafrAuthenticationService = /** @class */ (function () {
    function NgafrAuthenticationService(afAuth) {
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
    NgafrAuthenticationService.prototype.isUserLoggedIn = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.afAuth.authState.pipe(map((/**
         * @param {?} fBaseUser
         * @return {?}
         */
        function (fBaseUser) {
            console.log('User: ', (fBaseUser && fBaseUser.email) ? fBaseUser.displayName : 'Guest');
            _this._loggedIn = (!!fBaseUser && !!fBaseUser.email);
            _this._user = fBaseUser;
            if (_this.loggedIn.value !== _this._loggedIn)
                _this.loggedIn.next(_this._loggedIn);
            _this.user.next(fBaseUser);
            return fBaseUser;
        })), catchError((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return of(console.log('exception:', e)); })));
    };
    /**
     * @return {?}
     */
    NgafrAuthenticationService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.loggedIn.next(false);
        this.afAuth.signOut();
    };
    /**
     * @param {?} hide
     * @return {?}
     */
    NgafrAuthenticationService.prototype.hideLogOutButton = /**
     * @param {?} hide
     * @return {?}
     */
    function (hide) {
        this.hideLogOutButton$.next(hide);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgafrAuthenticationService.prototype.loginSuccessCallback = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('successCallback', data);
        this._loggedIn = true;
        // this.router.navigate(['page']);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgafrAuthenticationService.prototype.loginErrorCallback = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.warn('errorCallback', data);
        this._loggedIn = false;
    };
    NgafrAuthenticationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgafrAuthenticationService.ctorParameters = function () { return [
        { type: AngularFireAuth }
    ]; };
    /** @nocollapse */ NgafrAuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgafrAuthenticationService_Factory() { return new NgafrAuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: NgafrAuthenticationService, providedIn: "root" });
    return NgafrAuthenticationService;
}());
export { NgafrAuthenticationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nYWZyLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL25nYWZyLWF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFdkQ7SUFTRSxvQ0FDVSxNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQU56QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQ3BDLFNBQUksR0FBbUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLHNCQUFpQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdyRSxDQUFDOzs7O0lBQ0wsbURBQWM7OztJQUFkO1FBQUEsaUJBWUM7UUFYRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxTQUF3QjtZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hGLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFJLENBQUMsU0FBUztnQkFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNBLFVBQVU7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUNuRCxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBQ0QsMkNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELHFEQUFnQjs7OztJQUFoQixVQUFpQixJQUFhO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCx5REFBb0I7Ozs7SUFBcEIsVUFBcUIsSUFBMkM7UUFDOUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtDQUFrQztJQUNwQyxDQUFDOzs7OztJQUVELHVEQUFrQjs7OztJQUFsQixVQUFtQixJQUE2QjtRQUM5Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsZUFBZTs7O3FDQUZ4QjtDQW9EQyxBQTlDRCxJQThDQztTQTNDWSwwQkFBMEI7Ozs7OztJQUNyQywrQ0FBMEI7O0lBQzFCLDhDQUF5RTs7Ozs7SUFDekUsMkNBQW9DOztJQUNwQywwQ0FBdUU7O0lBQ3ZFLHVEQUF5RTs7Ozs7SUFFdkUsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LCBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSB9IGZyb20gJ2ZpcmViYXNldWktYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdhZnJBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2xvZ2dlZEluID0gZmFsc2U7XHJcbiAgbG9nZ2VkSW46IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fbG9nZ2VkSW4pO1xyXG4gIHByaXZhdGUgX3VzZXI6IGZpcmViYXNlLlVzZXIgPSBudWxsO1xyXG4gIHVzZXI6IEJlaGF2aW9yU3ViamVjdDxmaXJlYmFzZS5Vc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fdXNlcik7XHJcbiAgaGlkZUxvZ091dEJ1dHRvbiQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhZkF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcclxuICApIHsgfVxyXG4gIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8dm9pZCB8IGZpcmViYXNlLlVzZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGhTdGF0ZS5waXBlKG1hcCgoZkJhc2VVc2VyOiBmaXJlYmFzZS5Vc2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXI6ICcsIChmQmFzZVVzZXIgJiYgZkJhc2VVc2VyLmVtYWlsKSA/IGZCYXNlVXNlci5kaXNwbGF5TmFtZSA6ICdHdWVzdCcpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlZEluID0gKCEhZkJhc2VVc2VyICYmICEhZkJhc2VVc2VyLmVtYWlsKTtcclxuICAgICAgICB0aGlzLl91c2VyID0gZkJhc2VVc2VyO1xyXG4gICAgICAgIGlmICh0aGlzLmxvZ2dlZEluLnZhbHVlICE9PSB0aGlzLl9sb2dnZWRJbilcclxuICAgICAgICAgIHRoaXMubG9nZ2VkSW4ubmV4dCh0aGlzLl9sb2dnZWRJbik7XHJcbiAgICAgICAgdGhpcy51c2VyLm5leHQoZkJhc2VVc2VyKTtcclxuICAgICAgICByZXR1cm4gZkJhc2VVc2VyO1xyXG4gICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlKSA9PiBvZihjb25zb2xlLmxvZygnZXhjZXB0aW9uOicsIGUpKVxyXG4gICAgICApKTtcclxuICB9XHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5sb2dnZWRJbi5uZXh0KGZhbHNlKTtcclxuICAgIHRoaXMuYWZBdXRoLnNpZ25PdXQoKTtcclxuICB9XHJcbiAgaGlkZUxvZ091dEJ1dHRvbihoaWRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmhpZGVMb2dPdXRCdXR0b24kLm5leHQoaGlkZSk7XHJcbiAgfVxyXG5cclxuICBsb2dpblN1Y2Nlc3NDYWxsYmFjayhkYXRhOiBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnc3VjY2Vzc0NhbGxiYWNrJywgZGF0YSk7XHJcbiAgICB0aGlzLl9sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2UnXSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkVycm9yQ2FsbGJhY2soZGF0YTogRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUpIHtcclxuICAgIC8vIGNvbnNvbGUud2FybignZXJyb3JDYWxsYmFjaycsIGRhdGEpO1xyXG4gICAgdGhpcy5fbG9nZ2VkSW4gPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5sb2dnZWRJbjtcclxuICAvLyB9XHJcbn1cclxuIl19