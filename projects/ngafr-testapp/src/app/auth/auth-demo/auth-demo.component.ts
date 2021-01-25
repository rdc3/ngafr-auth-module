import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngafr-testapp-auth-demo',
  templateUrl: './auth-demo.component.html',
  styleUrls: []
})
export class AuthDemoComponent implements OnInit {

  public loggedIn = null;
  public userName = '';
  constructor() { }

  ngOnInit() {
  }
  loggedInEvent($event) {
    console.log("LOGIN EVENT:", $event);
  }
  userEvent($event) {
    console.log("USER EVENT:", $event);
  }
}
