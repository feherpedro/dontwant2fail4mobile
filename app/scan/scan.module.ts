import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ScanRoutingModule } from "./scan-routing.module";
import { ScanComponent } from "./scan.component";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { BarcodeScanner } from "nativescript-barcodescanner";
import { ProductService } from "~/scan/product.service";

@NgModule({
    imports: [
        NativeScriptHttpClientModule,
        ScanRoutingModule
    ],
    declarations: [
        ScanComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        NativeScriptHttpClientModule,
        ProductService,
        BarcodeScanner
    ]
})
export class ScanModule { }
