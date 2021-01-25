import { TemplateRef, ChangeDetectorRef } from '@angular/core';
import { NgafrAuthenticationService } from './ngafr-authentication.service';
export declare class NgafrAuthenticationComponent {
    ngafrAuth: NgafrAuthenticationService;
    private cdr;
    ngafrAuthElement: TemplateRef<any>;
    loggedIn: boolean;
    hideLogOutButton: boolean;
    constructor(ngafrAuth: NgafrAuthenticationService, cdr: ChangeDetectorRef);
}
