/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngafr-authentication.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgafrAuthenticationService } from './ngafr-authentication.service';
import { Directive, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EventEmitter, Output, Input, ElementRef } from '@angular/core';
import { NgafrAuthenticationComponent } from './ngafr-authentication.component';
var NgafrAuthDirective = /** @class */ (function () {
    function NgafrAuthDirective(componentFactoryResolver, viewContainer, cdr, auth, el) {
        var _this = this;
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
        function (isLoggedIn) { return _this.userLoggedInEvent.emit({ isLoggedIn: isLoggedIn }); }));
        this.auth.user.subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return _this.userEvent.emit({ user: user }); }));
    }
    /**
     * @return {?}
     */
    NgafrAuthDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.auth.hideLogOutButton(JSON.parse(this.hideDefaultLogOutButton));
    };
    /**
     * @return {?}
     */
    NgafrAuthDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgafrAuthenticationComponent);
        /** @type {?} */
        var componentRef = componentFactory.create(this.viewContainer.injector);
        this.authTemplateComponent = componentRef.instance;
        this.viewContainer.createEmbeddedView(this.authTemplateComponent.ngafrAuthElement);
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NgafrAuthDirective.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.auth.logout();
    };
    NgafrAuthDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngafrAuth]',
                    exportAs: 'ngafrAuth'
                },] }
    ];
    /** @nocollapse */
    NgafrAuthDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: NgafrAuthenticationService },
        { type: ElementRef }
    ]; };
    NgafrAuthDirective.propDecorators = {
        ngafrAuth: [{ type: Input, args: ['ngafrAuth',] }],
        userLogOut: [{ type: Input, args: ['userLogOut',] }],
        hideDefaultLogOutButton: [{ type: Input, args: ['hideDefaultLogOutButton',] }],
        userLoggedInEvent: [{ type: Output, args: ['userLoggedInEvent',] }],
        userEvent: [{ type: Output, args: ['userEvent',] }]
    };
    return NgafrAuthDirective;
}());
export { NgafrAuthDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdhZnItYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvbmdhZnItYXV0aGVudGljYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBVSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZMLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSWhGO0lBWUksNEJBQ1ksd0JBQWtELEVBQ2xELGFBQStCLEVBQy9CLEdBQXNCLEVBQ3RCLElBQWdDLEVBQ2hDLEVBQWM7UUFMMUIsaUJBVUM7UUFUVyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQUNoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVlEsNEJBQXVCLEdBQVksT0FBTyxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ3hFLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQVV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQXZELENBQXVELEVBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7SUFFMUUsQ0FBQzs7OztJQUNELDRDQUFlOzs7SUFBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1lBQ1UsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDOztZQUN0RyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbUNBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFyQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsV0FBVztpQkFDeEI7Ozs7Z0JBUjJCLHdCQUF3QjtnQkFBRSxnQkFBZ0I7Z0JBQUUsaUJBQWlCO2dCQURoRiwwQkFBMEI7Z0JBQ3FGLFVBQVU7Ozs0QkFVN0gsS0FBSyxTQUFDLFdBQVc7NkJBQ2pCLEtBQUssU0FBQyxZQUFZOzBDQUNsQixLQUFLLFNBQUMseUJBQXlCO29DQUMvQixNQUFNLFNBQUMsbUJBQW1COzRCQUMxQixNQUFNLFNBQUMsV0FBVzs7SUE2QnZCLHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FsQ1ksa0JBQWtCOzs7SUFDM0IsdUNBQXVDOztJQUN2Qyx3Q0FBeUM7O0lBQ3pDLHFEQUE2RTs7SUFDN0UsK0NBQTZGOztJQUM3Rix1Q0FBNkU7Ozs7O0lBQzdFLG1EQUE0RDs7Ozs7SUFHeEQsc0RBQTBEOzs7OztJQUMxRCwyQ0FBdUM7Ozs7O0lBQ3ZDLGlDQUE4Qjs7Ozs7SUFDOUIsa0NBQXdDOzs7OztJQUN4QyxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2FmckF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vbmdhZnItYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZ2Fmci1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbmdhZnJBdXRoXScsXHJcbiAgICBleHBvcnRBczogJ25nYWZyQXV0aCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nYWZyQXV0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KCduZ2FmckF1dGgnKSBuZ2FmckF1dGggOiBzdHJpbmc7IFxyXG4gICAgQElucHV0KCd1c2VyTG9nT3V0JykgdXNlckxvZ091dCA6IHN0cmluZzsgXHJcbiAgICBASW5wdXQoJ2hpZGVEZWZhdWx0TG9nT3V0QnV0dG9uJykgaGlkZURlZmF1bHRMb2dPdXRCdXR0b24gOiBzdHJpbmcgPSAnZmFsc2UnOyBcclxuICAgIEBPdXRwdXQoJ3VzZXJMb2dnZWRJbkV2ZW50JykgdXNlckxvZ2dlZEluRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXNMb2dnZWRJbjogYm9vbGVhbiB9PigpO1xyXG4gICAgQE91dHB1dCgndXNlckV2ZW50JykgdXNlckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHVzZXI6IGZpcmViYXNlLlVzZXIgfT4oKTtcclxuICAgIHByaXZhdGUgYXV0aFRlbXBsYXRlQ29tcG9uZW50OiBOZ2FmckF1dGhlbnRpY2F0aW9uQ29tcG9uZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIGF1dGg6IE5nYWZyQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkgeyBcclxuICAgICAgICB0aGlzLmF1dGgubG9nZ2VkSW4uc3Vic2NyaWJlKGlzTG9nZ2VkSW4gPT4gdGhpcy51c2VyTG9nZ2VkSW5FdmVudC5lbWl0KHsgaXNMb2dnZWRJbjogaXNMb2dnZWRJbiB9KSk7XHJcbiAgICAgICAgdGhpcy5hdXRoLnVzZXIuc3Vic2NyaWJlKHVzZXIgPT4gdGhpcy51c2VyRXZlbnQuZW1pdCh7IHVzZXI6IHVzZXIgfSkpO1xyXG5cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmF1dGguaGlkZUxvZ091dEJ1dHRvbihKU09OLnBhcnNlKHRoaXMuaGlkZURlZmF1bHRMb2dPdXRCdXR0b24pKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTmdhZnJBdXRoZW50aWNhdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUodGhpcy52aWV3Q29udGFpbmVyLmluamVjdG9yKTtcclxuICAgICAgICB0aGlzLmF1dGhUZW1wbGF0ZUNvbXBvbmVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuYXV0aFRlbXBsYXRlQ29tcG9uZW50Lm5nYWZyQXV0aEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=