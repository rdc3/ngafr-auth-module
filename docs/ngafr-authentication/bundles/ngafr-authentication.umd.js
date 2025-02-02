(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/fire/auth'), require('rxjs/operators'), require('rxjs'), require('@angular/platform-browser'), require('@angular/forms'), require('firebaseui-angular'), require('@angular/fire'), require('firebase'), require('firebaseui')) :
    typeof define === 'function' && define.amd ? define('ngafr-authentication', ['exports', '@angular/core', '@angular/fire/auth', 'rxjs/operators', 'rxjs', '@angular/platform-browser', '@angular/forms', 'firebaseui-angular', '@angular/fire', 'firebase', 'firebaseui'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngafr-authentication'] = {}, global.ng.core, global.ng.fire.auth, global.rxjs.operators, global.rxjs, global.ng.platformBrowser, global.ng.forms, global['firebaseui-angular'], global.ng.fire, global.firebase, global.firebaseui));
}(this, (function (exports, i0, i1, operators, rxjs, platformBrowser, forms, firebaseuiAngular, fire, firebase, firebaseui) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngafr-authentication.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgafrAuthenticationService = /** @class */ (function () {
        /**
         * @param {?} afAuth
         */
        function NgafrAuthenticationService(afAuth) {
            this.afAuth = afAuth;
            this._loggedIn = false;
            this._user = null;
            this.loggedIn = new rxjs.BehaviorSubject(this._loggedIn);
            this.user = new rxjs.BehaviorSubject(this._user);
            this.hideLogOutButton$ = new rxjs.BehaviorSubject(false);
        }
        /**
         * @return {?}
         */
        NgafrAuthenticationService.prototype.isUserLoggedIn = function () {
            var _this = this;
            return this.afAuth.authState.pipe(operators.map(( /**
             * @param {?} fBaseUser
             * @return {?}
             */function (fBaseUser) {
                console.log('User: ', (fBaseUser && fBaseUser.email) ? fBaseUser.displayName : 'Guest');
                _this._loggedIn = (!!fBaseUser && !!fBaseUser.email);
                _this._user = fBaseUser;
                if (_this.loggedIn.value !== _this._loggedIn)
                    _this.loggedIn.next(_this._loggedIn);
                _this.user.next(fBaseUser);
                return fBaseUser;
            })), operators.catchError(( /**
             * @param {?} e
             * @return {?}
             */function (e) { return rxjs.of(console.log('exception:', e)); })));
        };
        /**
         * @return {?}
         */
        NgafrAuthenticationService.prototype.logout = function () {
            this.loggedIn.next(false);
            this.afAuth.signOut();
        };
        /**
         * @param {?} hide
         * @return {?}
         */
        NgafrAuthenticationService.prototype.hideLogOutButton = function (hide) {
            this.hideLogOutButton$.next(hide);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgafrAuthenticationService.prototype.loginSuccessCallback = function (data) {
            this._loggedIn = true;
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgafrAuthenticationService.prototype.loginErrorCallback = function (data) {
            this._loggedIn = false;
        };
        return NgafrAuthenticationService;
    }());
    NgafrAuthenticationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgafrAuthenticationService.ctorParameters = function () { return [
        { type: i1.AngularFireAuth }
    ]; };
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngafr-authentication.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgafrAuthenticationComponent = /** @class */ (function () {
        /**
         * @param {?} ngafrAuth
         * @param {?} cdr
         */
        function NgafrAuthenticationComponent(ngafrAuth, cdr) {
            var _this = this;
            this.ngafrAuth = ngafrAuth;
            this.cdr = cdr;
            this.loggedIn = false;
            this.hideLogOutButton = false;
            console.log('in On Init');
            this.ngafrAuth.isUserLoggedIn().subscribe(( /**
             * @param {?} user
             * @return {?}
             */function (/**
             * @param {?} user
             * @return {?}
             */ user) {
                if (user) {
                    _this.loggedIn = true;
                }
                else {
                    _this.loggedIn = false;
                }
            }));
            this.ngafrAuth.hideLogOutButton$.subscribe(( /**
             * @param {?} hide
             * @return {?}
             */function (/**
             * @param {?} hide
             * @return {?}
             */ hide) {
                _this.hideLogOutButton = hide;
                _this.cdr.markForCheck();
            }));
        }
        return NgafrAuthenticationComponent;
    }());
    NgafrAuthenticationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-ngafr-authentication',
                    template: "\n    <ng-template #ngafrAuthElement>\n      <firebase-ui (signInSuccessWithAuthResult)=\"this.ngafrAuth.loginSuccessCallback($event)\"\n                   (signInFailure)=\"this.ngafrAuth.loginErrorCallback($event)\"></firebase-ui>\n      <button *ngIf=\"loggedIn && !hideLogOutButton\" (click)=\"this.ngafrAuth.logout()\">Logout</button>\n    </ng-template>\n  ",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;height:36px;letter-spacing:0;line-height:1;line-height:36px;margin:0;min-width:64px;outline:0;overflow:hidden;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);vertical-align:middle;will-change:box-shadow}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--raised:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{background:hsla(0,0%,62%,.2);border-radius:50%;box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);font-size:24px;height:56px;line-height:normal;margin:auto;min-width:56px;overflow:hidden;padding:0;position:relative;width:56px}.mdl-button--fab .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button--fab:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--fab:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;color:inherit;font-size:24px;height:32px;line-height:normal;margin-left:0;margin-right:0;min-width:32px;overflow:hidden;padding:0;width:32px}.mdl-button--icon .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{left:0;top:0}.mdl-button--icon .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button__ripple-container{display:block;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:0}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{background-color:#3f51b5;color:#fff}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{background-color:#ff4081;color:#fff}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{background-color:transparent;color:rgba(0,0,0,.26);cursor:default}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);box-shadow:none;color:rgba(0,0,0,.26)}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{background:#fff;border-radius:2px;box-sizing:border-box;display:flex;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;position:relative;width:330px;z-index:1}.mdl-card__media{background-attachment:scroll;background-color:#ff4081;background-origin:padding-box;background-position:50% 50%;background-repeat:repeat;background-size:cover;box-sizing:border-box}.mdl-card__title{align-items:center;box-sizing:border-box;color:#000;display:block;display:flex;justify-content:stretch;line-height:normal;padding:16px;perspective-origin:165px 56px;transform-origin:165px 56px}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{align-self:flex-end;color:inherit;display:block;display:flex;font-size:24px;font-weight:300;line-height:normal;margin:0;overflow:hidden;transform-origin:149px 48px}.mdl-card__subtitle-text{color:rgba(0,0,0,.54);font-size:14px;margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{background-color:transparent;box-sizing:border-box;font-size:16px;line-height:normal;padding:8px;width:100%}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{font-size:2.5rem;margin:0;padding:24px 24px 0}.mdl-dialog__actions{display:flex;flex-direction:row-reverse;flex-wrap:wrap;padding:8px 8px 8px 24px}.mdl-dialog__actions>*{height:36px;margin-right:8px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{flex:0 0 100%;height:48px;margin-right:0;padding-right:16px;text-align:right}.mdl-dialog__content{color:rgba(0,0,0,.54);padding:20px 24px 24px}.mdl-progress{display:block;height:4px;max-width:100%;position:relative;width:500px}.mdl-progress>.bar{bottom:0;display:block;position:absolute;top:0;transition:width .2s cubic-bezier(.4,0,.2,1);width:0}.mdl-progress>.progressbar{background-color:#3f51b5;left:0;z-index:1}.mdl-progress>.bufferbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);left:0;z-index:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{-webkit-mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=)}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate1;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate1;animation-timing-function:linear;background-color:#3f51b5}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate2;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate2;animation-timing-function:linear;background-color:#3f51b5;background-image:none}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;height:28px;position:relative;width:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:\"Loading...\"}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1.568s linear infinite;animation:mdl-spinner__container-rotate 1.568s linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}@keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}.mdl-spinner__layer{height:100%;opacity:0;position:absolute;width:100%}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{border-color:inherit;box-sizing:border-box;height:100%;left:45%;overflow:hidden;position:absolute;top:0;width:10%}.mdl-spinner__gap-patch .mdl-spinner__circle{left:-450%;width:1000%}.mdl-spinner__circle-clipper{border-color:inherit;display:inline-block;height:100%;overflow:hidden;position:relative;width:50%}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{-webkit-animation:none;animation:none;border:3px solid;border-bottom-color:transparent!important;border-color:inherit;border-radius:50%;bottom:0;box-sizing:border-box;height:100%;left:0;position:absolute;right:0;top:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{border-left-color:transparent!important;left:-100%;transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.mdl-textfield{box-sizing:border-box;display:inline-block;font-size:16px;margin:0;max-width:100%;padding:20px 0;position:relative;width:300px}.mdl-textfield .mdl-button{bottom:20px;position:absolute}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-height:32px;min-width:32px;width:auto}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{background:0 0;border:none;border-bottom:1px solid rgba(0,0,0,.12);color:inherit;display:block;font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;padding:4px 0;text-align:left;width:100%}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:0}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);display:block;font-size:16px;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;text-align:left;top:24px;white-space:nowrap;width:100%}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:\"\";height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;display:block;font-size:12px;margin-top:3px;position:absolute;visibility:hidden}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{display:inline-block;margin-left:32px;max-width:.1px;position:relative;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}dialog{background:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{bottom:0;left:0;position:fixed;right:0;top:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.firebaseui-container{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#fff;box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in,.firebaseui-page-select-tenant{background:inherit}.firebaseui-idp-list,.firebaseui-tenant-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button,.firebaseui-tenant-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item,.firebaseui-tenant-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{height:18px;width:18px}.firebaseui-idp-favicon,.firebaseui-idp-icon{border:none;display:inline-block;vertical-align:middle}.firebaseui-idp-favicon{height:14px;margin-right:5px;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{-webkit-transform:scale(.9);-webkit-transform-origin:0 0;transform:scale(.9);transform-origin:0 0}}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}[data-provider-id=\"yahoo.com\"]>.firebaseui-idp-icon-wrapper>.firebaseui-idp-icon{height:22px;width:22px}.firebaseui-info-bar{-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;color:rgba(0,0,0,.87);flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{padding-right:24px}.firebaseui-list-box-icon-wrapper,.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{direction:ltr;height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank,.firebaseui-id-page-spinner{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}"]
                }] }
    ];
    /** @nocollapse */
    NgafrAuthenticationComponent.ctorParameters = function () { return [
        { type: NgafrAuthenticationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    NgafrAuthenticationComponent.propDecorators = {
        ngafrAuthElement: [{ type: i0.ViewChild, args: ['ngafrAuthElement', { static: true },] }]
    };
    if (false) {
        /** @type {?} */
        NgafrAuthenticationComponent.prototype.ngafrAuthElement;
        /** @type {?} */
        NgafrAuthenticationComponent.prototype.loggedIn;
        /** @type {?} */
        NgafrAuthenticationComponent.prototype.hideLogOutButton;
        /** @type {?} */
        NgafrAuthenticationComponent.prototype.ngafrAuth;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthenticationComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngafr-authentication.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgafrAuthDirective = /** @class */ (function () {
        /**
         * @param {?} componentFactoryResolver
         * @param {?} viewContainer
         * @param {?} cdr
         * @param {?} auth
         */
        function NgafrAuthDirective(componentFactoryResolver, viewContainer, cdr, auth) {
            var _this = this;
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainer = viewContainer;
            this.cdr = cdr;
            this.auth = auth;
            this.hideDefaultLogOutButton = 'false';
            this.userLoggedInEvent = new i0.EventEmitter();
            this.userEvent = new i0.EventEmitter();
            this.auth.loggedIn.subscribe(( /**
             * @param {?} isLoggedIn
             * @return {?}
             */function (/**
             * @param {?} isLoggedIn
             * @return {?}
             */ isLoggedIn) { return _this.userLoggedInEvent.emit({ isLoggedIn: isLoggedIn }); }));
            this.auth.user.subscribe(( /**
             * @param {?} user
             * @return {?}
             */function (/**
             * @param {?} user
             * @return {?}
             */ user) { return _this.userEvent.emit({ user: user }); }));
        }
        /**
         * @return {?}
         */
        NgafrAuthDirective.prototype.ngAfterViewInit = function () {
            if (this.hideDefaultLogOutButton.toLowerCase() !== 'true' || this.hideDefaultLogOutButton.toLowerCase() !== 'false')
                this.hideDefaultLogOutButton = 'false';
            this.auth.hideLogOutButton(JSON.parse(this.hideDefaultLogOutButton));
        };
        /**
         * @return {?}
         */
        NgafrAuthDirective.prototype.ngOnInit = function () {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgafrAuthenticationComponent);
            /** @type {?} */
            var componentRef = componentFactory.create(this.viewContainer.injector);
            this.authTemplateComponent = componentRef.instance;
            this.viewContainer.createEmbeddedView(this.authTemplateComponent.ngafrAuthElement);
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NgafrAuthDirective.prototype.logout = function () {
            this.auth.logout();
        };
        return NgafrAuthDirective;
    }());
    NgafrAuthDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ngafrAuth]',
                    exportAs: 'ngafrAuth'
                },] }
    ];
    /** @nocollapse */
    NgafrAuthDirective.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.ViewContainerRef },
        { type: i0.ChangeDetectorRef },
        { type: NgafrAuthenticationService }
    ]; };
    NgafrAuthDirective.propDecorators = {
        ngafrAuth: [{ type: i0.Input, args: ['ngafrAuth',] }],
        userLogOut: [{ type: i0.Input, args: ['userLogOut',] }],
        hideDefaultLogOutButton: [{ type: i0.Input, args: ['hideDefaultLogOutButton',] }],
        userLoggedInEvent: [{ type: i0.Output, args: ['userLoggedInEvent',] }],
        userEvent: [{ type: i0.Output, args: ['userEvent',] }]
    };
    if (false) {
        /** @type {?} */
        NgafrAuthDirective.prototype.ngafrAuth;
        /** @type {?} */
        NgafrAuthDirective.prototype.userLogOut;
        /** @type {?} */
        NgafrAuthDirective.prototype.hideDefaultLogOutButton;
        /** @type {?} */
        NgafrAuthDirective.prototype.userLoggedInEvent;
        /** @type {?} */
        NgafrAuthDirective.prototype.userEvent;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthDirective.prototype.authTemplateComponent;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthDirective.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthDirective.prototype.viewContainer;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthDirective.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NgafrAuthDirective.prototype.auth;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngafr-firebase-config.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FirebaseConfigService = /** @class */ (function () {
        function FirebaseConfigService() {
        }
        /**
         * @param {?} authProviders
         * @return {?}
         */
        FirebaseConfigService.getFirebaseUiAuthConfig = function (authProviders) {
            if (authProviders.googleAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__default['default'].auth.GoogleAuthProvider.PROVIDER_ID);
            }
            if (authProviders.facebookAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                    scopes: [
                        'public_profile',
                        'email',
                        'user_likes',
                        'user_friends'
                    ],
                    customParameters: {
                        auth_type: 'reauthenticate'
                    },
                    provider: firebase__default['default'].auth.FacebookAuthProvider.PROVIDER_ID
                });
            }
            if (authProviders.emailAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                    requireDisplayName: true,
                    provider: firebase__default['default'].auth.EmailAuthProvider.PROVIDER_ID
                });
            }
            if (authProviders.twitterAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__default['default'].auth.TwitterAuthProvider.PROVIDER_ID);
            }
            if (authProviders.githubAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__default['default'].auth.GithubAuthProvider.PROVIDER_ID);
            }
            if (authProviders.phoneAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__default['default'].auth.PhoneAuthProvider.PROVIDER_ID);
            }
            if (authProviders.anonymousAuthProvider) {
                FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID);
            }
            return FirebaseConfigService.firebaseUiAuthConfig;
        };
        return FirebaseConfigService;
    }());
    FirebaseConfigService.firebaseUiAuthConfig = {
        signInFlow: 'popup',
        signInOptions: [],
        // tosUrl: '<your-tos-link>',
        // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
        credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };
    FirebaseConfigService.decorators = [
        { type: i0.Injectable }
    ];
    if (false) {
        /** @type {?} */
        FirebaseConfigService.firebaseUiAuthConfig;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngafr-authentication.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FirebaseConfigData = new i0.InjectionToken('FIREBASECONF');
    var NgafrAuthenticationModule = /** @class */ (function () {
        function NgafrAuthenticationModule() {
        }
        /**
         * @param {?} firebaseConfig
         * @param {?} authProviders
         * @return {?}
         */
        NgafrAuthenticationModule.forRoot = function (firebaseConfig, authProviders) {
            /** @type {?} */
            var firebaseUiAuthConfig = FirebaseConfigService.getFirebaseUiAuthConfig(authProviders);
            return {
                ngModule: NgafrAuthenticationModule,
                providers: [
                    FirebaseConfigService,
                    fire.AngularFireModule.initializeApp(firebaseConfig).providers,
                    { provide: FirebaseConfigData, useValue: firebaseConfig },
                    firebaseuiAngular.FirebaseUIModule.forRoot(firebaseUiAuthConfig).providers
                ]
            };
        };
        return NgafrAuthenticationModule;
    }());
    NgafrAuthenticationModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgafrAuthDirective, NgafrAuthenticationComponent],
                    imports: [
                        platformBrowser.BrowserModule,
                        forms.FormsModule,
                        i1.AngularFireAuthModule,
                        firebaseuiAngular.FirebaseUIModule
                    ],
                    exports: [NgafrAuthDirective, NgafrAuthenticationComponent],
                    providers: [FirebaseConfigService],
                    entryComponents: [NgafrAuthenticationComponent]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngafr-authentication.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FirebaseConfigData = FirebaseConfigData;
    exports.FirebaseConfigService = FirebaseConfigService;
    exports.NgafrAuthDirective = NgafrAuthDirective;
    exports.NgafrAuthenticationComponent = NgafrAuthenticationComponent;
    exports.NgafrAuthenticationModule = NgafrAuthenticationModule;
    exports.NgafrAuthenticationService = NgafrAuthenticationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngafr-authentication.umd.js.map
