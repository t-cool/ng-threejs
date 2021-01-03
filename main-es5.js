(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./package.json":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */

    /***/
    function packageJson(module) {
      module.exports = JSON.parse("{\"name\":\"ng-three-template\",\"version\":\"0.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.0.2\",\"@angular/common\":\"~10.0.2\",\"@angular/compiler\":\"~10.0.2\",\"@angular/core\":\"~10.0.2\",\"@angular/forms\":\"~10.0.2\",\"@angular/platform-browser\":\"~10.0.2\",\"@angular/platform-browser-dynamic\":\"~10.0.2\",\"@angular/router\":\"~10.0.2\",\"bootstrap\":\"^4.5.0\",\"rxjs\":\"~6.5.5\",\"three\":\"^0.118.3\",\"three-gltf-loader\":\"^1.111.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1000.1\",\"@angular/cli\":\"~10.0.1\",\"@angular/compiler-cli\":\"~10.0.2\",\"@angular/language-service\":\"~10.0.2\",\"@types/jasmine\":\"~3.5.11\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^12.12.47\",\"@types/three\":\"^0.103.2\",\"@types/webgl2\":\"^0.0.5\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.2\",\"karma\":\"~5.0.9\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~3.3.1\",\"karma-jasmine-html-reporter\":\"~1.5.4\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.10.2\",\"tslint\":\"~6.1.2\",\"typescript\":\"~3.9.6\"}}");
      /***/
    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine/engine.component */
      "./src/app/engine/engine.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-engine");
          }
        },
        directives: [_engine_engine_component__WEBPACK_IMPORTED_MODULE_1__["EngineComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./engine/engine.component */
      "./src/app/engine/engine.component.ts");
      /* harmony import */


      var _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ui/ui-infobar-bottom/ui-infobar-bottom.component */
      "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts");
      /* harmony import */


      var _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ui/ui-infobar-top/ui-infobar-top.component */
      "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts");
      /* harmony import */


      var _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ui/ui-sidebar-left/ui-sidebar-left.component */
      "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts");
      /* harmony import */


      var _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ui/ui-sidebar-right/ui-sidebar-right.component */
      "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts");
      /* harmony import */


      var _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ui/ui.component */
      "./src/app/ui/ui.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"], _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"], _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"], _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"], _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"], _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"], _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"], _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"], _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"], _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"], _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/engine/engine.component.ts":
    /*!********************************************!*\
      !*** ./src/app/engine/engine.component.ts ***!
      \********************************************/

    /*! exports provided: EngineComponent */

    /***/
    function srcAppEngineEngineComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineComponent", function () {
        return EngineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine.service */
      "./src/app/engine/engine.service.ts");

      var _c0 = ["rendererCanvas"];

      var EngineComponent = /*#__PURE__*/function () {
        function EngineComponent(engServ) {
          _classCallCheck(this, EngineComponent);

          this.engServ = engServ;
        }

        _createClass(EngineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.engServ.createScene(this.rendererCanvas);
            this.engServ.animate();
          }
        }]);

        return EngineComponent;
      }();

      EngineComponent.ɵfac = function EngineComponent_Factory(t) {
        return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]));
      };

      EngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EngineComponent,
        selectors: [["app-engine"]],
        viewQuery: function EngineComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
          }
        },
        decls: 3,
        vars: 0,
        consts: [[1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]],
        template: function EngineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-engine',
            templateUrl: './engine.component.html'
          }]
        }], function () {
          return [{
            type: _engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]
          }];
        }, {
          rendererCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/engine/engine.service.ts":
    /*!******************************************!*\
      !*** ./src/app/engine/engine.service.ts ***!
      \******************************************/

    /*! exports provided: EngineService */

    /***/
    function srcAppEngineEngineServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineService", function () {
        return EngineService;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "./node_modules/three/build/three.module.js");
      /* harmony import */


      var three_gltf_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! three-gltf-loader */
      "./node_modules/three-gltf-loader/index.js");
      /* harmony import */


      var three_gltf_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var EngineService = /*#__PURE__*/function () {
        function EngineService(ngZone) {
          _classCallCheck(this, EngineService);

          this.ngZone = ngZone;
          this.frameId = null;
        }

        _createClass(EngineService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.frameId != null) {
              cancelAnimationFrame(this.frameId);
            }
          }
        }, {
          key: "createScene",
          value: function createScene(canvas) {
            var _this = this;

            // The first step is to get the reference of the canvas element from our HTML document
            this.canvas = canvas.nativeElement;
            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
              canvas: this.canvas,
              alpha: true,
              antialias: true // smooth edges

            });
            this.renderer.setSize(window.innerWidth, window.innerHeight); // create the scene

            this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.z = 4;
            this.scene.add(this.camera); // soft white light

            this.light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x404040);
            this.light.position.z = 1;
            this.scene.add(this.light); // ここからモデルを生成

            var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
            var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
              color: 0x00ff00
            });
            this.cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material); //this.scene.add(this.cube);

            this.loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_1___default.a();
            this.loader.load('assets/Duck.gltf', function (gltf) {
              // called when the resource is loaded
              _this.scene.add(gltf.scene);
            }, function (xhr) {
              // called while loading is progressing
              console.log("".concat(xhr.loaded / xhr.total * 100, "% loaded"));
            }, function (error) {
              // called when loading has errors
              console.error('An error happened', error);
            }); //this.camera.rotation.y += 100
          }
        }, {
          key: "animate",
          value: function animate() {
            var _this2 = this;

            // We have to run this outside angular zones,
            // because it could trigger heavy changeDetection cycles.
            this.ngZone.runOutsideAngular(function () {
              if (document.readyState !== 'loading') {
                _this2.render();
              } else {
                window.addEventListener('DOMContentLoaded', function () {
                  _this2.render();
                });
              }

              window.addEventListener('resize', function () {
                _this2.resize();
              });
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this3 = this;

            this.frameId = requestAnimationFrame(function () {
              _this3.render();
            });
            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
            this.renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_0__["GammaEncoding"];
          }
        }, {
          key: "resize",
          value: function resize() {
            var width = window.innerWidth;
            var height = window.innerHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
          }
        }]);

        return EngineService;
      }();

      EngineService.ɵfac = function EngineService_Factory(t) {
        return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
      };

      EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: EngineService,
        factory: EngineService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EngineService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UiInfobarBottomComponent */

    /***/
    function srcAppUiUiInfobarBottomUiInfobarBottomComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiInfobarBottomComponent", function () {
        return UiInfobarBottomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var UiInfobarBottomComponent = /*#__PURE__*/function () {
        function UiInfobarBottomComponent() {
          _classCallCheck(this, UiInfobarBottomComponent);
        }

        _createClass(UiInfobarBottomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiInfobarBottomComponent;
      }();

      UiInfobarBottomComponent.ɵfac = function UiInfobarBottomComponent_Factory(t) {
        return new (t || UiInfobarBottomComponent)();
      };

      UiInfobarBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiInfobarBottomComponent,
        selectors: [["app-ui-infobar-bottom"]],
        decls: 2,
        vars: 0,
        template: function UiInfobarBottomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-infobar-bottom works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarBottomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-infobar-bottom',
            templateUrl: './ui-infobar-bottom.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts ***!
      \***************************************************************/

    /*! exports provided: UiInfobarTopComponent */

    /***/
    function srcAppUiUiInfobarTopUiInfobarTopComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiInfobarTopComponent", function () {
        return UiInfobarTopComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var UiInfobarTopComponent = /*#__PURE__*/function () {
        function UiInfobarTopComponent() {
          _classCallCheck(this, UiInfobarTopComponent);
        }

        _createClass(UiInfobarTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiInfobarTopComponent;
      }();

      UiInfobarTopComponent.ɵfac = function UiInfobarTopComponent_Factory(t) {
        return new (t || UiInfobarTopComponent)();
      };

      UiInfobarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiInfobarTopComponent,
        selectors: [["app-ui-infobar-top"]],
        decls: 2,
        vars: 0,
        template: function UiInfobarTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-infobar-top works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarTopComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-infobar-top',
            templateUrl: './ui-infobar-top.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UiSidebarLeftComponent */

    /***/
    function srcAppUiUiSidebarLeftUiSidebarLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiSidebarLeftComponent", function () {
        return UiSidebarLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var UiSidebarLeftComponent = /*#__PURE__*/function () {
        function UiSidebarLeftComponent() {
          _classCallCheck(this, UiSidebarLeftComponent);
        }

        _createClass(UiSidebarLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiSidebarLeftComponent;
      }();

      UiSidebarLeftComponent.ɵfac = function UiSidebarLeftComponent_Factory(t) {
        return new (t || UiSidebarLeftComponent)();
      };

      UiSidebarLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiSidebarLeftComponent,
        selectors: [["app-ui-sidebar-left"]],
        decls: 2,
        vars: 0,
        template: function UiSidebarLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-sidebar-left works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-sidebar-left',
            templateUrl: './ui-sidebar-left.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UiSidebarRightComponent */

    /***/
    function srcAppUiUiSidebarRightUiSidebarRightComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiSidebarRightComponent", function () {
        return UiSidebarRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var UiSidebarRightComponent = /*#__PURE__*/function () {
        function UiSidebarRightComponent() {
          _classCallCheck(this, UiSidebarRightComponent);
        }

        _createClass(UiSidebarRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiSidebarRightComponent;
      }();

      UiSidebarRightComponent.ɵfac = function UiSidebarRightComponent_Factory(t) {
        return new (t || UiSidebarRightComponent)();
      };

      UiSidebarRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiSidebarRightComponent,
        selectors: [["app-ui-sidebar-right"]],
        decls: 2,
        vars: 0,
        template: function UiSidebarRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-sidebar-right works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-sidebar-right',
            templateUrl: './ui-sidebar-right.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/ui/ui.component.ts":
    /*!************************************!*\
      !*** ./src/app/ui/ui.component.ts ***!
      \************************************/

    /*! exports provided: UiComponent */

    /***/
    function srcAppUiUiComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiComponent", function () {
        return UiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ui-infobar-top/ui-infobar-top.component */
      "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts");
      /* harmony import */


      var _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ui-sidebar-left/ui-sidebar-left.component */
      "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts");
      /* harmony import */


      var _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ui-sidebar-right/ui-sidebar-right.component */
      "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts");
      /* harmony import */


      var _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ui-infobar-bottom/ui-infobar-bottom.component */
      "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts");

      var UiComponent = /*#__PURE__*/function () {
        function UiComponent() {
          _classCallCheck(this, UiComponent);
        }

        _createClass(UiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiComponent;
      }();

      UiComponent.ɵfac = function UiComponent_Factory(t) {
        return new (t || UiComponent)();
      };

      UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiComponent,
        selectors: [["app-ui"]],
        decls: 5,
        vars: 0,
        consts: [[1, "ui-wrapper"]],
        template: function UiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ui-infobar-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ui-sidebar-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ui-sidebar-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ui-infobar-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__["UiInfobarTopComponent"], _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__["UiSidebarLeftComponent"], _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__["UiSidebarRightComponent"], _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui',
            templateUrl: './ui.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        version: __webpack_require__(
        /*! ../../package.json */
        "./package.json").version
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], [{
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/t-cool/Desktop/ng-threejs/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map