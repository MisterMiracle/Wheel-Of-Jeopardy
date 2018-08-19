webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/administrator/administrator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/administrator/administrator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\n  <div class=\"container-fluid\">\n    <h1>{{title}}</h1>\n    <div class=\"row\">\n    <div class=\"col-md-6 \">\n        <h2 class=\"sub-header\">Categories&nbsp;<button id=\"addCategory\" class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#categoryModal\" (click)=\"addCategory()\">Add</button></h2> \n        <table class=\"table table-bordered half-height-table\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Category Name</th>\n                <th>Actions</th> \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cat of categories; let i=index\">\n                \n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{cat.title}}</td>\n                <td><button class=\"btn btn-primary\" (click)=\"updateCategory(cat)\"data-toggle=\"modal\" data-target=\"#categoryModal\" >Edit</button> <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteCategory\" (click)=\"deleteCategory(cat)\">Delete</button></td>\n              </tr>\n              \n            </tbody>\n          </table>\n      </div>\n      </div>\n      \n  </div>\n</div>\n\n\n<!-- Modals -->\n\n\n<div id=\"categoryModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">{{action}} Category Window</h5>\n      <button id=\"closeExampleModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      \n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.title\"class=\"form-control\" id=\"categoryName\" aria-describedby=\"categoryName\" placeholder=\"Enter Category Title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$200 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[0].qStatement\"class=\"form-control\" id=\"categoryQuestion1\" aria-describedby=\"categoryQuestion1\" placeholder=\"Enter $200 Question Statement\">\n          <label for=\"name\">$200 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[0].qAnswer\"class=\"form-control\" id=\"categoryAnswer1\" aria-describedby=\"categoryAnswer1\" placeholder=\"Enter $200 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$400 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[1].qStatement\"class=\"form-control\" id=\"categoryQuestion2\" aria-describedby=\"categoryQuestion2\" placeholder=\"Enter $400 Question Statement\">\n          <label for=\"name\">$400 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[1].qAnswer\"class=\"form-control\" id=\"categoryAnswer2\" aria-describedby=\"categoryAnswer2\" placeholder=\"Enter $400 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$600 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[2].qStatement\"class=\"form-control\" id=\"categoryQuestion3\" aria-describedby=\"categoryQuestion3\" placeholder=\"Enter $600 Question Statement\">\n          <label for=\"name\">$600 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[2].qAnswer\"class=\"form-control\" id=\"categoryAnswer3\" aria-describedby=\"categoryAnswer3\" placeholder=\"Enter $600 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$800 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[3].qStatement\"class=\"form-control\" id=\"categoryQuestion4\" aria-describedby=\"categoryQuestion4\" placeholder=\"Enter $800 Question Statement\">\n          <label for=\"name\">$800 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[3].qAnswer\"class=\"form-control\" id=\"categoryAnswer4\" aria-describedby=\"categoryAnswer4\" placeholder=\"Enter $800 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$1000 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[4].qStatement\"class=\"form-control\" id=\"categoryQuestion5\" aria-describedby=\"categoryQuestion5\" placeholder=\"Enter $1000 Question Statement\">\n          <label for=\"name\">$1000 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[4].qAnswer\"class=\"form-control\" id=\"categoryAnswer5\" aria-describedby=\"categoryAnswer5\" placeholder=\"Enter $1000 Question Answer\">\n        </div>\n        \n      \n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"(click)=\"executeCategoryAction()\">{{action}} Category</button>\n    </div>\n  </div>\n</div>\n</div>\n\n<div id=\"deleteCategory\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{action}} Category</h5>\n        <button id=\"closeExampleModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n            <label for=\"name\">Are you sure you want to delete this Category?</label>\n          </div>\n          \n        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"executeCategoryAction()\">{{action}}</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/administrator/administrator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministratorComponent = (function () {
    function AdministratorComponent(categoryService) {
        this.categoryService = categoryService;
        this.title = "Administrator's Page";
        this.tempCategory = { id: 0, title: "", questions: [{ qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }] };
        this.action = "Add";
        this.getCategories();
    }
    AdministratorComponent.prototype.ngOnInit = function () {
    };
    AdministratorComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    AdministratorComponent.prototype.addCategoryAction = function (category) {
        //category.titleID=this.categories.length
        this.categoryService.addCategory(category);
        this.getCategories();
    };
    AdministratorComponent.prototype.updateCategoryAction = function (category) {
        this.categoryService.updateCategory(category);
        this.getCategories();
    };
    AdministratorComponent.prototype.deleteCategoryAction = function (categoryId) {
        this.categoryService.deleteCategory(categoryId);
        this.getCategories();
    };
    AdministratorComponent.prototype.addCategory = function () {
        this.action = "Add";
        this.tempCategory = this.resetTempCategory();
    };
    AdministratorComponent.prototype.deleteCategory = function (category) {
        this.action = "Delete";
        this.tempCategory = Object.assign({}, category);
    };
    AdministratorComponent.prototype.updateCategory = function (category) {
        this.action = "Update";
        this.tempCategory = Object.assign({}, category);
    };
    AdministratorComponent.prototype.executeCategoryAction = function () {
        // console.log(this.tempCategory)
        if (this.action == "Add") {
            var outputObjt = this.setUpOutputObject(this.tempCategory);
            console.log("outputobject: ", outputObjt);
            this.addCategoryAction(outputObjt);
        }
        else if (this.action == "Update") {
            var outputObjt = this.setUpOutputObject(this.tempCategory);
            console.log(outputObjt);
            this.updateCategoryAction(outputObjt);
        }
        else if (this.action == "Delete") {
            this.deleteCategoryAction(this.tempCategory.titleID);
        }
    };
    AdministratorComponent.prototype.resetTempCategory = function () {
        return { id: 0, title: "", questions: [{ qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }, { qStatement: "", qAnswer: "" }] };
    };
    AdministratorComponent.prototype.setUpOutputObject = function (category) {
        var catObject = {
            titleID: category.titleID,
            title: category.title,
            qStatement1: category.questions[0].qStatement,
            qAnswer1: category.questions[0].qAnswer,
            qStatement2: category.questions[1].qStatement,
            qAnswer2: category.questions[1].qAnswer,
            qStatement3: category.questions[2].qStatement,
            qAnswer3: category.questions[2].qAnswer,
            qStatement4: category.questions[3].qStatement,
            qAnswer4: category.questions[3].qAnswer,
            qStatement5: category.questions[4].qStatement,
            qAnswer5: category.questions[4].qAnswer,
        };
        return catObject;
    };
    AdministratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-administrator',
            template: __webpack_require__("../../../../../src/app/administrator/administrator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/administrator/administrator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], AdministratorComponent);
    return AdministratorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n<nav id=\"sidebar\" class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/dashboard\">Wheel Of Jeopardy</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n  \n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/game\">Game</a>\n    </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/administrator\">Administrator</a>\n      </li> -->\n      \n    </ul>\n   \n  </div>\n</nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppNavbarComponent = (function () {
    function AppNavbarComponent() {
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__administrator_administrator_component__ = __webpack_require__("../../../../../src/app/administrator/administrator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wheel_of_jeopardy_wheel_of_jeopardy_component__ = __webpack_require__("../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'administrator', component: __WEBPACK_IMPORTED_MODULE_3__administrator_administrator_component__["a" /* AdministratorComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_4__wheel_of_jeopardy_wheel_of_jeopardy_component__["a" /* WheelOfJeopardyComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-navbar></app-navbar>\n<!-- <div class=\"container\">\n  <div class=\"starter-template\">\n      <h1>Bootstrap starter template</h1>\n      <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n  </div>\n</div> -->\n<!-- <nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n</nav> -->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'MOSAICS Landing';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_navbar_app_navbar_component__ = __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__administrator_administrator_component__ = __webpack_require__("../../../../../src/app/administrator/administrator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wheel_of_jeopardy_wheel_of_jeopardy_component__ = __webpack_require__("../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__administrator_administrator_component__["a" /* AdministratorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__wheel_of_jeopardy_wheel_of_jeopardy_component__["a" /* WheelOfJeopardyComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n.card-header{\n  height: 50px; \n  width: 100%; \n  display: block;\n}\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n\n      <div class=\"row\" align=\"center\">\n\n        <div class=\"col-md-4\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header bg-success\"></div>\n            <div class=\"card-body\">\n                <h2>Game</h2>\n              <p class=\"card-text\">Start New Game</p>\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#startGameModal\"  class=\"btn btn-sm btn-outline-secondary\">Start</button>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-header bg-primary\"></div>\n              <div class=\"card-body\">\n              <h2>Administrator</h2>\n              <p class=\"card-text\">View, add, edit, and delete Categories</p>\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" routerLink=\"/administrator\" class=\"btn btn-sm btn-outline-secondary\">Setup</button>\n                </div>\n                \n              </div>\n            </div>\n          </div>\n        </div>    \n      </div>\n    </div>\n  </div>\n\n\n  <div id=\"startGameModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">Enter Player Names</h5>\n            <button id=\"closeExampleModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            \n              <div class=\"form-group\">\n                  <label for=\"name\">Player 1</label>\n                  <input type=\"text\" [(ngModel)]=\"playerNames[0]\"class=\"form-control\" id=\"name1\"aria-describedby=\"name1\" placeholder=\"Enter Name\"> \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"name\">Player 2</label>\n                  <input type=\"text\" [(ngModel)]=\"playerNames[1]\"class=\"form-control\" id=\"name2\" aria-describedby=\"name2\" placeholder=\"Enter Name\">\n                 </div>\n                <div class=\"form-group\">\n                  <label for=\"name\">Player 3</label>\n                  <input type=\"text\" [(ngModel)]=\"playerNames[2]\"class=\"form-control\" id=\"name3\" aria-describedby=\"name3\" placeholder=\"Enter Name\">\n                </div>\n              \n            \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"setPlayerNames()\" routerLink=\"/game\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
        this.playerNames = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.setPlayerNames = function () {
        this.dataService.setPlayerNames(this.playerNames);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    {
        titleID: 0,
        title: "Candies",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    },
    {
        titleID: 1,
        title: "Pasta",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    },
    {
        titleID: 2,
        title: "Kitchen",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    },
    {
        titleID: 3,
        title: "Flowers",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    },
    {
        titleID: 4,
        title: "Animals",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    },
    {
        titleID: 5,
        title: "Furniture",
        questions: [
            {
                id: 0,
                qStatement: "Twiz is produced by?",
                qAnswer: "Candy"
            },
            {
                id: 1,
                qStatement: "Snickers is produced by?",
                qAnswer: "Loreal"
            },
            {
                id: 2,
                qStatement: "Dove is produced by?",
                qAnswer: "Palmolive"
            },
            {
                id: 3,
                qStatement: "Nerds are produced by?",
                qAnswer: "Mary Kae"
            },
            {
                id: 4,
                qStatement: "Bubaloo is produced by?",
                qAnswer: "Beryl"
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/models/game-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStatus; });
var GameStatus = (function () {
    function GameStatus(playerNames) {
        this.playerInTurnName = "";
        this.playerNames = playerNames;
        this.playerIndex = 0;
        this.playerInTurnName = this.playerNames[0];
        this.roundNumber = 1;
        this.spinsInRound = 0;
    }
    GameStatus.prototype.nextRound = function () {
        this.roundNumber++;
        this.spinsInRound = 0;
        this.nextPlayerTurn();
    };
    GameStatus.prototype.addSpin = function () {
        this.spinsInRound++;
    };
    GameStatus.prototype.nextPlayerTurn = function () {
        this.playerIndex += 1;
        if (this.playerIndex == 3) {
            this.playerIndex = 0;
        }
        this.playerInTurnName = this.playerNames[this.playerIndex];
    };
    return GameStatus;
}());



/***/ }),

/***/ "../../../../../src/app/models/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(id, name) {
        this.id = id;
        this.name = name;
        this.round1Points = 0;
        this.round2Points = 0;
        this.totalPoints = 0;
        this.numTokens = 0;
    }
    Player.prototype.addRoundPoints = function (round, points) {
        if (round == 1) {
            this.round1Points += points;
        }
        else {
            this.round2Points += points;
        }
        this.updateTotalPoints();
    };
    Player.prototype.reduceRoundPoints = function (round, points) {
        if (round == 1) {
            this.round1Points -= points;
        }
        else {
            this.round2Points -= points;
        }
        this.updateTotalPoints();
    };
    Player.prototype.goBankrupt = function (round) {
        if (round == 1) {
            this.round1Points = 0;
        }
        else {
            this.round2Points = 0;
        }
        this.updateTotalPoints();
    };
    Player.prototype.getTotalPoints = function () {
        return this.totalPoints;
    };
    Player.prototype.hasToken = function () {
        return this.numTokens > 0;
    };
    Player.prototype.addToken = function () {
        this.numTokens++;
    };
    Player.prototype.useOneToken = function () {
        this.numTokens--;
    };
    Player.prototype.updateTotalPoints = function () {
        this.totalPoints = this.round1Points + this.round2Points;
    };
    return Player;
}());



