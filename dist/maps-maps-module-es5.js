(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/maps/full-screen-map/full-screen-map.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maps/full-screen-map/full-screen-map.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Fullscreen Map Starts-->\n<section id=\"fullscreenMap\" class=\"mb-3\">\n    <div class=\"row\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;\n        background-color: rgb(229, 227, 223);\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n\n        <agm-map \n        [latitude]=\"lat\"\n        [longitude]=\"lng\"\n        [zoom]=\"zoom\"\n        [disableDefaultUI]=\"false\"\n        [zoomControl]=\"false\"\n        (mapClick)=\"mapClicked($event)\" style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;\n        background-color: rgb(229, 227, 223);\">\n      \n        <agm-marker \n            *ngFor=\"let m of markers; let i = index\"\n            (markerClick)=\"clickedMarker(m.label, i)\"\n            [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\"\n            [label]=\"m.label\"\n            [markerDraggable]=\"m.draggable\"\n            (dragEnd)=\"markerDragEnd(m, $event)\">\n            \n          <agm-info-window>\n            <strong>InfoWindow content</strong>\n          </agm-info-window>\n          \n        </agm-marker>\n        \n        <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n            [radius]=\"50000\"\n            [fillColor]=\"'red'\"\n            [circleDraggable]=\"true\"\n            [editable]=\"true\">\n        </agm-circle>\n      \n      </agm-map>\n\n    </div>\n</section>\n<!--Fullscreen Map Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maps/google-map/google-map.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maps/google-map/google-map.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic google map starts-->\n<section id=\"map\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">Google Map</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-block mt-2\">\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                            <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\"></agm-marker>\n                            <agm-marker [latitude]=\"lat2\" [longitude]=\"lng2\"></agm-marker>\n                            <agm-circle [latitude]=\"lat\" [longitude]=\"lng + 0.7\" [radius]=\"40000\" [fillColor]=\"'red'\" [circleDraggable]=\"true\" [editable]=\"true\">\n                            </agm-circle>\n                        </agm-map>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Basic google map ends-->"

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvZnVsbC1zY3JlZW4tbWFwL2Z1bGwtc2NyZWVuLW1hcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: FullScreenMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapComponent", function() { return FullScreenMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            }
        ];
    }
    FullScreenMapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    FullScreenMapComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    FullScreenMapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    FullScreenMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-screen-map',
            template: __webpack_require__(/*! raw-loader!./full-screen-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/maps/full-screen-map/full-screen-map.component.html"),
            styles: [__webpack_require__(/*! ./full-screen-map.component.scss */ "./src/app/maps/full-screen-map/full-screen-map.component.scss")]
        })
    ], FullScreenMapComponent);
    return FullScreenMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9nb29nbGUtbWFwL0M6XFxNeSBGaWxlc1xcTXkgd29ya3NcXGFuZ3VsYXJcXGZyZWVsYW5jZVxcY29ob3JhL3NyY1xcYXBwXFxtYXBzXFxnb29nbGUtbWFwXFxnb29nbGUtbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXBzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hcHMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogNTAwcHg7XG59IiwiYWdtLW1hcCB7XG4gIGhlaWdodDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.lat1 = 51.373858;
        this.lng1 = 7.215982;
        this.lat2 = 52.373858;
        this.lng2 = 8.215982;
    }
    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/maps/google-map/google-map.component.html"),
            styles: [__webpack_require__(/*! ./google-map.component.scss */ "./src/app/maps/google-map/google-map.component.scss")]
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_3__["FullScreenMapComponent"],
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/maps/maps-routing.module.ts");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");







var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"]
            ],
            declarations: [
                _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_5__["FullScreenMapComponent"],
                _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module-es5.js.map