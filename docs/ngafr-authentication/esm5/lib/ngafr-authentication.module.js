/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, InjectionToken } from '@angular/core';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseConfigService } from './ngafr-firebase-config.service';
import { NgafrAuthDirective } from './ngafr-authentication.directive';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
/** @type {?} */
export var FirebaseConfigData = new InjectionToken('FIREBASECONF');
var NgafrAuthenticationModule = /** @class */ (function () {
    function NgafrAuthenticationModule() {
    }
    /**
     * @param {?} firebaseConfig
     * @param {?} authProviders
     * @return {?}
     */
    NgafrAuthenticationModule.forRoot = /**
     * @param {?} firebaseConfig
     * @param {?} authProviders
     * @return {?}
     */
    function (firebaseConfig, authProviders) {
        /** @type {?} */
        var firebaseUiAuthConfig = FirebaseConfigService.getFirebaseUiAuthConfig(authProviders);
        return {
            ngModule: NgafrAuthenticationModule,
            providers: [
                FirebaseConfigService,
                AngularFireModule.initializeApp(firebaseConfig).providers,
                { provide: FirebaseConfigData, useValue: firebaseConfig },
                FirebaseUIModule.forRoot(firebaseUiAuthConfig).providers
            ]
        };
    };
    NgafrAuthenticationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgafrAuthDirective, NgafrAuthenticationComponent],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        AngularFireAuthModule,
                        FirebaseUIModule
                    ],
                    exports: [NgafrAuthDirective, NgafrAuthenticationComponent],
                    providers: [FirebaseConfigService],
                    entryComponents: [NgafrAuthenticationComponent]
                },] }
    ];
    return NgafrAuthenticationModule;
}());
export { NgafrAuthenticationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdhZnItYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvbmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUVoRixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWdCLGNBQWMsQ0FBQztBQUduRjtJQUFBO0lBMEJBLENBQUM7Ozs7OztJQVplLGlDQUFPOzs7OztJQUFyQixVQUFzQixjQUE2QixFQUFFLGFBQXFDOztZQUNsRixvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7UUFDekYsT0FBTztZQUNMLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjtnQkFDckIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ3pELEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7Z0JBQ3ZELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVM7YUFDekQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztvQkFDaEUsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxxQkFBcUI7d0JBQ3JCLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNEJBQTRCLENBQUM7b0JBQzNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNsQyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDaEQ7O0lBZUQsZ0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQWJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVVJTW9kdWxlIH0gZnJvbSAnZmlyZWJhc2V1aS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuaW1wb3J0IHsgSUZpcmViYXNlQ29uZiwgSUZpcmViYXNlQXV0aFByb3ZpZGVycyB9IGZyb20gJy4vbmdhZnItZmlyZWJhc2UtY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgRmlyZWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nYWZyQXV0aERpcmVjdGl2ZSB9IGZyb20gJy4vbmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmdhZnItYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBGaXJlYmFzZUNvbmZpZ0RhdGEgPSBuZXcgSW5qZWN0aW9uVG9rZW48SUZpcmViYXNlQ29uZj4oJ0ZJUkVCQVNFQ09ORicpO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTmdhZnJBdXRoRGlyZWN0aXZlLCBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXHJcbiAgICBGaXJlYmFzZVVJTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmdhZnJBdXRoRGlyZWN0aXZlLCBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtGaXJlYmFzZUNvbmZpZ1NlcnZpY2VdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW05nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmdhZnJBdXRoZW50aWNhdGlvbk1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGZpcmViYXNlQ29uZmlnOiBJRmlyZWJhc2VDb25mLCBhdXRoUHJvdmlkZXJzOiBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICBjb25zdCBmaXJlYmFzZVVpQXV0aENvbmZpZyA9IEZpcmViYXNlQ29uZmlnU2VydmljZS5nZXRGaXJlYmFzZVVpQXV0aENvbmZpZyhhdXRoUHJvdmlkZXJzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ2FmckF1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykucHJvdmlkZXJzLFxyXG4gICAgICAgIHtwcm92aWRlOiBGaXJlYmFzZUNvbmZpZ0RhdGEsIHVzZVZhbHVlOiBmaXJlYmFzZUNvbmZpZ30sXHJcbiAgICAgICAgRmlyZWJhc2VVSU1vZHVsZS5mb3JSb290KGZpcmViYXNlVWlBdXRoQ29uZmlnKS5wcm92aWRlcnNcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=