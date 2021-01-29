import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { User } from '@firebase/auth-types';
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
}
