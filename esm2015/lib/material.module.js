import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialComponent } from './material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnsureImportedOnceModule } from '@easylib/core';
export class MaterialModule extends EnsureImportedOnceModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2Vhc3lsaWIvbWF0ZXJpYWwvc3JjLyIsInNvdXJjZXMiOlsibGliL21hdGVyaWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZXpELE1BQU0sT0FBTyxjQUFlLFNBQVEsd0JBQXdCO0lBQzFELHlEQUF5RDtJQUN6RCxZQUFvQyxNQUFzQjtRQUN4RCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQix1QkFBdUI7aUJBQ3hCO2FBQ0Y7OztZQUc2QyxjQUFjLHVCQUE3QyxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi9tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRW5zdXJlSW1wb3J0ZWRPbmNlTW9kdWxlIH0gZnJvbSAnQGVhc3lsaWIvY29yZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0ZXJpYWxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgZXh0ZW5kcyBFbnN1cmVJbXBvcnRlZE9uY2VNb2R1bGUge1xuICAvLyBTdG9wIHRoZSBvdGhlciBtb2R1bGVzIGZyb20gaW1wb3J0aW5nIHRoZSBjb3JlIG1vZHVsZS5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgbW9kdWxlOiBNYXRlcmlhbE1vZHVsZSApIHtcbiAgICBzdXBlcihtb2R1bGUpO1xuICB9XG59XG4iXX0=