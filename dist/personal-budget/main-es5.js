(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/priyareddy/Documents/pb-frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6g8o":
    /*!************************************!*\
      !*** ./src/app/authguard.guard.ts ***!
      \************************************/

    /*! exports provided: AuthguardGuard */

    /***/
    function g8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
        return AuthguardGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data.service */
      "R7Hv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthguardGuard = /*#__PURE__*/function () {
        function AuthguardGuard(dataservice, router) {
          _classCallCheck(this, AuthguardGuard);

          this.dataservice = dataservice;
          this.router = router;
        }

        _createClass(AuthguardGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.dataservice.verifyTokenPresence()) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthguardGuard;
      }();

      AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) {
        return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthguardGuard,
        factory: AuthguardGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["pb-about"]],
        decls: 2,
        vars: 0,
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DLXL":
    /*!**********************************************!*\
      !*** ./src/app/article/article.component.ts ***!
      \**********************************************/

    /*! exports provided: ArticleComponent */

    /***/
    function DLXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
        return ArticleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = [[["h1"]], [["div"]]];
      var _c1 = ["h1", "div"];

      var ArticleComponent = /*#__PURE__*/function () {
        function ArticleComponent() {
          _classCallCheck(this, ArticleComponent);
        }

        _createClass(ArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ArticleComponent;
      }();

      ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
        return new (t || ArticleComponent)();
      };

      ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleComponent,
        selectors: [["pb-article"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 0,
        template: function ArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "De4M":
    /*!****************************************************!*\
      !*** ./src/app/line-chart/line-chart.component.ts ***!
      \****************************************************/

    /*! exports provided: LineChartComponent */

    /***/
    function De4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
        return LineChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");

      var LineChartComponent = /*#__PURE__*/function () {
        function LineChartComponent(dataService) {
          _classCallCheck(this, LineChartComponent);

          this.dataService = dataService;
          this.dataSource = {
            datasets: [{
              label: 'Original Budget',
              data: [],
              fill: false,
              lineTension: 0.2,
              borderColor: "red",
              borderWidth: 1
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: []
          };
        }

        _createClass(LineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              console.log(res);

              for (var i = 0; i < res.length; i++) {
                _this.dataSource.datasets[0].data[i] = res[i].budget;
                _this.dataSource.labels[i] = res[i].title;
              }
            });
          }
        }, {
          key: "createChart",
          value: function createChart() {
            var ctx = document.getElementById("lineChart");
            var myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__(ctx, {
              type: 'line',
              data: this.dataSource
            });
          }
        }]);

        return LineChartComponent;
      }();

      LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
        return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
      };

      LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LineChartComponent,
        selectors: [["pb-line-chart"]],
        decls: 7,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-md-1"], [1, "col-md-10"], ["id", "barChart"]],
        template: function LineChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-line-chart',
            templateUrl: './line-chart.component.html',
            styleUrls: ['./line-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JW9C":
    /*!**************************************************!*\
      !*** ./src/app/max-chart/max-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: MaxChartComponent */

    /***/
    function JW9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxChartComponent", function () {
        return MaxChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");

      var MaxChartComponent = /*#__PURE__*/function () {
        function MaxChartComponent(dataService) {
          _classCallCheck(this, MaxChartComponent);

          this.dataService = dataService;
          this.dataSource = {
            datasets: [{
              data: [],
              backgroundColor: ['rgb(155, 29, 200, 0.8)']
            }],
            labels: []
          };
        }

        _createClass(MaxChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loggedUserName = this.dataService.loggedUserName;
            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              for (var i = 0; i < res.length; i++) {
                _this2.dataSource.datasets[0].data[i] = res[i].maxbudget;
                _this2.dataSource.labels[i] = res[i].title; //  this.dataSource.datasets[0].backgroundColor[i] = res[i].color;

                _this2.createMaxChart();
              }
            });
          }
        }, {
          key: "createMaxChart",
          value: function createMaxChart() {
            var ctx = document.getElementById("myMaxBudget");

            var _ = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](ctx, {
              type: 'line',
              data: this.dataSource
            });
          }
        }]);

        return MaxChartComponent;
      }();

      MaxChartComponent.ɵfac = function MaxChartComponent_Factory(t) {
        return new (t || MaxChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
      };

      MaxChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MaxChartComponent,
        selectors: [["pb-max-chart"]],
        decls: 0,
        vars: 0,
        template: function MaxChartComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21heC1jaGFydC9tYXgtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-max-chart',
            templateUrl: './max-chart.component.html',
            styleUrls: ['./max-chart.component.scss']
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Mb0L":
    /*!**************************************************!*\
      !*** ./src/app/hometable/hometable.component.ts ***!
      \**************************************************/

    /*! exports provided: HometableComponent */

    /***/
    function Mb0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HometableComponent", function () {
        return HometableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HometableComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.indexOf(user_r1) + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.budget);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.maxbudget);
        }
      }

      var HometableComponent = /*#__PURE__*/function () {
        function HometableComponent(dataService) {
          _classCallCheck(this, HometableComponent);

          this.dataService = dataService;
          this.data = [];
          this.loggedUserName = this.dataService.loggedUserName;
        }

        _createClass(HometableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              _this3.data = res;
            });
          }
        }]);

        return HometableComponent;
      }();

      HometableComponent.ɵfac = function HometableComponent_Factory(t) {
        return new (t || HometableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      HometableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HometableComponent,
        selectors: [["pb-hometable"]],
        decls: 15,
        vars: 1,
        consts: [[1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]],
        template: function HometableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Budget Distirbution");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Budget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Maximum Allotment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HometableComponent_tr_14_Template, 9, 4, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWV0YWJsZS9ob21ldGFibGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HometableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-hometable',
            templateUrl: './hometable.component.html',
            styleUrls: ['./hometable.component.scss']
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Oh3b":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function Oh3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../breadcrumbs/breadcrumbs.component */
      "YHbe");
      /* harmony import */


      var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../article/article.component */
      "DLXL");
      /* harmony import */


      var _hometable_hometable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../hometable/hometable.component */
      "Mb0L");
      /* harmony import */


      var _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pie/pie.component */
      "icus");
      /* harmony import */


      var _max_chart_max_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../max-chart/max-chart.component */
      "JW9C");
      /* harmony import */


      var _dualbar_dualbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../dualbar/dualbar.component */
      "WzZ6");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(http, dataService, router) {
          _classCallCheck(this, HomepageComponent);

          this.http = http;
          this.dataService = dataService;
          this.router = router;
          this.dataSource = {
            datasets: [{
              data: [],
              backgroundColor: []
            }],
            labels: [],
            options: {
              events: []
            }
          };
        }

        _createClass(HomepageComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this.loggedUserName = this.dataService.loggedUserName;
            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              console.log(res);

              for (var i = 0; i < res.length; i++) {
                _this4.dataSource.datasets[0].data[i] = res[i].budget;
                _this4.dataSource.labels[i] = res[i].title;
                _this4.dataSource.datasets[0].backgroundColor[i] = res[i].color;

                _this4.createChart();
              }
            });
          } // tslint:disable-next-line: typedef

        }, {
          key: "createChart",
          value: function createChart() {
            var ctx = document.getElementById('myChart').getContext('2d');
            var myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](ctx, {
              type: 'pie',
              data: this.dataSource
            });
          }
        }, {
          key: "AddBudget",
          value: function AddBudget() {
            this.router.navigate(['/addbudget']);
          }
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["pb-homepage"]],
        decls: 52,
        vars: 0,
        consts: [[1, "container", "center"], [1, "container"], [1, "row"], [3, "click"], [1, "page-area"], ["id", "myChart", "width", "400", "height", "400", 2, "width", "350px", "height", "350px"], ["id", "pie"], ["id", "myMaxBudget", "width", "400", "height", "400", 2, "width", "350px", "height", "350px"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add new expense!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_5_listener() {
              return ctx.AddBudget();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click Me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pb-breadcrumbs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BreadCrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BreadCrumb as first child in main page! Added new component BreadCrumb and addded to the main page. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Stay on track");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " What if your clothing budget ended? You will get an alert. The goal is to never go over the budget. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live happier lives... since they expend without guilt or fear... because they know it is all good and accounted for. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "pb-hometable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pie Chart - Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "canvas", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pb-pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Donut Chart - Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "figure", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "With respect to Max Budget ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "pb-max-chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pb-article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Expected v/s Actual Budget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "pb-dualbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"], _hometable_hometable_component__WEBPACK_IMPORTED_MODULE_7__["HometableComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"], _max_chart_max_chart_component__WEBPACK_IMPORTED_MODULE_9__["MaxChartComponent"], _dualbar_dualbar_component__WEBPACK_IMPORTED_MODULE_10__["DualbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "R7Hv":
    /*!*********************************!*\
      !*** ./src/app/data.service.ts ***!
      \*********************************/

    /*! exports provided: DataService */

    /***/
    function R7Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // import { ToastrModule, ToastrService } from 'ngx-toastr';


      var DataService = /*#__PURE__*/function () {
        function DataService(http, router) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.router = router;
          this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isOpenModel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.userRecord = {};
          this.logouthandler = true;
          this.isOpenModel.next(false);
        } // tslint:disable-next-line: typedef


        _createClass(DataService, [{
          key: "getData",
          value: function getData(username) {
            console.log("hhhhh" + username);
            var token = localStorage.getItem('accessToken');
            var body = JSON.stringify(username);
            var headers = {
              'content-type': 'application/json',
              'Authorization': "Bearer ".concat(token)
            };
            this.DataObservable = this.http.get('http://localhost:3000/budget', {
              headers: headers,
              params: {
                userid: username
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
            return this.DataObservable;
          }
        }, {
          key: "postBudget",
          value: function postBudget(data) {
            var token = localStorage.getItem('accessToken');
            var headers = {
              'content-type': 'application/json',
              'Authorization': "Bearer ".concat(token)
            };
            var body = JSON.stringify(data);
            return this.http.post('http://localhost:3000/budget', body, {
              'headers': headers
            });
          }
        }, {
          key: "signUp",
          value: function signUp(data) {
            var headers = {
              'content-type': 'application/json'
            };
            var body = JSON.stringify(data);
            return this.http.post('http://localhost:3000/users', body, {
              'headers': headers
            });
          }
        }, {
          key: "userLogin",
          value: function userLogin(data) {
            var _this5 = this;

            var headers = {
              'content-type': 'application/json'
            };
            var body = JSON.stringify(data);
            return this.http.post('http://localhost:3000/auth', body, {
              'headers': headers
            }).subscribe(function (res) {
              console.log("dddd" + res);
              _this5.userRecord['username'] = data.username;
              _this5.userRecord['password'] = data.password;
              _this5.loggedUserName = data.username;
              console.log("user record is " + JSON.stringify(_this5.userRecord));
              localStorage.setItem('accessToken', res.token);
              localStorage.setItem('refreshToken', res.refreshToken);
              localStorage.setItem('expiration', res.exp);

              _this5.isUserLoggedIn.next(true);

              _this5.router.navigate(['/homepage']);

              _this5.setTimer(true);
            }, function (err) {
              _this5.invalidUser();
            });
          }
        }, {
          key: "getLogInStatus",
          value: function getLogInStatus() {
            return this.isUserLoggedIn;
          }
        }, {
          key: "setTimer",
          value: function setTimer(flag) {
            var _this6 = this;

            console.log("Timer set");

            if (flag) {
              this.timerId = setInterval(function () {
                var expiration = localStorage.getItem('expiration');
                var expirationDate = new Date(0).setUTCSeconds(Number(expiration));
                var TokenNotExpired = expirationDate.valueOf() > new Date().valueOf();
                var lessThanTwoMin = expirationDate.valueOf() - new Date().valueOf() <= 200000;

                if (TokenNotExpired && lessThanTwoMin) {
                  var message = confirm('Your session is going to expire in 2 min! Click ok to extend!');

                  if (message) {
                    var record = {};
                    record['username'] = _this6.userRecord['username'];
                    record['password'] = _this6.userRecord['password'];
                    console.log(JSON.stringify(record));

                    _this6.userLogin(record);
                  } else {
                    message = false;
                  }
                }

                if (new Date().valueOf() >= expirationDate.valueOf()) {
                  clearInterval(_this6.timerId);

                  _this6.logout();
                }
              }, 20000);
            } else {
              clearInterval(this.timerId);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('expiration');
            this.isUserLoggedIn.next(false);
            this.loggedUserName = "";
            this.router.navigate(['/login']);
          }
        }, {
          key: "verifyTokenPresence",
          value: function verifyTokenPresence() {
            return !!localStorage.getItem('token');
          }
        }, {
          key: "invalidUser",
          value: function invalidUser() {
            console.log("Invalid User");
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumbs/breadcrumbs.component */
      "YHbe");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hero/hero.component */
      "XWKS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'personal-budget';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["pb-root"]],
        decls: 7,
        vars: 0,
        consts: [["href", "#main", 1, "skip"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skip to content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pb-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "pb-breadcrumbs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "pb-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "pb-footer");
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TGkX":
    /*!****************************************!*\
      !*** ./src/app/menu/menu.component.ts ***!
      \****************************************/

    /*! exports provided: MenuComponent */

    /***/
    function TGkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/about"];
      };

      var _c2 = function _c2() {
        return ["/login"];
      };

      var _c3 = function _c3() {
        return ["/contact"];
      };

      var _c4 = function _c4() {
        return ["/logout"];
      };

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(dataService) {
          _classCallCheck(this, MenuComponent);

          this.dataService = dataService;
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.dataService.logout();
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["pb-menu"]],
        decls: 17,
        vars: 10,
        consts: [["role", "NavigatingToAnotherPage"], [3, "routerLink"], [3, "routerLink", "click"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_15_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LogOut");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #4d5791;\n  height: 44px;\n  padding: 0 40px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n  line-height: 44px;\n  font-size: 1.4em;\n  text-decoration: none;\n  color: #fff;\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #4d5791;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDU3OTE7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuXG5uYXYgdWwsXG5uYXYgdWwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxubmF2IHVsIGxpIGE6aG92ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNGQ1NzkxO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WzZ6":
    /*!**********************************************!*\
      !*** ./src/app/dualbar/dualbar.component.ts ***!
      \**********************************************/

    /*! exports provided: DualbarComponent */

    /***/
    function WzZ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DualbarComponent", function () {
        return DualbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");

      var DualbarComponent = /*#__PURE__*/function () {
        function DualbarComponent(http, dataService) {
          _classCallCheck(this, DualbarComponent);

          this.http = http;
          this.dataService = dataService;
          this.chartOptions = {
            responsive: true
          };
          this.labels = [];
          this.chartData = [{
            label: 'Current Budget',
            data: []
          }, {
            label: 'Maximum Budget',
            data: []
          }];
          this.colors = [{
            backgroundColor: 'rgb(55, 22, 55, 0.8)'
          }, {
            backgroundColor: 'rgba(110, 55, 255, 0.8)'
          }];
        }

        _createClass(DualbarComponent, [{
          key: "onChartClick",
          value: function onChartClick(event) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.loggedUserName = this.dataService.loggedUserName;
            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              console.log(res[0]);

              for (var i = 0; i < res.length; i++) {
                _this7.chartData[0].data[i] = res[i].budget;
                _this7.chartData[1].data[i] = res[i].maxbudget;
                _this7.labels[i] = res[i].title;
              }
            });
          }
        }]);

        return DualbarComponent;
      }();

      DualbarComponent.ɵfac = function DualbarComponent_Factory(t) {
        return new (t || DualbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
      };

      DualbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DualbarComponent,
        selectors: [["pb-dualbar"]],
        decls: 2,
        vars: 6,
        consts: [["width", "1000px", "height", "1000px", "baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend", "colors", "chartClick"]],
        template: function DualbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartClick", function DualbarComponent_Template_canvas_chartClick_1_listener($event) {
              return ctx.onChartClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "bar")("datasets", ctx.chartData)("labels", ctx.labels)("options", ctx.chartOptions)("legend", true)("colors", ctx.colors);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1YWxiYXIvZHVhbGJhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DualbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-dualbar',
            templateUrl: './dualbar.component.html',
            styleUrls: ['./dualbar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XWKS":
    /*!****************************************!*\
      !*** ./src/app/hero/hero.component.ts ***!
      \****************************************/

    /*! exports provided: HeroComponent */

    /***/
    function XWKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
        return HeroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeroComponent = /*#__PURE__*/function () {
        function HeroComponent() {
          _classCallCheck(this, HeroComponent);
        }

        _createClass(HeroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeroComponent;
      }();

      HeroComponent.ɵfac = function HeroComponent_Factory(t) {
        return new (t || HeroComponent)();
      };

      HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroComponent,
        selectors: [["pb-hero"]],
        decls: 6,
        vars: 0,
        consts: [["routerLink", "/", "routerLinkActive", "active"]],
        template: function HeroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Budget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A personal-budget management app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-hero',
            templateUrl: './hero.component.html',
            styleUrls: ['./hero.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "YHbe":
    /*!******************************************************!*\
      !*** ./src/app/breadcrumbs/breadcrumbs.component.ts ***!
      \******************************************************/

    /*! exports provided: BreadcrumbsComponent */

    /***/
    function YHbe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
        return BreadcrumbsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = [[["h1"]], [["div"]]];
      var _c1 = ["h1", "div"];

      var BreadcrumbsComponent = /*#__PURE__*/function () {
        function BreadcrumbsComponent() {
          _classCallCheck(this, BreadcrumbsComponent);
        }

        _createClass(BreadcrumbsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbsComponent;
      }();

      BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
        return new (t || BreadcrumbsComponent)();
      };

      BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbsComponent,
        selectors: [["pb-breadcrumbs"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 0,
        template: function BreadcrumbsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h1[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 20px;\n  margin: 0;\n  font-size: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW46MDtcbiAgZm9udC1zaXplOiAzLjVlbTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styleUrls: ['./breadcrumbs.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _authguard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authguard.guard */
      "6g8o");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./hero/hero.component */
      "XWKS");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _article_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./article/article.component */
      "DLXL");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _p404_p404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./p404/p404.component */
      "kVaF");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./breadcrumbs/breadcrumbs.component */
      "YHbe");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _pie_pie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pie/pie.component */
      "icus");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./data.service */
      "R7Hv");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./bar-chart/bar-chart.component */
      "k7d8");
      /* harmony import */


      var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./line-chart/line-chart.component */
      "De4M");
      /* harmony import */


      var _add_budget_add_budget_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./add-budget/add-budget.component */
      "gjZT");
      /* harmony import */


      var _hometable_hometable_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./hometable/hometable.component */
      "Mb0L");
      /* harmony import */


      var _dualbar_dualbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./dualbar/dualbar.component */
      "WzZ6");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _max_chart_max_chart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./max-chart/max-chart.component */
      "JW9C");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"], _authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], // AngularFireModule.initializeApp(environment.firebaseConfig),
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], // BrowserAnimationsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          preventDuplicates: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_9__["HeroComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _p404_p404_component__WEBPACK_IMPORTED_MODULE_15__["P404Component"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_18__["PieComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_22__["BarChartComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_23__["LineChartComponent"], _add_budget_add_budget_component__WEBPACK_IMPORTED_MODULE_24__["AddBudgetComponent"], _hometable_hometable_component__WEBPACK_IMPORTED_MODULE_25__["HometableComponent"], _dualbar_dualbar_component__WEBPACK_IMPORTED_MODULE_26__["DualbarComponent"], _max_chart_max_chart_component__WEBPACK_IMPORTED_MODULE_28__["MaxChartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], // AngularFireModule.initializeApp(environment.firebaseConfig),
          _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_9__["HeroComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _p404_p404_component__WEBPACK_IMPORTED_MODULE_15__["P404Component"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_18__["PieComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_22__["BarChartComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_23__["LineChartComponent"], _add_budget_add_budget_component__WEBPACK_IMPORTED_MODULE_24__["AddBudgetComponent"], _hometable_hometable_component__WEBPACK_IMPORTED_MODULE_25__["HometableComponent"], _dualbar_dualbar_component__WEBPACK_IMPORTED_MODULE_26__["DualbarComponent"], _max_chart_max_chart_component__WEBPACK_IMPORTED_MODULE_28__["MaxChartComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], // AngularFireModule.initializeApp(environment.firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], // BrowserAnimationsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
              timeOut: 3000,
              progressBar: true,
              progressAnimation: 'increasing',
              preventDuplicates: true
            })],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"], _authguard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthguardGuard"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["pb-contact"]],
        decls: 2,
        vars: 0,
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["pb-footer"]],
        decls: 3,
        vars: 0,
        consts: [["role", "footerRole"], [1, "center"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All rights reserved \xA9 Supriya Chinthakuntla ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gjZT":
    /*!****************************************************!*\
      !*** ./src/app/add-budget/add-budget.component.ts ***!
      \****************************************************/

    /*! exports provided: AddBudgetComponent */

    /***/
    function gjZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBudgetComponent", function () {
        return AddBudgetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddBudgetComponent = /*#__PURE__*/function () {
        function AddBudgetComponent(dataService, router, ngZone) {
          _classCallCheck(this, AddBudgetComponent);

          this.dataService = dataService;
          this.router = router;
          this.ngZone = ngZone;
        }

        _createClass(AddBudgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "randomColorGenerator",
          value: function randomColorGenerator() {
            var randomColor = "#000000".replace(/0/g, function () {
              return (~~(Math.random() * 16)).toString(16);
            });
            console.log(randomColor);
            return randomColor;
          }
        }, {
          key: "sendExpense",
          value: function sendExpense() {
            var _this8 = this;

            var expenseRecord = {};
            expenseRecord['budget'] = this.budget;
            expenseRecord['maxbudget'] = this.maxbudget;
            expenseRecord['title'] = this.title.charAt(0).toUpperCase() + this.title.slice(1);
            expenseRecord['color'] = this.randomColorGenerator();
            expenseRecord['username'] = this.dataService.loggedUserName;

            if (!this.budget || !this.maxbudget || !this.title) {
              // this.incompleteDetails();
              return;
            } else {
              this.dataService.postBudget(expenseRecord).subscribe(function (data) {
                console.log(data);
                _this8.budget = null;
                _this8.maxbudget = null;
                _this8.title = ""; // this.expenseAddToast();

                _this8.ngZone.run(function () {
                  console.log("Running ngZone");

                  _this8.dataService.getData(_this8.dataService.loggedUserName).subscribe(function (res) {
                    _this8.router.navigate(['/homepage']);
                  });
                });
              }, function (err) {
                console.log("Title exists!"); // this.duplicateExpenseTitle();

                _this8.title = "";
              });
            }
          }
        }]);

        return AddBudgetComponent;
      }();

      AddBudgetComponent.ɵfac = function AddBudgetComponent_Factory(t) {
        return new (t || AddBudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      AddBudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddBudgetComponent,
        selectors: [["pb-add-budget"]],
        decls: 20,
        vars: 4,
        consts: [[1, "container"], [1, "row"], [1, "form-group"], ["type", "text", "placeholder", "Enter your Expense Name", "ngModel", "", "name", "expense", "id", "expense", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter your Maximum Limit", "ngModel", "", "name", "limit", "id", "limit", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Enter your Current expense", "ngModel", "", "name", "current", "id", "current", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]],
        template: function AddBudgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add new Expenses here!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name of Expense: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBudgetComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Limit of Expense: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBudgetComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.maxbudget = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Current Expense: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBudgetComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.budget = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBudgetComponent_Template_button_click_18_listener() {
              return ctx.sendExpense();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxbudget);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.budget);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.title || !ctx.maxbudget || !ctx.budget);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
        styles: ["#main[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  margin-left: 20%;\n  margin-bottom: 20%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  border-style: groove;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-left: 0%;\n  background-color: blue;\n  color: white;\n  padding: 10px;\n  fill-opacity: initial;\n  font-size: larger;\n}\n\n#title[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: blue;\n  position: relative;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJ1ZGdldC9hZGQtYnVkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1idWRnZXQvYWRkLWJ1ZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuXG5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmaWxsLW9wYWNpdHk6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTpsYXJnZXJcbn1cblxuI3RpdGxlIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBjb2xvcjogYmx1ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBudgetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-add-budget',
            templateUrl: './add-budget.component.html',
            styleUrls: ['./add-budget.component.scss']
          }]
        }], function () {
          return [{
            type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "icus":
    /*!**************************************!*\
      !*** ./src/app/pie/pie.component.ts ***!
      \**************************************/

    /*! exports provided: PieComponent */

    /***/
    function icus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieComponent", function () {
        return PieComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! d3 */
      "VphZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");

      var PieComponent = /*#__PURE__*/function () {
        function PieComponent(http, dataService) {
          _classCallCheck(this, PieComponent);

          this.http = http;
          this.dataService = dataService;
          this.data = [];
          this.margin = 50;
          this.width = 750;
          this.height = 600; // The radius of the pie chart is half the smallest side

          this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        }

        _createClass(PieComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this9 = this;

            this.loggedUserName = this.dataService.loggedUserName;
            this.dataService.getData(this.loggedUserName).subscribe(function (res) {
              _this9.data = res;

              _this9.createSvg();

              _this9.createColors();

              _this9.drawChart();
            });
          }
        }, {
          key: "createSvg",
          value: function createSvg() {
            this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#pie').append('svg').attr('width', this.width).attr('height', this.height).append('g').attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
          }
        }, {
          key: "createColors",
          value: function createColors() {
            this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]().domain(this.data.map(function (d) {
              return d.title.toString();
            })).range(this.data.map(function (d) {
              return d.color;
            }));
          }
        }, {
          key: "drawChart",
          value: function drawChart() {
            var _this10 = this;

            // Compute the position of each group on the pie:
            var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().value(function (d) {
              return Number(d.budget);
            }); // Build the pie chart

            this.svg.selectAll('pieces').data(pie(this.data)).enter().append('path').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(0).outerRadius(this.radius)).attr('fill', function (d, i) {
              return _this10.colors(i);
            }).attr('stroke', '#121926').style('stroke-width', '1px'); // Add labels

            var labelLocation = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(100).outerRadius(this.radius);
            this.svg.selectAll('pieces').data(pie(this.data)).enter().append('text').text(function (d) {
              return d.data.title;
            }).attr('transform', function (d) {
              return 'translate(' + labelLocation.centroid(d) + ')';
            }).style('text-anchor', 'middle').style('font-size', 15);
          }
        }]);

        return PieComponent;
      }();

      PieComponent.ɵfac = function PieComponent_Factory(t) {
        return new (t || PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
      };

      PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PieComponent,
        selectors: [["pb-pie"]],
        decls: 3,
        vars: 0,
        consts: [["id", "pie"]],
        template: function PieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Donut Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "figure", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-pie',
            templateUrl: './pie.component.html',
            styleUrls: ['./pie.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "k7d8":
    /*!**************************************************!*\
      !*** ./src/app/bar-chart/bar-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: BarChartComponent */

    /***/
    function k7d8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
        return BarChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BarChartComponent = /*#__PURE__*/function () {
        function BarChartComponent() {
          _classCallCheck(this, BarChartComponent);
        }

        _createClass(BarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BarChartComponent;
      }();

      BarChartComponent.ɵfac = function BarChartComponent_Factory(t) {
        return new (t || BarChartComponent)();
      };

      BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BarChartComponent,
        selectors: [["pb-bar-chart"]],
        decls: 2,
        vars: 0,
        template: function BarChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bar-chart works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-bar-chart',
            templateUrl: './bar-chart.component.html',
            styleUrls: ['./bar-chart.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kVaF":
    /*!****************************************!*\
      !*** ./src/app/p404/p404.component.ts ***!
      \****************************************/

    /*! exports provided: P404Component */

    /***/
    function kVaF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var P404Component = /*#__PURE__*/function () {
        function P404Component() {
          _classCallCheck(this, P404Component);
        }

        _createClass(P404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return P404Component;
      }();

      P404Component.ɵfac = function P404Component_Factory(t) {
        return new (t || P404Component)();
      };

      P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: P404Component,
        selectors: [["pb-p404"]],
        decls: 2,
        vars: 0,
        template: function P404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "p404 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3A0MDQvcDQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-p404',
            templateUrl: './p404.component.html',
            styleUrls: ['./p404.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "rd1V":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/

    /*! exports provided: SignupComponent */

    /***/
    function rd1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+"); // import { ToastrService } from 'ngx-toastr';


      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(http, router, dataService) {
          _classCallCheck(this, SignupComponent);

          this.http = http;
          this.router = router;
          this.dataService = dataService;
          this.userData = [];
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "duplicateUserName",
          value: function duplicateUserName() {// this.toast.warning('User already exists! Please go to login page!');
          }
        }, {
          key: "incompleteDetails",
          value: function incompleteDetails() {// this.toast.error('Please enter all the required fields','Warning');
          }
        }, {
          key: "login",
          value: function login() {
            var record = {};
            record['username'] = this.username;
            record['password'] = this.password;
            record['email'] = this.email;
            record['repassword'] = this.repassword;
            console.log(this.userData);

            for (var i = 0; i < this.userData.length; i++) {
              if (this.userData[i].username == this.username) {
                console.log("There exists a user with same username"); // this.toast.warning('User already exists! Please go to login page!');

                return;
              }
            }

            this.registration();
          }
        }, {
          key: "registration",
          value: function registration() {
            var _this11 = this;

            var signUpRecord = {};
            signUpRecord['username'] = this.username;
            signUpRecord['password'] = this.password;
            signUpRecord['email'] = this.email;
            signUpRecord['repassword'] = this.repassword;
            console.log(JSON.stringify(signUpRecord));

            if (!this.username || !this.password || !this.email || !this.repassword) {
              // this.toast.error('Please enter all the required fields','Warning');
              this.incompleteDetails();
              return;
            } else {
              console.log("In else");
              this.dataService.signUp(signUpRecord).subscribe(function (res) {
                _this11.username = "";
                _this11.password = "";
                _this11.email = "";

                _this11.router.navigate(['/login']);
              }, function (err) {
                console.log(err);
                console.log("Validation failed");

                _this11.router.navigate(['/login']);
              });
            }
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["pb-signup"]],
        decls: 27,
        vars: 4,
        consts: [[1, "container"], ["id", "contact", "action", "", "method", "post"], ["for", "username"], ["placeholder", "Enter username", "type", "text", "name", "username", "tabindex", "1", "required", "", "autofocus", "", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter email Address", "type", "email", "name", "email", "tabindex", "2", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["placeholder", "Enter password", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["placeholder", "Retype your password", "type", "password", "name", "repassword", "required", "", 3, "ngModel", "ngModelChange"], ["id", "loginbutton", 3, "click"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up Here!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Retype Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.repassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_25_listener() {
              return ctx.registration();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SignUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repassword);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n  font-size: 12px;\n  line-height: 30px;\n  color: #777;\n  background: #4CAF50;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  font: 400 12px/16px \"Roboto\", Helvetica, Arial, sans-serif;\n}\n#contact[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 150px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n#contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=pass][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n  background: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n}\n#contact[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   input[type=pass][_ngcontent-%COMP%]:hover, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa;\n}\n#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: #4CAF50;\n  color: #FFF;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\n  background: #43A047;\n  transition: background-color 0.3s ease-in-out;\n}\n#contact[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border: 1px solid #aaa;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #888;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #888;\n}\n#loginbutton[_ngcontent-%COMP%] {\n  background-color: blue;\n  width: 20%;\n  height: 100%;\n  padding: 10px;\n  border: 1;\n  color: white;\n}\n#username[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\n#password[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\ninput[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n}\ninput[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 5px 0 22px 0;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpRkFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFFQTtFQUNFLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUVBOzs7Ozs7RUFNRSwwREFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEVBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTs7Ozs7RUFLRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFFQTs7OztFQU1FLHlDQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUdBLDZDQUFBO0FBQ0Y7QUFFQTtFQUNFLDhDQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFFQTs7RUFFRSxVQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR0Y7QUFEQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUlGO0FBQUE7O0VBR0UsYUFBQTtBQUVGO0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw2MDAsNDAwaXRhbGljKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1vLWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInVybFwiXSxcbiNjb250YWN0IHRleHRhcmVhLFxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBmb250OiA0MDAgMTJweC8xNnB4IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luOiAxNTBweCAwO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuI2NvbnRhY3QgaDMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jY29udGFjdCBoNCB7XG4gIG1hcmdpbjogNXB4IDAgMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IG1lZGl1bSBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjb250YWN0IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInBhc3NcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidXJsXCJdLFxuI2NvbnRhY3QgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGV4dFwiXTpob3ZlcixcbiNjb250YWN0IGlucHV0W3R5cGU9XCJlbWFpbFwiXTpob3ZlcixcbiNjb250YWN0IGlucHV0W3R5cGU9XCJwYXNzXCJdOmhvdmVyLFxuI2NvbnRhY3QgdGV4dGFyZWE6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbn1cblxuI2NvbnRhY3QgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDNBMDQ3O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI2NvbnRhY3QgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4jY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4jbG9naW5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyOiByb3VuZCgkbnVtYmVyOiAxKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXNlcm5hbWUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG59XG4jcGFzc3dvcmQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXVxue1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG59XG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG5cbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuXG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "Oh3b");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _p404_p404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./p404/p404.component */
      "kVaF");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var _add_budget_add_budget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./add-budget/add-budget.component */
      "gjZT");

      var routes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        pathMatch: 'full'
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
      }, {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
        pathMatch: 'full'
      }, {
        path: 'logout',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'addbudget',
        component: _add_budget_add_budget_component__WEBPACK_IMPORTED_MODULE_8__["AddBudgetComponent"]
      }, {
        path: '**',
        component: _p404_p404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+"); // import { ToastrService } from 'ngx-toastr';


      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, dataService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.dataService = dataService;
          this.userData = [];
          this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isUserLoggedIn.next(false);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var loginRecord = {};
            loginRecord['username'] = this.username;
            loginRecord['password'] = this.password;
            console.log(JSON.stringify(loginRecord));

            if (!this.username || !this.password) {
              this.enterAllDetails();
              console.log("UserName or password is missing");
            } else {
              this.dataService.userLogin(loginRecord);
            }
          }
        }, {
          key: "signUp",
          value: function signUp() {
            this.router.navigate(['/signup']);
          }
        }, {
          key: "enterAllDetails",
          value: function enterAllDetails() {
            // this.toast.error('Please enter all the required fields','Warning',{  positionClass: 'md-toast-top-left' });
            console.log("in");
          }
        }, {
          key: "loginSuccessful",
          value: function loginSuccessful() {// this.toast.success('Logged in successfully','Success');
          }
        }, {
          key: "loginFailure",
          value: function loginFailure() {// this.toast.error('Please Enter Valid Credentials!','Failure');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["pb-login"]],
        decls: 25,
        vars: 2,
        consts: [["id", "main", 1, "container-fluid"], ["id", "contact", "action", "", "method", "post"], ["id", "title"], ["id", "mainForm"], ["for", "username"], ["placeholder", "Enter Username", "type", "text", "name", "username", "tabindex", "1", "required", "", "autofocus", "", 3, "ngModel", "ngModelChange"], [1, ""], ["for", "password"], ["placeholder", "Enter Password", "type", "password", "name", "password", "tabindex", "3", "required", "", 3, "ngModel", "ngModelChange"], ["id", "loginBtn", 3, "click"], [1, "new"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create an account!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " New to the website? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
              return ctx.signUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["#main[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  margin-left: 20%;\n  margin-bottom: 20%;\n}\n\n#loginBtn[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  border-style: groove;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-left: 20%;\n  background-color: blue;\n  color: white;\n  padding: 3px;\n  fill-opacity: initial;\n  font-size: larger;\n}\n\n#title[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: blue;\n  position: relative;\n}\n\n#username[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\n\n#password[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\n\n.loginBtn[_ngcontent-%COMP%]:hover {\n  opacity: 2;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQW9CQTtFQUNFLFVBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQWxCRjs7QUFzQkE7O0VBRUUsc0JBQUE7RUFDQSxhQUFBO0FBbkJGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuI2xvZ2luQnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweDtcbiAgZmlsbC1vcGFjaXR5OiBpbml0aWFsO1xuICBmb250LXNpemU6bGFyZ2VyXG59XG5cbiN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgY29sb3I6IGJsdWU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG4jdXNlcm5hbWUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbiNwYXNzd29yZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjNweDtcbn1cblxuI25ldyB7XG5cbn1cblxuLy8gLmxvZ2luQnRuIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4vLyAgIG1hcmdpbjogOHB4IDA7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB3aWR0aDogMjAlO1xuLy8gICBvcGFjaXR5OiAwLjk7XG4vLyAgIG1hcmdpbjogNXB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbi5sb2dpbkJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDI7XG59XG5cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pb-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map