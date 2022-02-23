(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/ng2-completer/esm2015/ng2-completer.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-completer/esm2015/ng2-completer.js ***!
  \*************************************************************/
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license ng2-completer
 * MIT license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MAX_CHARS = 524288;
/** @type {?} */
const MIN_SEARCH_LENGTH = 3;
/** @type {?} */
const PAUSE = 10;
/** @type {?} */
const TEXT_SEARCHING = "Searching...";
/** @type {?} */
const TEXT_NO_RESULTS = "No results found";
/** @type {?} */
const CLEAR_TIMEOUT = 50;
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
class CompleterBaseData extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super();
        this._searchFields = null;
        this._titleField = null;
        this._descriptionField = undefined;
        this._imageField = undefined;
    }
    /**
     * @return {?}
     */
    cancel() {
        return;
    }
    /**
     * @param {?} searchFields
     * @return {?}
     */
    searchFields(searchFields) {
        this._searchFields = searchFields;
        return this;
    }
    /**
     * @param {?} titleField
     * @return {?}
     */
    titleField(titleField) {
        this._titleField = titleField;
        return this;
    }
    /**
     * @param {?} descriptionField
     * @return {?}
     */
    descriptionField(descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    }
    /**
     * @param {?} imageField
     * @return {?}
     */
    imageField(imageField) {
        this._imageField = imageField;
        return this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        /** @type {?} */
        let image = null;
        /** @type {?} */
        let formattedText;
        /** @type {?} */
        let formattedDesc = null;
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
            image,
            originalObject: data,
            title: formattedText
        });
    }
    /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    extractMatches(data, term) {
        /** @type {?} */
        let matches = [];
        /** @type {?} */
        const searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
            matches = data.filter((item) => {
                /** @type {?} */
                const values = searchFields ? this.extractBySearchFields(searchFields, item) : [item];
                return values.some((value) => value
                    .toString()
                    .toLowerCase()
                    .indexOf(term.toString().toLowerCase()) >= 0);
            });
        }
        else {
            matches = data;
        }
        return matches;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        if (!this._titleField) {
            return "";
        }
        return this._titleField.split(",")
            .map((field) => {
            return this.extractValue(item, field);
        })
            .reduce((acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart);
    }
    /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    extractValue(obj, key) {
        /** @type {?} */
        let keys;
        /** @type {?} */
        let result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (key of keys) {
                if (result) {
                    result = result[key];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    processResults(matches) {
        /** @type {?} */
        let i;
        /** @type {?} */
        const results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                const item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
    /**
     * @param {?} searchFields
     * @param {?} item
     * @return {?}
     */
    extractBySearchFields(searchFields, item) {
        return searchFields
            .map((searchField) => this.extractValue(item, searchField)).filter((value) => !!value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalData extends CompleterBaseData {
    constructor() {
        super();
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._data = [];
        this.savedTerm = null;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    data(data) {
        if (data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            /** @type {?} */
            const data$ = /** @type {?} */ (data);
            data$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => []))
                .subscribe((res) => {
                this._data = res;
                if (this.savedTerm) {
                    this.search(this.savedTerm);
                }
                this.dataSourceChange.emit();
            });
        }
        else {
            this._data = data;
        }
        this.dataSourceChange.emit();
        return this;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            /** @type {?} */
            const matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RemoteData extends CompleterBaseData {
    /**
     * @param {?} http
     */
    constructor(http) {
        super();
        this.http = http;
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._remoteUrl = null;
        this.remoteSearch = null;
        this._urlFormater = null;
        this._dataField = null;
    }
    /**
     * @param {?} remoteUrl
     * @return {?}
     */
    remoteUrl(remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
    }
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    dataField(dataField) {
        this._dataField = dataField;
    }
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        this.cancel();
        /** @type {?} */
        let url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http
            .get(url, Object.assign({}, this._requestOptions))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            /** @type {?} */
            const matches = this.extractValue(data, this._dataField);
            return this.extractMatches(matches, term);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => []))
            .subscribe((matches) => {
            /** @type {?} */
            const results = this.processResults(matches);
            this.next(results);
        });
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalDataFactory {
    /**
     * @return {?}
     */
    create() {
        return new LocalData();
    }
}
LocalDataFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RemoteDataFactory {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    create() {
        return new RemoteData(this.http);
    }
}
RemoteDataFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
RemoteDataFactory.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CompleterService {
    /**
     * @param {?} localDataFactory
     * @param {?} remoteDataFactory
     */
    constructor(localDataFactory, remoteDataFactory // Using any instead of () => LocalData because of AoT errors
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
    local(data, searchFields = "", titleField = "") {
        /** @type {?} */
        const localData = this.localDataFactory.create();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    remote(url, searchFields = "", titleField = "") {
        /** @type {?} */
        const remoteData = this.remoteDataFactory.create();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
}
CompleterService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
CompleterService.ctorParameters = () => [
    { type: LocalDataFactory },
    { type: RemoteDataFactory }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CtrCompleter {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    registerList(list) {
        this.list = list;
    }
    /**
     * @param {?} dropdown
     * @return {?}
     */
    registerDropdown(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    }
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    onSelected(item, clearList = true) {
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    }
    /**
     * @return {?}
     */
    onDataSourceChange() {
        if (this.hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        this.dataSourceChange.emit();
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (this._hasSelected) {
            this.selected.emit(null);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this._hasHighlighted = false;
        this.isOpen = false;
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }
    /**
     * @return {?}
     */
    prevRow() {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }
    /**
     * @return {?}
     */
    hasHighlighted() {
        return this._hasHighlighted;
    }
    /**
     * @param {?} cancel
     * @return {?}
     */
    cancelBlur(cancel) {
        this._cancelBlur = cancel;
    }
    /**
     * @return {?}
     */
    isCancelBlur() {
        return this._cancelBlur;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._isOpen && !!this.list) {
            this.isOpen = true;
            this.list.open();
        }
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);
        if (this.list) {
            this.list.isOpen(open);
        }
    }
    /**
     * @return {?}
     */
    get autoHighlightIndex() {
        return this._autoHighlightIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;
        if (this.dropdown) {
            this.dropdown.highlightRow(this._autoHighlightIndex);
        }
    }
    /**
     * @return {?}
     */
    get hasSelected() {
        return this._hasSelected;
    }
}
CtrCompleter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[ctrCompleter]",
            },] },
];
CtrCompleter.propDecorators = {
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    highlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dataSourceChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CtrRowItem {
    /**
     * @param {?} row
     * @param {?} index
     */
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
class CtrDropdown {
    /**
     * @param {?} completer
     * @param {?} el
     * @param {?} zone
     */
    constructor(completer, el, zone) {
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
    ngOnDestroy() {
        this.completer.registerDropdown(null);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const css = getComputedStyle(this.el.nativeElement);
        /** @type {?} */
        const autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            this.zone.run(() => {
                this.highlightRow(autoHighlightIndex);
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            this.zone.run(() => {
                this.completer.cancelBlur(false);
            });
        }
        else {
            this._rowMouseDown = false;
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    registerRow(row) {
        /** @type {?} */
        const arrIndex = this.rows.findIndex(_row => _row.index === row.index);
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        }
        else {
            this.rows.push(row);
        }
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    unregisterRow(rowIndex) {
        /** @type {?} */
        const arrIndex = this.rows.findIndex(_row => _row.index === rowIndex);
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        /** @type {?} */
        const highlighted = this.rows.find(row => row.index === index);
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
            const rowTop = this.dropdownRowTop();
            if (!rowTop) {
                return;
            }
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                const row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10)));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.rows = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.completer.onSelected(item);
    }
    /**
     * @return {?}
     */
    rowMouseDown() {
        this._rowMouseDown = true;
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (!!this.currHighlighted && !!this.currHighlighted.row) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        /** @type {?} */
        let nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @return {?}
     */
    prevRow() {
        /** @type {?} */
        let nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    /**
     * @return {?}
     */
    dropdownRowTop() {
        if (!this.currHighlighted) {
            return;
        }
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10));
    }
    /**
     * @return {?}
     */
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight), 10);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    dropdownRowOffsetHeight(row) {
        /** @type {?} */
        let css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(/** @type {?} */ (css.marginTop), 10) + parseInt(/** @type {?} */ (css.marginBottom), 10);
    }
}
CtrDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[ctrDropdown]",
            },] },
];
/** @nocollapse */
CtrDropdown.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CtrDropdown.propDecorators = {
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["mousedown", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const KEY_DW = 40;
/** @type {?} */
const KEY_RT = 39;
/** @type {?} */
const KEY_UP = 38;
/** @type {?} */
const KEY_LF = 37;
/** @type {?} */
const KEY_ES = 27;
/** @type {?} */
const KEY_EN = 13;
/** @type {?} */
const KEY_TAB = 9;
/** @type {?} */
const KEY_BK = 8;
/** @type {?} */
const KEY_SH = 16;
/** @type {?} */
const KEY_CL = 20;
/** @type {?} */
const KEY_F1 = 112;
/** @type {?} */
const KEY_F12 = 123;
class CtrInput {
    /**
     * @param {?} completer
     * @param {?} ngModel
     * @param {?} el
     */
    constructor(completer, ngModel, el) {
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
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe((item) => {
            if (!item) {
                return;
            }
            if (this.clearSelected) {
                this.searchStr = "";
            }
            else {
                this.searchStr = item.title;
            }
            this.ngModelChange.emit(this.searchStr);
        });
        this.completer.highlighted.subscribe((item) => {
            if (this.fillHighlighted) {
                if (item) {
                    this._displayStr = item.title;
                    this.ngModelChange.emit(item.title);
                }
                else {
                    this._displayStr = this.searchStr;
                    this.ngModelChange.emit(this.searchStr);
                }
            }
        });
        this.completer.dataSourceChange.subscribe(() => {
            this.completer.search(this.searchStr);
        });
        if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe((value) => {
                if (!isNil(value) && this._displayStr !== value) {
                    if (this.searchStr !== value) {
                        this.completer.search(value);
                    }
                    this.searchStr = value;
                }
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyupHandler(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pasteHandler(event) {
        this.completer.open();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        /** @type {?} */
        const keyCode = event.keyCode || event.which;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(() => {
                // get the focus back
                this.el.nativeElement.focus();
            }, 0);
            return;
        }
        if (this.completer.isOpen) {
            this.blurTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => this.doBlur());
        }
    }
    /**
     * @return {?}
     */
    onfocus() {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
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
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
    }
    /**
     * @return {?}
     */
    handleSelection() {
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
    }
    /**
     * @return {?}
     */
    restoreSearchValue() {
        if (this.fillHighlighted) {
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    }
    /**
     * @return {?}
     */
    doBlur() {
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
    }
}
CtrInput.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[ctrInput]",
            },] },
];
/** @nocollapse */
CtrInput.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CtrInput.propDecorators = {
    clearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["clearSelected",] }],
    clearUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["clearUnselected",] }],
    overrideSuggested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["overrideSuggested",] }],
    fillHighlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["fillHighlighted",] }],
    openOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["openOnFocus",] }],
    openOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["openOnClick",] }],
    selectOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["selectOnClick",] }],
    selectOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["selectOnFocus",] }],
    ngModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyupHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["keyup", ["$event"],] }],
    pasteHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["paste", ["$event"],] }],
    keydownHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["keydown", ["$event"],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["blur", ["$event"],] }],
    onfocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["focus", [],] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["click", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CtrListContext {
    /**
     * @param {?} results
     * @param {?} searching
     * @param {?} searchInitialized
     * @param {?} isOpen
     */
    constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
}
class CtrList {
    /**
     * @param {?} completer
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} cd
     * @param {?} zone
     */
    constructor(completer, templateRef, viewContainer, cd, zone) {
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
    ngOnInit() {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    }
    /**
     * @param {?} newService
     * @return {?}
     */
    set dataService(newService) {
        this._dataService = newService;
        this.dataServiceSubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set initialValue(value) {
        if (this._dataService && typeof this._dataService.convertToItem === "function") {
            this.zone.run(() => {
                /** @type {?} */
                const initialItem = this._dataService && /** @type {?} */ ((this._dataService.convertToItem))(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            });
        }
        else if (!this._dataService) {
            this._initialValue = value;
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
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
            this.searchTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(this.ctrListPause).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => {
                this.searchTimerComplete(term);
            });
        }
        else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(CLEAR_TIMEOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => {
            this._clear();
        });
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    isOpen(open) {
        this.ctx.isOpen = open;
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
        this.viewRef = null;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        if (this._dataService) {
            this._dataService.search(term);
        }
    }
    /**
     * @return {?}
     */
    refreshTemplate() {
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
    }
    /**
     * @return {?}
     */
    getBestMatchIndex() {
        if (!this.ctx.results || !this.term) {
            return null;
        }
        /** @type {?} */
        let bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase() === /** @type {?} */ ((this.term)).toLocaleLowerCase());
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase().startsWith(/** @type {?} */ ((this.term)).toLocaleLowerCase()));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((item) => item.title.toLowerCase().includes(/** @type {?} */ ((this.term)).toLocaleLowerCase()));
        }
        return bestMatch < 0 ? null : bestMatch;
    }
    /**
     * @return {?}
     */
    dataServiceSubscribe() {
        if (this._dataService) {
            this._dataService
                .subscribe((results) => {
                this.ctx.searchInitialized = true;
                this.ctx.searching = false;
                this.ctx.results = results;
                if (this.ctrListAutoMatch && results &&
                    results.length === 1 && results[0].title &&
                    !isNil(this.term) &&
                    results[0].title.toLocaleLowerCase() === /** @type {?} */ ((this.term)).toLocaleLowerCase()) {
                    // Do automatch
                    this.completer.onSelected(results[0]);
                    return;
                }
                this.refreshTemplate();
                if (this.ctrListAutoHighlight) {
                    this.completer.autoHighlightIndex = this.getBestMatchIndex();
                }
            }, (error) => {
                console.error(error);
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
            });
            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(() => {
                    this.term = null;
                    this.ctx.searchInitialized = false;
                    this.ctx.searching = false;
                    this.ctx.results = [];
                    this.refreshTemplate();
                    this.completer.onDataSourceChange();
                });
            }
        }
    }
}
CtrList.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[ctrList]",
            },] },
];
/** @nocollapse */
CtrList.ctorParameters = () => [
    { type: CtrCompleter, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CtrList.propDecorators = {
    ctrListMinSearchLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ctrListPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ctrListAutoMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ctrListAutoHighlight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ctrListDisplaySearching: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dataService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["ctrList",] }],
    initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["ctrListInitialValue",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CtrRow {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dropdown
     */
    constructor(el, renderer, dropdown) {
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
    ngOnDestroy() {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set ctrRow(index) {
        this._rowIndex = index;
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set dataItem(item) {
        this._item = item;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.dropdown.onSelected(this._item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        this.dropdown.highlightRow(this._rowIndex);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        this.dropdown.rowMouseDown();
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    setHighlighted(selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.el.nativeElement;
    }
    /**
     * @return {?}
     */
    getDataItem() {
        return this._item;
    }
}
CtrRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "[ctrRow]",
            },] },
];
/** @nocollapse */
CtrRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: CtrDropdown, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
CtrRow.propDecorators = {
    ctrRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dataItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["click", ["$event"],] }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["mouseenter", ["$event"],] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["mousedown", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CompleterListItemCmp {
    constructor() {
        this.text = "";
        this.searchStr = "";
        this.matchClass = "";
        this.type = "";
        this.parts = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        /** @type {?} */
        const matchStr = this.text.toLowerCase();
        /** @type {?} */
        let matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        /** @type {?} */
        let startIndex = 0;
        while (matchPos >= 0) {
            /** @type {?} */
            const matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                /** @type {?} */
                const matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    }
}
CompleterListItemCmp.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "completer-list-item",
                template: `<span class="completer-list-item-holder" [ngClass]= "{'completer-title': type === 'title', 'completer-description': type === 'description'}" >
        <span class="completer-list-item" *ngFor="let part of parts" [ngClass]= "part.isMatch ? matchClass : null">{{part.text}}</span>
    </span>`
            },] },
];
CompleterListItemCmp.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    searchStr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matchClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = () => {
    return;
};
/** @type {?} */
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CompleterCmp),
};
class CompleterCmp {
    /**
     * @param {?} completerService
     * @param {?} cdr
     */
    constructor(completerService, cdr) {
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
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
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
    /**
     * @return {?}
     */
    get value() { return this.searchStr; }
    ;
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchStr(value) {
        if (typeof value === "string" || isNil(value)) {
            this._searchStr = value;
        }
        else {
            this._searchStr = JSON.stringify(value);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autofocus) {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._focus) {
            setTimeout(() => {
                if (!!this.ctrInput) {
                    this.ctrInput.nativeElement.focus();
                    this._focus = false;
                }
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.searchStr = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disableInput = isDisabled;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set datasource(source) {
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
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = !!this._textSearching && this._textSearching !== "false";
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.completer) {
            return;
        }
        this.completer.selected.subscribe((item) => {
            this.selected.emit(item);
        });
        this.completer.highlighted.subscribe((item) => {
            this.highlighted.emit(item);
        });
        this.completer.opened.subscribe((isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        });
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focusEvent.emit();
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.click.emit(event);
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyup(event) {
        this.keyup.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        this.keydown.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.completer) {
            return;
        }
        this.completer.open();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.completer) {
            return;
        }
        this.completer.clear();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.ctrInput) {
            this.ctrInput.nativeElement.blur();
        }
        else {
            this._focus = false;
        }
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._open;
    }
}
CompleterCmp.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "ng2-completer",
                template: `
        <div class="completer-holder" ctrCompleter>
            <input #ctrInput [attr.id]="inputId.length > 0 ? inputId : null" type="search"
                class="completer-input" ctrInput [ngClass]="inputClass"
                [(ngModel)]="searchStr" (ngModelChange)="onChange($event)"
                [attr.name]="inputName" [placeholder]="placeholder"
                [attr.maxlength]="maxChars" [tabindex]="fieldTabindex" [disabled]="disableInput"
                [clearSelected]="clearSelected" [clearUnselected]="clearUnselected"
                [overrideSuggested]="overrideSuggested" [openOnFocus]="openOnFocus" [fillHighlighted]="fillHighlighted"
                [openOnClick]="openOnClick" [selectOnClick]="selectOnClick" [selectOnFocus]="selectOnFocus"
                (blur)="onBlur()" (focus)="onFocus()" (keyup)="onKeyup($event)"
                (keydown)="onKeydown($event)" (click)="onClick($event)"
                autocomplete="off" autocorrect="off" autocapitalize="off" />

            <div class="completer-dropdown-holder"
                *ctrList="dataService;
                    minSearchLength: minSearchLength;
                    pause: pause;
                    autoMatch: autoMatch;
                    initialValue: initialValue;
                    autoHighlight: autoHighlight;
                    displaySearching: displaySearching;
                    let items = results;
                    let searchActive = searching;
                    let isInitialized = searchInitialized;
                    let isOpen = isOpen;">
                <div class="completer-dropdown" ctrDropdown 
                    *ngIf="isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))">
                    <div *ngIf="searchActive && displaySearching" class="completer-searching">{{ _textSearching }}</div>
                    <div *ngIf="!searchActive && (!items || items?.length === 0)"
                    class="completer-no-results">{{ _textNoResults }}</div>
                    <div class="completer-row-wrapper" *ngFor="let item of items; let rowIndex=index">
                        <div class="completer-row" [ctrRow]="rowIndex" [dataItem]="item">
                            <div *ngIf="item.image || item.image === ''" class="completer-image-holder">
                                <img *ngIf="item.image != ''" src="{{item.image}}" class="completer-image" />
                                <div *ngIf="item.image === ''" class="completer-image-default"></div>
                            </div>
                            <div class="completer-item-text"
                            [ngClass]="{'completer-item-text-image': item.image || item.image === '' }">
                                <completer-list-item
                                class="completer-title" [text]="item.title" [matchClass]="matchClass"
                                [searchStr]="searchStr" [type]="'title'"></completer-list-item>
                                <completer-list-item *ngIf="item.description && item.description != ''"
                                class="completer-description" [text]="item.description"
                                    [matchClass]="matchClass" [searchStr]="searchStr" [type]="'description'">
                                </completer-list-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
                styles: [`
    .completer-dropdown {
        border-color: #ececec;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        width: 250px;
        padding: 6px;
        cursor: pointer;
        z-index: 9999;
        position: absolute;
        margin-top: -6px;
        background-color: #ffffff;
    }

    .completer-row {
        padding: 5px;
        color: #000000;
        margin-bottom: 4px;
        clear: both;
        display: inline-block;
        width: 103%;
    }

    .completer-selected-row {
        background-color: lightblue;
        color: #ffffff;
    }

    .completer-description {
        font-size: 14px;
    }

    .completer-image-default {
        width: 16px;
        height: 16px;
        background-image: url("demo/res/img/default.png");
    }

    .completer-image-holder {
        float: left;
        width: 10%;
    }
    .completer-item-text-image {
        float: right;
        width: 90%;
    }
    `],
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CompleterCmp.ctorParameters = () => [
    { type: CompleterService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CompleterCmp.propDecorators = {
    dataService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minSearchLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxChars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    overrideSuggested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clearUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillHighlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matchClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fieldTabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    openOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    openOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoHighlight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    highlighted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ["blur",] }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ["focus",] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    completer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CtrCompleter,] }],
    ctrInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["ctrInput",] }],
    datasource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    textNoResults: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    textSearching: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const providers = [
    CompleterService,
    LocalDataFactory,
    RemoteDataFactory
];
class Ng2CompleterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: Ng2CompleterModule,
            providers
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: Ng2CompleterModule,
            providers
        };
    }
}
Ng2CompleterModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
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
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers
            },] },
];

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

/***/ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js ***!
  \******************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm2015/ng2-completer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
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
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}

function prepareValue(value) { return value; }
class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;

class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}

class Column {
    constructor(id, settings, dataSet) {
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
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
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
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}

class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
    }
    selectRow(row) {
        const previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    selectPreviousRow() {
        if (this.rows.length > 0) {
            let index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    }
    selectFirstRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    }
    selectLastRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    }
    willSelectFirstRow() {
        this.willSelect = 'first';
    }
    willSelectLastRow() {
        this.willSelect = 'last';
    }
    select() {
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
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        for (const id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            this.rows.push(new Row(index, el, this));
        });
    }
}

class Grid {
    constructor(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.setSettings(settings);
        this.setSource(source);
    }
    showActionColumn(position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }
    isCurrentActionsPosition(position) {
        return position == this.getSetting('actions.position');
    }
    isActionsVisible() {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }
    isMultiSelectVisible() {
        return this.getSetting('selectMode') === 'multi';
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    }
    getDataSet() {
        return this.dataSet;
    }
    setSource(source) {
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
        this.source.onUpdated().subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    }
    getSetting(name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    }
    getColumns() {
        return this.dataSet.getColumns();
    }
    getRows() {
        return this.dataSet.getRows();
    }
    selectRow(row) {
        this.dataSet.selectRow(row);
    }
    multipleSelectRow(row) {
        this.dataSet.multipleSelectRow(row);
    }
    onSelectRow() {
        return this.onSelectRowSource.asObservable();
    }
    edit(row) {
        row.isInEditing = true;
    }
    create(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                this.createFormShown = false;
            }
            else {
                this.source.prepend(newData).then(() => {
                    this.createFormShown = false;
                    this.dataSet.createNewRow();
                });
            }
        }).catch((err) => {
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
    }
    save(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                });
            }
        }).catch((err) => {
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
    }
    delete(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
        }).catch((err) => {
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
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                const row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    }
    shouldProcessChange(changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    }
    // TODO: move to selectable? Separate directive
    determineRowToSelect(changes) {
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
    }
    prepareSource(source) {
        const initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const sortConf = {};
        this.getColumns().forEach((column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    }
    getSelectedRows() {
        return this.dataSet.getRows()
            .filter(r => r.isSelected);
    }
    selectAllRows(status) {
        this.dataSet.getRows()
            .forEach(r => r.isSelected = status);
    }
    getFirstRow() {
        return this.dataSet.getFirstRow();
    }
    getLastRow() {
        return this.dataSet.getLastRow();
    }
}

let CellComponent = class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
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
        template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `
    })
], CellComponent);

class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
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

let CustomEditComponent = class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CustomEditComponent.prototype, "dynamicTarget", void 0);
CustomEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'table-cell-custom-editor',
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], CustomEditComponent);

let DefaultEditComponent = class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
};
DefaultEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'table-cell-default-editor',
        template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DefaultEditComponent);

let EditCellComponent = class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
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
        template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `
    })
], EditCellComponent);

class DefaultEditor {
    constructor() {
        this.onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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

let CheckboxEditorComponent = class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
};
CheckboxEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'checkbox-editor',
        template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CheckboxEditorComponent);

let CompleterEditorComponent = class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
};
CompleterEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'completer-editor',
        template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])
], CompleterEditorComponent);

let InputEditorComponent = class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
InputEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'input-editor',
        template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InputEditorComponent);

let SelectEditorComponent = class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
SelectEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-editor',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SelectEditorComponent);

let TextareaEditorComponent = class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
TextareaEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'textarea-editor',
        template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TextareaEditorComponent);

let CustomViewComponent = class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
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
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], CustomViewComponent);

let ViewCellComponent = class ViewCellComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)
], ViewCellComponent.prototype, "cell", void 0);
ViewCellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'table-cell-view-mode',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
    })
], ViewCellComponent);

const CELL_COMPONENTS = [
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
let CellModule = class CellModule {
};
CellModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"],
        ],
        declarations: [
            ...CELL_COMPONENTS,
        ],
        exports: [
            ...CELL_COMPONENTS,
        ],
    })
], CellModule);

class DataSource {
    constructor() {
        this.onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    refresh() {
        this.emitOnChanged('refresh');
    }
    load(data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prepend(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    }
    append(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    }
    add(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    }
    remove(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    }
    update(element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    }
    empty() {
        this.emitOnChanged('empty');
        return Promise.resolve();
    }
    setSort(conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    }
    setFilter(conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    addFilter(fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    setPaging(page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    }
    setPage(page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}

class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
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

let FilterComponent = class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
};
FilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ng2-smart-table-filter',
        template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `,
        styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
    })
], FilterComponent);

let DefaultFilterComponent = class DefaultFilterComponent extends FilterDefault {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], DefaultFilterComponent.prototype, "query", void 0);
DefaultFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'default-table-filter',
        template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `
    })
], DefaultFilterComponent);

let CustomFilterComponent = class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
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
        template: `<ng-template #dynamicTarget></ng-template>`
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], CustomFilterComponent);

class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
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

let CheckboxFilterComponent = class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
};
CheckboxFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'checkbox-filter',
        template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CheckboxFilterComponent);

let CompleterFilterComponent = class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((ev) => (ev && ev.title) || ev || ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
};
CompleterFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'completer-filter',
        template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])
], CompleterFilterComponent);

let InputFilterComponent = class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    }
};
InputFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'input-filter',
        template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InputFilterComponent);

let SelectFilterComponent = class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay))
            .subscribe((value) => this.setFilter());
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputControl', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"])
], SelectFilterComponent.prototype, "inputControl", void 0);
SelectFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-filter',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SelectFilterComponent);

const FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
let FilterModule = class FilterModule {
};
FilterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"],
        ],
        declarations: [
            ...FILTER_COMPONENTS,
        ],
        exports: [
            ...FILTER_COMPONENTS,
        ],
    })
], FilterModule);

let PagerComponent = class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
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
        template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
        styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
    })
], PagerComponent);

let PagerModule = class PagerModule {
};
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

let Ng2SmartTableTbodyComponent = class Ng2SmartTableTbodyComponent {
    constructor() {
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
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
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

let TbodyCreateCancelComponent = class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
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
        template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `
    })
], TbodyCreateCancelComponent);

let TbodyEditDeleteComponent = class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onEdit(event) {
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
    }
    onDelete(event) {
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
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
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
        template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `
    })
], TbodyEditDeleteComponent);

let TbodyCustomComponent = class TbodyCustomComponent {
    constructor() {
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
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
        template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
    })
], TbodyCustomComponent);

const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
let TBodyModule = class TBodyModule {
};
TBodyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            CellModule,
        ],
        declarations: [
            ...TBODY_COMPONENTS,
        ],
        exports: [
            ...TBODY_COMPONENTS,
        ],
    })
], TBodyModule);

let Ng2SmartTableTheadComponent = class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
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

let ActionsComponent = class ActionsComponent {
    constructor() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
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
        template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `
    })
], ActionsComponent);

let ActionsTitleComponent = class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)
], ActionsTitleComponent.prototype, "grid", void 0);
ActionsTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[ng2-st-actions-title]',
        template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ActionsTitleComponent);

let AddButtonComponent = class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
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
        template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AddButtonComponent);

let CheckboxSelectAllComponent = class CheckboxSelectAllComponent {
};
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
        template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `
    })
], CheckboxSelectAllComponent);

let ColumnTitleComponent = class ColumnTitleComponent {
    constructor() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
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
        template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `
    })
], ColumnTitleComponent);

let TitleComponent = class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
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
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
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
        template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
        styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
    })
], TitleComponent);

let TheadFitlersRowComponent = class TheadFitlersRowComponent {
    constructor() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
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
        template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `
    })
], TheadFitlersRowComponent);

let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
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
        template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `
    })
], TheadFormRowComponent);

let TheadTitlesRowComponent = class TheadTitlesRowComponent {
    constructor() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
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
        template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `
    })
], TheadTitlesRowComponent);

const THEAD_COMPONENTS = [
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
let THeadModule = class THeadModule {
};
THeadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            FilterModule,
            CellModule,
        ],
        declarations: [
            ...THEAD_COMPONENTS,
        ],
        exports: [
            ...THEAD_COMPONENTS,
        ],
    })
], THeadModule);

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}

class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}

class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = {};
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.load(data);
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prepend(element);
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.append(element);
    }
    add(element) {
        this.data.push(element);
        return super.add(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.remove(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.update(found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
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
    }
    empty() {
        this.data = [];
        return super.empty();
    }
    count() {
        return this.filteredAndSorted.length;
    }
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
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        super.setSort(conf, doEmit);
        return this;
    }
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
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
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
        super.setFilter(conf, andOperator, doEmit);
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf['field'] === fieldConf['field']) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        super.addFilter(fieldConf, andOperator, doEmit);
        return this;
    }
    setPaging(page, perPage, doEmit = true) {
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        super.setPaging(page, perPage, doEmit);
        return this;
    }
    setPage(page, doEmit = true) {
        this.pagingConf['page'] = page;
        super.setPage(page, doEmit);
        return this;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    }
}

let Ng2SmartTableComponent = class Ng2SmartTableComponent {
    constructor() {
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
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
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
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
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

let Ng2SmartTableModule = class Ng2SmartTableModule {
};
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

class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';

class ServerDataSource extends LocalDataSource {
    constructor(http, conf = {}) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
        this.conf = new ServerSourceConf(conf);
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return this.requestElements()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            this.lastRequestCount = this.extractTotalFromResponse(res);
            this.data = this.extractDataFromResponse(res);
            return this.data;
        })).toPromise();
    }
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    extractDataFromResponse(res) {
        const rawData = res.body;
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    extractTotalFromResponse(res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            const rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }
    requestElements() {
        let httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    }
    createRequesParams() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }
    addSortRequestParams(httpParams) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                httpParams = httpParams.set(this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    }
    addFilterRequestParams(httpParams) {
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    }
    addPagerRequestParams(httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExtendedTableComponent = class ExtendedTableComponent {
};
ExtendedTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extended-table',
        template: __webpack_require__(/*! raw-loader!./extended-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/extended/extended-table.component.html"),
        styles: [__webpack_require__(/*! ./extended-table.component.scss */ "./src/app/tables/extended/extended-table.component.scss")]
    })
], ExtendedTableComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegularTableComponent = class RegularTableComponent {
};
RegularTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-regular-table',
        template: __webpack_require__(/*! raw-loader!./regular-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/tables/regular/regular-table.component.html"),
        styles: [__webpack_require__(/*! ./regular-table.component.scss */ "./src/app/tables/regular/regular-table.component.scss")]
    })
], RegularTableComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extended/extended-table.component */ "./src/app/tables/extended/extended-table.component.ts");
/* harmony import */ var _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regular/regular-table.component */ "./src/app/tables/regular/regular-table.component.ts");





const routes = [
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
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TablesRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/tables/tables-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _extended_extended_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extended/extended-table.component */ "./src/app/tables/extended/extended-table.component.ts");
/* harmony import */ var _regular_regular_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regular/regular-table.component */ "./src/app/tables/regular/regular-table.component.ts");








let TablesModule = class TablesModule {
};
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



/***/ })

}]);
//# sourceMappingURL=tables-tables-module-es2015.js.map