/***/ }),

/***/ "../../../../../src/app/models/sector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sector; });
var SectorType;
(function (SectorType) {
    SectorType[SectorType["Category"] = 0] = "Category";
    SectorType[SectorType["FreeTurn"] = 1] = "FreeTurn";
    SectorType[SectorType["LoseTurn"] = 2] = "LoseTurn";
    SectorType[SectorType["YourChoice"] = 3] = "YourChoice";
    SectorType[SectorType["OpponentsChoice"] = 4] = "OpponentsChoice";
    SectorType[SectorType["Bankrupt"] = 5] = "Bankrupt";
    SectorType[SectorType["DoubleScore"] = 6] = "DoubleScore";
})(SectorType || (SectorType = {}));
var Sector = (function () {
    function Sector(name, value, categoryId) {
        this.name = name;
        this.value = value;
        this.categoryId = categoryId;
    }
    return Sector;
}());



/***/ }),

/***/ "../../../../../src/app/models/wheel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wheel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sector__ = __webpack_require__("../../../../../src/app/models/sector.ts");

var SectorType;
(function (SectorType) {
    SectorType[SectorType["Category"] = 0] = "Category";
    SectorType[SectorType["FreeTurn"] = 1] = "FreeTurn";
    SectorType[SectorType["LoseTurn"] = 2] = "LoseTurn";
    SectorType[SectorType["YourChoice"] = 3] = "YourChoice";
    SectorType[SectorType["OpponentsChoice"] = 4] = "OpponentsChoice";
    SectorType[SectorType["Bankrupt"] = 5] = "Bankrupt";
    SectorType[SectorType["DoubleScore"] = 6] = "DoubleScore";
})(SectorType || (SectorType = {}));
var Wheel = (function () {
    function Wheel(categories) {
        this.sectors = [];
        /*
                this.sectors.push(new Sector("FreeTurn",SectorType.FreeTurn,-1))
                this.sectors.push(new Sector("Bankrupt",SectorType.Bankrupt,-1))
                this.sectors.push(new Sector("LoseTurn",SectorType.LoseTurn,-1))
                this.sectors.push(new Sector("DoubleScore",SectorType.DoubleScore,-1))
                this.sectors.push(new Sector("YourChoice",SectorType.YourChoice,-1))
                this.sectors.push(new Sector("OpponentsChoice",SectorType.OpponentsChoice,-1))
                var i=0;
                for(let cat of categories){
                    this.sectors.push(new Sector(cat.title,SectorType.Category,i++))
                }
                */
        var i = 0;
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var cat = categories_1[_i];
            this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */](cat.title, SectorType.Category, i++));
        }
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("FreeTurn", SectorType.FreeTurn, -1));
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("LoseTurn", SectorType.LoseTurn, -1));
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("YourChoice", SectorType.YourChoice, -1));
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("OpponentsChoice", SectorType.OpponentsChoice, -1));
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("Bankrupt", SectorType.Bankrupt, -1));
        this.sectors.push(new __WEBPACK_IMPORTED_MODULE_0__sector__["a" /* Sector */]("DoubleScore", SectorType.DoubleScore, -1));
    }
    Wheel.prototype.spinWheel = function () {
        return this.sectors[Math.floor(Math.random() * 12)];
        //return this.sectors[8]
    };
    return Wheel;
}());



