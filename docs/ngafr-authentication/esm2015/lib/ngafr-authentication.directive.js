/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { Directive, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter, Output, Input, ElementRef } from '@angular/core';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
export class NgafrAuthDirective {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainer
     * @param {?} cdr
     * @param {?} auth
     * @param {?} el
     */
    constructor(componentFactoryResolver, viewContainer, cdr, auth, el) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        this.auth = auth;
        this.el = el;
        this.hideDefaultLogOutButton = 'false';
        this.userLoggedInEvent = new EventEmitter();
        this.userEvent = new EventEmitter();
        this.auth.loggedIn.subscribe((/**
         * @param {?} isLoggedIn
         * @return {?}
         */
        isLoggedIn => this.userLoggedInEvent.emit({ isLoggedIn: isLoggedIn })));
        this.auth.user.subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => this.userEvent.emit({ user: user })));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.auth.hideLogOutButton(JSON.parse(this.hideDefaultLogOutButton));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgafrAuthenticationComponent);
        /** @type {?} */
        const componentRef = componentFactory.create(this.viewContainer.injector);
        this.authTemplateComponent = componentRef.instance;
        this.viewContainer.createEmbeddedView(this.authTemplateComponent.ngafrAuthElement);
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
NgafrAuthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngafrAuth]',
                exportAs: 'ngafrAuth'
            },] }
];
/** @nocollapse */
NgafrAuthDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef },
    { type: NgafrAuthenticationService },
    { type: ElementRef }
];
NgafrAuthDirective.propDecorators = {
    ngafrAuth: [{ type: Input, args: ['ngafrAuth',] }],
    userLogOut: [{ type: Input, args: ['userLogOut',] }],
    hideDefaultLogOutButton: [{ type: Input, args: ['hideDefaultLogOutButton',] }],
    userLoggedInEvent: [{ type: Output, args: ['userLoggedInEvent',] }],
    userEvent: [{ type: Output, args: ['userEvent',] }]
};
if (false) {
    /** @type {?} */
    NgafrAuthDirective.prototype.ngafrAuth;
    /** @type {?} */
    NgafrAuthDirective.prototype.userLogOut;
    /** @type {?} */
    NgafrAuthDirective.prototype.hideDefaultLogOutButton;
    /** @type {?} */
    NgafrAuthDirective.prototype.userLoggedInEvent;
    /** @type {?} */
    NgafrAuthDirective.prototype.userEvent;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.authTemplateComponent;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    NgafrAuthDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdhZnItYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvbmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBVSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZMLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBUWhGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBUTNCLFlBQ1ksd0JBQWtELEVBQ2xELGFBQStCLEVBQy9CLEdBQXNCLEVBQ3RCLElBQWdDLEVBQ2hDLEVBQWM7UUFKZCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQUNoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVlEsNEJBQXVCLEdBQVksT0FBTyxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ3hFLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQVV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFFMUUsQ0FBQzs7OztJQUNELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLENBQUM7O2NBQ3RHLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFyQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVzthQUN4Qjs7OztZQVIyQix3QkFBd0I7WUFBRSxnQkFBZ0I7WUFBRSxpQkFBaUI7WUFEaEYsMEJBQTBCO1lBQ3FGLFVBQVU7Ozt3QkFVN0gsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLEtBQUssU0FBQyxZQUFZO3NDQUNsQixLQUFLLFNBQUMseUJBQXlCO2dDQUMvQixNQUFNLFNBQUMsbUJBQW1CO3dCQUMxQixNQUFNLFNBQUMsV0FBVzs7OztJQUpuQix1Q0FBdUM7O0lBQ3ZDLHdDQUF5Qzs7SUFDekMscURBQTZFOztJQUM3RSwrQ0FBNkY7O0lBQzdGLHVDQUE2RTs7Ozs7SUFDN0UsbURBQTREOzs7OztJQUd4RCxzREFBMEQ7Ozs7O0lBQzFELDJDQUF1Qzs7Ozs7SUFDdkMsaUNBQThCOzs7OztJQUM5QixrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYWZyQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25nYWZyLWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ2FmckF1dGhdJyxcclxuICAgIGV4cG9ydEFzOiAnbmdhZnJBdXRoJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdhZnJBdXRoRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCAgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBASW5wdXQoJ25nYWZyQXV0aCcpIG5nYWZyQXV0aCA6IHN0cmluZzsgXHJcbiAgICBASW5wdXQoJ3VzZXJMb2dPdXQnKSB1c2VyTG9nT3V0IDogc3RyaW5nOyBcclxuICAgIEBJbnB1dCgnaGlkZURlZmF1bHRMb2dPdXRCdXR0b24nKSBoaWRlRGVmYXVsdExvZ091dEJ1dHRvbiA6IHN0cmluZyA9ICdmYWxzZSc7IFxyXG4gICAgQE91dHB1dCgndXNlckxvZ2dlZEluRXZlbnQnKSB1c2VyTG9nZ2VkSW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpc0xvZ2dlZEluOiBib29sZWFuIH0+KCk7XHJcbiAgICBAT3V0cHV0KCd1c2VyRXZlbnQnKSB1c2VyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdXNlcjogZmlyZWJhc2UuVXNlciB9PigpO1xyXG4gICAgcHJpdmF0ZSBhdXRoVGVtcGxhdGVDb21wb25lbnQ6IE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aDogTmdhZnJBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7IFxyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dnZWRJbi5zdWJzY3JpYmUoaXNMb2dnZWRJbiA9PiB0aGlzLnVzZXJMb2dnZWRJbkV2ZW50LmVtaXQoeyBpc0xvZ2dlZEluOiBpc0xvZ2dlZEluIH0pKTtcclxuICAgICAgICB0aGlzLmF1dGgudXNlci5zdWJzY3JpYmUodXNlciA9PiB0aGlzLnVzZXJFdmVudC5lbWl0KHsgdXNlcjogdXNlciB9KSk7XHJcblxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXV0aC5oaWRlTG9nT3V0QnV0dG9uKEpTT04ucGFyc2UodGhpcy5oaWRlRGVmYXVsdExvZ091dEJ1dHRvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLnZpZXdDb250YWluZXIuaW5qZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuYXV0aFRlbXBsYXRlQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5hdXRoVGVtcGxhdGVDb21wb25lbnQubmdhZnJBdXRoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==