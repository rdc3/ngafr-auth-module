import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { IFirebaseConf, IFirebaseAuthProviders } from './ngafr-firebase-config.model';
export declare const FirebaseConfigData: InjectionToken<IFirebaseConf>;
export declare class NgafrAuthenticationModule {
    static forRoot(firebaseConfig: IFirebaseConf, authProviders: IFirebaseAuthProviders): ModuleWithProviders;
}
