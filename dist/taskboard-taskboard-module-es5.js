(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard/taskboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">Task Board</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Taskboard Starts -->\n<section id=\"taskboard\">\n  <div class=\"row taskboard\">\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-layers mr-1\"></i> Tasks</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\n        <div *ngFor='let todo of todo'>\n          <div class=\"card border-left my-4 border-primary border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{todo.taskMessage}}</p>\n              <span class=\"primary display-inline-block pt-2\">{{todo.createdOn}}</span>\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-pie-chart mr-1\"></i> Analyze</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\n        <div *ngFor='let inProcess of inProcess'>\n          <div class=\"card border-left my-4 border-info border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{inProcess.taskMessage}}</p>\n              <span class=\"info display-inline-block pt-2\">{{inProcess.createdOn}}</span>\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-note mr-1\"></i>Test</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\n        <div *ngFor='let backLog of backLog'>\n          <div class=\"card border-left my-4 border-warning border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{backLog.taskMessage}}</p>\n              <span class=\"warning display-inline-block pt-2\">{{backLog.createdOn}}</span>\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 content-header\"><i class=\"icon-like mr-1\"></i>Done</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\n        <div *ngFor='let completed of completed'>\n          <div class=\"card border-left my-4 border-success border-3\">\n            <div class=\"card-block pt-3\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{completed.taskMessage}}</p>\n              <span class=\"success display-inline-block pt-2\">{{completed.createdOn}}</span>\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2 float-right\"> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n    <div class=\"card\">\n      <div class=\"card-block pt-3\">\n        <h5 class=\"text-bold-500\">Create new Task</h5>\n        <form class=\"taskboard-app-input row\">\n          <fieldset class=\"form-group position-relative has-icon-left col-md-4 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\" (keydown.enter)=\"$event.preventDefault()\"\n              #todoTitle>\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image\"></i>\n            </div>\n          </fieldset>\n          <fieldset class=\"form-group position-relative has-icon-left col-md-6 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\" (keydown.enter)=\"$event.preventDefault()\"\n              #todoMessage>\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image\"></i>\n            </div>\n          </fieldset>\n         \n          <fieldset class=\"form-group position-relative has-icon-left col-md-2 col-12 mb-1\">\n            <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onAddTask()\">\n              <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Create</button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </section>\n\n</section>\n<!-- Taskboard Ends -->\n\n"

/***/ }),

/***/ "./src/app/taskboard/taskboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/taskboard/taskboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutingModule", function() { return TaskboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardRoutingModule = /** @class */ (function () {
    function TaskboardRoutingModule() {
    }
    TaskboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardRoutingModule);
    return TaskboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n  display: table-cell;\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 25%;\n} */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n * note that styling gu-mirror directly is a bad practice because it's too generic.\n * you're better off giving the draggable elements a unique class and styling that directly!\n */\n\n.dragdrop-container > div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkL0M6XFxNeSBGaWxlc1xcTXkgd29ya3NcXGFuZ3VsYXJcXGZyZWVsYW5jZVxcY29ob3JhL3NyY1xcYXBwXFx0YXNrYm9hcmRcXHRhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHRSx5Q0FBQTs7QUFDQTtFQUNFLGNBQUE7QUNBSjs7QURFRTs7OztHQUFBOztBQUtBO0VBQ0Usb0NBQUE7QUNDSjs7QURDRTs7O0VBQUE7O0FBSUE7O0VBS0UsNENBQUE7RUFBQSxvQ0FBQTtBQ0RKOztBREdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtBQ0FKOztBREVFO0VBQ0UsZ0JBQUE7RUFFQSx3QkFBQTtBQ0NKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURBRTtFQUNFLDBDQUFBO0FDR0o7O0FEREU7O0VBRUUsZUFBQTtBQ0lKOztBREZFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbi5naC1mb3JrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICBcbiAgLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4gIC5kcmFnZHJvcC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICAvKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB3aWR0aDogMjUlO1xuICB9ICovXG4gIC5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAvKlxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxuICAgKiB5b3UncmUgYmV0dGVyIG9mZiBnaXZpbmcgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhIHVuaXF1ZSBjbGFzcyBhbmQgc3R5bGluZyB0aGF0IGRpcmVjdGx5IVxuICAgKi9cbiAgLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdixcbiAgLmd1LW1pcnJvciB7XG4gICAgLy8gbWFyZ2luOiAxMHB4O1xuICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiAgfVxuICAuZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2IHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgY3Vyc29yOiBncmFiO1xuICAgIGN1cnNvcjogLW1vei1ncmFiO1xuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICB9XG4gIC5ndS1taXJyb3Ige1xuICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgfVxuICAuZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgfVxuICAuZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgfVxuICAjbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcbiAgI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG4gIH1cbiAgLmhhbmRsZSB7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuICAuaW1hZ2UtdGhpbmcge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2xhY2stam9pbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgIiwiLmdoLWZvcmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4uZHJhZ2Ryb3Atd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB3aWR0aDogMjUlO1xufSAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLypcbiAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXG4gKiB5b3UncmUgYmV0dGVyIG9mZiBnaXZpbmcgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhIHVuaXF1ZSBjbGFzcyBhbmQgc3R5bGluZyB0aGF0IGRpcmVjdGx5IVxuICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuLmd1LW1pcnJvciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG59XG5cbi5ndS1taXJyb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGFjay1qb2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.service */ "./src/app/taskboard/taskboard.service.ts");



