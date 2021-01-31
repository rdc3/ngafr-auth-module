/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const FirebaseConfigData = new InjectionToken('FIREBASECONF');
export class NgafrAuthenticationModule {
    /**
     * @param {?} firebaseConfig
     * @param {?} authProviders
     * @return {?}
     */
    static forRoot(firebaseConfig, authProviders) {
        /** @type {?} */
        const firebaseUiAuthConfig = FirebaseConfigService.getFirebaseUiAuthConfig(authProviders);
        return {
            ngModule: NgafrAuthenticationModule,
            providers: [
                FirebaseConfigService,
                AngularFireModule.initializeApp(firebaseConfig).providers,
                { provide: FirebaseConfigData, useValue: firebaseConfig },
                FirebaseUIModule.forRoot(firebaseUiAuthConfig).providers
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdhZnItYXV0aGVudGljYXRpb24vc3JjL2xpYi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRWhGLE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsY0FBYyxDQUFDO0FBZ0JuRixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUE2QixFQUFFLGFBQXFDOztjQUNsRixvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7UUFDekYsT0FBTztZQUNMLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjtnQkFDckIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ3pELEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7Z0JBQ3ZELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVM7YUFDekQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBekJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDaEUsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxxQkFBcUI7b0JBQ3JCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQzNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVVJTW9kdWxlIH0gZnJvbSAnZmlyZWJhc2V1aS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuaW1wb3J0IHsgSUZpcmViYXNlQ29uZiwgSUZpcmViYXNlQXV0aFByb3ZpZGVycyB9IGZyb20gJy4vbmdhZnItZmlyZWJhc2UtY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgRmlyZWJhc2VDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nYWZyQXV0aERpcmVjdGl2ZSB9IGZyb20gJy4vbmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmdhZnItYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBGaXJlYmFzZUNvbmZpZ0RhdGEgPSBuZXcgSW5qZWN0aW9uVG9rZW48SUZpcmViYXNlQ29uZj4oJ0ZJUkVCQVNFQ09ORicpO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTmdhZnJBdXRoRGlyZWN0aXZlLCBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXHJcbiAgICBGaXJlYmFzZVVJTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmdhZnJBdXRoRGlyZWN0aXZlLCBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtGaXJlYmFzZUNvbmZpZ1NlcnZpY2VdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW05nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmdhZnJBdXRoZW50aWNhdGlvbk1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGZpcmViYXNlQ29uZmlnOiBJRmlyZWJhc2VDb25mLCBhdXRoUHJvdmlkZXJzOiBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ2FmckF1dGhlbnRpY2F0aW9uTW9kdWxlPiB7XHJcbiAgICBjb25zdCBmaXJlYmFzZVVpQXV0aENvbmZpZyA9IEZpcmViYXNlQ29uZmlnU2VydmljZS5nZXRGaXJlYmFzZVVpQXV0aENvbmZpZyhhdXRoUHJvdmlkZXJzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ2FmckF1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykucHJvdmlkZXJzLFxyXG4gICAgICAgIHtwcm92aWRlOiBGaXJlYmFzZUNvbmZpZ0RhdGEsIHVzZVZhbHVlOiBmaXJlYmFzZUNvbmZpZ30sXHJcbiAgICAgICAgRmlyZWJhc2VVSU1vZHVsZS5mb3JSb290KGZpcmViYXNlVWlBdXRoQ29uZmlnKS5wcm92aWRlcnNcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=