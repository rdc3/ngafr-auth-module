/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { Directive, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter, Output, Input } from '@angular/core';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
export class NgafrAuthDirective {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainer
     * @param {?} cdr
     * @param {?} auth
     */
    constructor(componentFactoryResolver, viewContainer, cdr, auth) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        this.auth = auth;
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
        if (this.hideDefaultLogOutButton.toLowerCase() !== 'true' || this.hideDefaultLogOutButton.toLowerCase() !== 'false')
            this.hideDefaultLogOutButton = 'false';
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
    { type: NgafrAuthenticationService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdhZnItYXV0aGVudGljYXRpb24vc3JjL2xpYi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQ0gsU0FBUyxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUN4RSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPaEYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQVEzQixZQUNZLHdCQUFrRCxFQUNsRCxhQUErQixFQUMvQixHQUFzQixFQUN0QixJQUFnQztRQUhoQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQVRWLDRCQUF1QixHQUFZLE9BQU8sQ0FBQztRQUNoRCxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUN4RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFTaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPO1lBQy9HLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0UsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDOztjQUN0RyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBdENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFdBQVc7YUFDeEI7Ozs7WUFWYyx3QkFBd0I7WUFBRSxnQkFBZ0I7WUFBRSxpQkFBaUI7WUFGbkUsMEJBQTBCOzs7d0JBYzlCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsWUFBWTtzQ0FDbEIsS0FBSyxTQUFDLHlCQUF5QjtnQ0FDL0IsTUFBTSxTQUFDLG1CQUFtQjt3QkFDMUIsTUFBTSxTQUFDLFdBQVc7Ozs7SUFKbkIsdUNBQXVDOztJQUN2Qyx3Q0FBeUM7O0lBQ3pDLHFEQUE2RTs7SUFDN0UsK0NBQTZGOztJQUM3Rix1Q0FBb0U7Ozs7O0lBQ3BFLG1EQUE0RDs7Ozs7SUFHeEQsc0RBQTBEOzs7OztJQUMxRCwyQ0FBdUM7Ozs7O0lBQ3ZDLGlDQUE4Qjs7Ozs7SUFDOUIsa0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdhZnJBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL25nYWZyLWF1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQGZpcmViYXNlL2F1dGgtdHlwZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ2FmckF1dGhdJyxcclxuICAgIGV4cG9ydEFzOiAnbmdhZnJBdXRoJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdhZnJBdXRoRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCAgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBASW5wdXQoJ25nYWZyQXV0aCcpIG5nYWZyQXV0aCA6IHN0cmluZzsgXHJcbiAgICBASW5wdXQoJ3VzZXJMb2dPdXQnKSB1c2VyTG9nT3V0IDogc3RyaW5nOyBcclxuICAgIEBJbnB1dCgnaGlkZURlZmF1bHRMb2dPdXRCdXR0b24nKSBoaWRlRGVmYXVsdExvZ091dEJ1dHRvbiA6IHN0cmluZyA9ICdmYWxzZSc7IFxyXG4gICAgQE91dHB1dCgndXNlckxvZ2dlZEluRXZlbnQnKSB1c2VyTG9nZ2VkSW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpc0xvZ2dlZEluOiBib29sZWFuIH0+KCk7XHJcbiAgICBAT3V0cHV0KCd1c2VyRXZlbnQnKSB1c2VyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdXNlcjogVXNlciB9PigpO1xyXG4gICAgcHJpdmF0ZSBhdXRoVGVtcGxhdGVDb21wb25lbnQ6IE5nYWZyQXV0aGVudGljYXRpb25Db21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aDogTmdhZnJBdXRoZW50aWNhdGlvblNlcnZpY2UpXHJcbiAgICB7IFxyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dnZWRJbi5zdWJzY3JpYmUoaXNMb2dnZWRJbiA9PiB0aGlzLnVzZXJMb2dnZWRJbkV2ZW50LmVtaXQoeyBpc0xvZ2dlZEluOiBpc0xvZ2dlZEluIH0pKTtcclxuICAgICAgICB0aGlzLmF1dGgudXNlci5zdWJzY3JpYmUodXNlciA9PiB0aGlzLnVzZXJFdmVudC5lbWl0KHsgdXNlcjogdXNlciB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmhpZGVEZWZhdWx0TG9nT3V0QnV0dG9uLnRvTG93ZXJDYXNlKCkgIT09ICd0cnVlJyB8fCB0aGlzLmhpZGVEZWZhdWx0TG9nT3V0QnV0dG9uLnRvTG93ZXJDYXNlKCkgIT09ICdmYWxzZScpXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURlZmF1bHRMb2dPdXRCdXR0b24gPSAnZmFsc2UnO1xyXG4gICAgICAgIHRoaXMuYXV0aC5oaWRlTG9nT3V0QnV0dG9uKEpTT04ucGFyc2UodGhpcy5oaWRlRGVmYXVsdExvZ091dEJ1dHRvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLnZpZXdDb250YWluZXIuaW5qZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuYXV0aFRlbXBsYXRlQ29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5hdXRoVGVtcGxhdGVDb21wb25lbnQubmdhZnJBdXRoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==