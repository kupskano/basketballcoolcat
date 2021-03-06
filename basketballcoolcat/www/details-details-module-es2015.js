(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-card class=\"ion-margin-bottom\">\r\n      <ion-img src=\"{{imageUrl}}\"></ion-img>\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center ion-margin-bottom\">\r\n            <ion-card-title>{{title}}</ion-card-title>\r\n            <ion-card-subtitle>{{description}}</ion-card-subtitle>\r\n            \r\n          </ion-col>\r\n          <!-- <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"speedometer-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"snow\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <!-- <h6>Select Dates</h6> -->\r\n    <ion-item lines=\"none\">\r\n      <!-- <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon> -->\r\n      <ion-label class=\"ion-text-center\">\r\n        BASKETBALL FUNDAMENTAL\r\n        <!-- <ion-datetime placeholder=\"23-07-2020\" display-format=\"DD-MM-YYYY\"></ion-datetime> -->\r\n      </ion-label>\r\n      <!-- <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon> -->\r\n    </ion-item>\r\n\r\n    <!-- <h6>Pickup Location</h6>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <ion-input placeholder=\"Muscat\"></ion-input>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item> -->\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/details/details-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #7879FF;\n  color: #FFFFFF;\n  padding-bottom: 200px;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  margin-top: -180px;\n  z-index: 10;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card ion-img {\n  width: 240px;\n  margin: -60px auto auto auto;\n}\n\nion-item {\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n}\n\nion-item ion-icon:first-of-type {\n  background: #ed576b;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\nion-item ion-icon:last-of-type {\n  background: #316dd0;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9DOlxcVXNlcnNcXFNhbnRvc1xcYW5ndWxhcmFwcFxcMjYtMTEtMjAyMEFQUFxcYmFza2V0YmFsbGNvb2xjYXQvc3JjXFxhcHBcXGRldGFpbHNcXGRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0FDQ1I7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGdEQUFBO0FDREo7O0FER0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzc4NzlGRjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTgwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTYwcHggYXV0byBhdXRvIGF1dG87XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAgIGlvbi1pY29uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZDU3NmI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb246bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzE2ZGQwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG5cclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzg3OUZGO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IC0xODBweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmlvbi1jYXJkIGlvbi1pbWcge1xuICB3aWR0aDogMjQwcHg7XG4gIG1hcmdpbjogLTYwcHggYXV0byBhdXRvIGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuaW9uLWl0ZW0gaW9uLWljb246Zmlyc3Qtb2YtdHlwZSB7XG4gIGJhY2tncm91bmQ6ICNlZDU3NmI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24taXRlbSBpb24taWNvbjpsYXN0LW9mLXR5cGUge1xuICBiYWNrZ3JvdW5kOiAjMzE2ZGQwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DetailsPage = class DetailsPage {
    constructor(actRoute) {
        this.actRoute = actRoute;
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.title = this.actRoute.snapshot.paramMap.get('title');
        this.description = this.actRoute.snapshot.paramMap.get('description');
        this.imageUrl = this.actRoute.snapshot.paramMap.get('imageUrl');
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map