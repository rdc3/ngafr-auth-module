import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FireBaseConfig } from '../environments/firebase';
import { AuthCodeComponent } from './auth/auth-code/auth-code.component';
import { AuthDemoComponent } from './auth/auth-demo/auth-demo.component';
import { ViewSelectorComponent } from './_common/view-selector/view-selector.component';
import { NgafrAuthenticationModule, IFirebaseConf, IFirebaseAuthProviders, NgafrAuthenticationService } from 'ngafr-authentication';

const firebaseConfig: IFirebaseConf = FireBaseConfig;
const authProviders: IFirebaseAuthProviders = {
  googleAuthProvider: true,
  emailAuthProvider: true,
  githubAuthProvider: false,
  facebookAuthProvider: false,
  anonymousAuthProvider: false,
  phoneAuthProvider: false,
  twitterAuthProvider: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AuthCodeComponent,
    AuthDemoComponent,
    ViewSelectorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgafrAuthenticationModule,  // uncomment this line if you get tslint errors in the testapp demo template
    NgafrAuthenticationModule.forRoot(firebaseConfig, authProviders)
  ],
  providers: [NgafrAuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
