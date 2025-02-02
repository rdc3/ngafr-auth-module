(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!**************************************************!*\
      !*** multi ./projects/ngafr-testapp/src/main.ts ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\eLearning\Angular2\GitHub\ngafr-authentication\projects\ngafr-testapp\src\main.ts */
      "1blb");
      /***/
    },

    /***/
    "0oT/":
    /*!*************************************************************!*\
      !*** ./projects/ngafr-testapp/src/environments/firebase.ts ***!
      \*************************************************************/

    /*! exports provided: FireBaseConfig */

    /***/
    function oT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FireBaseConfig", function () {
        return FireBaseConfig;
      });

      var FireBaseConfig = {
        apiKey: 'AIzaSyCq267G6pFcom6fal88JCu2_NDL7swK6PU',
        authDomain: 'shop1-8ce4a.firebaseapp.com',
        databaseURL: 'https://shop1-8ce4a.firebaseio.com',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
      };
      /***/
    },

    /***/
    "1blb":
    /*!********************************************!*\
      !*** ./projects/ngafr-testapp/src/main.ts ***!
      \********************************************/

    /*! no exports provided */

    /***/
    function blb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "vpta");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "wrzk");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "I34s":
    /*!******************************************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/auth/auth-demo/auth-demo.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AuthDemoComponent */

    /***/
    function I34s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthDemoComponent", function () {
        return AuthDemoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngafr_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngafr-authentication */
      "p3vi");

      function AuthDemoComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.userName, " user has logged in.");
        }
      }

      var AuthDemoComponent = /*#__PURE__*/function () {
        function AuthDemoComponent() {
          _classCallCheck(this, AuthDemoComponent);

          this.loggedIn = false;
          this.userName = 'Guest';
        }

        _createClass(AuthDemoComponent, [{
          key: "loggedInEvent",
          value: function loggedInEvent($event) {
            console.log("LOGIN EVENT:", $event);
            this.loggedIn = $event.isLoggedIn;
          }
        }, {
          key: "userEvent",
          value: function userEvent($event) {
            console.log("USER EVENT:", $event);
            if ($event && $event.user && $event.user.displayName) this.userName = $event.user.displayName;
          }
        }]);

        return AuthDemoComponent;
      }();

      AuthDemoComponent.ɵfac = function AuthDemoComponent_Factory(t) {
        return new (t || AuthDemoComponent)();
      };

      AuthDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthDemoComponent,
        selectors: [["ngafr-testapp-auth-demo"]],
        decls: 11,
        vars: 3,
        consts: [[1, "demo-container"], [3, "ngClass"], ["ngafrAuth", "", "hideDefaultLogOutButton", "true", 3, "userLoggedInEvent", "userEvent"], ["ngafrAuth", "ngafrAuth"], [4, "ngIf"], [1, "ng-star-inserted", "logout-button", 3, "disabled", "click"]],
        template: function AuthDemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This section is created by the NgafrAuthentication library ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userLoggedInEvent", function AuthDemoComponent_Template_ng_container_userLoggedInEvent_4_listener($event) {
              return ctx.loggedInEvent($event);
            })("userEvent", function AuthDemoComponent_Template_ng_container_userEvent_4_listener($event) {
              return ctx.userEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthDemoComponent_span_6_Template, 2, 1, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthDemoComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This section is created by the parent component\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.loggedIn ? "auth-buttons-container" : "auth-buttons-container-hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ngafr_authentication__WEBPACK_IMPORTED_MODULE_2__["NgafrAuthDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".auth-buttons-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  border: 3px solid lightgrey;\n  margin-bottom: 20px;\n  border-style: dashed;\n}\n\n.auth-buttons-container-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.demo-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border: 3px solid #558ffa;\n  border-style: dashed;\n  font-family: \"Handlee\", cursive;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF1dGgtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSiIsImZpbGUiOiJhdXRoLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1idXR0b25zLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbn1cclxuLmF1dGgtYnV0dG9ucy1jb250YWluZXItaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGVtby1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDg1LCAxNDMsIDI1MCk7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGFuZGxlZScsIGN1cnNpdmU7XHJcbn1cclxuLmxvZ291dC1idXR0b257XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Ue6C":
    /*!*********************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/app.component.ts ***!
      \*********************************************************/

    /*! exports provided: AppComponent */

    /***/
    function Ue6C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _app_routing_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.animation */
      "qbk/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _common_view_selector_view_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./_common/view-selector/view-selector.component */
      "gzyS");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'ngafr-testapp';
        }

        _createClass(AppComponent, [{
          key: "getRouteAnimation",
          value: function getRouteAnimation(outlet) {
            var res = outlet.activatedRouteData.num === undefined ? -1 : outlet.activatedRouteData.num;
            return res;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 37,
        vars: 2,
        consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["height", "30", "alt", "Angular Logo", "src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE4MjMiIGhlaWdodD0iMjUwMCIgdmlld0JveD0iMCAwIDI1NiAzNTEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48cGF0aCBkPSJNMS4yNTMgMjgwLjczMmwxLjYwNS0zLjEzMSA5OS4zNTMtMTg4LjUxOC00NC4xNS04My40NzVDNTQuMzkyLTEuMjgzIDQ1LjA3NC40NzQgNDMuODcgOC4xODhMMS4yNTMgMjgwLjczMnoiIGlkPSJhIi8+PGZpbHRlciB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxNy41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93Qmx1cklubmVyMSIvPjxmZU9mZnNldCBpbj0ic2hhZG93Qmx1cklubmVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRJbm5lcjEiLz48ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldElubmVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0ic2hhZG93SW5uZXJJbm5lcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDYgMCIgaW49InNoYWRvd0lubmVySW5uZXIxIi8+PC9maWx0ZXI+PHBhdGggZD0iTTEzNC40MTcgMTQ4Ljk3NGwzMi4wMzktMzIuODEyLTMyLjAzOS02MS4wMDdjLTMuMDQyLTUuNzkxLTEwLjQzMy02LjM5OC0xMy40NDMtLjU5bC0xNy43MDUgMzQuMTA5LS41MyAxLjc0NCAzMS42NzggNTguNTU2eiIgaWQ9ImMiLz48ZmlsdGVyIHg9Ii01MCUiIHk9Ii01MCUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImQiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuNSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiLz48ZmVPZmZzZXQgZHg9IjEiIGR5PSItOSIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRJbm5lcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9InNoYWRvd0lubmVySW5uZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA5IDAiIGluPSJzaGFkb3dJbm5lcklubmVyMSIvPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMCAyODIuOTk4bDIuMTIzLTIuOTcyTDEwMi41MjcgODkuNTEybC4yMTItMi4wMTdMNTguNDggNC4zNThDNTQuNzctMi42MDYgNDQuMzMtLjg0NSA0My4xMTQgNi45NTFMMCAyODIuOTk4eiIgZmlsbD0iI0ZGQzI0QSIvPjx1c2UgZmlsbD0iI0ZGQTcxMiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjYSIvPjx1c2UgZmlsdGVyPSJ1cmwoI2IpIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGQ9Ik0xMzUuMDA1IDE1MC4zOGwzMi45NTUtMzMuNzUtMzIuOTY1LTYyLjkzYy0zLjEyOS01Ljk1Ny0xMS44NjYtNS45NzUtMTQuOTYyIDBMMTAyLjQyIDg3LjI4N3YyLjg2bDMyLjU4NCA2MC4yMzN6IiBmaWxsPSIjRjRCRDYyIi8+PHVzZSBmaWxsPSIjRkZBNTBFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNjIi8+PHVzZSBmaWx0ZXI9InVybCgjZCkiIHhsaW5rOmhyZWY9IiNjIi8+PHBhdGggZmlsbD0iI0Y2ODIwQyIgZD0iTTAgMjgyLjk5OGwuOTYyLS45NjggMy40OTYtMS40MiAxMjguNDc3LTEyOCAxLjYyOC00LjQzMS0zMi4wNS02MS4wNzR6Ii8+PHBhdGggZD0iTTEzOS4xMjEgMzQ3LjU1MWwxMTYuMjc1LTY0Ljg0Ny0zMy4yMDQtMjA0LjQ5NWMtMS4wMzktNi4zOTgtOC44ODgtOC45MjctMTMuNDY4LTQuMzRMMCAyODIuOTk4bDExNS42MDggNjQuNTQ4YTI0LjEyNiAyNC4xMjYgMCAwIDAgMjMuNTEzLjAwNSIgZmlsbD0iI0ZERTA2OCIvPjxwYXRoIGQ9Ik0yNTQuMzU0IDI4Mi4xNkwyMjEuNDAyIDc5LjIxOGMtMS4wMy02LjM1LTcuNTU4LTguOTc3LTEyLjEwMy00LjQyNEwxLjI5IDI4Mi42bDExNC4zMzkgNjMuOTA4YTIzLjk0MyAyMy45NDMgMCAwIDAgMjMuMzM0LjAwNmwxMTUuMzkyLTY0LjM1NXoiIGZpbGw9IiNGQ0NBM0YiLz48cGF0aCBkPSJNMTM5LjEyIDM0NS42NGEyNC4xMjYgMjQuMTI2IDAgMCAxLTIzLjUxMi0uMDA1TC45MzEgMjgyLjAxNWwtLjkzLjk4MyAxMTUuNjA3IDY0LjU0OGEyNC4xMjYgMjQuMTI2IDAgMCAwIDIzLjUxMy4wMDVsMTE2LjI3NS02NC44NDctLjI4NS0xLjc1Mi0xMTUuOTkgNjQuNjg5eiIgZmlsbD0iI0VFQUIzNyIvPgoJPG1ldGFkYXRhPgoJCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6cmRmcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KCQkJPHJkZjpEZXNjcmlwdGlvbiBhYm91dD0iaHR0cHM6Ly9pY29uc2NvdXQuY29tL2xlZ2FsI2xpY2Vuc2VzIiBkYzp0aXRsZT0iZmlyZWJhc2UtMS1jb21wYW55LWJyYW5kLWxvZ28iIGRjOmRlc2NyaXB0aW9uPSJmaXJlYmFzZS0xLWNvbXBhbnktYnJhbmQtbG9nbyIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTctMDctMTIiIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj4KCQkJCTxkYzpjcmVhdG9yPgoJCQkJCTxyZGY6QmFnPgoJCQkJCQk8cmRmOmxpPkljb24gTWFmaWE8L3JkZjpsaT4KCQkJCQk8L3JkZjpCYWc+CgkJCQk8L2RjOmNyZWF0b3I+CgkJCTwvcmRmOkRlc2NyaXB0aW9uPgoJCTwvcmRmOlJERj4KICAgIDwvbWV0YWRhdGE+PC9zdmc+Cg=="], [1, "spacer"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], ["type", "hidden"], ["selection", ""], [1, "card-container"], ["routerLink", "auth/code", 1, "card", "card-small"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "content"], ["router", "outlet"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "g", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "circle", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Using the libraries");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "What do you want to do next with your app?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "svg", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Add Authentication");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ngafr-demo-view-selector");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "router-outlet", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.title, " app is running!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routerAnimation", ctx.getRouteAnimation(_r1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _common_view_selector_view_selector_component__WEBPACK_IMPORTED_MODULE_3__["ViewSelectorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"],
        data: {
          animation: [Object(_app_routing_animation__WEBPACK_IMPORTED_MODULE_0__["routerAnimation"])()]
        }
      });
      /***/
    },

    /***/
    "gzyS":
    /*!*****************************************************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/_common/view-selector/view-selector.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ViewSelectorComponent */

    /***/
    function gzyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewSelectorComponent", function () {
        return ViewSelectorComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ViewSelectorComponent = /*#__PURE__*/function () {
        function ViewSelectorComponent(router, route) {
          _classCallCheck(this, ViewSelectorComponent);

          this.router = router;
          this.route = route;
        }

        _createClass(ViewSelectorComponent, [{
          key: "navigateTo",
          value: function navigateTo(id) {
            this.router.navigate([id], {
              relativeTo: this.route.children[0]
            });
          }
        }]);

        return ViewSelectorComponent;
      }();

      ViewSelectorComponent.ɵfac = function ViewSelectorComponent_Factory(t) {
        return new (t || ViewSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      ViewSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ViewSelectorComponent,
        selectors: [["ngafr-demo-view-selector"]],
        decls: 7,
        vars: 2,
        consts: [[1, "card-container"], [1, "card", "card-small", 3, "click"]],
        template: function ViewSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewSelectorComponent_Template_div_click_1_listener() {
              return ctx.navigateTo("code");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewSelectorComponent_Template_div_click_4_listener() {
              return ctx.navigateTo("demo");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("{ Code }");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("< Demo >");
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "p3vi":
    /*!*********************************************************************************!*\
      !*** ./docs/ngafr-authentication/__ivy_ngcc__/fesm2015/ngafr-authentication.js ***!
      \*********************************************************************************/

    /*! exports provided: FirebaseConfigData, FirebaseConfigService, NgafrAuthDirective, NgafrAuthenticationComponent, NgafrAuthenticationModule, NgafrAuthenticationService */

    /***/
    function p3vi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseConfigData", function () {
        return FirebaseConfigData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseConfigService", function () {
        return FirebaseConfigService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgafrAuthDirective", function () {
        return NgafrAuthDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgafrAuthenticationComponent", function () {
        return NgafrAuthenticationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgafrAuthenticationModule", function () {
        return NgafrAuthenticationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgafrAuthenticationService", function () {
        return NgafrAuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "VRCc");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebaseui-angular */
      "b+hB");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var firebaseui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebaseui */
      "I5iV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngafr-authentication.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["ngafrAuthElement"];

      function NgafrAuthenticationComponent_ng_template_0_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgafrAuthenticationComponent_ng_template_0_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.ngafrAuth.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgafrAuthenticationComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "firebase-ui", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("signInSuccessWithAuthResult", function NgafrAuthenticationComponent_ng_template_0_Template_firebase_ui_signInSuccessWithAuthResult_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.ngafrAuth.loginSuccessCallback($event);
          })("signInFailure", function NgafrAuthenticationComponent_ng_template_0_Template_firebase_ui_signInFailure_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.ngafrAuth.loginErrorCallback($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgafrAuthenticationComponent_ng_template_0_button_1_Template, 2, 0, "button", 2);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loggedIn && !ctx_r1.hideLogOutButton);
        }
      }

      var NgafrAuthenticationService = /*#__PURE__*/function () {
        /**
         * @param {?} afAuth
         */
        function NgafrAuthenticationService(afAuth) {
          _classCallCheck(this, NgafrAuthenticationService);

          this.afAuth = afAuth;
          this._loggedIn = false;
          this._user = null;
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._loggedIn);
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._user);
          this.hideLogOutButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        }
        /**
         * @return {?}
         */


        _createClass(NgafrAuthenticationService, [{
          key: "isUserLoggedIn",
          value: function isUserLoggedIn() {
            var _this = this;

            return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} fBaseUser
            * @return {?}
            */
            function (fBaseUser) {
              console.log('User: ', fBaseUser && fBaseUser.email ? fBaseUser.displayName : 'Guest');
              _this._loggedIn = !!fBaseUser && !!fBaseUser.email;
              _this._user = fBaseUser;
              if (_this.loggedIn.value !== _this._loggedIn) _this.loggedIn.next(_this._loggedIn);

              _this.user.next(fBaseUser);

              return fBaseUser;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log('exception:', e));
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "logout",
          value: function logout() {
            this.loggedIn.next(false);
            this.afAuth.signOut();
          }
          /**
           * @param {?} hide
           * @return {?}
           */

        }, {
          key: "hideLogOutButton",
          value: function hideLogOutButton(hide) {
            this.hideLogOutButton$.next(hide);
          }
          /**
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "loginSuccessCallback",
          value: function loginSuccessCallback(data) {
            this._loggedIn = true;
          }
          /**
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "loginErrorCallback",
          value: function loginErrorCallback(data) {
            this._loggedIn = false;
          }
        }]);

        return NgafrAuthenticationService;
      }();

      NgafrAuthenticationService.ɵfac = function NgafrAuthenticationService_Factory(t) {
        return new (t || NgafrAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
      };
      /** @nocollapse */


      NgafrAuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      };
      /** @nocollapse */


      NgafrAuthenticationService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NgafrAuthenticationService_Factory() {
          return new NgafrAuthenticationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
        },
        token: NgafrAuthenticationService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgafrAuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngafr-authentication.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgafrAuthenticationComponent =
      /**
       * @param {?} ngafrAuth
       * @param {?} cdr
       */
      function NgafrAuthenticationComponent(ngafrAuth, cdr) {
        var _this2 = this;

        _classCallCheck(this, NgafrAuthenticationComponent);

        this.ngafrAuth = ngafrAuth;
        this.cdr = cdr;
        this.loggedIn = false;
        this.hideLogOutButton = false;
        console.log('in On Init');
        this.ngafrAuth.isUserLoggedIn().subscribe(
        /**
        * @param {?} user
        * @return {?}
        */
        function (user) {
          if (user) {
            _this2.loggedIn = true;
          } else {
            _this2.loggedIn = false;
          }
        });
        this.ngafrAuth.hideLogOutButton$.subscribe(
        /**
        * @param {?} hide
        * @return {?}
        */
        function (hide) {
          _this2.hideLogOutButton = hide;

          _this2.cdr.markForCheck();
        });
      };

      NgafrAuthenticationComponent.ɵfac = function NgafrAuthenticationComponent_Factory(t) {
        return new (t || NgafrAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgafrAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      NgafrAuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgafrAuthenticationComponent,
        selectors: [["lib-ngafr-authentication"]],
        viewQuery: function NgafrAuthenticationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngafrAuthElement = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["ngafrAuthElement", ""], [3, "signInSuccessWithAuthResult", "signInFailure"], [3, "click", 4, "ngIf"], [3, "click"]],
        template: function NgafrAuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgafrAuthenticationComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseuiAngularLibraryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
        styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;height:36px;letter-spacing:0;line-height:1;line-height:36px;margin:0;min-width:64px;outline:0;overflow:hidden;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);vertical-align:middle;will-change:box-shadow}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--raised:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{background:hsla(0,0%,62%,.2);border-radius:50%;box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);font-size:24px;height:56px;line-height:normal;margin:auto;min-width:56px;overflow:hidden;padding:0;position:relative;width:56px}.mdl-button--fab .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button--fab:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--fab:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;color:inherit;font-size:24px;height:32px;line-height:normal;margin-left:0;margin-right:0;min-width:32px;overflow:hidden;padding:0;width:32px}.mdl-button--icon .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{left:0;top:0}.mdl-button--icon .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button__ripple-container{display:block;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:0}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{background-color:#3f51b5;color:#fff}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{background-color:#ff4081;color:#fff}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{background-color:transparent;color:rgba(0,0,0,.26);cursor:default}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);box-shadow:none;color:rgba(0,0,0,.26)}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{background:#fff;border-radius:2px;box-sizing:border-box;display:flex;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;position:relative;width:330px;z-index:1}.mdl-card__media{background-attachment:scroll;background-color:#ff4081;background-origin:padding-box;background-position:50% 50%;background-repeat:repeat;background-size:cover;box-sizing:border-box}.mdl-card__title{align-items:center;box-sizing:border-box;color:#000;display:block;display:flex;justify-content:stretch;line-height:normal;padding:16px;perspective-origin:165px 56px;transform-origin:165px 56px}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{align-self:flex-end;color:inherit;display:block;display:flex;font-size:24px;font-weight:300;line-height:normal;margin:0;overflow:hidden;transform-origin:149px 48px}.mdl-card__subtitle-text{color:rgba(0,0,0,.54);font-size:14px;margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{background-color:transparent;box-sizing:border-box;font-size:16px;line-height:normal;padding:8px;width:100%}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{font-size:2.5rem;margin:0;padding:24px 24px 0}.mdl-dialog__actions{display:flex;flex-direction:row-reverse;flex-wrap:wrap;padding:8px 8px 8px 24px}.mdl-dialog__actions>*{height:36px;margin-right:8px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{flex:0 0 100%;height:48px;margin-right:0;padding-right:16px;text-align:right}.mdl-dialog__content{color:rgba(0,0,0,.54);padding:20px 24px 24px}.mdl-progress{display:block;height:4px;max-width:100%;position:relative;width:500px}.mdl-progress>.bar{bottom:0;display:block;position:absolute;top:0;transition:width .2s cubic-bezier(.4,0,.2,1);width:0}.mdl-progress>.progressbar{background-color:#3f51b5;left:0;z-index:1}.mdl-progress>.bufferbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);left:0;z-index:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{-webkit-mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=)}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate1;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate1;animation-timing-function:linear;background-color:#3f51b5}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate2;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate2;animation-timing-function:linear;background-color:#3f51b5;background-image:none}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;height:28px;position:relative;width:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:\"Loading...\"}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1.568s linear infinite;animation:mdl-spinner__container-rotate 1.568s linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}@keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}.mdl-spinner__layer{height:100%;opacity:0;position:absolute;width:100%}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{border-color:inherit;box-sizing:border-box;height:100%;left:45%;overflow:hidden;position:absolute;top:0;width:10%}.mdl-spinner__gap-patch .mdl-spinner__circle{left:-450%;width:1000%}.mdl-spinner__circle-clipper{border-color:inherit;display:inline-block;height:100%;overflow:hidden;position:relative;width:50%}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{-webkit-animation:none;animation:none;border:3px solid;border-bottom-color:transparent!important;border-color:inherit;border-radius:50%;bottom:0;box-sizing:border-box;height:100%;left:0;position:absolute;right:0;top:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{border-left-color:transparent!important;left:-100%;transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.mdl-textfield{box-sizing:border-box;display:inline-block;font-size:16px;margin:0;max-width:100%;padding:20px 0;position:relative;width:300px}.mdl-textfield .mdl-button{bottom:20px;position:absolute}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-height:32px;min-width:32px;width:auto}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{background:0 0;border:none;border-bottom:1px solid rgba(0,0,0,.12);color:inherit;display:block;font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;padding:4px 0;text-align:left;width:100%}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:0}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);display:block;font-size:16px;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;text-align:left;top:24px;white-space:nowrap;width:100%}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:\"\";height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;display:block;font-size:12px;margin-top:3px;position:absolute;visibility:hidden}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{display:inline-block;margin-left:32px;max-width:.1px;position:relative;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}dialog{background:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{bottom:0;left:0;position:fixed;right:0;top:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.firebaseui-container{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#fff;box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in,.firebaseui-page-select-tenant{background:inherit}.firebaseui-idp-list,.firebaseui-tenant-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button,.firebaseui-tenant-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item,.firebaseui-tenant-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{height:18px;width:18px}.firebaseui-idp-favicon,.firebaseui-idp-icon{border:none;display:inline-block;vertical-align:middle}.firebaseui-idp-favicon{height:14px;margin-right:5px;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{-webkit-transform:scale(.9);-webkit-transform-origin:0 0;transform:scale(.9);transform-origin:0 0}}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}[data-provider-id=\"yahoo.com\"]>.firebaseui-idp-icon-wrapper>.firebaseui-idp-icon{height:22px;width:22px}.firebaseui-info-bar{-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;color:rgba(0,0,0,.87);flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{padding-right:24px}.firebaseui-list-box-icon-wrapper,.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{direction:ltr;height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank,.firebaseui-id-page-spinner{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}"],
        encapsulation: 2
      });
      /** @nocollapse */

      NgafrAuthenticationComponent.ctorParameters = function () {
        return [{
          type: NgafrAuthenticationService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      NgafrAuthenticationComponent.propDecorators = {
        ngafrAuthElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ngafrAuthElement', {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgafrAuthenticationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'lib-ngafr-authentication',
            template: "\n    <ng-template #ngafrAuthElement>\n      <firebase-ui (signInSuccessWithAuthResult)=\"this.ngafrAuth.loginSuccessCallback($event)\"\n                   (signInFailure)=\"this.ngafrAuth.loginErrorCallback($event)\"></firebase-ui>\n      <button *ngIf=\"loggedIn && !hideLogOutButton\" (click)=\"this.ngafrAuth.logout()\">Logout</button>\n    </ng-template>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;height:36px;letter-spacing:0;line-height:1;line-height:36px;margin:0;min-width:64px;outline:0;overflow:hidden;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);vertical-align:middle;will-change:box-shadow}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--raised:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{background:hsla(0,0%,62%,.2);border-radius:50%;box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);font-size:24px;height:56px;line-height:normal;margin:auto;min-width:56px;overflow:hidden;padding:0;position:relative;width:56px}.mdl-button--fab .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button--fab:active{background-color:hsla(0,0%,62%,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-button--fab:focus:not(:active){background-color:hsla(0,0%,62%,.4);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;color:inherit;font-size:24px;height:32px;line-height:normal;margin-left:0;margin-right:0;min-width:32px;overflow:hidden;padding:0;width:32px}.mdl-button--icon .material-icons{left:50%;line-height:24px;position:absolute;top:50%;transform:translate(-12px,-12px);width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{left:0;top:0}.mdl-button--icon .mdl-button__ripple-container{-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);border-radius:50%}.mdl-button__ripple-container{display:block;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:0}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{background-color:#3f51b5;color:#fff}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{background-color:#ff4081;color:#fff}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{background-color:transparent;color:rgba(0,0,0,.26);cursor:default}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);box-shadow:none;color:rgba(0,0,0,.26)}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{background:#fff;border-radius:2px;box-sizing:border-box;display:flex;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;position:relative;width:330px;z-index:1}.mdl-card__media{background-attachment:scroll;background-color:#ff4081;background-origin:padding-box;background-position:50% 50%;background-repeat:repeat;background-size:cover;box-sizing:border-box}.mdl-card__title{align-items:center;box-sizing:border-box;color:#000;display:block;display:flex;justify-content:stretch;line-height:normal;padding:16px;perspective-origin:165px 56px;transform-origin:165px 56px}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{align-self:flex-end;color:inherit;display:block;display:flex;font-size:24px;font-weight:300;line-height:normal;margin:0;overflow:hidden;transform-origin:149px 48px}.mdl-card__subtitle-text{color:rgba(0,0,0,.54);font-size:14px;margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{background-color:transparent;box-sizing:border-box;font-size:16px;line-height:normal;padding:8px;width:100%}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{font-size:2.5rem;margin:0;padding:24px 24px 0}.mdl-dialog__actions{display:flex;flex-direction:row-reverse;flex-wrap:wrap;padding:8px 8px 8px 24px}.mdl-dialog__actions>*{height:36px;margin-right:8px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{flex:0 0 100%;height:48px;margin-right:0;padding-right:16px;text-align:right}.mdl-dialog__content{color:rgba(0,0,0,.54);padding:20px 24px 24px}.mdl-progress{display:block;height:4px;max-width:100%;position:relative;width:500px}.mdl-progress>.bar{bottom:0;display:block;position:absolute;top:0;transition:width .2s cubic-bezier(.4,0,.2,1);width:0}.mdl-progress>.progressbar{background-color:#3f51b5;left:0;z-index:1}.mdl-progress>.bufferbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);left:0;z-index:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{-webkit-mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=)}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate1;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate1;animation-timing-function:linear;background-color:#3f51b5}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:indeterminate2;-webkit-animation-timing-function:linear;animation-duration:2s;animation-iteration-count:infinite;animation-name:indeterminate2;animation-timing-function:linear;background-color:#3f51b5;background-image:none}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;height:28px;position:relative;width:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:\"Loading...\"}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1.568s linear infinite;animation:mdl-spinner__container-rotate 1.568s linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}@keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}.mdl-spinner__layer{height:100%;opacity:0;position:absolute;width:100%}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{border-color:inherit;box-sizing:border-box;height:100%;left:45%;overflow:hidden;position:absolute;top:0;width:10%}.mdl-spinner__gap-patch .mdl-spinner__circle{left:-450%;width:1000%}.mdl-spinner__circle-clipper{border-color:inherit;display:inline-block;height:100%;overflow:hidden;position:relative;width:50%}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{-webkit-animation:none;animation:none;border:3px solid;border-bottom-color:transparent!important;border-color:inherit;border-radius:50%;bottom:0;box-sizing:border-box;height:100%;left:0;position:absolute;right:0;top:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{border-left-color:transparent!important;left:-100%;transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.mdl-textfield{box-sizing:border-box;display:inline-block;font-size:16px;margin:0;max-width:100%;padding:20px 0;position:relative;width:300px}.mdl-textfield .mdl-button{bottom:20px;position:absolute}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-height:32px;min-width:32px;width:auto}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{background:0 0;border:none;border-bottom:1px solid rgba(0,0,0,.12);color:inherit;display:block;font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;padding:4px 0;text-align:left;width:100%}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:0}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);display:block;font-size:16px;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;text-align:left;top:24px;white-space:nowrap;width:100%}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:\"\";height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;display:block;font-size:12px;margin-top:3px;position:absolute;visibility:hidden}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{display:inline-block;margin-left:32px;max-width:.1px;position:relative;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}dialog{background:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{bottom:0;left:0;position:fixed;right:0;top:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.firebaseui-container{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-color:#fff;box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in,.firebaseui-page-select-tenant{background:inherit}.firebaseui-idp-list,.firebaseui-tenant-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button,.firebaseui-tenant-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item,.firebaseui-tenant-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{height:18px;width:18px}.firebaseui-idp-favicon,.firebaseui-idp-icon{border:none;display:inline-block;vertical-align:middle}.firebaseui-idp-favicon{height:14px;margin-right:5px;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{-webkit-transform:scale(.9);-webkit-transform-origin:0 0;transform:scale(.9);transform-origin:0 0}}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}[data-provider-id=\"yahoo.com\"]>.firebaseui-idp-icon-wrapper>.firebaseui-idp-icon{height:22px;width:22px}.firebaseui-info-bar{-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-bottom:1px solid rgba(0,0,0,.12);border-radius:0;color:rgba(0,0,0,.87);flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{padding-right:24px}.firebaseui-list-box-icon-wrapper,.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{direction:ltr;height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank,.firebaseui-id-page-spinner{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}"]
          }]
        }], function () {
          return [{
            type: NgafrAuthenticationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          ngafrAuthElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngafrAuthElement', {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngafr-authentication.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgafrAuthDirective = /*#__PURE__*/function () {
        /**
         * @param {?} componentFactoryResolver
         * @param {?} viewContainer
         * @param {?} cdr
         * @param {?} auth
         */
        function NgafrAuthDirective(componentFactoryResolver, viewContainer, cdr, auth) {
          var _this3 = this;

          _classCallCheck(this, NgafrAuthDirective);

          this.componentFactoryResolver = componentFactoryResolver;
          this.viewContainer = viewContainer;
          this.cdr = cdr;
          this.auth = auth;
          this.hideDefaultLogOutButton = 'false';
          this.userLoggedInEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.userEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.auth.loggedIn.subscribe(
          /**
          * @param {?} isLoggedIn
          * @return {?}
          */
          function (isLoggedIn) {
            return _this3.userLoggedInEvent.emit({
              isLoggedIn: isLoggedIn
            });
          });
          this.auth.user.subscribe(
          /**
          * @param {?} user
          * @return {?}
          */
          function (user) {
            return _this3.userEvent.emit({
              user: user
            });
          });
        }
        /**
         * @return {?}
         */


        _createClass(NgafrAuthDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.hideDefaultLogOutButton.toLowerCase() !== 'true' || this.hideDefaultLogOutButton.toLowerCase() !== 'false') this.hideDefaultLogOutButton = 'false';
            this.auth.hideLogOutButton(JSON.parse(this.hideDefaultLogOutButton));
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgafrAuthenticationComponent);
            /** @type {?} */

            var componentRef = componentFactory.create(this.viewContainer.injector);
            this.authTemplateComponent = componentRef.instance;
            this.viewContainer.createEmbeddedView(this.authTemplateComponent.ngafrAuthElement);
            this.cdr.markForCheck();
          }
          /**
           * @return {?}
           */

        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
          }
        }]);

        return NgafrAuthDirective;
      }();

      NgafrAuthDirective.ɵfac = function NgafrAuthDirective_Factory(t) {
        return new (t || NgafrAuthDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgafrAuthenticationService));
      };

      NgafrAuthDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgafrAuthDirective,
        selectors: [["", "ngafrAuth", ""]],
        inputs: {
          hideDefaultLogOutButton: "hideDefaultLogOutButton",
          ngafrAuth: "ngafrAuth",
          userLogOut: "userLogOut"
        },
        outputs: {
          userLoggedInEvent: "userLoggedInEvent",
          userEvent: "userEvent"
        },
        exportAs: ["ngafrAuth"]
      });
      /** @nocollapse */

      NgafrAuthDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: NgafrAuthenticationService
        }];
      };

      NgafrAuthDirective.propDecorators = {
        ngafrAuth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngafrAuth']
        }],
        userLogOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['userLogOut']
        }],
        hideDefaultLogOutButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hideDefaultLogOutButton']
        }],
        userLoggedInEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['userLoggedInEvent']
        }],
        userEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['userEvent']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgafrAuthDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngafrAuth]',
            exportAs: 'ngafrAuth'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: NgafrAuthenticationService
          }];
        }, {
          hideDefaultLogOutButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hideDefaultLogOutButton']
          }],
          userLoggedInEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['userLoggedInEvent']
          }],
          userEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['userEvent']
          }],
          ngafrAuth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngafrAuth']
          }],
          userLogOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['userLogOut']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngafr-firebase-config.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FirebaseConfigService = /*#__PURE__*/function () {
        function FirebaseConfigService() {
          _classCallCheck(this, FirebaseConfigService);
        }

        _createClass(FirebaseConfigService, null, [{
          key: "getFirebaseUiAuthConfig",

          /**
           * @param {?} authProviders
           * @return {?}
           */
          value: function getFirebaseUiAuthConfig(authProviders) {
            if (authProviders.googleAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.GoogleAuthProvider.PROVIDER_ID);
            }

            if (authProviders.facebookAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
                customParameters: {
                  auth_type: 'reauthenticate'
                },
                provider: firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.FacebookAuthProvider.PROVIDER_ID
              });
            }

            if (authProviders.emailAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push({
                requireDisplayName: true,
                provider: firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.EmailAuthProvider.PROVIDER_ID
              });
            }

            if (authProviders.twitterAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.TwitterAuthProvider.PROVIDER_ID);
            }

            if (authProviders.githubAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.GithubAuthProvider.PROVIDER_ID);
            }

            if (authProviders.phoneAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth.PhoneAuthProvider.PROVIDER_ID);
            }

            if (authProviders.anonymousAuthProvider) {
              FirebaseConfigService.firebaseUiAuthConfig.signInOptions.push(firebaseui__WEBPACK_IMPORTED_MODULE_9__["auth"].AnonymousAuthProvider.PROVIDER_ID);
            }

            return FirebaseConfigService.firebaseUiAuthConfig;
          }
        }]);

        return FirebaseConfigService;
      }();

      FirebaseConfigService.ɵfac = function FirebaseConfigService_Factory(t) {
        return new (t || FirebaseConfigService)();
      };

      FirebaseConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FirebaseConfigService,
        factory: FirebaseConfigService.ɵfac
      });
      FirebaseConfigService.firebaseUiAuthConfig = {
        signInFlow: 'popup',
        signInOptions: [],
        // tosUrl: '<your-tos-link>',
        // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
        credentialHelper: firebaseui__WEBPACK_IMPORTED_MODULE_9__["auth"].CredentialHelper.NONE
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ngafr-authentication.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var FirebaseConfigData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FIREBASECONF');

      var NgafrAuthenticationModule = /*#__PURE__*/function () {
        function NgafrAuthenticationModule() {
          _classCallCheck(this, NgafrAuthenticationModule);
        }

        _createClass(NgafrAuthenticationModule, null, [{
          key: "forRoot",

          /**
           * @param {?} firebaseConfig
           * @param {?} authProviders
           * @return {?}
           */
          value: function forRoot(firebaseConfig, authProviders) {
            /** @type {?} */
            var firebaseUiAuthConfig = FirebaseConfigService.getFirebaseUiAuthConfig(authProviders);
            return {
              ngModule: NgafrAuthenticationModule,
              providers: [FirebaseConfigService, _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig).providers, {
                provide: FirebaseConfigData,
                useValue: firebaseConfig
              }, firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig).providers]
            };
          }
        }]);

        return NgafrAuthenticationModule;
      }();

      NgafrAuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgafrAuthenticationModule
      });
      NgafrAuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgafrAuthenticationModule_Factory(t) {
          return new (t || NgafrAuthenticationModule)();
        },
        providers: [FirebaseConfigService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseUIModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgafrAuthenticationModule, {
          declarations: function declarations() {
            return [NgafrAuthDirective, NgafrAuthenticationComponent];
          },
          imports: function imports() {
            return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseUIModule"]];
          },
          exports: function exports() {
            return [NgafrAuthDirective, NgafrAuthenticationComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgafrAuthenticationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgafrAuthDirective, NgafrAuthenticationComponent],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"], firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseUIModule"]],
            exports: [NgafrAuthDirective, NgafrAuthenticationComponent],
            providers: [FirebaseConfigService],
            entryComponents: [NgafrAuthenticationComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngafr-authentication.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    "qbk/":
    /*!*****************************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/app-routing.animation.ts ***!
      \*****************************************************************/

    /*! exports provided: routerAnimation */

    /***/
    function qbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routerAnimation", function () {
        return routerAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");

      function routerAnimation() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerAnimation', [// One time initial load. Move page from left -100% to 0%
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('-1 => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1,
          transform: 'translateX(0%)'
        }))])]), // Previous, slide left to right to show left page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [// set new page X location to be -100%
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([// slide existing page from 0% to 100% to the right
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        })), {
          optional: true
        }), // slide new page from -100% to 0% to the right
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1,
          transform: 'translateX(0%)'
        })))])]), // Next, slide right to left to show right page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [// set new page X location to be 100%
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([// slide existing page from 0% to -100% to the left
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)'
        }))), // slide new page from 100% to 0% to the left
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1,
          transform: 'translateX(0%)'
        })))])])]);
      }
      /***/

    },

    /***/
    "sq0v":
    /*!**************************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/app-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function sq0v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _auth_auth_code_auth_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth-code/auth-code.component */
      "zhZt");
      /* harmony import */


      var _auth_auth_demo_auth_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth-demo/auth-demo.component */
      "I34s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var routes = [{
        path: 'auth',
        children: [{
          path: 'code',
          component: _auth_auth_code_auth_code_component__WEBPACK_IMPORTED_MODULE_1__["AuthCodeComponent"],
          data: {
            num: 1
          }
        }, {
          path: 'demo',
          component: _auth_auth_demo_auth_demo_component__WEBPACK_IMPORTED_MODULE_2__["AuthDemoComponent"],
          data: {
            num: 2
          }
        }]
      }, {
        path: '**',
        redirectTo: 'auth/code'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vpta":
    /*!******************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/app.module.ts ***!
      \******************************************************/

    /*! exports provided: AppModule */

    /***/
    function vpta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "sq0v");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Ue6C");
      /* harmony import */


      var _environments_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/firebase */
      "0oT/");
      /* harmony import */


      var _auth_auth_code_auth_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth-code/auth-code.component */
      "zhZt");
      /* harmony import */


      var _auth_auth_demo_auth_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/auth-demo/auth-demo.component */
      "I34s");
      /* harmony import */


      var _common_view_selector_view_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_common/view-selector/view-selector.component */
      "gzyS");
      /* harmony import */


      var ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngafr-authentication */
      "p3vi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var firebaseConfig = _environments_firebase__WEBPACK_IMPORTED_MODULE_4__["FireBaseConfig"];
      var authProviders = {
        googleAuthProvider: true,
        emailAuthProvider: true,
        githubAuthProvider: false,
        facebookAuthProvider: false,
        anonymousAuthProvider: false,
        phoneAuthProvider: false,
        twitterAuthProvider: false
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__["NgafrAuthenticationService"]],
        imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__["NgafrAuthenticationModule"], ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__["NgafrAuthenticationModule"].forRoot(firebaseConfig, authProviders)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_auth_code_auth_code_component__WEBPACK_IMPORTED_MODULE_5__["AuthCodeComponent"], _auth_auth_demo_auth_demo_component__WEBPACK_IMPORTED_MODULE_6__["AuthDemoComponent"], _common_view_selector_view_selector_component__WEBPACK_IMPORTED_MODULE_7__["ViewSelectorComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__["NgafrAuthenticationModule"], ngafr_authentication__WEBPACK_IMPORTED_MODULE_8__["NgafrAuthenticationModule"]]
        });
      })();
      /***/

    },

    /***/
    "wrzk":
    /*!****************************************************************!*\
      !*** ./projects/ngafr-testapp/src/environments/environment.ts ***!
      \****************************************************************/

    /*! exports provided: environment */

    /***/
    function wrzk(module, __webpack_exports__, __webpack_require__) {
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
    "zhZt":
    /*!******************************************************************************!*\
      !*** ./projects/ngafr-testapp/src/app/auth/auth-code/auth-code.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AuthCodeComponent */

    /***/
    function zhZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthCodeComponent", function () {
        return AuthCodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AuthCodeComponent = /*#__PURE__*/function () {
        function AuthCodeComponent() {
          _classCallCheck(this, AuthCodeComponent);
        }

        _createClass(AuthCodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthCodeComponent;
      }();

      AuthCodeComponent.ɵfac = function AuthCodeComponent_Factory(t) {
        return new (t || AuthCodeComponent)();
      };

      AuthCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthCodeComponent,
        selectors: [["ngafr-testapp-auth-code"]],
        decls: 3,
        vars: 0,
        consts: [[1, "terminal"]],
        template: function AuthCodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Download Packages :\n    npm i ngafr-authentication firebase firebaseui @angular/fire firebaseui-angular --save\nAppModule :\n    const firebaseConfig = {\n      apiKey: '*******',\n      authDomain: '*******',\n      databaseURL: '*******',\n      projectId: '',\n      storageBucket: '',\n      messagingSenderId: '',\n      appId: '',\n      measurementId: ''\n    };\n    const authProviders: FirebaseAuthProviders ={\n      googleAuthProvider: true,\n      emailAuthProvider: true,\n      githubAuthProvider: false,\n      facebookAuthProvider: false,\n      AnonymousAuthProvider: false,\n      phoneAuthProvider: false,\n      twitterAuthProvider: false,\n    };\n    imports: [\n      ...,\n      NgafrAuthenticationModule\n            .forRoot(firebaseConfig, authProviders),\n      ...\n    ]\n\nTemplate :\n    <div\n      ngafrAuth\n      (userLoggedInEvent)=\"loggedInEvent($event)\"\n      (userEvent)=\"userEvent($event)\"\n      hideDefaultLogOutButton = \"true\"\n      #ngafrAuth=\"ngafrAuth\">\n    </div>\n    <button [disabled]=\"!loggedIn\" (click)=\"ngafrAuth.logout()\">Logout</button>\n\nComponent :\n    export class AuthDemoComponent {\n        public loggedIn = false;\n        public userName = 'Guest';\n        constructor() {\n        loggedInEvent($event) {\n            this.loggedIn = $event.isLoggedIn;\n        }\n        userEvent($event) {\n            this.userName = 'Guest';\n            if ($event && $event.user && $event.user.displayName)\n                this.userName = $event.user.displayName;\n        }\n    }\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
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