import { ɵɵdefineInjectable, Injectable, Component, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnsureImportedOnceModule } from '@easylib/core';

class MaterialService {
    constructor() { }
}
MaterialService.ɵprov = ɵɵdefineInjectable({ factory: function MaterialService_Factory() { return new MaterialService(); }, token: MaterialService, providedIn: "root" });
MaterialService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MaterialService.ctorParameters = () => [];

class MaterialComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaterialComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-material',
                template: `
    <p>
      material works!
    </p>
  `
            },] }
];
MaterialComponent.ctorParameters = () => [];

class MaterialModule extends EnsureImportedOnceModule {
    // Stop the other modules from importing the core module.
    constructor(module) {
        super(module);
    }
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MaterialComponent
                ],
                imports: [
                    BrowserAnimationsModule,
                ],
                exports: [
                    MaterialComponent,
                    BrowserAnimationsModule,
                ]
            },] }
];
MaterialModule.ctorParameters = () => [
    { type: MaterialModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/*
 * Public API Surface of material
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaterialComponent, MaterialModule, MaterialService };
//# sourceMappingURL=easylib-material.js.map
