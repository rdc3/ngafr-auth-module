import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
export class FirebaseConfigService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItZmlyZWJhc2UtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2Fmci1hdXRoZW50aWNhdGlvbi9zcmMvbGliL25nYWZyLWZpcmViYXNlLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFHekMsTUFBTSxPQUFPLHFCQUFxQjtJQVVoQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsYUFBcUM7UUFDbEUsSUFBSSxhQUFhLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNySDtRQUNELElBQUksYUFBYSxDQUFDLG9CQUFvQixFQUFFO1lBQ3RDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFELE1BQU0sRUFBRTtvQkFDTixnQkFBZ0I7b0JBQ2hCLE9BQU87b0JBQ1AsWUFBWTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELGdCQUFnQixFQUFFO29CQUNoQixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjtnQkFDRCxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVzthQUNqRSxDQUFDLENBQUM7U0FDTDtRQUNGLElBQUksYUFBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQzVELGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO2FBQzlELENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxhQUFhLENBQUMsbUJBQW1CLEVBQUU7WUFDckMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNySDtRQUNGLElBQUksYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEg7UUFDRixJQUFJLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNuQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25IO1FBQ0YsSUFBSSxhQUFhLENBQUMscUJBQXFCLEVBQUU7WUFDdkMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0YsT0FBTyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUNwRCxDQUFDOztBQTdDTSwwQ0FBb0IsR0FBMkI7SUFDcEQsVUFBVSxFQUFFLE9BQU87SUFDbkIsYUFBYSxFQUFFLEVBQUU7SUFDakIsNkJBQTZCO0lBQzdCLG9EQUFvRDtJQUNwRCxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Q0FDeEQsQ0FBQzs7WUFUSCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzIH0gZnJvbSAnLi9uZ2Fmci1maXJlYmFzZS1jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUNvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICBzdGF0aWMgZmlyZWJhc2VVaUF1dGhDb25maWc6IGZpcmViYXNldWkuYXV0aC5Db25maWcgPSB7XHJcbiAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgc2lnbkluT3B0aW9uczogW10sXHJcbiAgICAvLyB0b3NVcmw6ICc8eW91ci10b3MtbGluaz4nLFxyXG4gICAgLy8gcHJpdmFjeVBvbGljeVVybDogJzx5b3VyLXByaXZhY3lQb2xpY3lVcmwtbGluaz4nLFxyXG4gICAgY3JlZGVudGlhbEhlbHBlcjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXRGaXJlYmFzZVVpQXV0aENvbmZpZyhhdXRoUHJvdmlkZXJzOiBJRmlyZWJhc2VBdXRoUHJvdmlkZXJzKSB7XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5nb29nbGVBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5kZWZhdWx0LmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEKTtcclxuICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmZhY2Vib29rQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgc2NvcGVzOiBbXHJcbiAgICAgICAgICAgICdwdWJsaWNfcHJvZmlsZScsXHJcbiAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICd1c2VyX2xpa2VzJyxcclxuICAgICAgICAgICAgJ3VzZXJfZnJpZW5kcydcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjdXN0b21QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIGF1dGhfdHlwZTogJ3JlYXV0aGVudGljYXRlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5kZWZhdWx0LmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSURcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICBpZiAoYXV0aFByb3ZpZGVycy5lbWFpbEF1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKHtcclxuICAgICAgICByZXF1aXJlRGlzcGxheU5hbWU6IHRydWUsXHJcbiAgICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmRlZmF1bHQuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLnR3aXR0ZXJBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5kZWZhdWx0LmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICAgfVxyXG4gICAgaWYgKGF1dGhQcm92aWRlcnMuZ2l0aHViQXV0aFByb3ZpZGVyKSB7XHJcbiAgICAgIEZpcmViYXNlQ29uZmlnU2VydmljZS5maXJlYmFzZVVpQXV0aENvbmZpZy5zaWduSW5PcHRpb25zLnB1c2goZmlyZWJhc2UuZGVmYXVsdC5hdXRoLkdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRCk7XHJcbiAgICAgfVxyXG4gICAgaWYgKGF1dGhQcm92aWRlcnMucGhvbmVBdXRoUHJvdmlkZXIpIHtcclxuICAgICAgRmlyZWJhc2VDb25maWdTZXJ2aWNlLmZpcmViYXNlVWlBdXRoQ29uZmlnLnNpZ25Jbk9wdGlvbnMucHVzaChmaXJlYmFzZS5kZWZhdWx0LmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIGlmIChhdXRoUHJvdmlkZXJzLmFub255bW91c0F1dGhQcm92aWRlcikge1xyXG4gICAgICBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWcuc2lnbkluT3B0aW9ucy5wdXNoKGZpcmViYXNldWkuYXV0aC5Bbm9ueW1vdXNBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQpO1xyXG4gICAgIH1cclxuICAgIHJldHVybiBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZmlyZWJhc2VVaUF1dGhDb25maWc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=