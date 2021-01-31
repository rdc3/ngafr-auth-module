/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-firebase-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.default.auth.GoogleAuthProvider.PROVIDER_ID);
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
                provider: firebase.default.auth.FacebookAuthProvider.PROVIDER_ID
            });
        }
        if (authProviders.emailAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                requireDisplayName: true,
                provider: firebase.default.auth.EmailAuthProvider.PROVIDER_ID
            });
        }
        if (authProviders.twitterAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.default.auth.TwitterAuthProvider.PROVIDER_ID);
        }
        if (authProviders.githubAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.default.auth.GithubAuthProvider.PROVIDER_ID);
        }
        if (authProviders.phoneAuthProvider) {
            FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase.default.auth.PhoneAuthProvider.PROVIDER_ID);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItZmlyZWJhc2UtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2Fmci1hdXRoZW50aWNhdGlvbi9zcmMvbGliL25nYWZyLWZpcmViYXNlLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQUd6QyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQVVoQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsYUFBcUM7UUFDbEUsSUFBSSxhQUFhLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNySDtRQUNELElBQUksYUFBYSxDQUFDLG9CQUFvQixFQUFFO1lBQ3RDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFELE1BQU0sRUFBRTtvQkFDTixnQkFBZ0I7b0JBQ2hCLE9BQU87b0JBQ1AsWUFBWTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELGdCQUFnQixFQUFFO29CQUNoQixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjtnQkFDRCxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVzthQUNqRSxDQUFDLENBQUM7U0FDTDtRQUNGLElBQUksYUFBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQzVELGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxhQUFhLENBQUMsbUJBQW1CLEVBQUU7WUFDckMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNySDtRQUNGLElBQUksYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEg7UUFDRixJQUFJLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNuQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25IO1FBQ0YsSUFBSSxhQUFhLENBQUMscUJBQXFCLEVBQUU7WUFDdkMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0YsT0FBTyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUNwRCxDQUFDOztBQTdDTSwwQ0FBb0IsR0FBMkI7SUFDcEQsVUFBVSxFQUFFLE9BQU87SUFDbkIsYUFBYSxFQUFFLEVBQUU7OztJQUdqQixnQkFBZ0IsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Q0FDeEQsQ0FBQzs7WUFUSCxVQUFVOzs7O0lBR1QsMkNBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElGaXJlYmFzZUF1dGhQcm92aWRlcnMgfSBmcm9tICcuL25nYWZyLWZpcmViYXNlLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tICdmaXJlYmFzZXVpJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ29uZmlnU2VydmljZSB7XHJcblxyXG4gIHN0YXRpYyBmaXJlYmFzZVVpQXV0aENvbmZpZzogZmlyZWJhc2V1aS5hdXRoLkNvbmZpZyA9IHtcclxuICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICBzaWduSW5PcHRpb25zOiBbXSxcclxuICAgIC8vIHRvc1VybDogJzx5b3VyLXRvcy1saW5rPicsXHJcbiAgICAvLyBwcml2YWN5UG9saWN5VXJsOiAnPHlvdXItcHJpdmFjeVBvbGljeVVybC1saW5rPicsXHJcbiAgICBjcmVkZW50aWFsSGVscGVyOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGdldEZpcmViYXNlVWlBdXRoQ29uZmlnKGF1dGhQcm92aWRlcnM6IElGaXJlYmFzZUF1dGhQcm92aWRlcnMpIHtcclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmdvb2dsZUF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmRlZmF1bHQuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGF1dGhQcm92aWRlcnMuZmFjZWJvb2tBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICBzY29wZXM6IFtcclxuICAgICAgICAgICAgJ3B1YmxpY19wcm9maWxlJyxcclxuICAgICAgICAgICAgJ2VtYWlsJyxcclxuICAgICAgICAgICAgJ3VzZXJfbGlrZXMnLFxyXG4gICAgICAgICAgICAndXNlcl9mcmllbmRzJ1xyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGN1c3RvbVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgYXV0aF90eXBlOiAncmVhdXRoZW50aWNhdGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmRlZmF1bHQuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmVtYWlsQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goe1xyXG4gICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogdHJ1ZSxcclxuICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuZGVmYXVsdC5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGF1dGhQcm92aWRlcnMudHdpdHRlckF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmRlZmF1bHQuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEKTtcclxuICAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5naXRodWJBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5kZWZhdWx0LmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEKTtcclxuICAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5waG9uZUF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNlLmRlZmF1bHQuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICAgfVxyXG4gICAgaWYgKGF1dGhQcm92aWRlcnMuYW5vbnltb3VzQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goZmlyZWJhc2V1aS5hdXRoLkFub255bW91c0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICAgfVxyXG4gICAgcmV0dXJuIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==