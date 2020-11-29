function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <!-- <ion-avatar slot=\"end\">\r\n      <img src=\"assets/profile.jpg\">\r\n    </ion-avatar> -->\r\n    <ion-button fill=\"clear\" color=\"light\" (click)=\"presentHalfModal()\">\r\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <div class=\"ion-padding-start ion-padding-bottom\">\r\n      <ion-label>\r\n        <h2>Basketball Coolcat</h2>\r\n      </ion-label>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"10\">\r\n          <ion-searchbar placeholder=\"Search...\" searchIcon=\"search-outline\" (ionInput)=\"filterData($event)\"></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-button color=\"light\" fill=\"clear\" (click)=\"presentModal()\">\r\n            <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-row class=\"ion-align-items-center ion-padding-horizontal\">\r\n      <ion-col size=\"6\">\r\n        <h5>9 Results</h5>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" color=\"dark\">\r\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col> -->\r\n    </ion-row>\r\n\r\n    <ion-card *ngFor=\"let basketball of basketballs\"> \r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <!-- <ion-badge color=\"warning\" mode=\"ios\">\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              4.5\r\n            </ion-badge> -->\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"success\">25 Deals</ion-card-subtitle>\r\n          </ion-col> -->\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" color=\"dark\">\r\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"{{basketball.imageUrl}}\"></ion-img>\r\n        <br>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-card-title>{{basketball.title}}</ion-card-title>\r\n            <ion-card-subtitle>Basketball Fundamental</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" (click)=\"fundamentalsDetails(basketball)\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <div class=\"ion-padding\">\r\n  <ion-badge class=\"ion-text-center\" color=\"danger\" mode=\"ios\">Habib Dev.</ion-badge>\r\n</div> -->";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: #7879FF;\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\nion-item:last-of-type {\n  border-radius: 0 0 20% 20%;\n}\nion-item:last-of-type div {\n  padding-bottom: 20px;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: 0.96;\n  padding: 0;\n  margin: 12px 0;\n}\nion-col {\n  padding: 0;\n}\nion-content {\n  --background: #f6f6f6;\n}\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n}\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNhbnRvc1xcYW5ndWxhcmFwcFxcMjYtMTEtMjAyMEFQUFxcYmFza2V0YmFsbGNvb2xjYXQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKO0FERUE7RUFJRSwwQkFBQTtBQ0ZGO0FEREU7RUFDRSxvQkFBQTtBQ0dKO0FERUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFVBQUE7QUNDRjtBRE1BO0VBQ0UscUJBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQ0hGO0FES0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICM3ODc5RkY7XHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtOmxhc3Qtb2YtdHlwZSB7XHJcbiAgZGl2IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvcGFjaXR5OiAuOTY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4vLyAgIGNvbG9yOiAjMzE2ZGQwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzc4NzlGRjtcbn1cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMCUgMjAlO1xufVxuaW9uLWl0ZW06bGFzdC1vZi10eXBlIGRpdiB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuOTY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5pb24tY2FyZCBpb24taW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _halfmodal_halfmodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../halfmodal/halfmodal.page */
    "./src/app/halfmodal/halfmodal.page.ts");
    /* harmony import */


    var _modal_menu_modal_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modal-menu/modal-menu.page */
    "./src/app/modal-menu/modal-menu.page.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, loadingController, modalController, routerOutlet) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.basketballs = [{
          "id": 1,
          "title": "Layups",
          "description": "Lay-ups are the backbone of any team offense and every player's offensive repertoire. Without the threat of a lay-up, all other shots would become next to impossible if you knew that lay-ups were not allowed? What offense, what screens would be set, what dribble or one – on – one move would you make if you could not take a lay-up?",
          "imageUrl": '../assets/resources/layups.jpg'
        }, {
          "id": 2,
          "title": "Shooting",
          "description": "Shooting the basketball is the MOST important skill for you master. That's why we developed this comprehensive basketball shooting resource for both players and coaches.",
          "imageUrl": '../assets/resources/shooting.jpg'
        }, {
          "id": 3,
          "title": "Foul Shooting",
          "description": "It is almost impossible to overemphasize the importance of free throws, both to teams and to players. If you have a player who can make just 4 baskets per game and add 4 free throws to his total, you have a double-figure scorer. Adding fifteen points from the free throw line to your team's total would create a very difficult obstacle for you opponents to overcome.",
          "imageUrl": '../assets/resources/foul_shooting.jpg'
        }, {
          "id": 4,
          "title": "Passing",
          "description": "Basketball is a team game. By definition, that means all players are involved with the process of playing the game and should function as one. One of the primary skills created to accomplish this is passing. Yet, passing remains one of the most under-taught, under-emphasized, and under drilled skill in the game!!",
          "imageUrl": '../assets/resources/pass.png'
        }, {
          "id": 5,
          "title": "Dribbling",
          "description": "Most coaches use dribbling and ball handling interchangeably. Though they are linked, the 2 skills are definitely separate. Dribbling and controlling the ball is a skill that can be practiced alone and is separate from the other ball skills on the court. Ball handling, however, involves knowledge of the game and integrates dribbling, passing and decision-making.",
          "imageUrl": '../assets/resources/dribbling.jpg'
        }, {
          "id": 6,
          "title": "Jump Stop",
          "description": "You might find this hard to believe, but if done properly, the Jump Stop Drill can make a huge difference in your players performance, both young and old. This is an absolutely critical drill to player development. My old high school coach (who is a now a very successful college coach) made us do a variation of the jump stop drill every single day.",
          "imageUrl": '../assets/resources/jumpstop.jpg'
        }, {
          "id": 7,
          "title": "Jab steps",
          "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent. Players get mixed messages when they come to practice after a summer of working on individual skills and we ask them to integrate those skills into a team concept.",
          "imageUrl": '../assets/resources/jabsteps.jpg'
        }, {
          "id": 8,
          "title": "Defense",
          "description": "Stay on your feet and do NOT go for shot fakes. When you go for fakes, you are beat, Do not lunge for the ball and get off balance, Stay in a WIDE stance. If your feet get too close together, you will lose balance, Stay in a LOW and athletic stance. If you stand upright, you will more easily lose balance, Take short steps when sliding. If your feet come too close together, you will lose balance.  ",
          "imageUrl": '../assets/resources/defense.png'
        }, {
          "id": 9,
          "title": "Rebounding",
          "description": "Few statistics influence the outcome of the game as do rebounding stats. Few statistics are indicators of as many things as are rebounding stats. Few actions affect more parts of the game as rebounding. Rebounding can be an indicator of how hard you are playing, team focus, how well you are shooting, etc. The other benefits are rewards for playing good defense by getting the ball off the defensive glass and lay-ups for grabbing offensive rebounds. Both situation feed your confidence and allow you to play better.",
          "imageUrl": '../assets/resources/rebounding.jpg'
        }];
      }

      _createClass(HomePage, [{
        key: "filterData",
        value: function filterData(event) {
          this.basketballs = [{
            "id": 1,
            "title": "Layups",
            "description": "Lay-ups are the backbone of any team offense and every player's offensive repertoire. Without the threat of a lay-up, all other shots would become next to impossible if you knew that lay-ups were not allowed? What offense, what screens would be set, what dribble or one – on – one move would you make if you could not take a lay-up?",
            "imageUrl": '../assets/resources/layups.jpg'
          }, {
            "id": 2,
            "title": "Shooting",
            "description": "Shooting the basketball is the MOST important skill for you master. That's why we developed this comprehensive basketball shooting resource for both players and coaches.",
            "imageUrl": '../assets/resources/shooting.jpg'
          }, {
            "id": 3,
            "title": "Foul Shooting",
            "description": "It is almost impossible to overemphasize the importance of free throws, both to teams and to players. If you have a player who can make just 4 baskets per game and add 4 free throws to his total, you have a double-figure scorer. Adding fifteen points from the free throw line to your team's total would create a very difficult obstacle for you opponents to overcome.",
            "imageUrl": '../assets/resources/foul_shooting.jpg'
          }, {
            "id": 4,
            "title": "Passing",
            "description": "Basketball is a team game. By definition, that means all players are involved with the process of playing the game and should function as one. One of the primary skills created to accomplish this is passing. Yet, passing remains one of the most under-taught, under-emphasized, and under drilled skill in the game!!",
            "imageUrl": '../assets/resources/pass.png'
          }, {
            "id": 5,
            "title": "Dribbling",
            "description": "Most coaches use dribbling and ball handling interchangeably. Though they are linked, the 2 skills are definitely separate. Dribbling and controlling the ball is a skill that can be practiced alone and is separate from the other ball skills on the court. Ball handling, however, involves knowledge of the game and integrates dribbling, passing and decision-making.",
            "imageUrl": '../assets/resources/dribbling.jpg'
          }, {
            "id": 6,
            "title": "Jump Stop",
            "description": "You might find this hard to believe, but if done properly, the Jump Stop Drill can make a huge difference in your players performance, both young and old. This is an absolutely critical drill to player development. My old high school coach (who is a now a very successful college coach) made us do a variation of the jump stop drill every single day.",
            "imageUrl": '../assets/resources/jumpstop.jpg'
          }, {
            "id": 7,
            "title": "Jab steps",
            "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent. Players get mixed messages when they come to practice after a summer of working on individual skills and we ask them to integrate those skills into a team concept.",
            "imageUrl": '../assets/resources/jabsteps.jpg'
          }, {
            "id": 8,
            "title": "Defense",
            "description": "Stay on your feet and do NOT go for shot fakes. When you go for fakes, you are beat, Do not lunge for the ball and get off balance, Stay in a WIDE stance. If your feet get too close together, you will lose balance, Stay in a LOW and athletic stance. If you stand upright, you will more easily lose balance, Take short steps when sliding. If your feet come too close together, you will lose balance.  ",
            "imageUrl": '../assets/resources/defense.png'
          }, {
            "id": 9,
            "title": "Rebounding",
            "description": "Few statistics influence the outcome of the game as do rebounding stats. Few statistics are indicators of as many things as are rebounding stats. Few actions affect more parts of the game as rebounding. Rebounding can be an indicator of how hard you are playing, team focus, how well you are shooting, etc. The other benefits are rewards for playing good defense by getting the ball off the defensive glass and lay-ups for grabbing offensive rebounds. Both situation feed your confidence and allow you to play better.",
            "imageUrl": '../assets/resources/rebounding.jpg'
          }];
          var val = event.target.value;

          if (val && val.trim() !== '') {
            this.basketballs = this.basketballs.filter(function (basketball) {
              return basketball.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        }
      }, {
        key: "fundamentalsDetails",
        value: function fundamentalsDetails(basketball) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loadbasketball;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      duration: 3000
                    });

                  case 2:
                    loadbasketball = _context.sent;
                    _context.next = 5;
                    return loadbasketball.present().then(function () {
                      _this.router.navigate(['/details', {
                        'id': basketball.id,
                        'title': basketball.title,
                        'description': basketball.description,
                        'imageUrl': basketball.imageUrl
                      }]);

                      console.log(basketball);
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_menu_modal_menu_page__WEBPACK_IMPORTED_MODULE_5__["ModalMenuPage"],
                      cssClass: 'my-custom-class',
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentHalfModal",
        value: function presentHalfModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _halfmodal_halfmodal_page__WEBPACK_IMPORTED_MODULE_4__["HalfmodalPage"],
                      cssClass: 'half-modal'
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map