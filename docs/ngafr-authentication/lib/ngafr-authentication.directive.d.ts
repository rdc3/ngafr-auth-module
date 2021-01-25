import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { OnInit, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
export declare class NgafrAuthDirective implements OnInit, AfterViewInit {
    private componentFactoryResolver;
    private viewContainer;
    private cdr;
    private auth;
    private el;
    ngafrAuth: string;
    userLogOut: string;
    hideDefaultLogOutButton: string;
    userLoggedInEvent: EventEmitter<{
        isLoggedIn: boolean;
    }>;
    userEvent: EventEmitter<{
        user: import("firebase").User;
    }>;
    private authTemplateComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainer: ViewContainerRef, cdr: ChangeDetectorRef, auth: NgafrAuthenticationService, el: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    logout(): void;
}
