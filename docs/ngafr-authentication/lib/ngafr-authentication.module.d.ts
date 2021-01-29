import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { IFirebaseConf, IFirebaseAuthProviders } from './ngafr-firebase-config.model';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './ngafr-authentication.directive';
import * as ɵngcc2 from './ngafr-authentication.component';
import * as ɵngcc3 from '@angular/platform-browser';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from '@angular/fire/auth';
import * as ɵngcc6 from 'firebaseui-angular';
export declare const FirebaseConfigData: InjectionToken<IFirebaseConf>;
export declare class NgafrAuthenticationModule {
    static forRoot(firebaseConfig: IFirebaseConf, authProviders: IFirebaseAuthProviders): ModuleWithProviders<NgafrAuthenticationModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<NgafrAuthenticationModule, [typeof ɵngcc1.NgafrAuthDirective, typeof ɵngcc2.NgafrAuthenticationComponent], [typeof ɵngcc3.BrowserModule, typeof ɵngcc4.FormsModule, typeof ɵngcc5.AngularFireAuthModule, typeof ɵngcc6.FirebaseUIModule], [typeof ɵngcc1.NgafrAuthDirective, typeof ɵngcc2.NgafrAuthenticationComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<NgafrAuthenticationModule>;
}

//# sourceMappingURL=ngafr-authentication.module.d.ts.map