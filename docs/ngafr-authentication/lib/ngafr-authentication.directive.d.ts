import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { User } from '@firebase/auth-types';
import * as ɵngcc0 from '@angular/core';
export declare class NgafrAuthDirective implements OnInit, AfterViewInit {
    private componentFactoryResolver;
    private viewContainer;
    private cdr;
    private auth;
    ngafrAuth: string;
    userLogOut: string;
    hideDefaultLogOutButton: string;
    userLoggedInEvent: EventEmitter<{
        isLoggedIn: boolean;
    }>;
    userEvent: EventEmitter<{
        user: User;
    }>;
    private authTemplateComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainer: ViewContainerRef, cdr: ChangeDetectorRef, auth: NgafrAuthenticationService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    logout(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgafrAuthDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgafrAuthDirective, "[ngafrAuth]", ["ngafrAuth"], { "hideDefaultLogOutButton": "hideDefaultLogOutButton"; "ngafrAuth": "ngafrAuth"; "userLogOut": "userLogOut"; }, { "userLoggedInEvent": "userLoggedInEvent"; "userEvent": "userEvent"; }, never>;
}

//# sourceMappingURL=ngafr-authentication.directive.d.ts.map