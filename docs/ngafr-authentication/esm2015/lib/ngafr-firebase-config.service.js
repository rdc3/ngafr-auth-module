/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-firebase-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
export class FirebaseConfigService {
    /**
     * @param {?} authProviders
     * @return {?}
     */
    static getFirebaseUiAuthConfig(authProviders) {
        if (authProviders.googleAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.auth.GoogleAuthProvider.PROVIDER_ID);
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
                provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
            });
        }
        if (authProviders.emailAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                requireDisplayName: true,
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
            });
        }
        if (authProviders.twitterAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.auth.TwitterAuthProvider.PROVIDER_ID);
        }
        if (authProviders.githubAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.auth.GithubAuthProvider.PROVIDER_ID);
        }
        if (authProviders.phoneAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        }
        if (authProviders.anonymousAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID);
        }
        return FirebaseConfigService.firebaseUiAuthConfig;
    }
}
FirebaseConfigService.firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [],
    // tosUrl: '<your-tos-link>',
    // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
};
FirebaseConfigService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FirebaseConfigService.firebaseUiAuthConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItZmlyZWJhc2UtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2Fmci1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ2Fmci1maXJlYmFzZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFHekMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFVaEMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGFBQXFDO1FBQ2xFLElBQUksYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3RztRQUNELElBQUksYUFBYSxDQUFDLG9CQUFvQixFQUFFO1lBQ3RDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFELE1BQU0sRUFBRTtvQkFDTixnQkFBZ0I7b0JBQ2hCLE9BQU87b0JBQ1AsWUFBWTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELGdCQUFnQixFQUFFO29CQUNoQixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjtnQkFDRCxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXO2FBQ3pELENBQUMsQ0FBQztTQUNMO1FBQ0YsSUFBSSxhQUFhLENBQUMsaUJBQWlCLEVBQUU7WUFDbkMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDNUQsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVzthQUN0RCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksYUFBYSxDQUFDLG1CQUFtQixFQUFFO1lBQ3JDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3RztRQUNGLElBQUksYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1RztRQUNGLElBQUksYUFBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRztRQUNGLElBQUksYUFBYSxDQUFDLHFCQUFxQixFQUFFO1lBQ3ZDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqSDtRQUNGLE9BQU8scUJBQXFCLENBQUMsb0JBQW9CLENBQUM7SUFDcEQsQ0FBQzs7QUE3Q00sMENBQW9CLEdBQTJCO0lBQ3BELFVBQVUsRUFBRSxPQUFPO0lBQ25CLGFBQWEsRUFBRSxFQUFFOzs7SUFHakIsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJO0NBQ3hELENBQUM7O1lBVEgsVUFBVTs7OztJQUdULDJDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBzdGF0aWMgZmlyZWJhc2VVaUF1dGhDb25maWc6IGZpcmViYXNldWkuYXV0aC5Db25maWcgPSB7XHJcbiAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgc2lnbkluT3B0aW9uczogW10sXHJcbiAgICAvLyB0b3NVcmw6ICc8eW91ci10b3MtbGluaz4nLFxyXG4gICAgLy8gcHJpdmFjeVBvbGljeVVybDogJzx5b3VyLXByaXZhY3lQb2xpY3lVcmwtbGluaz4nLFxyXG4gICAgY3JlZGVudGlhbEhlbHBlcjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXRGaXJlYmFzZVVpQXV0aENvbmZpZyhhdXRoUHJvdmlkZXJzOiBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzKSB7XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5nb29nbGVBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5mYWNlYm9va0F1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHNjb3BlczogW1xyXG4gICAgICAgICAgICAncHVibGljX3Byb2ZpbGUnLFxyXG4gICAgICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICAgICAndXNlcl9saWtlcycsXHJcbiAgICAgICAgICAgICd1c2VyX2ZyaWVuZHMnXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY3VzdG9tUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBhdXRoX3R5cGU6ICdyZWF1dGhlbnRpY2F0ZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmVtYWlsQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goe1xyXG4gICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogdHJ1ZSxcclxuICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLnR3aXR0ZXJBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmdpdGh1YkF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEKTtcclxuICAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5waG9uZUF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmFub255bW91c0F1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNldWkuYXV0aC5Bbm9ueW1vdXNBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIHJldHVybiBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=