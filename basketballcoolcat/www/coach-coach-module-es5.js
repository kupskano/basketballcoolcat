function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coach-coach-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coach/coach.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coach/coach.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoachCoachPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n   <ion-label>COACH ROLE</ion-label>\n   <ion-buttons slot=\"start\">\n    <ion-back-button text=\"\" icon=\"chevron-back\" defaultHref=\"/home\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n\n  <ion-card-content >\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-card-title>Basketball coaching</ion-card-title>\n        <ion-card-subtitle>\n          typically encompasses the improvement of individual and team offensive and defensive skills, as well as overall physical conditioning. Coaches also have the responsibility to improve their team by player development, strategy, and in-game management.\n        </ion-card-subtitle>\n       \n      </ion-col>\n      <ion-col size=\"4\">\n        \n        <ion-img src=\"assets/resources/ball.jpg\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/coach/coach-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/coach/coach-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: CoachPageRoutingModule */

  /***/
  function srcAppCoachCoachRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachPageRoutingModule", function () {
      return CoachPageRoutingModule;
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


    var _coach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coach.page */
    "./src/app/coach/coach.page.ts");

    var routes = [{
      path: '',
      component: _coach_page__WEBPACK_IMPORTED_MODULE_3__["CoachPage"]
    }];

    var CoachPageRoutingModule = function CoachPageRoutingModule() {
      _classCallCheck(this, CoachPageRoutingModule);
    };

    CoachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoachPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/coach/coach.module.ts":
  /*!***************************************!*\
    !*** ./src/app/coach/coach.module.ts ***!
    \***************************************/

  /*! exports provided: CoachPageModule */

  /***/
  function srcAppCoachCoachModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachPageModule", function () {
      return CoachPageModule;
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


    var _coach_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./coach-routing.module */
    "./src/app/coach/coach-routing.module.ts");
    /* harmony import */


    var _coach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coach.page */
    "./src/app/coach/coach.page.ts");

    var CoachPageModule = function CoachPageModule() {
      _classCallCheck(this, CoachPageModule);
    };

    CoachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coach_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoachPageRoutingModule"]],
      declarations: [_coach_page__WEBPACK_IMPORTED_MODULE_6__["CoachPage"]]
    })], CoachPageModule);
    /***/
  },

  /***/
  "./src/app/coach/coach.page.scss":
  /*!***************************************!*\
    !*** ./src/app/coach/coach.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoachCoachPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: #f6f6f6;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29hY2gvQzpcXFVzZXJzXFxTYW50b3NcXGFuZ3VsYXJhcHBcXDI2LTExLTIwMjBBUFBcXGJhc2tldGJhbGxjb29sY2F0L3NyY1xcYXBwXFxjb2FjaFxcY29hY2gucGFnZS5zY3NzIiwic3JjL2FwcC9jb2FjaC9jb2FjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoL2NvYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIFxyXG4gICAgXHJcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/coach/coach.page.ts":
  /*!*************************************!*\
    !*** ./src/app/coach/coach.page.ts ***!
    \*************************************/

  /*! exports provided: CoachPage */

  /***/
  function srcAppCoachCoachPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachPage", function () {
      return CoachPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CoachPage = /*#__PURE__*/function () {
      function CoachPage(modalController) {
        _classCallCheck(this, CoachPage);

        this.modalController = modalController;
      }

      _createClass(CoachPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalController.dismiss();
        }
      }]);

      return CoachPage;
    }();

    CoachPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CoachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coach',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./coach.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coach/coach.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./coach.page.scss */
      "./src/app/coach/coach.page.scss"))["default"]]
    })], CoachPage);
    /***/
  }
}]);
//# sourceMappingURL=coach-coach-module-es5.js.map