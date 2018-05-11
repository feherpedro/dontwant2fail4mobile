import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "ui/dialogs";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "scan", loadChildren: "./scan/scan.module#ScanModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Scan",
    moduleId: module.id,
    templateUrl: "./scan.component.html"
})
export class ScanComponent implements OnInit {

    private scanned = false;
    private scannedFormat = "";
    private scannedText = "";
    private confirmOptions: dialogs.ConfirmOptions = {};
    // orientation = require("nativescript-orientation");        formats: "QR_CODE, EAN_13",

    constructor(private barcodeScanner: BarcodeScanner) {
    }

    ngOnInit(): void {
    }

    onScan() {
        this.barcodeScanner.scan({
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: undefined,
            openSettingsIfPermissionWasPreviouslyDenied: true
        }).then((result) => {
            console.log("Formátum: " + result.format + ",\nTartalom: " + result.text);
            this.scanned = true;
            this.scannedFormat = result.format;
            this.scannedText = result.text;
            const confirmOptions: dialogs.ConfirmOptions = {
                title: "Scan eredménye",
                message: "Formátum: " + result.format + ",\nTartalom: " + result.text,
                okButtonText: "Tovább a " + result.text + " vonalkódú termékhez",
                cancelButtonText: "Vissza"
            };
            setTimeout(() => {
                dialogs.confirm(confirmOptions).then((action) => {
                    console.log("Dialog result: " + action);
                });
            }, 0);
        }, (errorMessage) => {
            console.log("Hiba a beolvasáskor: " + errorMessage);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
