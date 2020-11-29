function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["halfmodal-halfmodal-module"], {
  /***/
  "./src/app/halfmodal/halfmodal-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/halfmodal/halfmodal-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HalfmodalPageRoutingModule */

  /***/
  function srcAppHalfmodalHalfmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HalfmodalPageRoutingModule", function () {
      return HalfmodalPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _halfmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./halfmodal.page */
    "./src/app/halfmodal/halfmodal.page.ts");

    var routes = [{
      path: '',
      component: _halfmodal_page__WEBPACK_IMPORTED_MODULE_3__["HalfmodalPage"]
    }];

    var HalfmodalPageRoutingModule = function HalfmodalPageRoutingModule() {
      _classCallCheck(this, HalfmodalPageRoutingModule);
    };

    HalfmodalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HalfmodalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/halfmodal/halfmodal.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/halfmodal/halfmodal.module.ts ***!
    \***********************************************/

  /*! exports provided: HalfmodalPageModule */

  /***/
  function srcAppHalfmodalHalfmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HalfmodalPageModule", function () {
      return HalfmodalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _halfmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./halfmodal-routing.module */
    "./src/app/halfmodal/halfmodal-routing.module.ts");
    /* harmony import */


    var _halfmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./halfmodal.page */
    "./src/app/halfmodal/halfmodal.page.ts");

    var HalfmodalPageModule = function HalfmodalPageModule() {
      _classCallCheck(this, HalfmodalPageModule);
    };

    HalfmodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _halfmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["HalfmodalPageRoutingModule"]],
      declarations: [_halfmodal_page__WEBPACK_IMPORTED_MODULE_6__["HalfmodalPage"]]
    })], HalfmodalPageModule);
    /***/
  }
}]);
//# sourceMappingURL=halfmodal-halfmodal-module-es5.js.map