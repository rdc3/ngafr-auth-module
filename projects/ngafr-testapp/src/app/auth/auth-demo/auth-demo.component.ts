import { Component } from '@angular/core';

@Component({
  selector: 'ngafr-testapp-auth-demo',
  templateUrl: './auth-demo.component.html',
  styleUrls: ['./auth-demo.component.scss']
})
export class AuthDemoComponent {
  public loggedIn = false;
  public userName = 'Guest';

  constructor() { }

  loggedInEvent($event) {
    console.log("LOGIN EVENT:", $event);
    this.loggedIn = $event.isLoggedIn;
  }

  userEvent($event) {
    console.log("USER EVENT:", $event);
    if ($event && $event.user && $event.user.displayName)
      this.userName = $event.user.displayName;
  }

}
