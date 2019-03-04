(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.html":
/*!*************************************!*\
  !*** ./src/app/news/news.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color='primary'   >\n    <button ion-button icon-only style=\"background :none; \" (click)='Logout()' clear>\n      <ion-icon style=\"color: white\"  name=\"log-out\"></ion-icon>\n    </button>\n    <ion-title style=\"color: white\">TODO List</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input type=\"text\" value=\"{{todoitem}}\" (input)=\"updatetodoitem($event)\" placeholder=\"Enter todo item Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type='text' value=\"{{tododesc}}\" (input)=\"tododescription($event)\" placeholder=\"Description\"></ion-input>\n  </ion-item>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Select Icon</ion-label>\n      <ion-select value=\"{{icon}}\" #C (ionChange)=\"iconselection(C.value)\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"bookmark\">BookMark</ion-select-option>\n        <ion-select-option value=\"add-circle\">Add</ion-select-option>\n        <ion-select-option value=\"alarm\">Alarm</ion-select-option>\n        <ion-select-option value=\"albums\">Albums</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button color='primary' (click)=\"AddinTodolist()\">Add</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color='primary' (click)=\"Update()\">Update</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color='primary' (click)=\"ToDoCompleted()\">Completed</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-item>\n\n\n  \n   \n\n        <ion-grid>\n          <ion-row >\n            <ion-col fixed='true' size='6' class=\"gridrowpadding\" *ngFor=\"let item of properties| async\">\n                <div *ngIf=\"(item.completeStatus==false)\"  >\n\n                \n                    <ion-grid >\n                      <ion-row >\n                        <ion-col class=\"gridrowpadding\" fixed=true size='4'>\n                            <ion-icon style=\"zoom: 3;\" name=\"{{item.iconlabel}}\"></ion-icon>\n                        </ion-col>\n                        <ion-col fixed='true' class=\"gridrowpadding\" size='8'>\n                          <ion-grid >\n                            <ion-row>\n                              <ion-col size=\"12\">\n                                  <ion-text >\n                                      <p style=\"margin-top: 0; margin-bottom: 0; font-weight: bold\">{{item.itemName}}</p>\n                                    </ion-text>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <ion-text >\n                                        <p style=\"margin-top: 0;margin-bottom: 0; color: rgb(70, 70, 70)\">{{item.description}}</p>\n                                      </ion-text>\n                                </ion-col>\n                              </ion-row>\n                                 \n                             \n                              <ion-row text-left>\n                                  <ion-col class=\"gridrowpadding\" size=\"4\">\n                                      <button ion-button icon-only class=\"iconbutton\" (click)='Edit(item)'>\n                                          <ion-icon  name=\"create\"></ion-icon>\n                                        </button>\n                                  </ion-col>\n                                  <ion-col class=\"gridrowpadding\" size='4'>\n                                      <button ion-button icon-only class=\"iconbutton\" (click)='Delete(item.key)'>\n                                          <ion-icon  name=\"close\"></ion-icon>\n                                        </button>\n                                  </ion-col>\n                                  <ion-col size='4' text-left>\n                                      <button ion-button icon-only class=\"iconbutton\" >\n                                          <ion-checkbox (ionChange)='complete(item ,$event)' checked='{{item.completeStatus}}'  style=\"--border-color: black; --size:20px\"></ion-checkbox>\n                                      </button>\n                                    \n                                  </ion-col>\n                                </ion-row>\n                          </ion-grid>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                    \n                  </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        \n\n\n\n\n\n\n      <!-- <ion-grid class=\"gridrowpadding\">\n            <ion-row class=\"gridrowpadding\">\n              <ion-col class=\"gridrowpadding\" size='6'>\n                  <ion-row class=\"gridrowpadding\">\n                      <ion-col class=\"gridrowpadding\" size=\"3\">\n                          <ion-icon class=\"gridrowpadding\"  style=\"color: primary\" name=\"{{item.iconlabel}}\"></ion-icon>\n                        \n                      </ion-col>\n                      <ion-col size='6'>\n                        ion-col\n                      </ion-col>\n                      <ion-col size=\"3\">\n                        ion-col [size=\"3\"]\n                      </ion-col>\n                    </ion-row>\n              </ion-col>\n              \n              <ion-col size='6'>\n                  <ion-row class=\"gridrowpadding\">\n                      <ion-col class=\"gridrowpadding\" size=\"3\">\n                          <ion-icon class=\"gridrowpadding\"  style=\"color: primary\" name=\"{{item.iconlabel}}\"></ion-icon>\n                        \n                      </ion-col>\n                      <ion-col size='6'>\n                        ion-col\n                      </ion-col>\n                      <ion-col size=\"3\">\n                        ion-col [size=\"3\"]\n                      </ion-col>\n                    </ion-row>\n              </ion-col>\n            </ion-row>\n        \n\n\n      </ion-grid> -->\n\n      <!-- <ion-label>\n        <ion-grid>\n\n          <ion-row>\n            <ion-col size=\"3\">\n              <ion-icon style=\"zoom:3.5; color: primary\" name=\"{{item.iconlabel}}\"></ion-icon>\n            </ion-col>\n\n\n            <ion-col>\n\n              <ion-row>\n                <ion-col></ion-col>\n                <ion-col></ion-col>\n              </ion-row>\n\n\n\n\n\n\n              <ion-row>\n                <ion-col class=\"gridrowpadding\">\n                  <ion-text>\n                    <h3>{{item.itemName}}</h3>\n                  </ion-text>\n                </ion-col>\n\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"gridrowpadding\">\n                  <ion-text size='12' style='color: rgb(94, 94, 94)'>\n                    <p>{{item.description}}</p>\n                  </ion-text>\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row>\n                <ion-col class=\"gridrowpadding\">\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n\n\n                </ion-col>\n                <ion-col >\n\n                  <p style='color: rgb(94, 94, 94)'>120,123</p>\n\n                </ion-col>\n              </ion-row>\n\n\n\n              <ion-row>\n                <ion-col class=\"gridrowpadding\">\n                  \n                    <ion-badge color=\"medium\">{{item.iconlabel}}</ion-badge>\n                  \n                </ion-col>\n\n              </ion-row>\n\n\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-col size='6'>\n                <button ion-button icon-only class=\"iconbutton\" (click)='Edit(item)' clear>\n                  <ion-icon name=\"create\"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col size='6'>\n                <button ion-button icon-only class=\"iconbutton\" (click)='Delete(item.key)' clear>\n                  <ion-icon name=\"close\"></ion-icon>\n                </button>\n              </ion-col>\n\n\n\n            </ion-col>\n          </ion-row>\n\n\n\n        </ion-grid>\n\n\n      </ion-label> -->\n   \n  \n\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-list>\n        <ion-item *ngFor=\"let item of properties| async\">\n          <ion-label>\n            <ion-col>\n              <p> {{item.itemName}}</p>\n            </ion-col>\n            <ion-col>\n              <ion-icon (click)='Delete(item.key)' name=\"close\"></ion-icon>\n              <ion-icon (click)='Edit(item)' name=\"create\"></ion-icon>\n            </ion-col>\n\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n  </ion-grid> -->\n\n\n\n\n  <!--   \n  <ul>\n    <li *ngFor=\"let item of properties| async\">\n      {{item.itemName}}\n      <ion-icon (click)='Delete(item.key)' name=\"close\"></ion-icon>\n      <ion-icon (click)='Edit(item)' name=\"create\"></ion-icon>\n    </li>\n  </ul> -->\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  font-size: 24px; }\n\n.iconbutton {\n  background: none;\n  color: black; }\n\n.gridrowpadding {\n  padding: 2px; }\n\n.tabs .tabbar {\n  background-color: black; }\n"

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _providers_abcd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/abcd.service */ "./src/providers/abcd.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _completed_completed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../completed/completed.page */ "./src/app/completed/completed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NewsPage = /** @class */ (function () {
    function NewsPage(abcd, fdb, fbauth, toastCtrl, http, navCtrl, modalCtrl) {
        this.abcd = abcd;
        this.fdb = fdb;
        this.fbauth = fbauth;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.todoitem = '';
        this.tododesc = '';
        this.updateId = '';
        this.icon = 'bookmark';
        this.completevalue = false;
        this.List = [];
    }
    NewsPage.prototype.ngOnInit = function () {
        // this.http.get('https://api.diffbot.com/v3/article?token=6e309a316e339781718968e2511cce18&url=http%3A%2F%2Fblog.diffbot.com%2Fdiffbots-new-product-api-teaches-robots-to-shop-online').subscribe(data=>{
        // console.log('this is medium data:', data)
        // })
        this.fbauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('user exist');
            }
            else {
                console.log('====================================');
                console.log('user not exist');
                console.log('====================================');
            }
        });
        this.fbauth.idToken.subscribe(function (token) {
            console.log('====================================');
            console.log('heere is token:', token);
            console.log('====================================');
        });
        this.properties = this.abcd.findAll();
    };
    NewsPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsPage.prototype.updatetodoitem = function (event) {
        this.todoitem = event.target.value;
        console.log('====================================');
        console.log(this.todoitem);
        console.log('====================================');
    };
    NewsPage.prototype.tododescription = function (event) {
        this.tododesc = event.target.value;
        console.log('====================================');
        console.log(this.tododesc);
        console.log('====================================');
    };
    NewsPage.prototype.AddinTodolist = function () {
        var todolist = { itemName: this.todoitem, description: this.tododesc, iconlabel: this.icon, completeStatus: this.completevalue };
        this.abcd.Add(todolist);
        this.todoitem = '';
        this.tododesc = '';
        this.icon = 'bookmark';
        this.properties = this.abcd.findAll();
        console.log('====================================');
        console.log('here is data of properties array. ' + this.properties);
        console.log('====================================');
    };
    NewsPage.prototype.Delete = function (i) {
        var id = { id: i };
        console.log('====================================');
        console.log(i);
        console.log('====================================');
        this.abcd.Deleteitem(id).then(function () {
            console.log('====================================');
            console.log('Deleted');
            console.log('====================================');
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
        // this.List.splice(i);
        // this.List.sort();
    };
    NewsPage.prototype.Edit = function (i) {
        // let id ={id:i, name:this.todoitem}
        console.log('====================================');
        console.log('edit######:', i);
        console.log('====================================');
        this.updateId = i.key;
        this.todoitem = i.itemName;
        this.tododesc = i.description;
        this.icon = i.iconlabel;
        // this.abcd.Updateitem(i).then(data =>{
        //   console.log('====================================');
        //   console.log('updated', data);
        //   console.log('====================================');
        // }).catch(err =>{
        //   alert(JSON.stringify(err))
        // })
        // this.todoitem = this.List[i];
    };
    NewsPage.prototype.Update = function () {
        console.log('====================================');
        console.log(this.updateId);
        console.log('====================================');
        var updateditem = { id: this.updateId, itemName: this.todoitem, description: this.tododesc, iconlabel: this.icon, completeStatus: this.completevalue };
        this.todoitem = '';
        this.tododesc = '';
        this.icon = 'bookmark';
        this.abcd.Updateitem(updateditem).then(function (data) {
            console.log('====================================');
            console.log('updated', data);
            console.log('====================================');
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    NewsPage.prototype.iconselection = function (value) {
        console.log('icon:', value);
        this.icon = value;
    };
    NewsPage.prototype.Logout = function () {
        this.fbauth.auth.signOut();
        this.navCtrl.navigateForward('signup');
    };
    NewsPage.prototype.updateCompleteStatus = function (updateditem) {
        this.abcd.UpdateStatus(updateditem).then(function (data) {
            console.log('====================================');
            console.log('updated', data);
            console.log('====================================');
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    NewsPage.prototype.complete = function (item, event) {
        var checkedvalue = event.target.checked;
        console.log('checked value:', checkedvalue);
        // this.completevalue=checkedvalue;
        // this.updateId= item.key;
        // console.log('here is vkey:', this.updateId);
        var updateditem = { id: item.key, completeStatus: checkedvalue };
        this.updateCompleteStatus(updateditem);
    };
    NewsPage.prototype.ToDoCompleted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _completed_completed_page__WEBPACK_IMPORTED_MODULE_6__["CompletedPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsPage.prototype.getlist = function () {
        var name = 'taimoor';
        console.log('====================================');
        console.log('im adding name in firebase');
        console.log('====================================');
        var body = JSON.stringify(name);
        this.fdb.list('favourites').push(body);
    };
    NewsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")],
        }),
        __metadata("design:paramtypes", [_providers_abcd_service__WEBPACK_IMPORTED_MODULE_3__["AbcdService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map