/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_categories__ = __webpack_require__("../../../../../src/app/models/categories.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.categories = __WEBPACK_IMPORTED_MODULE_1__models_categories__["a" /* CATEGORIES */];
        this.baseURL = "questions";
    }
    CategoryService.prototype.get6Categories = function () {
        return this.http.get(this.baseURL + "/get6Categories");
    };
    CategoryService.prototype.getAllCategories = function () {
        return this.http.get(this.baseURL + "/getAllCategories");
    };
    CategoryService.prototype.deleteCategory = function (titleId) {
        return this.http.post(this.baseURL + "/deleteCategory", { titleID: titleId });
    };
    // getCategories(){
    //   return this.categories;
    // }
    CategoryService.prototype.addCategory = function (category) {
        // this.categories.push(category);
        return this.http.post(this.baseURL + "/addCategory", { ok: "ok" });
    };
    // deleteCategory(categoryId:any){
    //   for(var i=0;i<this.categories.length;i++){
    //       if(this.categories[i].id==categoryId){
    //         this.categories.splice(i,1);
    //       }
    //   } 
    // }  
    CategoryService.prototype.updateCategory = function (category) {
        console.log("llegue a la parte de atras");
        return this.http.put(this.baseURL + "/editCategory", category);
        // for(var i=0;i<this.categories.length;i++){
        //   if(this.categories[i].titleID==category.titleID){
        //     this.categories[i]=category
        //   }
        // }
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.setPlayerNames = function (names) {
        this.playerNames = names;
    };
    DataService.prototype.getPlayerNames = function () {
        return this.playerNames;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wheelTitle{\r\n    margin-left:60px;\r\n}\r\n\r\n.wheel{\r\n    margin:auto;\r\n}\r\n\r\n.wheelButton{\r\n    margin-left:60px;\r\n    margin-top:10px;\r\n}\r\n\r\n.playersDiv{\r\n    margin-top: 30px;\r\n}\r\n\r\n.questionPicked{\r\n    background-color: #c0c4c6 !important;\r\n}\r\n\r\n.GameStatus{\r\n    margin-left: 70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-ligh\">\n  <div class=\"container-fluid\">\n    \n    <div class=\"row\">\n      <div class=\"col-md-3 wheelDiv\" >\n          <h4 class=\"sub-header wheelTitle\" >Wheel</h4>\n          <div class=\"row wheel\" > \n            <img src=\"assets/images/wheel.png\" alt=\"image\">\n          </div>\n          <div class=\"row wheelButton\"> \n            <button class=\"btn btn-success btn-sm spinWheelButton\" (click)=\"spinWheel()\">Spin Wheel</button>\n          </div>\n      </div>\n    <div class=\"col-md-6 \">\n        <h4 class=\"sub-header\">Question Board</h4> \n        <table class=\"table table-bordered table-sm\" ng-disabled=\"true\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th *ngFor=\"let cat of categories; let i=index\"><button class=\"btn btn-danger btn-sm disabled categoryButton\" (click)=\"pickNextQuestion(i)\">{{cat.title}}</button></th>\n              </tr>\n            </thead>\n            <tbody>\n              <!-- Need to makes this table better to handle coloring when questions are being picked -->\n             <tr>                \n                <td class=\"question0-0\">$200</td>\n                <td class=\"question0-1\">$200</td>\n                <td class=\"question0-2\">$200</td>\n                <td class=\"question0-3\">$200</td>\n                <td class=\"question0-4\">$200</td>\n                <td class=\"question0-5\">$200</td>\n              </tr> \n              <tr>                \n                  <td class=\"question1-0\">$400</td>\n                  <td class=\"question1-1\">$400</td>\n                  <td class=\"question1-2\">$400</td>\n                  <td class=\"question1-3\">$400</td>\n                  <td class=\"question1-4\">$400</td>\n                  <td class=\"question1-5\">$400</td>\n                </tr> \n            <tr>                \n                <td class=\"question2-0\">$600</td>\n                <td class=\"question2-1\">$600</td>\n                <td class=\"question2-2\">$600</td>\n                <td class=\"question2-3\">$600</td>\n                <td class=\"question2-4\">$600</td>\n                <td class=\"question2-5\">$600</td>\n              </tr> \n              <tr>                \n                  <td class=\"question3-0\">$800</td>\n                  <td class=\"question3-1\">$800</td>\n                  <td class=\"question3-2\">$800</td>\n                  <td class=\"question3-3\">$800</td>\n                  <td class=\"question3-4\">$800</td>\n                  <td class=\"question3-5\">$800</td>\n                </tr> \n                <tr>                \n                    <td class=\"question4-0\">$1000</td>\n                    <td class=\"question4-1\">$1000</td>\n                    <td class=\"question4-2\">$1000</td>\n                    <td class=\"question4-3\">$1000</td>\n                    <td class=\"question4-4\">$1000</td>\n                    <td class=\"question4-5\">$1000</td>\n                  </tr>             \n              \n            </tbody>\n          </table>\n      </div>\n      <div class=\"col-md-2\">\n        <table class=\"table table-bordered col-md-4 GameStatus\">\n          <thead>\n              <tr>\n                  <th colspan=\"2\">Game Status</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>Turn of: {{gameStatus.playerInTurnName}} </td>                  \n              </tr>\n              <tr>\n                <td>Num of Round: {{gameStatus.roundNumber}} </td>                  \n            </tr>\n            <tr>\n              <td>Num of Spins in Round: {{gameStatus.spinsInRound}} </td>                  \n          </tr>\n          </tbody>\n        </table>\n      </div>\n      </div>\n      <div class=\"row playersDiv\">\n        \n        <table class=\"table table-bordered col-md-4 players\" *ngFor=\"let player of players\">\n          <thead>\n              <tr>\n                  <th colspan=\"2\">{{player.name}}</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>Points: {{player.totalPoints}}</td>\n                  <td>Tokens: {{player.numTokens}}</td>\n              </tr>\n          </tbody>\n        </table>\n       \n      </div>\n      \n  </div>\n</div>\n<button id=\"triggerModalButton\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#wheelResultModal\"  class=\"btn btn-sm btn-outline-secondary\">wheelResult</button>\n<button id=\"messageModalButton\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#messageModal\"  class=\"btn btn-sm btn-outline-secondary\">other messages</button>\n<button id=\"message2ModalButton\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#message2Modal\"  class=\"btn btn-sm btn-outline-secondary\">freeTurn/bankrup/loseturn</button>\n<button id=\"triggerModalButtonPickQuestion\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#displayQuestionModal\"  class=\"btn btn-sm btn-outline-secondary\">questionPicked</button>\n<button id=\"triggerModalButtonDisplayAnswer\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#displayAnswerModal\"  class=\"btn btn-sm btn-outline-secondary\">displayAnswer</button>\n<button id=\"triggerModalButtonPlayerHasTokens\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#useTokenModal\"  class=\"btn btn-sm btn-outline-secondary\">displayAnswer</button>\n<button id=\"triggerModalShowWinner\" type=\"button\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#winnerModal\"  class=\"btn btn-sm btn-outline-secondary\">displayAnswer</button>\n\n<!-- Modals -->\n<div id=\"displayAnswerModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Answer: </h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"title\">The answer to the question is: {{nextAnswer}}<br>Did {{gameStatus.playerInTurnName}} answer correctly?</label>\n              \n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"correctAnswer()\">Yes</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"wrongAnswer()\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"useTokenModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{gameStatus.playerInTurnName}} you have at least one token</h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"title\">Do you want to use one token?</label>\n              \n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"useToken()\">Yes</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"dontUseToken()\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"displayQuestionModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Question: </h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"title\">{{gameStatus.playerInTurnName}} answer the following question: {{nextQuestion}}</label>\n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"displayAnswer()\"> Show Answer</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"wheelResultModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Wheel Result</h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"title\">Wheel Landed on: {{sector.name}}</label>\n\t\t\t  <p></p>\n\t\t\t  <div>\n\t\t\t  {{userPrompt}}\n\t\t\t  </div>\n\t\t\t  <!--\n\t\t\t  <div ng-switch={{sector.value}}>\n\t\t\t\t<div ng-switch-when=\"Category\">Category Sector</div>\n\t\t\t\t<div ng-switch-when=\"YourChoice\">Player picks a category</div>\n\t\t\t\t<div ng-switch-when=\"OpponentsChoice\">Opponent picks a category</div>\t\t\t\t\n\t\t\t\t<div ng-switch-default></div>\t\t\t  \n\t\t\t  </div>\n\t\t\t  -->\n\t\t\t  <!--\n\t\t\t  <label [class.selected]=\"Category === sector.value\">\n\t\t\t\tCategory Sector\n\t\t\t  </label>\t\t\t  \n\t\t\t  <label [class.selected]=\"YourChoice === sector.value\">\n\t\t\t\tPlayer picks a category\n\t\t\t  </label>\t\t\t  \n\t\t\t  <label [class.selected]=\"OpponentsChoice === sector.value\">\n\t\t\t\tOpponent picks a category\n\t\t\t  </label>\n-->\t\t\t  \n          </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"  (click)=\"parseSpinResult()\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"messageModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Message</h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"message\">{{message}}</label><br>\n             \n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"message2Modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Message</h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"message\">{{message}}</label><br>\n             \n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"nextTurn()\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"winnerModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">And the winner is.......</h5>\n       \n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n              <label for=\"message\">Congratulations {{winner}}!!!!!!</label><br>\n             \n            </div>        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" routerLink=\"/dashboard\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div id=\"categoryModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">{{action}} Category Window</h5>\n      <button id=\"closeExampleModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      \n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.title\"class=\"form-control\" id=\"categoryName\" aria-describedby=\"categoryName\" placeholder=\"Enter Category Title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$200 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[0].qStatement\"class=\"form-control\" id=\"categoryQuestion1\" aria-describedby=\"categoryQuestion1\" placeholder=\"Enter $200 Question Statement\">\n          <label for=\"name\">$200 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[0].qAnswer\"class=\"form-control\" id=\"categoryAnswer1\" aria-describedby=\"categoryAnswer1\" placeholder=\"Enter $200 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$400 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[1].qStatement\"class=\"form-control\" id=\"categoryQuestion2\" aria-describedby=\"categoryQuestion2\" placeholder=\"Enter $400 Question Statement\">\n          <label for=\"name\">$400 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[1].qAnswer\"class=\"form-control\" id=\"categoryAnswer2\" aria-describedby=\"categoryAnswer2\" placeholder=\"Enter $400 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$600 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[2].qStatement\"class=\"form-control\" id=\"categoryQuestion3\" aria-describedby=\"categoryQuestion3\" placeholder=\"Enter $600 Question Statement\">\n          <label for=\"name\">$600 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[2].qAnswer\"class=\"form-control\" id=\"categoryAnswer3\" aria-describedby=\"categoryAnswer3\" placeholder=\"Enter $600 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$800 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[3].qStatement\"class=\"form-control\" id=\"categoryQuestion4\" aria-describedby=\"categoryQuestion4\" placeholder=\"Enter $800 Question Statement\">\n          <label for=\"name\">$800 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[3].qAnswer\"class=\"form-control\" id=\"categoryAnswer4\" aria-describedby=\"categoryAnswer4\" placeholder=\"Enter $800 Question Answer\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">$1000 Question Statement</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[4].qStatement\"class=\"form-control\" id=\"categoryQuestion5\" aria-describedby=\"categoryQuestion5\" placeholder=\"Enter $1000 Question Statement\">\n          <label for=\"name\">$1000 Question Answer</label>\n          <input type=\"text\" [(ngModel)]=\"tempCategory.questions[4].qAnswer\"class=\"form-control\" id=\"categoryAnswer5\" aria-describedby=\"categoryAnswer5\" placeholder=\"Enter $1000 Question Answer\">\n        </div>\n        \n      \n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"(click)=\"executeCategoryAction()\">{{action}} Category</button>\n    </div>\n  </div>\n</div>\n</div>\n\n<div id=\"deleteCategory\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{action}} Category</h5>\n        <button id=\"closeExampleModal\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n          <div class=\"form-group\">\n            <label for=\"name\">Are you sure you want to delete this Category?</label>\n          </div>\n          \n        \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"executeCategoryAction()\">{{action}}</button>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WheelOfJeopardyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_player__ = __webpack_require__("../../../../../src/app/models/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_wheel__ = __webpack_require__("../../../../../src/app/models/wheel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_game_status__ = __webpack_require__("../../../../../src/app/models/game-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WheelOfJeopardyComponent = (function () {
    //var oppBool = 0;
    function WheelOfJeopardyComponent(categoryService, dataService) {
        var _this = this;
        this.categoryService = categoryService;
        this.dataService = dataService;
        this.playerNames = [];
        this.players = [];
        this.message = "";
        this.questionIndex = [0, 0, 0, 0, 0, 0];
        this.categoryPickedId = 0;
        this.winner = "";
        this.landedOn = "";
        // this.categories=this.getCategories();
        this.categoryService.get6Categories().subscribe(function (data) {
            _this.categories = data;
            _this.wheel = new __WEBPACK_IMPORTED_MODULE_3__models_wheel__["a" /* Wheel */](_this.categories);
        });
        // this.playerNames=this.dataService.getPlayerNames() 
        // var i=0
        // for(let name of this.playerNames){
        //   this.players.push(new Player(i++,name))
        // }
        this.playerNames = ["Bryan", "Luis", "Adrian"];
        this.players = [new __WEBPACK_IMPORTED_MODULE_2__models_player__["a" /* Player */](0, "Bryan"), new __WEBPACK_IMPORTED_MODULE_2__models_player__["a" /* Player */](1, "Luis"), new __WEBPACK_IMPORTED_MODULE_2__models_player__["a" /* Player */](2, "Adrian")];
        this.gameStatus = new __WEBPACK_IMPORTED_MODULE_4__models_game_status__["a" /* GameStatus */](this.playerNames);
        this.message = this.gameStatus.playerInTurnName + " is your turn to spin the wheel";
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
        // console.log("First Player points",this.players[0].getTotalPoints())
    }
    WheelOfJeopardyComponent.prototype.ngOnInit = function () {
    };
    WheelOfJeopardyComponent.prototype.pickNextQuestion = function (catId) {
        this.categoryPickedId = catId;
        var qIndex = this.questionIndex[catId];
        if (qIndex == 5) {
            if (this.landedOn == "YourChoice" || this.landedOn == "OpponentsChoice") {
                this.message = "Please select another category; the selected category has no available questions";
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
            }
            else {
                this.message = "All question for " + this.categories[catId].title + " have been answered. Please spin the wheel again";
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_jquery__(".question" + qIndex + "-" + catId).addClass("questionPicked");
            //instead of using category id from database default ids from 0 to 5
            //this.CATEGORIES.Category[catID]
            this.questionPicked = this.categories[catId].questions[qIndex];
            this.nextQuestion = this.questionPicked.qStatement;
            this.questionIndex[catId]++;
            //this.nextQuestion = this.categories[catId].questions[this.questionIndex[catId]].qStatement
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalButtonPickQuestion").click();
        }
    };
    WheelOfJeopardyComponent.prototype.displayAnswer = function () {
        this.nextAnswer = this.questionPicked.qAnswer;
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalButtonDisplayAnswer").click();
    };
    WheelOfJeopardyComponent.prototype.nextTurn = function () {
        var _this = this;
        this.gameStatus.addSpin();
        if (this.gameStatus.spinsInRound == 50 || this.checkIndecesInQuestionBoard()) {
            if (this.gameStatus.roundNumber == 1) {
                this.gameStatus.nextRound();
                this.categoryService.get6Categories().subscribe(function (data) {
                    _this.categories = data;
                    _this.wheel = new __WEBPACK_IMPORTED_MODULE_3__models_wheel__["a" /* Wheel */](_this.categories);
                });
                this.resetQuestionBoard();
                this.questionIndex = [0, 0, 0, 0, 0, 0];
                this.message = "Starting Round 2. " + this.gameStatus.playerInTurnName + " is your turn to spin the wheel";
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
                this.disableCategoryButtons();
            }
            else {
                this.winner = this.checkWinner();
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalShowWinner").click();
            }
        }
        else {
            this.gameStatus.nextPlayerTurn();
            this.message = this.gameStatus.playerInTurnName + " is your turn to spin the wheel";
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
            this.disableCategoryButtons();
        }
    };
    WheelOfJeopardyComponent.prototype.checkWinner = function () {
        if ((this.players[0].getTotalPoints() > this.players[1].getTotalPoints()) && (this.players[0].getTotalPoints() > this.players[2].getTotalPoints())) {
            return this.players[0].name;
        }
        else if ((this.players[1].getTotalPoints() > this.players[0].getTotalPoints()) && (this.players[1].getTotalPoints() > this.players[2].getTotalPoints())) {
            return this.players[1].name;
        }
        else {
            return this.players[2].name;
        }
    };
    WheelOfJeopardyComponent.prototype.checkIndecesInQuestionBoard = function () {
        return (this.questionIndex[0] == 5 && this.questionIndex[1] == 5 && this.questionIndex[2] == 5 && this.questionIndex[3] == 5 && this.questionIndex[4] == 5);
    };
    WheelOfJeopardyComponent.prototype.spinWheel = function () {
        //this method should return a value representing the action to be
        this.sector = this.wheel.spinWheel();
        this.landedOn = this.sector.name;
        switch (this.landedOn) {
            case "YourChoice": {
                this.userPrompt = this.gameStatus.playerInTurnName + " picks a category";
                break;
            }
            case "OpponentsChoice": {
                this.userPrompt = "Opponent picks a category";
                break;
            }
            default: {
                this.userPrompt = "";
                break;
            }
        }
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalButton").click();
    };
    WheelOfJeopardyComponent.prototype.freeTurn = function () {
        this.message = this.gameStatus.playerInTurnName + " earns a token!";
        this.players[this.gameStatus.playerIndex].addToken();
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#message2ModalButton").click();
        // this.nextTurn()
    };
    WheelOfJeopardyComponent.prototype.loseTurn = function () {
        if (this.players[this.gameStatus.playerIndex].hasToken()) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalButtonPlayerHasTokens").click();
        }
        else {
            this.message = this.gameStatus.playerInTurnName + " loses turn";
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#message2ModalButton").click();
            // this.nextTurn();
        }
    };
    WheelOfJeopardyComponent.prototype.useToken = function () {
        this.players[this.gameStatus.playerIndex].useOneToken();
        this.message = this.gameStatus.playerInTurnName + " you can spin the wheel again";
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#messageModalButton").click();
    };
    WheelOfJeopardyComponent.prototype.dontUseToken = function () {
        this.nextTurn();
    };
    WheelOfJeopardyComponent.prototype.enableCategoryButtons = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").removeClass("btn-danger");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").addClass("btn-primary");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").removeClass("disabled");
        //disable spin wheel button
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").removeClass("btn-success");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").addClass("btn-danger");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").addClass("disabled");
    };
    WheelOfJeopardyComponent.prototype.disableCategoryButtons = function () {
        //enable spin wheel buttons
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").removeClass("btn-danger");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").addClass("btn-success");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".spinWheelButton").removeClass("disabled");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").removeClass("btn-primary");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").addClass("btn-danger");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".categoryButton").addClass("disabled");
    };
    WheelOfJeopardyComponent.prototype.bankrupt = function () {
        this.message = this.gameStatus.playerInTurnName + " loses all the points accumulated in this round.";
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#message2ModalButton").click();
        this.players[this.gameStatus.playerIndex].goBankrupt(this.gameStatus.roundNumber);
        // this.nextTurn()
    };
    WheelOfJeopardyComponent.prototype.doubleScore = function () {
        this.message = this.gameStatus.playerInTurnName + " score has been doubled!";
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#message2ModalButton").click();
        this.players[this.gameStatus.playerIndex].addRoundPoints(this.gameStatus.roundNumber, this.players[this.gameStatus.playerIndex].getTotalPoints());
        // this.nextTurn();  
    };
    WheelOfJeopardyComponent.prototype.opponentsChoice = function () {
        this.enableCategoryButtons();
        //enable category buttons
    };
    WheelOfJeopardyComponent.prototype.yourChoice = function () {
        this.enableCategoryButtons();
        //enable category buttons
    };
    WheelOfJeopardyComponent.prototype.wrongAnswer = function () {
        if (this.players[this.gameStatus.playerIndex].hasToken()) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#triggerModalButtonPlayerHasTokens").click();
        }
        else {
            this.players[this.gameStatus.playerIndex].reduceRoundPoints(this.gameStatus.roundNumber, this.calculatePoints(this.questionIndex[this.categoryPickedId]));
            this.nextTurn();
        }
        //disableButtons
    };
    WheelOfJeopardyComponent.prototype.correctAnswer = function () {
        this.players[this.gameStatus.playerIndex].addRoundPoints(this.gameStatus.roundNumber, this.calculatePoints(this.questionIndex[this.categoryPickedId]));
        this.nextTurn();
        //disableButtons
    };
    WheelOfJeopardyComponent.prototype.calculatePoints = function (questionIndex) {
        return questionIndex * 200 * this.gameStatus.roundNumber;
    };
    WheelOfJeopardyComponent.prototype.parseSpinResult = function () {
        switch (this.sector.value) {
            case 0: {
                this.pickNextQuestion(this.sector.categoryId);
                //this.showQuestionFromCategory()
                break;
            }
            case 1: {
                this.freeTurn();
                break;
            }
            case 2: {
                this.loseTurn();
                break;
            }
            case 3: {
                this.yourChoice();
                break;
            }
            case 4: {
                this.opponentsChoice();
                break;
            }
            case 5: {
                this.bankrupt();
                break;
            }
            case 6: {
                this.doubleScore();
                break;
            }
        }
    };
    WheelOfJeopardyComponent.prototype.resetQuestionBoard = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question0-1").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question1-1").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question2-1").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question3-1").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question4-1").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question0-2").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question1-2").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question2-2").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question3-2").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question4-2").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question0-3").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question1-3").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question2-3").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question3-3").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question4-3").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question0-4").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question1-4").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question2-4").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question3-4").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question4-4").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question0-5").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question1-5").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question2-5").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question3-5").removeClass("questionPicked");
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".question4-5").removeClass("questionPicked");
    };
    WheelOfJeopardyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wheel-of-jeopardy',
            template: __webpack_require__("../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wheel-of-jeopardy/wheel-of-jeopardy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
    ], WheelOfJeopardyComponent);
    return WheelOfJeopardyComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map