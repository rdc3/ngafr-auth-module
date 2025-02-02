import { NgafrAuthenticationService } from './ngafr-authentication.service';
import {
    Directive, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef,
    EventEmitter, Output, Input
} from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
import { User } from '@firebase/auth-types';

@Directive({
    selector: '[ngafrAuth]',
    exportAs: 'ngafrAuth'
})
export class NgafrAuthDirective implements OnInit,  AfterViewInit {
    @Input('ngafrAuth') ngafrAuth : string; 
    @Input('userLogOut') userLogOut : string; 
    @Input('hideDefaultLogOutButton') hideDefaultLogOutButton : string = 'false'; 
    @Output('userLoggedInEvent') userLoggedInEvent = new EventEmitter<{ isLoggedIn: boolean }>();
    @Output('userEvent') userEvent = new EventEmitter<{ user: User }>();
    private authTemplateComponent: NgafrAuthenticationComponent;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainer: ViewContainerRef,
        private cdr: ChangeDetectorRef,
        private auth: NgafrAuthenticationService)
    { 
        this.auth.loggedIn.subscribe(isLoggedIn => this.userLoggedInEvent.emit({ isLoggedIn: isLoggedIn }));
        this.auth.user.subscribe(user => this.userEvent.emit({ user: user }));
    }

    ngAfterViewInit(): void {
        if (this.hideDefaultLogOutButton.toLowerCase() !== 'true' || this.hideDefaultLogOutButton.toLowerCase() !== 'false')
            this.hideDefaultLogOutButton = 'false';
        this.auth.hideLogOutButton(JSON.parse(this.hideDefaultLogOutButton));
    }

    ngOnInit(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgafrAuthenticationComponent);
        const componentRef = componentFactory.create(this.viewContainer.injector);
        this.authTemplateComponent = componentRef.instance;
        this.viewContainer.createEmbeddedView(this.authTemplateComponent.ngafrAuthElement);
        this.cdr.markForCheck();
    }

    logout() {
        this.auth.logout();
    }
}


