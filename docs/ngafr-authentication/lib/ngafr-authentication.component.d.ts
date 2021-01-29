import { TemplateRef, ChangeDetectorRef } from '@angular/core';
import { NgafrAuthenticationService } from './ngafr-authentication.service';
import * as ɵngcc0 from '@angular/core';
export declare class NgafrAuthenticationComponent {
    ngafrAuth: NgafrAuthenticationService;
    private cdr;
    ngafrAuthElement: TemplateRef<any>;
    loggedIn: boolean;
    hideLogOutButton: boolean;
    constructor(ngafrAuth: NgafrAuthenticationService, cdr: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgafrAuthenticationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgafrAuthenticationComponent, "lib-ngafr-authentication", never, {}, {}, never, never>;
}

//# sourceMappingURL=ngafr-authentication.component.d.ts.map