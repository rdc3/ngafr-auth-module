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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdhZnItYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvbmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUVoRixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWdCLGNBQWMsQ0FBQztBQWdCbkYsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBNkIsRUFBRSxhQUFxQzs7Y0FDbEYsb0JBQW9CLEdBQUcscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDO1FBQ3pGLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTO2dCQUN6RCxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDO2dCQUN2RCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTO2FBQ3pEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDRCQUE0QixDQUFDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlyZWJhc2VVSU1vZHVsZSB9IGZyb20gJ2ZpcmViYXNldWktYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbmltcG9ydCB7IElGaXJlYmFzZUNvbmYsIElGaXJlYmFzZUF1dGhQcm92aWRlcnMgfSBmcm9tICcuL25nYWZyLWZpcmViYXNlLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IEZpcmViYXNlQ29uZmlnU2VydmljZSB9IGZyb20gJy4vbmdhZnItZmlyZWJhc2UtY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ2FmckF1dGhEaXJlY3RpdmUgfSBmcm9tICcuL25nYWZyLWF1dGhlbnRpY2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25nYWZyLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgRmlyZWJhc2VDb25maWdEYXRhID0gbmV3IEluamVjdGlvblRva2VuPElGaXJlYmFzZUNvbmY+KCdGSVJFQkFTRUNPTkYnKTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05nYWZyQXV0aERpcmVjdGl2ZSwgTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxyXG4gICAgRmlyZWJhc2VVSU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05nYWZyQXV0aERpcmVjdGl2ZSwgTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbRmlyZWJhc2VDb25maWdTZXJ2aWNlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5nYWZyQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChmaXJlYmFzZUNvbmZpZzogSUZpcmViYXNlQ29uZiwgYXV0aFByb3ZpZGVyczogSUZpcmViYXNlQXV0aFByb3ZpZGVycyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgY29uc3QgZmlyZWJhc2VVaUF1dGhDb25maWcgPSBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZ2V0RmlyZWJhc2VVaUF1dGhDb25maWcoYXV0aFByb3ZpZGVycyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmdhZnJBdXRoZW50aWNhdGlvbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpLnByb3ZpZGVycyxcclxuICAgICAgICB7cHJvdmlkZTogRmlyZWJhc2VDb25maWdEYXRhLCB1c2VWYWx1ZTogZmlyZWJhc2VDb25maWd9LFxyXG4gICAgICAgIEZpcmViYXNlVUlNb2R1bGUuZm9yUm9vdChmaXJlYmFzZVVpQXV0aENvbmZpZykucHJvdmlkZXJzXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19