import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ScanRoutingModule } from "./scan-routing.module";
import { ScanComponent } from "./scan.component";

import { BarcodeScanner } from "nativescript-barcodescanner";

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
    ],
    providers: [
        BarcodeScanner
    ]
})
export class ScanModule { }
