(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // 　{path: '' , component: ListComponent},
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list{\n  float:left;\n  width:32%;\n   margin: 0 0 0 .51em ;\n}\n.edit{\n  float : left;\n  width : 60%;\n  padding :3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtHQUNULHFCQUFxQjtDQUN2QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0e1xuICBmbG9hdDpsZWZ0O1xuICB3aWR0aDozMiU7XG4gICBtYXJnaW46IDAgMCAwIC41MWVtIDtcbn1cbi5lZGl0e1xuICBmbG9hdCA6IGxlZnQ7XG4gIHdpZHRoIDogNjAlO1xuICBwYWRkaW5nIDozcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n  <app-list></app-list></div>\n<div class=\"edit\">\n  <router-outlet></router-outlet></div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: Post, PostShow, BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostShow", function() { return PostShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Post = /** @class */ (function () {
    function Post() {
    }
    Post = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Post);
    return Post;
}());

var PostShow = /** @class */ (function () {
    function PostShow() {
    }
    return PostShow;
}());

var BlogService = /** @class */ (function () {
    // private obPosts: Observable<Post[]>;
    function BlogService(http, router) {
        this.http = http;
        this.router = router;
        this.xmlHttp = new XMLHttpRequest();
        this.callback = null;
        this.callbackpost = null;
        this.callbackpreview = null;
        this.thisusername = this.parseJWT();
        this.fetchPosts(this.thisusername);
    }
    BlogService.prototype.parseJWT = function () {
        var token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64)).usr;
    };
    BlogService.prototype.subscribe = function (callback) {
        this.callback = callback;
    };
    BlogService.prototype.subscribePost = function (callbackpost) {
        this.callbackpost = callbackpost;
    };
    BlogService.prototype.subscribe2 = function (callbackpreview) {
        this.callbackpreview = callbackpreview;
    };
    BlogService.prototype.fetchPosts = function (username) {
        var _this = this;
        this.posts = [];
        this.thisusername = username;
        this.xmlHttp.open("GET", 'http://localhost:3000/api/' + username);
        this.xmlHttp.onreadystatechange = (function () {
            if (_this.xmlHttp.readyState != 4)
                return;
            if (_this.xmlHttp.status == 401) {
                alert("authetication fail");
            }
            else {
                var results = JSON.parse(_this.xmlHttp.responseText);
                // console.log("fetch");
                for (var i = 0; i < results.length; i++) {
                    var postnew = new Post();
                    postnew.postid = results[i].postid;
                    postnew.title = results[i].title;
                    postnew.body = results[i].body;
                    postnew.created = new Date(results[i].created);
                    postnew.modified = new Date(results[i].modified);
                    _this.posts.push(postnew);
                }
                if (_this.callback) {
                    _this.callback(_this.getPosts(username));
                }
                if (_this.callbackpost) {
                    _this.callbackpost(_this.getPosts(username));
                }
                if (_this.callbackpreview) {
                    _this.callbackpreview(_this.getPosts(username));
                }
            }
        });
        this.xmlHttp.send();
    };
    BlogService.prototype.getPosts = function (username) {
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        // console.log("service:getpost");
        // console.log(this.posts);
        username = this.thisusername;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid === id) {
                return this.posts[i];
            }
        }
    };
    BlogService.prototype.newPost = function (username) {
        var _this = this;
        var largeid = 0;
        console.log(this.posts.length);
        if (this.posts.length != 0) {
            largeid = this.posts[this.posts.length - 1].postid;
        }
        else {
            largeid = 0;
        }
        var newp = {
            postid: largeid + 1,
            created: new Date(),
            modified: new Date(),
            title: '',
            body: ''
        };
        this.posts.push(newp);
        username = this.thisusername;
        this.xmlHttp.open("POST", "http://localhost:3000/api/" + username + "/" + newp.postid);
        this.xmlHttp.setRequestHeader('Content-Type', 'application/json');
        this.xmlHttp.send(JSON.stringify(newp));
        this.xmlHttp.onreadystatechange = (function () {
            if (_this.xmlHttp.readyState != 4) {
                return;
            }
            if (_this.xmlHttp.status != 201) {
                _this.posts.pop();
                console.log(_this.posts.length + " length");
                alert("There was an error while inserting");
                _this.router.navigate(['/']);
            }
        });
        return newp;
    };
    BlogService.prototype.updatePost = function (username, post) {
        var _this = this;
        // console.log("update");
        username = this.thisusername;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid === post.postid) {
                this.posts[i].title = post.title;
                this.posts[i].body = post.body;
                this.posts[i].modified = new Date();
                this.xmlHttp.open("PUT", "http://localhost:3000/api/" + username + "/" + post.postid);
                this.xmlHttp.onreadystatechange = (function () {
                    console.log(_this.xmlHttp.readyState);
                    if (_this.xmlHttp.readyState != 4)
                        return;
                    if (_this.xmlHttp.responseXML == null) {
                        return;
                    }
                    console.log(_this.xmlHttp.status);
                    if (_this.xmlHttp.status != 200) {
                        alert("There was an error while updating");
                        // console.log("update+"post.postid);
                        _this.router.navigate(["/edit/" + post.postid.toString()]);
                    }
                });
                this.xmlHttp.setRequestHeader("Content-type", "application/json"); //
                this.xmlHttp.send(JSON.stringify(post));
                break;
            }
        }
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var _this = this;
        username = this.thisusername;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].postid === postid) {
                this.posts.splice(i, 1);
                console.log(this.posts);
                this.xmlHttp.open("DELETE", "http://localhost:3000/api/" + username + "/" + postid);
                this.xmlHttp.onreadystatechange = (function () {
                    if (_this.xmlHttp.readyState !== 4)
                        return;
                    if (_this.xmlHttp.status !== 204) {
                        alert("There was an error while deleting");
                        _this.router.navigate(['/']);
                    }
                });
                this.xmlHttp.send();
                break;
            }
        }
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width:40%;\n  height: 20px;\n}\ntextarea{\n  width:40%;\n  height: 150px;\n}\nlabel{\n  font-size: 20px;\n  font-weight: bold;\n  color:#939393;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gIHdpZHRoOjQwJTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxudGV4dGFyZWF7XG4gIHdpZHRoOjQwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbmxhYmVse1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjojOTM5MzkzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n<div>\n  <label>Title<br>\n      <div>\n        <input [(ngModel)]=\"post.title\" placeholder=\"name\" (input)=\"disabled=false\"/></div>\n        <br>\n   </label>\n</div>\n\n<div>\n    <label>Body\n      <div>\n        <textarea [(ngModel)]=\"post.body\" (input)=\"disabled=false\"></textarea></div></label>\n</div>\n<br>\n  Last Modified:{{post.modified | date: 'yyyy/M/dd h:mm:ss aa'}}\n  <br>\n  <div>\n  <button (click)=\"delete()\">delete</button>\n  <button (click)=\"save()\" [disabled]=\"disabled\">save</button>\n    <button (click)=\"preview()\">preview</button></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(route, blogService, location, router) {
        var _this = this;
        this.route = route;
        this.blogService = blogService;
        this.location = location;
        this.router = router;
        this.username = 'cs144';
        this.disabled = true;
        this.route.paramMap.subscribe(function () {
            _this.getPost();
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        // this.getPost();
    };
    EditComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log("getpost" + id);
        // this.router.navigate(['/edit/' +id]);
        this.blogService.subscribePost(function (posts) { return _this.post = posts.filter(function (post) { return post.postid == id; })[0]; });
        this.post = this.blogService.getPost(this.username, id);
    };
    EditComponent.prototype.save = function () {
        // console.log('component update');
        this.blogService.updatePost(this.username, this.post);
        this.post.modified = new Date();
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.username, this.post.postid);
        this.router.navigate(['/']);
    };
    EditComponent.prototype.preview = function () {
        this.save();
        this.router.navigate(['/preview/' + this.post.postid]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:popstate'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "save", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n  display: block;\n}\nul{\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  -webkit-padding-start: 40px;\n          padding-inline-start: 40px;\n  list-style: none;\n}\nli {\n  margin: .5em .5em .5em .5em ;\n  padding: .3em 0px;\n  height: 1.5em;\n  background: gainsboro;\n  cursor: pointer;\n  border-radius: 4px;\n}\na {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n}\na:hover {\n  right: .2em;\n}\n#modified{\n  display: inline-block;\n  font-size: 10px;\n  color: #fff;\n  padding: .8em .7em 0 .7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSwyQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudWx7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5saSB7XG4gIG1hcmdpbjogLjVlbSAuNWVtIC41ZW0gLjVlbSA7XG4gIHBhZGRpbmc6IC4zZW0gMHB4O1xuICBoZWlnaHQ6IDEuNWVtO1xuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuYSB7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5hOmhvdmVyIHtcbiAgcmlnaHQ6IC4yZW07XG59XG5cbiNtb2RpZmllZHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuOGVtIC43ZW0gMCAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"add()\">New Post</button>\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\" >\n    <a  routerLink=\"/edit/{{post.postid}}\">\n      <div id=\"modified\">{{post.modified | date: 'yyyy/M/dd h:mm:ss aa'}} &nbsp;&nbsp;</div>\n      <span id=\"postid\">{{post.title}} </span>\n    </a></li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    // username: string;
    function ListComponent(route, blogService, router) {
        var _this = this;
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        route.paramMap.subscribe(function () {
            _this.posts = _this.blogService.getPosts(_this.blogService.parseJWT());
        });
    }
    ListComponent.prototype.parseJWT = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // console.log(JSON.parse(atob(base64)));
        return JSON.parse(atob(base64));
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.parseJWT(document.cookie);
        this.username = user.usr;
        // this.posts = this.blogService.fetchPosts(this.username);
        console.log("list fectch");
        this.blogService.subscribe(function (result) { return _this.posts = result; });
        this.blogService.getPosts(this.username);
        // console.log(this.posts);
        // this.getPosts();
    };
    ListComponent.prototype.add = function () {
        var newid = this.blogService.newPost(this.username).postid;
        this.router.navigate(['/edit/' + newid]);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h2>Preview: </h2>\n</div>\n\n<div [innerHTML]=\"titleHtml\"> </div>\n<div [innerHTML]=\"bodyHtml\"> </div>\n\n<div>\n  <button (click)=\"edit()\">Edit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! commonmark */ "../node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(route, blogService, location, router) {
        this.route = route;
        this.blogService = blogService;
        this.location = location;
        this.router = router;
        this.reader = new commonmark__WEBPACK_IMPORTED_MODULE_4__["Parser"]();
        this.writer = new commonmark__WEBPACK_IMPORTED_MODULE_4__["HtmlRenderer"]();
        this.username = '';
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.blogService.parseJWT();
        var id = +this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe(function () {
            _this.getPost();
        });
    };
    PreviewComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log("id" + id);
        this.blogService.subscribe2(function (posts) {
            _this.post = posts.filter(function (post) { return post.postid == id; })[0];
            console.log(_this.post);
            var reader = new commonmark__WEBPACK_IMPORTED_MODULE_4__["Parser"]();
            var writer = new commonmark__WEBPACK_IMPORTED_MODULE_4__["HtmlRenderer"]();
            var parsed = reader.parse(_this.post.title);
            var parsed1 = reader.parse(_this.post.body);
            _this.titleHtml = writer.render(parsed);
            _this.bodyHtml = writer.render(parsed1);
        });
        this.post = this.blogService.getPost(this.username, id);
        if (typeof (this.post) != 'undefined') {
            console.log(this.post);
            var reader = new commonmark__WEBPACK_IMPORTED_MODULE_4__["Parser"]();
            var writer = new commonmark__WEBPACK_IMPORTED_MODULE_4__["HtmlRenderer"]();
            var parsed = reader.parse(this.post.title);
            var parsed1 = reader.parse(this.post.body);
            this.titleHtml = writer.render(parsed);
            this.bodyHtml = writer.render(parsed1);
        }
    };
    PreviewComponent.prototype.edit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/edit/' + id]);
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map