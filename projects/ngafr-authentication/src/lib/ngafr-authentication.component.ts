import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgafrAuthenticationService } from './ngafr-authentication.service';

@Component({
  selector: 'lib-ngafr-authentication',
  template: `
    <ng-template #ngafrAuthElement>
      <firebase-ui (signInSuccessWithAuthResult)="this.ngafrAuth.loginSuccessCallback($event)"
                   (signInFailure)="this.ngafrAuth.loginErrorCallback($event)"></firebase-ui>
      <button *ngIf="loggedIn && !hideLogOutButton" (click)="this.ngafrAuth.logout()">Logout1</button>
    </ng-template>
  `,
  styleUrls: [
    './ngafr-authentication.component.css',
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
    private cdr: ChangeDetectorRef) {
    this.ngafrAuth.isUserLoggedIn().subscribe(user => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
    this.ngafrAuth.hideLogOutButton$.subscribe(hide => {
      this.hideLogOutButton = hide
      console.log(" in lib component : hideLogOutButton =", this.hideLogOutButton);
      
      this.cdr.markForCheck();
    });
    
  }
}
