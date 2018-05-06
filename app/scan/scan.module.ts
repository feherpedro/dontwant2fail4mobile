import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ScanRoutingModule } from "./scan-routing.module";
import { ScanComponent } from "./scan.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ScanRoutingModule
    ],
    declarations: [
        ScanComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScanModule { }
