(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/ng2-completer/esm5/ng2-completer.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-completer/esm5/ng2-completer.js ***!
  \**********************************************************/
/*! exports provided: LocalData, RemoteData, LocalDataFactory, RemoteDataFactory, CompleterService, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterListItemCmp, CompleterCmp, Ng2CompleterModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return LocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteData", function() { return RemoteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataFactory", function() { return LocalDataFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataFactory", function() { return RemoteDataFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterService", function() { return CompleterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrCompleter", function() { return CtrCompleter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrDropdown", function() { return CtrDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrInput", function() { return CtrInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrList", function() { return CtrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrRow", function() { return CtrRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterListItemCmp", function() { return CompleterListItemCmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterCmp", function() { return CompleterCmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function() { return Ng2CompleterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CtrListContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CompleterBaseData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license ng2-completer
 * MIT license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_CHARS = 524288;
/** @type {?} */
var MIN_SEARCH_LENGTH = 3;
/** @type {?} */
var PAUSE = 10;
/** @type {?} */
var TEXT_SEARCHING = "Searching...";
/** @type {?} */
var TEXT_NO_RESULTS = "No results found";
/** @type {?} */
var CLEAR_TIMEOUT = 50;
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return typeof value === "undefined" || value === null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CompleterBaseData = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompleterBaseData, _super);
    function CompleterBaseData() {
        var _this = _super.call(this) || this;
        _this._searchFields = null;
        _this._titleField = null;
        _this._descriptionField = undefined;
        _this._imageField = undefined;
        return _this;
    }
    /**
     * @return {?}
     */
    CompleterBaseData.prototype.cancel = /**
     * @return {?}
     */
    function () {
        return;
    };
    /**
     * @param {?} searchFields
     * @return {?}
     */
    CompleterBaseData.prototype.searchFields = /**
     * @param {?} searchFields
     * @return {?}
     */
    function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    /**
     * @param {?} titleField
     * @return {?}
     */
    CompleterBaseData.prototype.titleField = /**
     * @param {?} titleField
     * @return {?}
     */
    function (titleField) {
        this._titleField = titleField;
        return this;
    };
    /**
     * @param {?} descriptionField
     * @return {?}
     */
    CompleterBaseData.prototype.descriptionField = /**
     * @param {?} descriptionField
     * @return {?}
     */
    function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    /**
     * @param {?} imageField
     * @return {?}
     */
    CompleterBaseData.prototype.imageField = /**
     * @param {?} imageField
     * @return {?}
     */
    function (imageField) {
        this._imageField = imageField;
        return this;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CompleterBaseData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var image = null;
        /** @type {?} */
        var formattedText;
        /** @type {?} */
        var formattedDesc = null;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (typeof formattedText !== "string") {
            formattedText = JSON.stringify(formattedText);
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return /** @type {?} */ ({
            description: formattedDesc,
            image: image,
            originalObject: data,
            title: formattedText
        });
    };
    /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.extractMatches = /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    function (data, term) {
        var _this = this;
        /** @type {?} */
        var matches = [];
        /** @type {?} */
        var searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
            matches = data.filter(function (item) {
                /** @type {?} */
                var values = searchFields ? _this.extractBySearchFields(searchFields, item) : [item];
                return values.some(function (value) { return value
                    .toString()
                    .toLowerCase()
                    .indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractTitle = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        if (!this._titleField) {
            return "";
        }
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    CompleterBaseData.prototype.extractValue = /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        /** @type {?} */
        var keys;
        /** @type {?} */
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                key = keys_1[_i];
                if (result) {
                    result = result[key];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    /**
     * @param {?} matches
     * @return {?}
     */
    CompleterBaseData.prototype.processResults = /**
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    /**
     * @param {?} searchFields
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractBySearchFields = /**
     * @param {?} searchFields
     * @param {?} item
     * @return {?}
     */
    function (searchFields, item) {
        var _this = this;
        return searchFields
            .map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; });
    };
    return CompleterBaseData;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LocalData = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalData, _super);
    function LocalData() {
        var _this = _super.call(this) || this;
        _this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this._data = [];
        _this.savedTerm = null;
        return _this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.data = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            /** @type {?} */
            var data$ = /** @type {?} */ (data);
            data$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return []; }))
                .subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
                _this.dataSourceChange.emit();
            });
        }
        else {
            this._data = data;
        }
        this.dataSourceChange.emit();
        return this;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    LocalData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            /** @type {?} */
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return LocalData;
}(CompleterBaseData));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RemoteData = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this._remoteUrl = null;
        _this.remoteSearch = null;
        _this._urlFormater = null;
        _this._dataField = null;
        return _this;
    }
    /**
     * @param {?} remoteUrl
     * @return {?}
     */
    RemoteData.prototype.remoteUrl = /**
     * @param {?} remoteUrl
     * @return {?}
     */
    function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
    };
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    RemoteData.prototype.urlFormater = /**
     * @param {?} urlFormater
     * @return {?}
     */
    function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    RemoteData.prototype.dataField = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    RemoteData.prototype.requestOptions = /**
     * @param {?} requestOptions
     * @return {?}
     */
    function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    RemoteData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        this.cancel();
        /** @type {?} */
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http
            .get(url, Object.assign({}, this._requestOptions))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            /** @type {?} */
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return []; }))
            .subscribe(function (matches) {
            /** @type {?} */
            var results = _this.processResults(matches);
            _this.next(results);
        });
    };
    /**
     * @return {?}
     */
    RemoteData.prototype.cancel = /**
     * @return {?}
     */
    function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RemoteData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(CompleterBaseData));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LocalDataFactory = /** @class */ (function () {
    function LocalDataFactory() {
    }
    /**
     * @return {?}
     */
    LocalDataFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new LocalData();
    };
    LocalDataFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    return LocalDataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RemoteDataFactory = /** @class */ (function () {
    function RemoteDataFactory(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    RemoteDataFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new RemoteData(this.http);
    };
    RemoteDataFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    RemoteDataFactory.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    return RemoteDataFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CompleterService = /** @class */ (function () {
    function CompleterService(localDataFactory, remoteDataFactory // Using any instead of () => LocalData because of AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.local = /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        /** @type {?} */
        var localData = this.localDataFactory.create();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.remote = /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        /** @type {?} */
        var remoteData = this.remoteDataFactory.create();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    CompleterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    CompleterService.ctorParameters = function () { return [
        { type: LocalDataFactory },
        { type: RemoteDataFactory }
    ]; };
    return CompleterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CtrCompleter = /** @class */ (function () {
    function CtrCompleter() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.list = null;
        this.dropdown = null;
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this._autoHighlightIndex = null;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    CtrCompleter.prototype.registerList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.list = list;
    };
    /**
     * @param {?} dropdown
     * @return {?}
     */
    CtrCompleter.prototype.registerDropdown = /**
     * @param {?} dropdown
     * @return {?}
     */
    function (dropdown) {
        this.dropdown = dropdown;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CtrCompleter.prototype.onHighlighted = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    CtrCompleter.prototype.onSelected = /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.onDataSourceChange = /**
     * @return {?}
     */
    function () {
        if (this.hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        this.dataSourceChange.emit();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    CtrCompleter.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._hasHighlighted = false;
        this.isOpen = false;
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.hasHighlighted = /**
     * @return {?}
     */
    function () {
        return this._hasHighlighted;
    };
    /**
     * @param {?} cancel
     * @return {?}
     */
    CtrCompleter.prototype.cancelBlur = /**
     * @param {?} cancel
     * @return {?}
     */
    function (cancel) {
        this._cancelBlur = cancel;
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.isCancelBlur = /**
     * @return {?}
     */
    function () {
        return this._cancelBlur;
    };
    /**
     * @return {?}
     */
    CtrCompleter.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._isOpen && !!this.list) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(CtrCompleter.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "autoHighlightIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoHighlightIndex;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._autoHighlightIndex = index;
            if (this.dropdown) {
                this.dropdown.highlightRow(this._autoHighlightIndex);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrCompleter.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    CtrCompleter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[ctrCompleter]",
                },] },
    ];
    CtrCompleter.propDecorators = {
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        highlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        dataSourceChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return CtrCompleter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CtrRowItem = /** @class */ (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
var CtrDropdown = /** @class */ (function () {
    function CtrDropdown(completer, el, zone) {
        this.completer = completer;
        this.el = el;
        this.zone = zone;
        this.rows = [];
        this.isScrollOn = false;
        this._rowMouseDown = false;
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    CtrDropdown.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.completer.registerDropdown(null);
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var css = getComputedStyle(this.el.nativeElement);
        /** @type {?} */
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            this.zone.run(function () {
                _this.highlightRow(autoHighlightIndex);
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrDropdown.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            this.zone.run(function () {
                _this.completer.cancelBlur(false);
            });
        }
        else {
            this._rowMouseDown = false;
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    CtrDropdown.prototype.registerRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var arrIndex = this.rows.findIndex(function (_row) { return _row.index === row.index; });
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        }
        else {
            this.rows.push(row);
        }
    };
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    CtrDropdown.prototype.unregisterRow = /**
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        /** @type {?} */
        var arrIndex = this.rows.findIndex(function (_row) { return _row.index === rowIndex; });
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CtrDropdown.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (isNil(index) || /** @type {?} */ ((index)) < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            /** @type {?} */
            var rowTop = this.dropdownRowTop();
            if (!rowTop) {
                return;
            }
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10)));
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.rows = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CtrDropdown.prototype.onSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.completer.onSelected(item);
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.rowMouseDown = /**
     * @return {?}
     */
    function () {
        this._rowMouseDown = true;
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (!!this.currHighlighted && !!this.currHighlighted.row) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    CtrDropdown.prototype.dropdownScrollTopTo = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.dropdownRowTop = /**
     * @return {?}
     */
    function () {
        if (!this.currHighlighted) {
            return;
        }
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10));
    };
    /**
     * @return {?}
     */
    CtrDropdown.prototype.dropdownHeight = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight), 10);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    CtrDropdown.prototype.dropdownRowOffsetHeight = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(/** @type {?} */ (css.marginTop), 10) + parseInt(/** @type {?} */ (css.marginBottom), 10);
    };
    CtrDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[ctrDropdown]",
                },] },
    ];
    /** @nocollapse */
    CtrDropdown.ctorParameters = function () { return [
        { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    CtrDropdown.propDecorators = {
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["mousedown", ["$event"],] }]
    };
    return CtrDropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var KEY_DW = 40;
/** @type {?} */
var KEY_RT = 39;
/** @type {?} */
var KEY_UP = 38;
/** @type {?} */
var KEY_LF = 37;
/** @type {?} */
var KEY_ES = 27;
/** @type {?} */
var KEY_EN = 13;
/** @type {?} */
var KEY_TAB = 9;
/** @type {?} */
var KEY_BK = 8;
/** @type {?} */
var KEY_SH = 16;
/** @type {?} */
var KEY_CL = 20;
/** @type {?} */
var KEY_F1 = 112;
/** @type {?} */
var KEY_F12 = 123;
var CtrInput = /** @class */ (function () {
    function CtrInput(completer, ngModel, el) {
        var _this = this;
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        this.completer.dataSourceChange.subscribe(function () {
            _this.completer.search(_this.searchStr);
        });
        if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe(function (value) {
                if (!isNil(value) && _this._displayStr !== value) {
                    if (_this.searchStr !== value) {
                        _this.completer.search(value);
                    }
                    _this.searchStr = value;
                }
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CtrInput.prototype.keyupHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrInput.prototype.pasteHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.completer.open();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrInput.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode || event.which;
        if (keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (keyCode === KEY_BK) {
            this.completer.open();
        }
        else if (keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
            if (this.completer.isOpen) {
                event.stopPropagation();
            }
        }
        else {
            if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL &&
                (keyCode <= KEY_F1 || keyCode >= KEY_F12) &&
                !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrInput.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        if (this.completer.isOpen) {
            this.blurTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () { return _this.doBlur(); });
        }
    };
    /**
     * @return {?}
     */
    CtrInput.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.selectOnFocus) {
            this.el.nativeElement.select();
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrInput.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectOnClick) {
            this.el.nativeElement.select();
        }
        if (this.openOnClick) {
            if (this.completer.isOpen) {
                this.completer.clear();
            }
            else {
                this.completer.open();
            }
        }
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchStr;
        },
        set: /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CtrInput.prototype.handleSelection = /**
     * @return {?}
     */
    function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = "";
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            this.completer.clear();
        }
    };
    /**
     * @return {?}
     */
    CtrInput.prototype.restoreSearchValue = /**
     * @return {?}
     */
    function () {
        if (this.fillHighlighted) {
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    /**
     * @return {?}
     */
    CtrInput.prototype.doBlur = /**
     * @return {?}
     */
    function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
            }
            else {
                this.restoreSearchValue();
            }
        }
        this.completer.clear();
    };
    CtrInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[ctrInput]",
                },] },
    ];
    /** @nocollapse */
    CtrInput.ctorParameters = function () { return [
        { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    CtrInput.propDecorators = {
        clearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["clearSelected",] }],
        clearUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["clearUnselected",] }],
        overrideSuggested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["overrideSuggested",] }],
        fillHighlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["fillHighlighted",] }],
        openOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["openOnFocus",] }],
        openOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["openOnClick",] }],
        selectOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["selectOnClick",] }],
        selectOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["selectOnFocus",] }],
        ngModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        keyupHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["keyup", ["$event"],] }],
        pasteHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["paste", ["$event"],] }],
        keydownHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["keydown", ["$event"],] }],
        onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["blur", ["$event"],] }],
        onfocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["focus", [],] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["click", ["$event"],] }]
    };
    return CtrInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CtrListContext = /** @class */ (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
var CtrList = /** @class */ (function () {
    function CtrList(completer, templateRef, viewContainer, cd, zone) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.zone = zone;
        this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
        this.ctrListPause = PAUSE;
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        this.ctrListDisplaySearching = true;
        this._dataService = null;
        this.term = null;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.viewRef = null;
    }
    /**
     * @return {?}
     */
    CtrList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: /**
         * @param {?} newService
         * @return {?}
         */
        function (newService) {
            this._dataService = newService;
            this.dataServiceSubscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrList.prototype, "initialValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === "function") {
                this.zone.run(function () {
                    /** @type {?} */
                    var initialItem = _this._dataService && /** @type {?} */ ((_this._dataService.convertToItem))(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    CtrList.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                    this.ctx.results = [];
                }
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.ctrListPause).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
        else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    };
    /**
     * @return {?}
     */
    CtrList.prototype.clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(CLEAR_TIMEOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this._clear();
        });
    };
    /**
     * @return {?}
     */
    CtrList.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    CtrList.prototype.isOpen = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.ctx.isOpen = open;
    };
    /**
     * @return {?}
     */
    CtrList.prototype._clear = /**
     * @return {?}
     */
    function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
        this.viewRef = null;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    CtrList.prototype.searchTimerComplete = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        if (this._dataService) {
            this._dataService.search(term);
        }
    };
    /**
     * @return {?}
     */
    CtrList.prototype.refreshTemplate = /**
     * @return {?}
     */
    function () {
        // create the template if it doesn't exist
        if (!this.viewRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        else if (!this.viewRef.destroyed) {
            /** @type {?} */ ((
            // refresh the template
            this.viewRef)).context.isOpen = this.ctx.isOpen; /** @type {?} */
            ((this.viewRef)).context.results = this.ctx.results; /** @type {?} */
            ((this.viewRef)).context.searching = this.ctx.searching; /** @type {?} */
            ((this.viewRef)).context.searchInitialized = this.ctx.searchInitialized;
            this.viewRef.detectChanges();
        }
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    CtrList.prototype.getBestMatchIndex = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ctx.results || !this.term) {
            return null;
        }
        /** @type {?} */
        var bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === /** @type {?} */ ((_this.term)).toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(/** @type {?} */ ((_this.term)).toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(/** @type {?} */ ((_this.term)).toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    /**
     * @return {?}
     */
    CtrList.prototype.dataServiceSubscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._dataService) {
            this._dataService
                .subscribe(function (results) {
                _this.ctx.searchInitialized = true;
                _this.ctx.searching = false;
                _this.ctx.results = results;
                if (_this.ctrListAutoMatch && results &&
                    results.length === 1 && results[0].title &&
                    !isNil(_this.term) &&
                    results[0].title.toLocaleLowerCase() === /** @type {?} */ ((_this.term)).toLocaleLowerCase()) {
                    // Do automatch
                    // Do automatch
                    _this.completer.onSelected(results[0]);
                    return;
                }
                _this.refreshTemplate();
                if (_this.ctrListAutoHighlight) {
                    _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                }
            }, function (error) {
                console.error(error);
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
            });
            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(function () {
                    _this.term = null;
                    _this.ctx.searchInitialized = false;
                    _this.ctx.searching = false;
                    _this.ctx.results = [];
                    _this.refreshTemplate();
                    _this.completer.onDataSourceChange();
                });
            }
        }
    };
    CtrList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[ctrList]",
                },] },
    ];
    /** @nocollapse */
    CtrList.ctorParameters = function () { return [
        { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    CtrList.propDecorators = {
        ctrListMinSearchLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ctrListPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ctrListAutoMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ctrListAutoHighlight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ctrListDisplaySearching: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["ctrList",] }],
        initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["ctrListInitialValue",] }]
    };
    return CtrList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CtrRow = /** @class */ (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
        this._rowIndex = 0;
        this._item = null;
    }
    /**
     * @return {?}
     */
    CtrRow.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._rowIndex = index;
            this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CtrRow.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dropdown.onSelected(this._item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrRow.prototype.onMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CtrRow.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dropdown.rowMouseDown();
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    CtrRow.prototype.setHighlighted = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    /**
     * @return {?}
     */
    CtrRow.prototype.getNativeElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    /**
     * @return {?}
     */
    CtrRow.prototype.getDataItem = /**
     * @return {?}
     */
    function () {
        return this._item;
    };
    CtrRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "[ctrRow]",
                },] },
    ];
    /** @nocollapse */
    CtrRow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer"] },
        { type: CtrDropdown, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
    ]; };
    CtrRow.propDecorators = {
        ctrRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["click", ["$event"],] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["mouseenter", ["$event"],] }],
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["mousedown", ["$event"],] }]
    };
    return CtrRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CompleterListItemCmp = /** @class */ (function () {
    function CompleterListItemCmp() {
        this.text = "";
        this.searchStr = "";
        this.matchClass = "";
        this.type = "";
        this.parts = [];
    }
    /**
     * @return {?}
     */
    CompleterListItemCmp.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        /** @type {?} */
        var matchStr = this.text.toLowerCase();
        /** @type {?} */
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        /** @type {?} */
        var startIndex = 0;
        while (matchPos >= 0) {
            /** @type {?} */
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                /** @type {?} */
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    CompleterListItemCmp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: "completer-list-item",
                    template: "<span class=\"completer-list-item-holder\" [ngClass]= \"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]= \"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>"
                },] },
    ];
    CompleterListItemCmp.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        searchStr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matchClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CompleterListItemCmp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () {
    return;
};
/** @type {?} */
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return CompleterCmp; }),
};
var CompleterCmp = /** @class */ (function () {
    function CompleterCmp(completerService, cdr) {
        this.completerService = completerService;
        this.cdr = cdr;
        this.inputName = "";
        this.inputId = "";
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.autoHighlight = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._searchStr = "";
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.searchStr; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "searchStr", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchStr;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === "string" || isNil(value)) {
                this._searchStr = value;
            }
            else {
                this._searchStr = JSON.stringify(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterCmp.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._focus) {
            setTimeout(function () {
                if (!!_this.ctrInput) {
                    _this.ctrInput.nativeElement.focus();
                    _this._focus = false;
                }
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterCmp.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchStr = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterCmp.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterCmp.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CompleterCmp.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disableInput = isDisabled;
    };
    Object.defineProperty(CompleterCmp.prototype, "datasource", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            if (source) {
                if (source instanceof Array) {
                    this.dataService = this.completerService.local(source);
                }
                else if (typeof (source) === "string") {
                    this.dataService = this.completerService.remote(source);
                }
                else {
                    this.dataService = /** @type {?} */ (source);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textNoResults", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterCmp.prototype, "textSearching", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = !!this._textSearching && this._textSearching !== "false";
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterCmp.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.completer) {
            return;
        }
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focusEvent.emit();
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterCmp.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.click.emit(event);
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterCmp.prototype.onKeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.keyup.emit(event);
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterCmp.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.keydown.emit(event);
        event.stopPropagation();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterCmp.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.completer) {
            return;
        }
        this.completer.open();
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.completer) {
            return;
        }
        this.completer.clear();
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.blur();
        }
        else {
            this._focus = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterCmp.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._open;
    };
    CompleterCmp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: "ng2-completer",
                    template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\"\n                class=\"completer-input\" ctrInput [ngClass]=\"inputClass\"\n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\"\n                [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\"\n                [openOnClick]=\"openOnClick\" [selectOnClick]=\"selectOnClick\" [selectOnFocus]=\"selectOnFocus\"\n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\"\n                (keydown)=\"onKeydown($event)\" (click)=\"onClick($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown \n                    *ngIf=\"isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{ _textSearching }}</div>\n                    <div *ngIf=\"!searchActive && (!items || items?.length === 0)\"\n                    class=\"completer-no-results\">{{ _textNoResults }}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\"\n                            [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item\n                                class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\"\n                                [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\"\n                                class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
                    providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CompleterCmp.ctorParameters = function () { return [
        { type: CompleterService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    CompleterCmp.propDecorators = {
        dataService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        inputName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        inputId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        minSearchLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        maxChars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        overrideSuggested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        clearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        clearUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fillHighlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matchClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fieldTabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        inputClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        openOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        openOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        selectOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        selectOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoHighlight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        highlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["blur",] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["focus",] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        completer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [CtrCompleter,] }],
        ctrInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["ctrInput",] }],
        datasource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        textNoResults: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        textSearching: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return CompleterCmp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var providers = [
    CompleterService,
    LocalDataFactory,
    RemoteDataFactory
];
var Ng2CompleterModule = /** @class */ (function () {
    function Ng2CompleterModule() {
    }
    /**
     * @return {?}
     */
    Ng2CompleterModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Ng2CompleterModule,
            providers: providers
        };
    };
    /**
     * @return {?}
     */
    Ng2CompleterModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Ng2CompleterModule,
            providers: providers
        };
    };
    Ng2CompleterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [
                        CompleterListItemCmp,
                        CtrCompleter,
                        CtrDropdown,
                        CtrInput,
                        CtrList,
                        CtrRow,
                        CompleterCmp
                    ],
                    exports: [
                        CompleterListItemCmp,
                        CtrCompleter,
                        CtrDropdown,
                        CtrInput,
                        CtrList,
                        CtrRow,
                        CompleterCmp
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                    ],
                    providers: providers
                },] },
    ];
    return Ng2CompleterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-completer.js.map


/***/ }),

/***/ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js ***!
  \***************************************************************/
/*! exports provided: Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableModule, ServerDataSource, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditor", function() { return DefaultEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFilter", function() { return DefaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataSource", function() { return LocalDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableModule", function() { return Ng2SmartTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDataSource", function() { return ServerDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CellModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return TbodyEditDeleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return TbodyCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return Ng2SmartTableTbodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return THeadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return ActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return ActionsTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return AddButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return CheckboxSelectAllComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return ColumnTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return TitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return TheadFitlersRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return TheadFormRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return TheadTitlesRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return Ng2SmartTableTheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return Ng2SmartTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return DataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CustomEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return EditCellDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return DefaultEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return EditCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CheckboxEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CompleterEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return InputEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SelectEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TextareaEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CustomViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ViewCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return FilterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return FilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return FilterDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DefaultFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CustomFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CheckboxFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return CompleterFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return InputFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return SelectFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PagerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TBodyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return TbodyCreateCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object);
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}

function prepareValue(value) { return value; }
var Cell = /** @class */ (function () {
    function Cell(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    };
    Cell.prototype.setValue = function (value) {
        this.newValue = value;
    };
    Cell.prototype.getId = function () {
        return this.getColumn().id;
    };
    Cell.prototype.getTitle = function () {
        return this.getColumn().title;
    };
    Cell.prototype.isEditable = function () {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    };
    Cell.PREPARE = prepareValue;
    return Cell;
}());

var Row = /** @class */ (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    };
    return Row;
}());

var Column = /** @class */ (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    Column.prototype.getOnComponentInitFunction = function () {
        return this.onComponentInitFunction;
    };
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.getConfig = function () {
        return this.editor && this.editor.config;
    };
    Column.prototype.getFilterType = function () {
        return this.filter && this.filter.type;
    };
    Column.prototype.getFilterConfig = function () {
        return this.filter && this.filter.config;
    };
    Column.prototype.process = function () {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'text';
    };
    return Column;
}());

var DataSet = /** @class */ (function () {
    function DataSet(data, columnSettings) {
        if (data === void 0) { data = []; }
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    DataSet.prototype.setData = function (data) {
        this.data = data;
        this.createRows();
    };
    DataSet.prototype.getColumns = function () {
        return this.columns;
    };
    DataSet.prototype.getRows = function () {
        return this.rows;
    };
    DataSet.prototype.getFirstRow = function () {
        return this.rows[0];
    };
    DataSet.prototype.getLastRow = function () {
        return this.rows[this.rows.length - 1];
    };
    DataSet.prototype.findRowByData = function (data) {
        return this.rows.find(function (row) { return row.getData() === data; });
    };
    DataSet.prototype.deselectAll = function () {
        this.rows.forEach(function (row) {
            row.isSelected = false;
        });
    };
    DataSet.prototype.selectRow = function (row) {
        var previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.multipleSelectRow = function (row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.selectPreviousRow = function () {
        if (this.rows.length > 0) {
            var index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectFirstRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectLastRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.willSelectFirstRow = function () {
        this.willSelect = 'first';
    };
    DataSet.prototype.willSelectLastRow = function () {
        this.willSelect = 'last';
    };
    DataSet.prototype.select = function () {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    };
    DataSet.prototype.createNewRow = function () {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    };
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    DataSet.prototype.createColumns = function (settings) {
        for (var id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    };
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    DataSet.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        this.data.forEach(function (el, index) {
            _this.rows.push(new Row(index, el, _this));
        });
    };
    return DataSet;
}());

var Grid = /** @class */ (function () {
    function Grid(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.setSettings(settings);
        this.setSource(source);
    }
    Grid.prototype.showActionColumn = function (position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    };
    Grid.prototype.isCurrentActionsPosition = function (position) {
        return position == this.getSetting('actions.position');
    };
    Grid.prototype.isActionsVisible = function () {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    };
    Grid.prototype.isMultiSelectVisible = function () {
        return this.getSetting('selectMode') === 'multi';
    };
    Grid.prototype.getNewRow = function () {
        return this.dataSet.newRow;
    };
    Grid.prototype.setSettings = function (settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    };
    Grid.prototype.getDataSet = function () {
        return this.dataSet;
    };
    Grid.prototype.setSource = function (source) {
        var _this = this;
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
        this.source.onUpdated().subscribe(function (data) {
            var changedRow = _this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    };
    Grid.prototype.getSetting = function (name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    };
    Grid.prototype.getColumns = function () {
        return this.dataSet.getColumns();
    };
    Grid.prototype.getRows = function () {
        return this.dataSet.getRows();
    };
    Grid.prototype.selectRow = function (row) {
        this.dataSet.selectRow(row);
    };
    Grid.prototype.multipleSelectRow = function (row) {
        this.dataSet.multipleSelectRow(row);
    };
    Grid.prototype.onSelectRow = function () {
        return this.onSelectRowSource.asObservable();
    };
    Grid.prototype.edit = function (row) {
        row.isInEditing = true;
    };
    Grid.prototype.create = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                _this.createFormShown = false;
            }
            else {
                _this.source.prepend(newData).then(function () {
                    _this.createFormShown = false;
                    _this.dataSet.createNewRow();
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.save = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                _this.source.update(row.getData(), newData).then(function () {
                    row.isInEditing = false;
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.delete = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new Deferred();
        deferred.promise.then(function () {
            _this.source.remove(row.getData());
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.processDataChange = function (changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                var row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    };
    Grid.prototype.shouldProcessChange = function (changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    };
    // TODO: move to selectable? Separate directive
    Grid.prototype.determineRowToSelect = function (changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    };
    Grid.prototype.prepareSource = function (source) {
        var initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    };
    Grid.prototype.getInitialSort = function () {
        var sortConf = {};
        this.getColumns().forEach(function (column) {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    };
    Grid.prototype.getSelectedRows = function () {
        return this.dataSet.getRows()
            .filter(function (r) { return r.isSelected; });
    };
    Grid.prototype.selectAllRows = function (status) {
        this.dataSet.getRows()
            .forEach(function (r) { return r.isSelected = status; });
    };
    Grid.prototype.getFirstRow = function () {
        return this.dataSet.getFirstRow();
    };
    Grid.prototype.getLastRow = function () {
        return this.dataSet.getLastRow();
    };
    return Grid;
}());

var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CellComponent.prototype.onEdited = function (event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], CellComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)
    ], CellComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CellComponent.prototype, "editConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CellComponent.prototype, "createConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CellComponent.prototype, "isNew", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], CellComponent.prototype, "cell", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CellComponent.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CellComponent.prototype, "mode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CellComponent.prototype, "isInEditing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CellComponent.prototype, "edited", void 0);
    CellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-smart-table-cell',
            template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
        })
    ], CellComponent);
    return CellComponent;
}());

var EditCellDefault = /** @class */ (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], EditCellDefault.prototype, "cell", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditCellDefault.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditCellDefault.prototype, "edited", void 0);
    return EditCellDefault;
}());

var CustomEditComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomEditComponent, _super);
    function CustomEditComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    CustomEditComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
            this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
            this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
        }
    };
    CustomEditComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CustomEditComponent.prototype, "dynamicTarget", void 0);
    CustomEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-cell-custom-editor',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], CustomEditComponent);
    return CustomEditComponent;
}(EditCellDefault));

var DefaultEditComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultEditComponent, _super);
    function DefaultEditComponent() {
        return _super.call(this) || this;
    }
    DefaultEditComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    DefaultEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-cell-default-editor',
            template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DefaultEditComponent);
    return DefaultEditComponent;
}(EditCellDefault));

var EditCellComponent = /** @class */ (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], EditCellComponent.prototype, "cell", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], EditCellComponent.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], EditCellComponent.prototype, "edited", void 0);
    EditCellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
        })
    ], EditCellComponent);
    return EditCellComponent;
}());

var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], DefaultEditor.prototype, "cell", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DefaultEditor.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DefaultEditor.prototype, "onStopEditing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DefaultEditor.prototype, "onEdited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DefaultEditor.prototype, "onClick", void 0);
    return DefaultEditor;
}());

var CheckboxEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        return _super.call(this) || this;
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'checkbox-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CheckboxEditorComponent);
    return CheckboxEditorComponent;
}(DefaultEditor));

var CompleterEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompleterEditorComponent, _super);
    function CompleterEditorComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerStr = '';
        return _this;
    }
    CompleterEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CompleterEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])
    ], CompleterEditorComponent);
    return CompleterEditorComponent;
}(DefaultEditor));

var InputEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'input-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], InputEditorComponent);
    return InputEditorComponent;
}(DefaultEditor));

var SelectEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SelectEditorComponent);
    return SelectEditorComponent;
}(DefaultEditor));

var TextareaEditorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextareaEditorComponent, _super);
    function TextareaEditorComponent() {
        return _super.call(this) || this;
    }
    TextareaEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'textarea-editor',
            template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TextareaEditorComponent);
    return TextareaEditorComponent;
}(DefaultEditor));

var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], CustomViewComponent.prototype, "cell", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CustomViewComponent.prototype, "dynamicTarget", void 0);
    CustomViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], CustomViewComponent);
    return CustomViewComponent;
}());

var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
    ], ViewCellComponent.prototype, "cell", void 0);
    ViewCellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-cell-view-mode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
        })
    ], ViewCellComponent);
    return ViewCellComponent;
}());

var CELL_COMPONENTS = [
    CellComponent,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
var CellModule = /** @class */ (function () {
    function CellModule() {
    }
    CellModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"],
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(CELL_COMPONENTS),
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(CELL_COMPONENTS),
        })
    ], CellModule);
    return CellModule;
}());

var DataSource = /** @class */ (function () {
    function DataSource() {
        this.onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort(),
        }); });
    };
    return DataSource;
}());

var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)
    ], FilterDefault.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], FilterDefault.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FilterDefault.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FilterDefault.prototype, "filter", void 0);
    return FilterDefault;
}());

var FilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
        })
    ], FilterComponent);
    return FilterComponent;
}(FilterDefault));

var DefaultFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultFilterComponent, _super);
    function DefaultFilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DefaultFilterComponent.prototype, "query", void 0);
    DefaultFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'default-table-filter',
            template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  "
        })
    ], DefaultFilterComponent);
    return DefaultFilterComponent;
}(FilterDefault));

var CustomFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomFilterComponent, _super);
    function CustomFilterComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    CustomFilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.column && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe(function (event) { return _this.onFilter(event); });
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    };
    CustomFilterComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CustomFilterComponent.prototype, "query", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CustomFilterComponent.prototype, "dynamicTarget", void 0);
    CustomFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-table-filter',
            template: "<ng-template #dynamicTarget></ng-template>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], CustomFilterComponent);
    return CustomFilterComponent;
}(FilterDefault));

var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DefaultFilter.prototype, "query", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DefaultFilter.prototype, "inputClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)
    ], DefaultFilter.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DefaultFilter.prototype, "filter", void 0);
    return DefaultFilter;
}());

var CheckboxFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        var _this = _super.call(this) || this;
        _this.filterActive = false;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        return _this;
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe(function (checked) {
            _this.filterActive = true;
            var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
            var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
            _this.query = checked ? trueVal : falseVal;
            _this.setFilter();
        });
    };
    CheckboxFilterComponent.prototype.resetFilter = function (event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    };
    CheckboxFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'checkbox-filter',
            template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CheckboxFilterComponent);
    return CheckboxFilterComponent;
}(DefaultFilter));

var CompleterFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (ev) { return (ev && ev.title) || ev || ''; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])
    ], CompleterFilterComponent);
    return CompleterFilterComponent;
}(DefaultFilter));

var InputFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InputFilterComponent, _super);
    function InputFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        return _this;
    }
    InputFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe(function (value) {
            _this.query = _this.inputControl.value;
            _this.setFilter();
        });
    };
    InputFilterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    };
    InputFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'input-filter',
            template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], InputFilterComponent);
    return InputFilterComponent;
}(DefaultFilter));

var SelectFilterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        return _super.call(this) || this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputControl', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"])
    ], SelectFilterComponent.prototype, "inputControl", void 0);
    SelectFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-filter',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SelectFilterComponent);
    return SelectFilterComponent;
}(DefaultFilter));

var FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"],
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(FILTER_COMPONENTS),
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(FILTER_COMPONENTS),
        })
    ], FilterModule);
    return FilterModule;
}());

var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], PagerComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], PagerComponent.prototype, "perPageSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PagerComponent.prototype, "changePage", void 0);
    PagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-smart-table-pager',
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
        })
    ], PagerComponent);
    return PagerComponent;
}());

var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [
                PagerComponent,
            ],
            exports: [
                PagerComponent,
            ],
        })
    ], PagerModule);
    return PagerModule;
}());

var Ng2SmartTableTbodyComponent = /** @class */ (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.multipleSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Ng2SmartTableTbodyComponent.prototype, "tableColumnsCount", {
        get: function () {
            var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
            return this.grid.getColumns().length + actionColumns;
        },
        enumerable: true,
        configurable: true
    });
    Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
    Ng2SmartTableTbodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-tbody]',
            template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of row.cells\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n",
            styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
        })
    ], Ng2SmartTableTbodyComponent);
    return Ng2SmartTableTbodyComponent;
}());

var TbodyCreateCancelComponent = /** @class */ (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TbodyCreateCancelComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)
    ], TbodyCreateCancelComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
    TbodyCreateCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-st-tbody-create-cancel',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  "
        })
    ], TbodyCreateCancelComponent);
    return TbodyCreateCancelComponent;
}());

var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TbodyEditDeleteComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)
    ], TbodyEditDeleteComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], TbodyEditDeleteComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "edit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "delete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
    TbodyEditDeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-st-tbody-edit-delete',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
        })
    ], TbodyEditDeleteComponent);
    return TbodyEditDeleteComponent;
}());

var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TbodyCustomComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)
    ], TbodyCustomComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TbodyCustomComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TbodyCustomComponent.prototype, "custom", void 0);
    TbodyCustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-st-tbody-custom',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
        })
    ], TbodyCustomComponent);
    return TbodyCustomComponent;
}());

var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                CellModule,
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(TBODY_COMPONENTS),
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(TBODY_COMPONENTS),
        })
    ], TBodyModule);
    return TBodyModule;
}());

var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], Ng2SmartTableTheadComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "create", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
    Ng2SmartTableTheadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-thead]',
            template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"
        })
    ], Ng2SmartTableTheadComponent);
    return Ng2SmartTableTheadComponent;
}());

var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], ActionsComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ActionsComponent.prototype, "create", void 0);
    ActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-st-actions',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
        })
    ], ActionsComponent);
    return ActionsComponent;
}());

var ActionsTitleComponent = /** @class */ (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.prototype.ngOnChanges = function () {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], ActionsTitleComponent.prototype, "grid", void 0);
    ActionsTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-actions-title]',
            template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ActionsTitleComponent);
    return ActionsTitleComponent;
}());

var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.ngOnChanges = function () {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], AddButtonComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], AddButtonComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddButtonComponent.prototype, "create", void 0);
    AddButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-add-button]',
            template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AddButtonComponent);
    return AddButtonComponent;
}());

var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], CheckboxSelectAllComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], CheckboxSelectAllComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
    CheckboxSelectAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-checkbox-select-all]',
            template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
        })
    ], CheckboxSelectAllComponent);
    return CheckboxSelectAllComponent;
}());

var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)
    ], ColumnTitleComponent.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], ColumnTitleComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ColumnTitleComponent.prototype, "sort", void 0);
    ColumnTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-st-column-title',
            template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
        })
    ], ColumnTitleComponent);
    return ColumnTitleComponent;
}());

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TitleComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                    _this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    _this.currentDirection = '';
                }
                sortConf.forEach(function (fieldConf) {
                });
            });
        }
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)
    ], TitleComponent.prototype, "column", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], TitleComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TitleComponent.prototype, "sort", void 0);
    TitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-smart-table-title',
            template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
        })
    ], TitleComponent);
    return TitleComponent;
}());

var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TheadFitlersRowComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], TheadFitlersRowComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "create", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "filter", void 0);
    TheadFitlersRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-thead-filters-row]',
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
        })
    ], TheadFitlersRowComponent);
    return TheadFitlersRowComponent;
}());

var TheadFormRowComponent = /** @class */ (function () {
    function TheadFormRowComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    TheadFormRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TheadFormRowComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)
    ], TheadFormRowComponent.prototype, "row", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TheadFormRowComponent.prototype, "createConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TheadFormRowComponent.prototype, "create", void 0);
    TheadFormRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-thead-form-row]',
            template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
        })
    ], TheadFormRowComponent);
    return TheadFormRowComponent;
}());

var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
    ], TheadTitlesRowComponent.prototype, "grid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)
    ], TheadTitlesRowComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
    TheadTitlesRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
        })
    ], TheadTitlesRowComponent);
    return TheadTitlesRowComponent;
}());

var THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                FilterModule,
                CellModule,
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(THEAD_COMPONENTS),
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(THEAD_COMPONENTS),
        })
    ], THeadModule);
    return THeadModule;
}());

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
var LocalSorter = /** @class */ (function () {
    function LocalSorter() {
    }
    LocalSorter.sort = function (data, field, direction, customCompare) {
        var dir = (direction === 'asc') ? 1 : -1;
        var compare = customCompare ? customCompare : compareValues;
        return data.sort(function (a, b) {
            return compare.call(null, dir, a[field], b[field]);
        });
    };
    return LocalSorter;
}());

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
var LocalFilter = /** @class */ (function () {
    function LocalFilter() {
    }
    LocalFilter.filter = function (data, field, search, customFilter) {
        var filter = customFilter ? customFilter : filterValues;
        return data.filter(function (el) {
            var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    };
    return LocalFilter;
}());

var LocalPager = /** @class */ (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());

var LocalDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalDataSource, _super);
    function LocalDataSource(data) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this) || this;
        _this.data = [];
        _this.filteredAndSorted = [];
        _this.sortConf = [];
        _this.filterConf = {
            filters: [],
            andOperator: true,
        };
        _this.pagingConf = {};
        _this.data = data;
        return _this;
    }
    LocalDataSource.prototype.load = function (data) {
        this.data = data;
        return _super.prototype.load.call(this, data);
    };
    LocalDataSource.prototype.prepend = function (element) {
        this.reset(true);
        this.data.unshift(element);
        return _super.prototype.prepend.call(this, element);
    };
    LocalDataSource.prototype.append = function (element) {
        this.reset(true);
        this.data.push(element);
        return _super.prototype.append.call(this, element);
    };
    LocalDataSource.prototype.add = function (element) {
        this.data.push(element);
        return _super.prototype.add.call(this, element);
    };
    LocalDataSource.prototype.remove = function (element) {
        this.data = this.data.filter(function (el) { return el !== element; });
        return _super.prototype.remove.call(this, element);
    };
    LocalDataSource.prototype.update = function (element, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.find(element).then(function (found) {
                found = deepExtend(found, values);
                _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    LocalDataSource.prototype.find = function (element) {
        var found = this.data.find(function (el) { return el === element; });
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    };
    LocalDataSource.prototype.getElements = function () {
        var data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    };
    LocalDataSource.prototype.getFilteredAndSorted = function () {
        var data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    };
    LocalDataSource.prototype.getAll = function () {
        var data = this.data.slice(0);
        return Promise.resolve(data);
    };
    LocalDataSource.prototype.reset = function (silent) {
        if (silent === void 0) { silent = false; }
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    };
    LocalDataSource.prototype.empty = function () {
        this.data = [];
        return _super.prototype.empty.call(this);
    };
    LocalDataSource.prototype.count = function () {
        return this.filteredAndSorted.length;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        if (conf !== null) {
            conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        _super.prototype.setSort.call(this, conf, doEmit);
        return this;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (conf && conf.length > 0) {
            conf.forEach(function (fieldConf) {
                _this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        var found = false;
        this.filterConf.filters.forEach(function (currentFieldConf, index) {
            if (currentFieldConf['field'] === fieldConf['field']) {
                _this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        _super.prototype.setPaging.call(this, page, perPage, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        _super.prototype.setPage.call(this, page, doEmit);
        return this;
    };
    LocalDataSource.prototype.getSort = function () {
        return this.sortConf;
    };
    LocalDataSource.prototype.getFilter = function () {
        return this.filterConf;
    };
    LocalDataSource.prototype.getPaging = function () {
        return this.pagingConf;
    };
    LocalDataSource.prototype.prepareData = function (data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    };
    LocalDataSource.prototype.sort = function (data) {
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    };
    // TODO: refactor?
    LocalDataSource.prototype.filter = function (data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                var mergedData_1 = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        mergedData_1 = mergedData_1.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData_1.filter(function (elem, pos, arr) {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    };
    LocalDataSource.prototype.paginate = function (data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    };
    return LocalDataSource;
}(DataSource));

var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "settings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "delete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "edit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "create", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "custom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Ng2SmartTableComponent.prototype, "rowHover", void 0);
    Ng2SmartTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-smart-table',
            template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
            styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
        })
    ], Ng2SmartTableComponent);
    return Ng2SmartTableComponent;
}());

var Ng2SmartTableModule = /** @class */ (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                CellModule,
                FilterModule,
                PagerModule,
                TBodyModule,
                THeadModule,
            ],
            declarations: [
                Ng2SmartTableComponent,
            ],
            exports: [
                Ng2SmartTableComponent,
            ],
        })
    ], Ng2SmartTableModule);
    return Ng2SmartTableModule;
}());

var ServerSourceConf = /** @class */ (function () {
    function ServerSourceConf(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
    ServerSourceConf.SORT_FIELD_KEY = '_sort';
    ServerSourceConf.SORT_DIR_KEY = '_order';
    ServerSourceConf.PAGER_PAGE_KEY = '_page';
    ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
    ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
    ServerSourceConf.TOTAL_KEY = 'x-total-count';
    ServerSourceConf.DATA_KEY = '';
    return ServerSourceConf;
}());

var ServerDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new ServerSourceConf(conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        })).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.body;
        var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        var httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    };
    ServerDataSource.prototype.createRequesParams = function () {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    };
    ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
        var _this = this;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
        var _this = this;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    };
    return ServerDataSource;
}(LocalDataSource));


//# sourceMappingURL=ng2-smart-table.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/extended/extended-table.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/extended/extended-table.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Extended Table starts-->\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"content-header\">Extended Tables</div>\n        <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n    </div>\n</div>\n<section id=\"extended\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                        <div class=\"card-title-wrap bar-success\">\n                    <h4 class=\"card-title\">Action Buttons</h4>\n                        </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-responsive-md text-center\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th></th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Email</th>\n                                    <th>Contact</th>\n                                    <th>Actions</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>\n                                        <div class=\"custom-control custom-checkbox m-0\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\">\n                                            <label class=\"custom-control-label\" for=\"item1\"></label>\n                                        </div>\n                                    </td>\n                                    <td>Jean</td>\n                                    <td>Cartez</td>\n                                    <td>jeancartez@mail.com</td>\n                                    <td>0123456789</td>\n                                    <td>\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-pencil font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"info p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-check font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-trash-o font-medium-3 mr-2\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>\n                                        <div class=\"custom-control custom-checkbox m-0\">\n                                            <input type=\"checkbox\" checked class=\"custom-control-input\" id=\"item2\">\n                                            <label class=\"custom-control-label\" for=\"item2\"></label>\n                                        </div>\n                                    </td>\n                                    <td>Pal</td>\n                                    <td>Patil</td>\n                                    <td>palpatil@mail.com</td>\n                                    <td>0789654123</td>\n                                    <td>\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-pencil font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"info p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-check font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-trash-o font-medium-3 mr-2\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>\n                                        <div class=\"custom-control custom-checkbox m-0\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"item3\">\n                                            <label class=\"custom-control-label\" for=\"item3\"></label>\n                                        </div>\n                                    </td>\n                                    <td>Jack</td>\n                                    <td>Rawn</td>\n                                    <td>jackrawn@mail.com</td>\n                                    <td>0456987123</td>\n                                    <td>\n                                        <a class=\"success p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-pencil font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"info p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-check font-medium-3 mr-2\"></i>\n                                        </a>\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\">\n                                            <i class=\"fa fa-trash-o font-medium-3 mr-2\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Extended Table Ends-->\n<!--Shopping cart starts-->\n<section id=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-warning\">\n                        <h4 class=\"card-title\">Invoice Summary</h4>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <div class=\"table-responsive\">\n                            <table id=\"recent-orders\" class=\"table table-hover table-xl mb-0\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"border-top-0\">Status</th>                                \n                                        <th class=\"border-top-0\">Invoice#</th>\n                                        <th class=\"border-top-0\">Customer Name</th>\n                                        <th class=\"border-top-0\">Products</th>\n                                        <th class=\"border-top-0\">Categories</th>\n                                        <th class=\"border-top-0\">Shipping</th>\n                                        <th class=\"border-top-0\">Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\n                                        <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td>\n                                        <td class=\"text-truncate\">\n                                            <span class=\"avatar avatar-xs\">\n                                                <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-4.jpg\" alt=\"avatar\">\n                                            </span>\n                                            <span>Elizabeth W.</span>\n                                        </td>\n                                        <td class=\"text-truncate p-1\">\n                                            <ul class=\"list-unstyled users-list m-0\">                                               \n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Rebecca Jones\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-4.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li class=\"avatar avatar-sm\">                                            \n                                                    <span class=\"badge badge-info\">+1 more</span>\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\n                                        </td>\n                                        <td>\n                                            <ngb-progressbar type=\"danger\" [value]=\"25\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-danger\"></ngb-progressbar>\n                                        </td>\n                                        <td class=\"text-truncate\">$ 1200.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o danger font-medium-1 mr-1\"></i> Declined</td>\n                                        <td class=\"text-truncate\"><a href=\"#\">INV-001002</a></td>\n                                        <td class=\"text-truncate\">\n                                            <span class=\"avatar avatar-xs\">\n                                                <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-5.jpg\" alt=\"avatar\">\n                                            </span>\n                                            <span>Doris R.</span>\n                                        </td>\n                                        <td class=\"text-truncate p-1\">\n                                            <ul class=\"list-unstyled users-list m-0\">                                               \n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\n                                                </li>                                        \n                                                <li class=\"avatar avatar-sm\">                                            \n                                                    <span class=\"badge badge-info\">+2 more</span>\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-outline-warning round\">Electronics</button>\n                                        </td>\n                                        <td>\n                                            <ngb-progressbar type=\"warning\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-warning\"></ngb-progressbar>\n                                        </td>\n                                        <td class=\"text-truncate\">$ 1850.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o warning font-medium-1 mr-1\"></i> Pending</td>\n                                        <td class=\"text-truncate\"><a href=\"#\">INV-001003</a></td>\n                                        <td class=\"text-truncate\">\n                                            <span class=\"avatar avatar-xs\">\n                                                <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-6.jpg\" alt=\"avatar\">\n                                            </span>\n                                            <span>Megan S.</span>\n                                        </td>\n                                        <td class=\"text-truncate p-1\">\n                                            <ul class=\"list-unstyled users-list m-0\">                                               \n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-outline-success round\">Groceries</button>\n                                        </td>\n                                        <td>\n                                            <ngb-progressbar type=\"success\" [value]=\"75\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-success\"></ngb-progressbar>\n                                        </td>\n                                        <td class=\"text-truncate\">$ 3200.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\n                                        <td class=\"text-truncate\"><a href=\"#\">INV-001004</a></td>\n                                        <td class=\"text-truncate\">\n                                            <span class=\"avatar avatar-xs\">\n                                                <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-7.jpg\" alt=\"avatar\">\n                                            </span>\n                                            <span>Andrew D.</span>\n                                        </td>\n                                        <td class=\"text-truncate p-1\">\n                                            <ul class=\"list-unstyled users-list m-0\">                                               \n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li class=\"avatar avatar-sm\">                                            \n                                                    <span class=\"badge badge-info\">+1 more</span>\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-outline-info round\">Apparels</button>\n                                        </td>\n                                        <td>\n                                            <ngb-progressbar type=\"info\" [value]=\"65\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-info\"></ngb-progressbar>\n                                        </td>\n                                        <td class=\"text-truncate\">$ 4500.00</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\n                                        <td class=\"text-truncate\"><a href=\"#\">INV-001005</a></td>\n                                        <td class=\"text-truncate\">\n                                            <span class=\"avatar avatar-xs\">\n                                                <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-9.jpg\" alt=\"avatar\">\n                                            </span>\n                                            <span>Walter R.</span>\n                                        </td>\n                                        <td class=\"text-truncate p-1\">\n                                            <ul class=\"list-unstyled users-list m-0\">                                               \n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\n                                                </li>\n                                                <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\n                                                    <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-3.jpg\" alt=\"Avatar\">\n                                                </li>\n                                            </ul>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\n                                        </td>\n                                        <td>\n                                            <ngb-progressbar type=\"primary\" [value]=\"35\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-primary\"></ngb-progressbar>\n                                        </td>\n                                        <td class=\"text-truncate\">$ 1500.00</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Shopping cart ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tables/regular/regular-table.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tables/regular/regular-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"content-header\">Basic Tables</div>\n        <p class=\"content-sub-header\">All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the\n            parent.</p>\n    </div>\n</div>\n<!--Basic Table Starts-->\n<section id=\"simple-table\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-success\">\n                        <h4 class=\"card-title\">Simple Table</h4>\n                    </div>\n                    <p>For basic styling add the base class\n                        <code>.table</code> to any\n                        <code>&lt;table&gt;</code>. It may seem super redundant, but given the widespread use of tables for other plugins like calendars\n                        and date pickers, we've opted to isolate our custom table styles.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Basic Table Ends-->\n\n<!--Inverse Table Starts-->\n<section id=\"inverse-table\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-warning\">\n                        <h4 class=\"card-title\">Inverse Table</h4>\n                    </div>\n                    <p>You can also invert the colors—with light text on dark backgrounds—with\n                        <code>.table-inverse</code>.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Inverse Table Ends-->\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"content-header\">Table head options</div>\n        <p class=\"content-sub-header\">All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the\n            parent.</p>\n    </div>\n</div>\n<!--Light table starts-->\n<section id=\"light\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-primary\">\n                        <h4 class=\"card-title\">Light Table Head</h4>\n                    </div>\n                    <p>Similar to default and inverse tables, use one of two modifier classes to make\n                        <code>&lt;thead&gt;</code>s appear light gray.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table\">\n                            <thead class=\"thead-default\">\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Light table Ends-->\n\n<!--Dark table starts-->\n<section id=\"dark\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-danger\">\n                        <h4 class=\"card-title\">Dark Table Head</h4>\n                    </div>\n                    <p>Similar to default and inverse tables, use one of two modifier classes to make\n                        <code>&lt;thead&gt;</code>s appear Dark gray.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table\">\n                            <thead class=\"thead-inverse\">\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Dark table Ends-->\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"content-header\">Striped rows</div>\n        <p class=\"content-sub-header\">All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the\n            parent.</p>\n    </div>\n</div>\n<!--Striped rows Light Starts-->\n<section id=\"striped-light\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-info\">\n                        <h4 class=\"card-title\">Striped rows Light</h4>\n                    </div>\n                    <p>Use .table-striped to add zebra-striping to any table row within the\n                        <code>&lt;tbody&gt;</code>.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Striped rows Light Ends-->\n\n<!--Striped rows Inverse Starts-->\n<section id=\"striped-inverse\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-success\">\n                        <h4 class=\"card-title\">Striped rows Inverse</h4>\n                    </div>\n                    <p>Use\n                        <code>.table-striped</code> and\n                        <code>.table-niverse</code> to add zebra-striping to any table row and inverse styling within the\n                        <code>&lt;tbody&gt;</code>.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-striped table-inverse\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Striped rows Inverse Ends-->\n\n<!--Hoverable Rows Starts-->\n<section id=\"hoverable-rows\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-warning\">\n                        <h4 class=\"card-title\">Hoverable rows</h4>\n                    </div>\n                    <p>Add\n                        <code>.table-hover</code> to enable a hover state on table rows within a\n                        <code>&lt;tbody&gt;</code>.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td colspan=\"2\">Larry the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Hoverable rows Ends-->\n\n<!--Small Tables Starts-->\n<section id=\"hoverable-rows\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-primary\">\n                        <h4 class=\"card-title\">Small table</h4>\n                    </div>\n                    <p>Add\n                        <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-sm\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td colspan=\"2\">Larry the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Small Tables Ends-->\n\n<!--Contextual classes Starts-->\n<section id=\"contenxtual\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-danger\">\n                        <h4 class=\"card-title\">Contextual classes</h4>\n                    </div>\n                    <p>Use contextual classes to color table rows or individual cells.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Type</th>\n                                    <th>Column heading</th>\n                                    <th>Column heading</th>\n                                    <th>Column heading</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr class=\"table-active\">\n                                    <th scope=\"row\">Active</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Default</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n\n\n                                <tr class=\"table-primary\">\n                                    <th scope=\"row\">Primary</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-secondary\">\n                                    <th scope=\"row\">Secondary</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-success\">\n                                    <th scope=\"row\">Success</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-danger\">\n                                    <th scope=\"row\">Danger</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-warning\">\n                                    <th scope=\"row\">Warning</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-info\">\n                                    <th scope=\"row\">Info</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-light\">\n                                    <th scope=\"row\">Light</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                                <tr class=\"table-dark\">\n                                    <th scope=\"row\">Dark</th>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                    <td>Column content</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Contextual classes Ends-->\n\n<!--Responsive tables Starts-->\n<section id=\"contenxtual\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-info\">\n                        <h4 class=\"card-title\">Responsive tables</h4>\n                    </div>\n                    <p>Create responsive tables by adding\n                        <code>.table-responsive</code> to any\n                        <code>.table</code> to make them scroll horizontally on small devices (under 768px). When viewing on anything larger\n                        than 768px wide, you will not see any difference in these tables.</p>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <table class=\"table table-responsive-sm\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td colspan=\"2\">Larry the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Responsive tables Ends-->"

/***/ }),

/***/ "./src/app/tables/extended/extended-table.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tables/extended/extended-table.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9leHRlbmRlZC9leHRlbmRlZC10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tables/extended/extended-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/extended/extended-table.component.ts ***!
  \*************************************************************/
/*! exports provided: ExtendedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedTableComponent", function() { return ExtendedTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExtendedTableComponent = /** @class */ (function () {
    function ExtendedTableComponent() {
    }
    ExtendedTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extended-table',
            template: __webpack_require__(/*! raw-loader!./extended-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/extended/extended-table.component.html"),
            styles: [__webpack_require__(/*! ./extended-table.component.scss */ "./src/app/tables/extended/extended-table.component.scss")]
        })
    ], ExtendedTableComponent);
    return ExtendedTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/regular/regular-table.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tables/regular/regular-table.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9yZWd1bGFyL3JlZ3VsYXItdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tables/regular/regular-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/regular/regular-table.component.ts ***!
  \***********************************************************/
/*! exports provided: RegularTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTableComponent", function() { return RegularTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegularTableComponent = /** @class */ (function () {
    function RegularTableComponent() {
    }
    RegularTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regular-table',
            template: __webpack_require__(/*! raw-loader!./regular-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/regular/regular-table.component.html"),
            styles: [__webpack_require__(/*! ./regular-table.component.scss */ "./src/app/tables/regular/regular-table.component.scss")]
        })
    ], RegularTableComponent);
    return RegularTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/tables-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extended/extended-table.component */ "./src/app/tables/extended/extended-table.component.ts");
/* harmony import */ var _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regular/regular-table.component */ "./src/app/tables/regular/regular-table.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'extended',
                component: _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_3__["ExtendedTableComponent"],
                data: {
                    title: 'Extended Table'
                }
            },
            {
                path: 'regular',
                component: _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_4__["RegularTableComponent"],
                data: {
                    title: 'Regular Table'
                }
            },
        ]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/tables/tables-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extended/extended-table.component */ "./src/app/tables/extended/extended-table.component.ts");
/* harmony import */ var _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regular/regular-table.component */ "./src/app/tables/regular/regular-table.component.ts");








var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_4__["TablesRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_6__["ExtendedTableComponent"],
                _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_7__["RegularTableComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module-es5.js.map