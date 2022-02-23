(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-application\">\n  <div class=\"content-overlay\"></div>\n  <div class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\n    <div class=\"chat-sidebar-content\">\n      <div class=\"chat-fixed-search p-2\">\n        <form>\n          <div class=\"position-relative has-icon-left\">\n            <input class=\"form-control\" id=\"timesheetinput1\" name=\"employeename\" type=\"text\">\n            <div class=\"form-control-position\">\n              <i class=\"ft-user\"></i>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div id=\"users-list\" class=\"list-group position-relative\">\n        <div class=\"users-list-padding\">\n          <a class=\"list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2\" (click)=\"SetActive($event, 'chat1')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Elizabeth Elliott\n                  <span class=\"float-right info\">4:14 AM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check info font-small-2\"></i> Okay\n                  <span class=\"float-right info\">\n                    <i class=\"font-medium-1 icon-pin blue-grey lighten-3\"></i>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat2')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-busy mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-7.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Kristopher Candy\n                  <span class=\"float-right info\">9:04 PM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check info font-small-2\"></i> Thank you\n                  <span class=\"float-right \n                        info\">\n                    <span class=\"badge badge-pill badge-info\">12</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat3')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-away mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-27.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Sarah Woods\n                  <span class=\"float-right info\">2:14 AM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> Hello krish!\n                  <span class=\"float-right info\">\n                    <i class=\"font-medium-1 icon-volume-off blue-grey lighten-3 mr-1\"></i>\n                    <span class=\"badge badge-pill badge-info\">3</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat4')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-away mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-5.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Bruce Reid\n                  <span class=\"float-right info\">Yesterday</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> Will connect you</p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat5')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Heather Howell\n                  <span class=\"float-right info\">Friday</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> Thank you\n                  <span class=\"float-right info\">\n                    <span class=\"badge badge-pill badge-info\">4</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat6')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-busy mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-4.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Kelly Reyes\n                  <span class=\"float-right info\">Thrusday</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> I love you </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat7')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Vincent Nelson\n                  <span class=\"float-right info\">09/03/2018</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check info font-small-2\"></i> Who you are?</p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2\" (click)=\"SetActive($event, 'chat1')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Elizabeth Elliott\n                  <span class=\"float-right info\">4:14 AM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check info font-small-2\"></i> Okay\n                  <span class=\"float-right info\">\n                    <i class=\"font-medium-1 icon-pin blue-grey lighten-3\"></i>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat2')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-busy mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-7.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Kristopher Candy\n                  <span class=\"float-right info\">9:04 PM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check info font-small-2\"></i> Thank you\n                  <span class=\"float-right \n                        info\">\n                    <span class=\"badge badge-pill badge-info\">12</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat3')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-away mr-2\">\n                <img class=\"media-object d-flex mr-3 bg-primary rounded-circle\" src=\"assets/img/portrait/small/avatar-s-27.jpg\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body\">\n                <h6 class=\"list-group-item-heading\">Sarah Woods\n                  <span class=\"float-right info\">2:14 AM</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> Hello krish!\n                  <span class=\"float-right info\">\n                    <i class=\"font-medium-1 icon-volume-off blue-grey lighten-3 mr-1\"></i>\n                    <span class=\"badge badge-pill badge-info\">3</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-name p-2 bg-white\">\n    <div class=\"media\">\n      <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\"></span>\n      <div class=\"media-body\">\n        <img [src]=\"[activeChatUserImg]\" width=\"37\" class=\"rounded-circle mr-1 float-left\" alt=\"avatar\" />\n        <span class=\"float-left\">\n          {{ activeChatUser }}\n          <p class=\"success font-small-2\">Online</p>\n        </span>\n        <i class=\"ft-more-vertical float-right mt-1\"></i>\n      </div>\n    </div>\n  </div>\n  <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n    <div class=\"badge badge-dark mb-1\">Chat History</div>\n    <div class=\"chats\">\n      <div class=\"chats\">\n        <div [ngClass]=\"[chat.chatClass]\" *ngFor=\"let chat of chat\">\n          <div class=\"chat-avatar\">\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"[chat.avatar]\" title=\"\" data-original-title=\"\">\n              <img [src]=\"[chat.imagePath]\" class=\"width-50\" alt=\"avatar\" />\n            </a>\n          </div>\n          <div class=\"chat-body\">\n            <div class=\"chat-content\" *ngFor=\"let message of chat.messages\">\n              <p *ngIf=\"chat.messageType === 'text'\">{{ message }}</p>\n              <vg-player *ngIf=\"chat.messageType === 'audio'\">\n                <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls>\n                  <source [src]=\"message\" type=\"audio/mp3\">\n                </audio>\n              </vg-player>\n              <vg-player *ngIf=\"chat.messageType === 'video'\" style=\"height: 250px; width: 250px\">\n                <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\n                  <source [src]=\"message\" type=\"video/mp4\">\n                </video>\n              </vg-player>\n            </div>\n          </div>\n          <p class=\"time\" *ngIf=\"chat.time !='' \">{{chat.time}}</p>\n        </div>\n\n        <div class=\"chat\" *ngIf=\"messages.length > 0\">\n          <div class=\"chat-avatar\">\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"\">\n              <img src=\"assets/img/portrait/small/avatar-s-1.jpg\" class=\"width-50\" alt=\"avatar\" />\n            </a>\n          </div>\n          <div class=\"chat-body\">\n            <div class=\"chat-content\" *ngFor=\"let message of messages\">\n              <p>{{ message }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\n    <form class=\"chat-app-input row\">\n      <fieldset class=\"form-group position-relative has-icon-left col-xl-10 col-lg-8 col-8 m-0 mb-1\">\n        <div class=\"form-control-position\">\n          <i class=\"icon-emoticon-smile\"></i>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"Message\" (keydown.enter)=\"onAddMessage();$event.preventDefault()\"\n          #messageInput>\n        <div class=\"form-control-position control-position-right\">\n          <i class=\"ft-image\"></i>\n        </div>\n      </fieldset>\n      <fieldset class=\"form-group position-relative has-icon-left col-xl-2 col-lg-4 col-4 m-0 mb-1\">\n        <button type=\"button\" class=\"btn btn-raised btn-info\" (click)=\"onAddMessage()\">\n          <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Send</button>\n      </fieldset>\n    </form>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");




const routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatRoutingModule);

const routedComponents = [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");



let ChatComponent = class ChatComponent {
    constructor(elRef, chatService) {
        this.elRef = elRef;
        this.chatService = chatService;
        this.messages = new Array();
        this.item = 0;
        this.chat = chatService.chat1;
        this.activeChatUser = "Elizabeth Elliott";
        this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.jpg";
    }
    ngOnInit() {
        $.getScript('./assets/js/chat.js');
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('chat-page');
    }
    ngOnDestroy() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("chat-page");
    }
    //send button function calls
    onAddMessage() {
        if (this.messageInputRef.nativeElement.value != "") {
            this.messages.push(this.messageInputRef.nativeElement.value);
        }
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
    }
    //chat user list click event function
    SetActive(event, chatId) {
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.getElementsByClassName('list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item no-border');
        });
        //set active class for selected item 
        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
        this.messages = [];
        if (chatId === 'chat1') {
            this.chat = this.chatService.chat1;
            this.activeChatUser = "Elizabeth Elliott";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.jpg";
        }
        else if (chatId === 'chat2') {
            this.chat = this.chatService.chat2;
            this.activeChatUser = "Kristopher Candy";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-7.jpg";
        }
        else if (chatId === 'chat3') {
            this.chat = this.chatService.chat3;
            this.activeChatUser = "Sarah Woods";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-27.jpg";
        }
        else if (chatId === 'chat4') {
            this.chat = this.chatService.chat4;
            this.activeChatUser = "Bruce Reid";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-5.jpg";
        }
        else if (chatId === 'chat5') {
            this.chat = this.chatService.chat5;
            this.activeChatUser = "Heather Howell";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-9.jpg";
        }
        else if (chatId === 'chat6') {
            this.chat = this.chatService.chat6;
            this.activeChatUser = "Kelly Reyes";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.jpg";
        }
        else if (chatId === 'chat7') {
            this.chat = this.chatService.chat7;
            this.activeChatUser = "Vincent Nelson";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-14.jpg";
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatComponent.prototype, "messageInputRef", void 0);
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
        styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
], ChatComponent);



/***/ }),

/***/ "./src/app/chat/chat.model.ts":
/*!************************************!*\
  !*** ./src/app/chat/chat.model.ts ***!
  \************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
class Chat {
    constructor(avatar, chatClass, imagePath, time, messages, messageType) {
        this.avatar = avatar;
        this.chatClass = chatClass;
        this.imagePath = imagePath;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
}
Chat.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Array },
    { type: String }
];


/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");









let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__["ChatRoutingModule"],
            videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
            videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
            videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
            videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"]
        ],
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]
        ]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.model */ "./src/app/chat/chat.model.ts");



let ChatService = class ChatService {
    constructor() {
        this.chat1 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '1 hour ago', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '30 minutes ago', [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '20 minutes ago', [
                'Can you provide me audio link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '10 minutes ago', [
                'Can you provide me video link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', 'just now', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat2 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.jpg', '1 hours ago', [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '20 minutes ago', [
                'Can you provide me audio link of your conversation?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '10 minutes ago', [
                'Can you provide me video link of your issue?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.jpg', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.jpg', '', [
                'Yes'
            ], 'text'),
        ];
        this.chat3 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '1 hours ago', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '20 minutes ago', [
                'Can you provide me audio link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '10 minutes ago', [
                'Can you provide me video link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.jpg', '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat4 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.jpg', '1 hours ago', [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '20 minutes ago', [
                'Can you provide me audio link of your conversation?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '10 minutes ago', [
                'Can you provide me video link of your issue?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.jpg', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.jpg', '', [
                'Yes'
            ], 'text'),
        ];
        this.chat5 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.jpg', '1 hours ago', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.jpg', '20 minutes ago', [
                'Can you provide me audio link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.jpg', '10 minutes ago', [
                'Can you provide me video link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.jpg', '', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.jpg', '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat6 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.jpg', '1 hours ago', [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '20 minutes ago', [
                'Can you provide me audio link of your conversation?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '10 minutes ago', [
                'Can you provide me video link of your issue?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.jpg', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.jpg', '', [
                'Yes'
            ], 'text'),
        ];
        this.chat7 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'How can we help'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.jpg', '1 hours ago', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 4 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Absolutely!',
                'Convex admin template is responsive Angular 6+ bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.jpg', '20 minutes ago', [
                'Can you provide me audio link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.jpg', '10 minutes ago', [
                'Can you provide me video link?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.jpg', '', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.jpg', '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.jpg', '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatService);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map