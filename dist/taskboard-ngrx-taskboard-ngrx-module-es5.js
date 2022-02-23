(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard-ngrx/taskboard-ngrx.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">Task Board NgRx</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Taskboard Starts -->\n<section id=\"taskboard\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-layers mr-1\"></i> Tasks</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\n        <div *ngFor='let todo of todo'>\n          <div class=\"card border-left my-4 border-primary border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{todo.taskMessage}}</p>\n              <span class=\"primary display-inline-block pt-2\">{{todo.createdOn}}</span>\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-pie-chart mr-1\"></i> Analyze</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\n        <div *ngFor='let inProcess of inProcess'>\n          <div class=\"card border-left my-4 border-info border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{inProcess.taskMessage}}</p>\n              <span class=\"info display-inline-block pt-2\">{{inProcess.createdOn}}</span>\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-note mr-1\"></i>Test</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\n        <div *ngFor='let backLog of backLog'>\n          <div class=\"card border-left my-4 border-warning border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{backLog.taskMessage}}</p>\n              <span class=\"warning display-inline-block pt-2\">{{backLog.createdOn}}</span>\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-like mr-1\"></i>Done</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\n        <div *ngFor='let completed of completed'>\n          <div class=\"card border-left my-4 border-success border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{completed.taskMessage}}</p>\n              <span class=\"success display-inline-block pt-2\">{{completed.createdOn}}</span>\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n    <div class=\"card\">\n      <div class=\"card-block pt-3\">\n        <h5 class=\"text-bold-500\">Create new Task</h5>\n        <form class=\"taskboard-app-input row\">\n          <fieldset class=\"form-group position-relative has-icon-left col-md-4 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\"\n              #todoTitle>\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image\"></i>\n            </div>\n          </fieldset>\n          <fieldset class=\"form-group position-relative has-icon-left col-md-6 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\" (keydown.enter)=\"$event.preventDefault()\"\n              #todoMessage>\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image\"></i>\n            </div>\n          </fieldset>\n         \n          <fieldset class=\"form-group position-relative has-icon-left col-md-2 col-12 mb-1\">\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onAddTask()\">\n              <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Create</button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </section>\n\n</section>\n<!-- Taskboard Ends -->\n\n"

/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");

var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    AddTodo.ctorParameters = function () { return [
        { type: _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Task"] }
    ]; };
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    todo: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New')
    ],
    inProcess: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process')
    ],
    backLog: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending')
    ],
    completed: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]):
            var todo = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.todo);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todo: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.todo, [action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n  display: table-cell;\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 25%;\n} */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n * note that styling gu-mirror directly is a bad practice because it's too generic.\n * you're better off giving the draggable elements a unique class and styling that directly!\n */\n\n.dragdrop-container > div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkLW5ncngvQzpcXE15IEZpbGVzXFxNeSB3b3Jrc1xcYW5ndWxhclxcZnJlZWxhbmNlXFxjb2hvcmEvc3JjXFxhcHBcXHRhc2tib2FyZC1uZ3J4XFx0YXNrYm9hcmQtbmdyeC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza2JvYXJkLW5ncngvdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0UseUNBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDQUo7O0FERUU7Ozs7R0FBQTs7QUFLQTtFQUNFLG9DQUFBO0FDQ0o7O0FEQ0U7OztFQUFBOztBQUlBOztFQUtFLDRDQUFBO0VBQUEsb0NBQUE7QUNESjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7QUNBSjs7QURFRTtFQUNFLGdCQUFBO0VBRUEsd0JBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO0FDRUo7O0FEQUU7RUFDRSwwQ0FBQTtBQ0dKOztBRERFOztFQUVFLGVBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmdoLWZvcmsge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIFxuICAvKiBkcmFndWxhLXNwZWNpZmljIGV4YW1wbGUgcGFnZSBzdHlsZXMgKi9cbiAgLmRyYWdkcm9wLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIC8qIC5kcmFnZHJvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHdpZHRoOiAyNSU7XG4gIH0gKi9cbiAgLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIC8qXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXG4gICAqL1xuICAuZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuICAuZ3UtbWlycm9yIHtcbiAgICAvLyBtYXJnaW46IDEwcHg7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIH1cbiAgLmd1LW1pcnJvciB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICB9XG4gIC5kcmFnZHJvcC1jb250YWluZXIgLmV4LW1vdmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICB9XG4gIC5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB9XG4gICNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuICAjcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbiAgfVxuICAuaGFuZGxlIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG4gIC5pbWFnZS10aGluZyB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zbGFjay1qb2luIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAiLCIuZ2gtZm9yayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vKiBkcmFndWxhLXNwZWNpZmljIGV4YW1wbGUgcGFnZSBzdHlsZXMgKi9cbi5kcmFnZHJvcC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIC5kcmFnZHJvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHdpZHRoOiAyNSU7XG59ICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKlxuICogbm90ZSB0aGF0IHN0eWxpbmcgZ3UtbWlycm9yIGRpcmVjdGx5IGlzIGEgYmFkIHByYWN0aWNlIGJlY2F1c2UgaXQncyB0b28gZ2VuZXJpYy5cbiAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXG4gKi9cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYsXG4uZ3UtbWlycm9yIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbn1cblxuLmd1LW1pcnJvciB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG59XG5cbi5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuI2xlZnQtbG92ZWhhbmRsZXMgPiBkaXYsXG4jcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xuICBjdXJzb3I6IGluaXRpYWw7XG59XG5cbi5oYW5kbGUge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uaW1hZ2UtdGhpbmcge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsYWNrLWpvaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");





var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardNGRXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard-ngrx.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard-ngrx.component.scss */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    Task.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");








var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__["taskReducer"])
            ],
            declarations: [
                _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardNGRXComponent"]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module-es5.js.map