import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgafrAuthenticationService } from './ngafr-authentication.service';

@Component({
  selector: 'lib-ngafr-authentication',
  template: `
    <ng-template #ngafrAuthElement>
      <firebase-ui (signInSuccessWithAuthResult)="this.ngafrAuth.loginSuccessCallback($event)"
                   (signInFailure)="this.ngafrAuth.loginErrorCallback($event)"></firebase-ui>
      <button *ngIf="loggedIn && !hideLogOutButton" (click)="this.ngafrAuth.logout()">Logout</button>
    </ng-template>
  `,
  styleUrls: [
    '../../../../node_modules/firebaseui/dist/firebaseui.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class NgafrAuthenticationComponent {
  @ViewChild('ngafrAuthElement', { static: true }) ngafrAuthElement: TemplateRef<any>;
  public loggedIn = false;
  public hideLogOutButton = false;
  constructor(
    public ngafrAuth: NgafrAuthenticationService,
    private cdr: ChangeDetectorRef
  ) {
      console.log('in On Init');
      this.ngafrAuth.isUserLoggedIn().subscribe(user => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
      this.ngafrAuth.hideLogOutButton$.subscribe(hide => {
        this.hideLogOutButton = hide
        this.cdr.markForCheck();
      });
    
  }
}
