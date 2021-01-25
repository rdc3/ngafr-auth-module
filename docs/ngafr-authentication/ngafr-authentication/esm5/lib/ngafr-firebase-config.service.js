/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-firebase-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
var FirebaseConfigService = /** @class */ (function () {
    function FirebaseConfigService() {
    }
    /**
     * @param {?} authProviders
     * @return {?}
     */
    FirebaseConfigService.getFirebaseUiAuthConfig = /**
     * @param {?} authProviders
     * @return {?}
     */
    function (authProviders) {
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
    };
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
    return FirebaseConfigService;
}());
export { FirebaseConfigService };
if (false) {
    /** @type {?} */
    FirebaseConfigService.firebaseUiAuthConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItZmlyZWJhc2UtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ2Fmci1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9uZ2Fmci1maXJlYmFzZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFFekM7SUFBQTtJQWtEQSxDQUFDOzs7OztJQXZDUSw2Q0FBdUI7Ozs7SUFBOUIsVUFBK0IsYUFBcUM7UUFDbEUsSUFBSSxhQUFhLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdHO1FBQ0QsSUFBSSxhQUFhLENBQUMsb0JBQW9CLEVBQUU7WUFDdEMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDMUQsTUFBTSxFQUFFO29CQUNOLGdCQUFnQjtvQkFDaEIsT0FBTztvQkFDUCxZQUFZO29CQUNaLGNBQWM7aUJBQ2Y7Z0JBQ0QsZ0JBQWdCLEVBQUU7b0JBQ2hCLFNBQVMsRUFBRSxnQkFBZ0I7aUJBQzVCO2dCQUNELFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVc7YUFDekQsQ0FBQyxDQUFDO1NBQ0w7UUFDRixJQUFJLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNuQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO2FBQ3RELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxhQUFhLENBQUMsbUJBQW1CLEVBQUU7WUFDckMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdHO1FBQ0YsSUFBSSxhQUFhLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVHO1FBQ0YsSUFBSSxhQUFhLENBQUMsaUJBQWlCLEVBQUU7WUFDbkMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNHO1FBQ0YsSUFBSSxhQUFhLENBQUMscUJBQXFCLEVBQUU7WUFDdkMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0YsT0FBTyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUNwRCxDQUFDO0lBN0NNLDBDQUFvQixHQUEyQjtRQUNwRCxVQUFVLEVBQUUsT0FBTztRQUNuQixhQUFhLEVBQUUsRUFBRTs7O1FBR2pCLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTtLQUN4RCxDQUFDOztnQkFUSCxVQUFVOztJQWtEWCw0QkFBQztDQUFBLEFBbERELElBa0RDO1NBakRZLHFCQUFxQjs7O0lBRWhDLDJDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBzdGF0aWMgZmlyZWJhc2VVaUF1dGhDb25maWc6IGZpcmViYXNldWkuYXV0aC5Db25maWcgPSB7XHJcbiAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgc2lnbkluT3B0aW9uczogW10sXHJcbiAgICAvLyB0b3NVcmw6ICc8eW91ci10b3MtbGluaz4nLFxyXG4gICAgLy8gcHJpdmFjeVBvbGljeVVybDogJzx5b3VyLXByaXZhY3lQb2xpY3lVcmwtbGluaz4nLFxyXG4gICAgY3JlZGVudGlhbEhlbHBlcjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXRGaXJlYmFzZVVpQXV0aENvbmZpZyhhdXRoUHJvdmlkZXJzOiBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzKSB7XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5nb29nbGVBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5mYWNlYm9va0F1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIHNjb3BlczogW1xyXG4gICAgICAgICAgICAncHVibGljX3Byb2ZpbGUnLFxyXG4gICAgICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICAgICAndXNlcl9saWtlcycsXHJcbiAgICAgICAgICAgICd1c2VyX2ZyaWVuZHMnXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY3VzdG9tUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBhdXRoX3R5cGU6ICdyZWF1dGhlbnRpY2F0ZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmVtYWlsQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goe1xyXG4gICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogdHJ1ZSxcclxuICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLnR3aXR0ZXJBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmdpdGh1YkF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEKTtcclxuICAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5waG9uZUF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmFub255bW91c0F1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNldWkuYXV0aC5Bbm9ueW1vdXNBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIHJldHVybiBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=