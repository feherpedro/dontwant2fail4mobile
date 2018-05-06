import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "nativescript-barcodescanner";

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

    orientation = require("nativescript-orientation");

    constructor(private barcodeScanner: BarcodeScanner) {
    }

    ngOnInit(): void {
    }

    onScan() {
      this.barcodeScanner.scan({
        formats: "QR_CODE, EAN_13",
        showFlipCameraButton: true,
        preferFrontCamera: false,
        showTorchButton: true,
        beepOnScan: true,
        torchOn: false,
        resultDisplayDuration: 500,
        orientation: this.orientation,
        openSettingsIfPermissionWasPreviouslyDenied: true
      }).then((result) => {
            alert({
              title: "Scan eredménye",
              message: "Formátum: " + result.format + ",\nTartalom: " + result.text,
              okButtonText: "OK"
            });
          }, (errorMessage) => {
            console.log("Hiba a beolvasáskor: " + errorMessage);
          }
      );
    }
}