var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(elRef, taskBoardService) {
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.todo = taskBoardService.todo;
        this.inProcess = taskBoardService.inProcess;
        this.backLog = taskBoardService.backLog;
        this.completed = taskBoardService.completed;
    }
    TaskboardComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.taskBoardService.addNewTask(this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value);
            this.todo = this.taskBoardService.gettodo();
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _taskboard_service__WEBPACK_IMPORTED_MODULE_2__["TaskBoardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardComponent.prototype, "messageInputRef", void 0);
    TaskboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard/taskboard.component.html"),
            providers: [_taskboard_service__WEBPACK_IMPORTED_MODULE_2__["TaskBoardService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/taskboard/taskboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _taskboard_service__WEBPACK_IMPORTED_MODULE_2__["TaskBoardService"]])
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.model.ts":
/*!**********************************************!*\
  !*** ./src/app/taskboard/taskboard.model.ts ***!
  \**********************************************/
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

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskboard-routing.module */ "./src/app/taskboard/taskboard-routing.module.ts");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");






var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["TaskboardRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"]
            ],
            declarations: [
                _taskboard_component__WEBPACK_IMPORTED_MODULE_5__["TaskboardComponent"]
            ]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.service.ts ***!
  \************************************************/
/*! exports provided: TaskBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardService", function() { return TaskBoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.model */ "./src/app/taskboard/taskboard.model.ts");



var TaskBoardService = /** @class */ (function () {
    function TaskBoardService() {
        this.todo = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Responsive', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Feb 17', 'Eliza Scott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('QA Testing', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Feb 17', 'Eliza Scott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Budget', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Feb 17', 'Eliza Scott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New')
        ];
        this.inProcess = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('checklist', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Dec 11', 'Bruce Lee', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Navigation', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Dec 11', 'Bruce Lee', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Bootstrap 4', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'Dec 11', 'Bruce Lee', 'assets/img/portrait/small/avatar-s-1.jpg', 'In Process')
        ];
        this.backLog = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Assessment', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'July 9', 'Parsy Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Schedule', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'July 9', 'Parsy Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Unit tests', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'July 9', 'Parsy Reyes', 'assets/img/portrait/small/avatar-s-5.jpg', 'Pending')
        ];
        this.completed = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Angular 5', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'May 28', 'Faran Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Fields', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'May 28', 'Faran Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"]('Task board', 'Dragée cupcake powder jelly-o ice cream toffee donut.', 'May 28', 'Faran Ali', 'assets/img/portrait/small/avatar-s-7.jpg', 'Completed')
        ];
    }
    TaskBoardService.prototype.addNewTask = function (title, message) {
        this.todo.push(new _taskboard_model__WEBPACK_IMPORTED_MODULE_2__["Task"](title, message, 'Nov 12', 'Eliza Scott', 'assets/img/portrait/small/avatar-s-3.jpg', 'New'));
    };
    TaskBoardService.prototype.gettodo = function () {
        return this.todo;
    };
    TaskBoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskBoardService);
    return TaskBoardService;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module-es5.js.map