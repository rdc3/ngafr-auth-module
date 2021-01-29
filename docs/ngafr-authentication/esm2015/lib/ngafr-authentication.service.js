import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class NgafrAuthenticationService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this._loggedIn = false;
        this.loggedIn = new BehaviorSubject(this._loggedIn);
        this._user = null;
        this.user = new BehaviorSubject(this._user);
        this.hideLogOutButton$ = new BehaviorSubject(false);
    }
    isUserLoggedIn() {
        return this.afAuth.authState.pipe(map((fBaseUser) => {
            console.log('User: ', (fBaseUser && fBaseUser.email) ? fBaseUser.displayName : 'Guest');
            this._loggedIn = (!!fBaseUser && !!fBaseUser.email);
            this._user = fBaseUser;
            if (this.loggedIn.value !== this._loggedIn)
                this.loggedIn.next(this._loggedIn);
            this.user.next(fBaseUser);
            return fBaseUser;
        }), catchError((e) => of(console.log('exception:', e))));
    }
    logout() {
        this.loggedIn.next(false);
        this.afAuth.signOut();
    }
    hideLogOutButton(hide) {
        this.hideLogOutButton$.next(hide);
    }
    loginSuccessCallback(data) {
        // console.log('successCallback', data);
        this._loggedIn = true;
        // this.router.navigate(['page']);
    }
    loginErrorCallback(data) {
        // console.warn('errorCallback', data);
        this._loggedIn = false;
    }
}
NgafrAuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgafrAuthenticationService_Factory() { return new NgafrAuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: NgafrAuthenticationService, providedIn: "root" });
NgafrAuthenticationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgafrAuthenticationService.ctorParameters = () => [
    { type: AngularFireAuth }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nYWZyLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvbmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNdkQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxZQUNVLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBTnpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsVUFBSyxHQUFTLElBQUksQ0FBQztRQUMzQixTQUFJLEdBQTBCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHckUsQ0FBQztJQUNMLGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFlLEVBQUUsRUFBRTtZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUztnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUNBLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ25ELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsSUFBYTtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUEyQztRQUM5RCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0NBQWtDO0lBQ3BDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUE2QjtRQUM5Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVBRLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlIH0gZnJvbSAnZmlyZWJhc2V1aS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAZmlyZWJhc2UvYXV0aC10eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ2FmckF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbG9nZ2VkSW4gPSBmYWxzZTtcclxuICBsb2dnZWRJbjogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9sb2dnZWRJbik7XHJcbiAgcHJpdmF0ZSBfdXNlcjogVXNlciA9IG51bGw7XHJcbiAgdXNlcjogQmVoYXZpb3JTdWJqZWN0PFVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl91c2VyKTtcclxuICBoaWRlTG9nT3V0QnV0dG9uJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFmQXV0aDogQW5ndWxhckZpcmVBdXRoLFxyXG4gICkgeyB9XHJcbiAgaXNVc2VyTG9nZ2VkSW4oKTogT2JzZXJ2YWJsZTx2b2lkIHwgVXNlcj4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aFN0YXRlLnBpcGUobWFwKChmQmFzZVVzZXI6IFVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlcjogJywgKGZCYXNlVXNlciAmJiBmQmFzZVVzZXIuZW1haWwpID8gZkJhc2VVc2VyLmRpc3BsYXlOYW1lIDogJ0d1ZXN0Jyk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VkSW4gPSAoISFmQmFzZVVzZXIgJiYgISFmQmFzZVVzZXIuZW1haWwpO1xyXG4gICAgICAgIHRoaXMuX3VzZXIgPSBmQmFzZVVzZXI7XHJcbiAgICAgICAgaWYgKHRoaXMubG9nZ2VkSW4udmFsdWUgIT09IHRoaXMuX2xvZ2dlZEluKVxyXG4gICAgICAgICAgdGhpcy5sb2dnZWRJbi5uZXh0KHRoaXMuX2xvZ2dlZEluKTtcclxuICAgICAgICB0aGlzLnVzZXIubmV4dChmQmFzZVVzZXIpO1xyXG4gICAgICAgIHJldHVybiBmQmFzZVVzZXI7XHJcbiAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGUpID0+IG9mKGNvbnNvbGUubG9nKCdleGNlcHRpb246JywgZSkpXHJcbiAgICAgICkpO1xyXG4gIH1cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlZEluLm5leHQoZmFsc2UpO1xyXG4gICAgdGhpcy5hZkF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuICBoaWRlTG9nT3V0QnV0dG9uKGhpZGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaGlkZUxvZ091dEJ1dHRvbiQubmV4dChoaWRlKTtcclxuICB9XHJcblxyXG4gIGxvZ2luU3VjY2Vzc0NhbGxiYWNrKGRhdGE6IEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzQ2FsbGJhY2snLCBkYXRhKTtcclxuICAgIHRoaXMuX2xvZ2dlZEluID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncGFnZSddKTtcclxuICB9XHJcblxyXG4gIGxvZ2luRXJyb3JDYWxsYmFjayhkYXRhOiBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSkge1xyXG4gICAgLy8gY29uc29sZS53YXJuKCdlcnJvckNhbGxiYWNrJywgZGF0YSk7XHJcbiAgICB0aGlzLl9sb2dnZWRJbiA9IGZhbHNlO1xyXG4gIH1cclxuICAvLyBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmxvZ2dlZEluO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=