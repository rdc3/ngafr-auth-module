import { IFirebaseAuthProviders } from './ngafr-firebase-config.model';
import * as firebaseui from 'firebaseui';
export declare class FirebaseConfigService {
    static firebaseUiAuthConfig: firebaseui.auth.Config;
    static getFirebaseUiAuthConfig(authProviders: IFirebaseAuthProviders): firebaseui.auth.Config;
}
