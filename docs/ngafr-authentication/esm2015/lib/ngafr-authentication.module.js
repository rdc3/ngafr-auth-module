import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, InjectionToken } from '@angular/core';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseConfigService } from './ngafr-firebase-config.service';
import { NgafrAuthDirective } from './ngafr-authentication.directive';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
export const FirebaseConfigData = new InjectionToken('FIREBASECONF');
export class NgafrAuthenticationModule {
    static forRoot(firebaseConfig, authProviders) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdhZnItYXV0aGVudGljYXRpb24vc3JjL2xpYi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUFnQixjQUFjLENBQUMsQ0FBQztBQWdCcEYsTUFBTSxPQUFPLHlCQUF5QjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQTZCLEVBQUUsYUFBcUM7UUFDeEYsTUFBTSxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUU7Z0JBQ1QscUJBQXFCO2dCQUNyQixpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUztnQkFDekQsRUFBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQztnQkFDdkQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUzthQUN6RDtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF6QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDRCQUE0QixDQUFDO2dCQUNoRSxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDM0QsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpcmViYXNlVUlNb2R1bGUgfSBmcm9tICdmaXJlYmFzZXVpLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5pbXBvcnQgeyBJRmlyZWJhc2VDb25mLCBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL25nYWZyLWZpcmViYXNlLWNvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdhZnJBdXRoRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpcmViYXNlQ29uZmlnRGF0YSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJRmlyZWJhc2VDb25mPignRklSRUJBU0VDT05GJyk7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOZ2FmckF1dGhEaXJlY3RpdmUsIE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcclxuICAgIEZpcmViYXNlVUlNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOZ2FmckF1dGhEaXJlY3RpdmUsIE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW0ZpcmViYXNlQ29uZmlnU2VydmljZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ2FmckF1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VDb25maWc6IElGaXJlYmFzZUNvbmYsIGF1dGhQcm92aWRlcnM6IElGaXJlYmFzZUF1dGhQcm92aWRlcnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nYWZyQXV0aGVudGljYXRpb25Nb2R1bGU+IHtcclxuICAgIGNvbnN0IGZpcmViYXNlVWlBdXRoQ29uZmlnID0gRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEZpcmViYXNlVWlBdXRoQ29uZmlnKGF1dGhQcm92aWRlcnMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5nYWZyQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZSxcclxuICAgICAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKS5wcm92aWRlcnMsXHJcbiAgICAgICAge3Byb3ZpZGU6IEZpcmViYXNlQ29uZmlnRGF0YSwgdXNlVmFsdWU6IGZpcmViYXNlQ29uZmlnfSxcclxuICAgICAgICBGaXJlYmFzZVVJTW9kdWxlLmZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWcpLnByb3ZpZGVyc1xyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ==