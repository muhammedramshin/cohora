(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- toastr -->\n<ng-snotify></ng-snotify>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\"></div>\n    </div>\n    <app-navbar></app-navbar>\n    <div class=\"main-panel\">\n        <div class=\"main-content\">\n            <div class=\"content-wrapper\">\n                <div class=\"container-fluid\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n    <app-notification-sidebar></app-notification-sidebar>\n    <!-- <app-customizer></app-customizer> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/customizer/customizer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\n<div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block open\">\n\t<a class=\"customizer-close\">\n\t\t<i class=\"ft-x font-medium-3\"></i>\n\t</a>\n\t<a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\">\n\t\t<i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\n\t</a>\n\t<div class=\"customizer-content p-3 ps-container ps-theme-dark\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\n\t\t<h4 class=\"mb-0 text-bold-400\">Theme Customizer</h4>\n\t\t<p>Customize &amp; Preview in Real Time</p>\n\t\t<hr>\n\n\t\t<!--Sidebar Background Image Starts-->\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Sidebar Background Image</h6>\n\t\t<div class=\"cz-bg-image row\">\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/01.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/02.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/03.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/04.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/05.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/06.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/07.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/08.jpg\" class=\"rounded box-shadow-2\" width=\"50\" height=\"100\">\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar Background Image Ends-->\n\n\t\t<!--Sidebar BG Image Toggle Starts-->\n\t\t<div class=\"togglebutton mt-2\">\n\t\t\t<div>\n\t\t\t\t<span class=\"text-bold-400\">Show / Hide Sidebar Bg Image</span>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"sidebar-bg-img\" switchColor=\"#FF4961\" color=\"white\" (change)=\"onChange($event)\"></ui-switch>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar BG Image Toggle Ends-->\n\n\t\t<hr>\n\n\t\t<!--Sidebar Options Starts-->\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Sidebar Color Options</h6>\n\t\t<div class=\"cz-bg-color\">\n\t\t\t<div class=\"row p-1\">\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"gradient-aqua-marine d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"aqua-marine\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"gradient-sublime-vivid d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"sublime-vivid\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"gradient-crystal-clear d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"crystal-clear\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"gradient-timber d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"timber\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row p-1\">\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"bg-black d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"black\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"bg-white d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"white\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"bg-primary d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"primary\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col mb-3\">\n\t\t\t\t\t<span class=\"bg-danger d-block rounded box-shadow-2\" style=\"width:50px; height:100px;\" data-bg-color=\"danger\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar Options Ends-->\n\t\t<hr>\n\n\n\t\t<!--Compact Menu Starts-->\n\t\t<div class=\"togglebutton\">\n\t\t\t<div>\n\t\t\t\t<span class=\"text-bold-400\">Compact Menu</span>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<ui-switch size=\"small\" class=\"cz-compact-menu\" id=\"cz-compact-menu\" switchColor=\"#FF4961\" color=\"white\"></ui-switch>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Compact Menu Ends-->\n\t\t<hr>\n\n\t\t<!--Sidebar Width Starts-->\n\t\t<div>\n\t\t\t<label for=\"cz-sidebar-width\" class=\"text-bold-400\">Sidebar Width</label>\n\t\t\t<select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\n\t\t\t\t<option value=\"small\">Small</option>\n\t\t\t\t<option value=\"medium\" selected>Medium</option>\n\t\t\t\t<option value=\"large\">Large</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<!--Sidebar Width Ends-->\n\t</div>\n</div>\n<!--Theme customizer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent\">PIXINVENT</a>, All rights reserved.          \n        </p>\n        \n    </div>\n</footer>\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n            <a href=\"javascript:;\" class=\"mr-2 display-inline-block\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">\n                <i class=\"{{toggleClass}} blue-grey darken-4\"></i>\n                <p class=\"d-none\">fullscreen</p>\n            </a>\n            <a class=\"ml-2 display-inline-block\">\n                <i class=\"ft-shopping-cart blue-grey darken-4\"></i>\n                <p class=\"d-none\">cart</p>\n            </a>\n            <div ngbDropdown placement=\"bottom-left\" class=\"ml-2 display-inline-block\">\n                <a class=\"nav-link position-relative\" id=\"apps\" ngbDropdownToggle>\n                    <i class=\"ft-edit blue-grey darken-4\"></i>\n                    <span class=\"mx-1 blue-grey darken-4 text-bold-400\">Apps</span>\n                </a>\n                <div ngbDropdownMenu aria-labelledby=\"apps\" class=\"apps\">\n                    <div class=\"arrow_box\">\n                        <a class=\"dropdown-item py-1\" routerLink=\"/chat\">\n                            <span>Chat</span>\n                        </a>\n                        <a class=\"dropdown-item py-1\" routerLink=\"/taskboard\">\n                            <span>TaskBoard</span>\n                        </a>\n                        <a class=\"dropdown-item py-1\" routerLink=\"/calendar\">\n                            <span>Calendar</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mt-1 navbar-search text-left\" ngbDropdown placement=\"bottom-right\">\n                        <a id=\"search\" class=\"nav-link\" ngbDropdownToggle>\n                            <i class=\"ft-search blue-grey darken-4\"></i>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"search\" class=\"search\">\n                            <div class=\"arrow_box_right\">\n                                <form class=\"navbar-form navbar-right\" role=\"search\">\n                                    <div class=\"position-relative has-icon-right mb-0\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"navbar-search\">\n                                        <div class=\"form-control-position navbar-search-close\">\n                                            <i class=\"ft-x\"></i>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"nav-item mt-1 text-left\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\n                            <i class=\"ft-flag blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Language</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang\">\n                            <div class=\"arrow_box_right\">\n                                <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\n                                    <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\n                                    <span>English</span>\n                                </a>\n                                <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\n                                    <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\n                                    <span>Spanish</span>\n                                </a>\n                                <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\n                                    <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\n                                    <span>Portuguese</span>\n                                </a>\n                                <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\n                                    <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\n                                    <span>German</span>\n                                </a>\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"nav-item mt-1\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <div class=\"arrow_box_right\">\n                                <div class=\"noti-list\">\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-share info float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                        </span>\n                                    </a>\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-save warning float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                        </span>\n                                    </a>\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-repeat danger float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                        </span>\n                                    </a>\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-shopping-cart success float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New Item In Your Cart</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                        </span>\n                                    </a>\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-heart info float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Sale</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                        </span>\n                                    </a>\n                                    <a class=\"dropdown-item noti-container py-2\">\n                                        <i class=\"ft-box warning float-left d-block font-medium-4 mt-2 mr-2\"></i>\n                                        <span class=\"noti-wrapper\">\n                                            <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">Order Delivered</span>\n                                            <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                        </span>\n                                    </a>\n                                </div>\n                                <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"nav-item mt-1 d-none d-lg-block\">\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" id=\"navbar-notification-sidebar\">\n                            <i class=\"icon-equalizer blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Notifications Sidebar</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item mr-0\" ngbDropdown display=\"dynamic\" placement=\"bottom-right\">\n                        <a class=\"nav-link dropdown-user-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <span class=\"avatar avatar-online\">\n                                <img src=\"assets/img/portrait/small/avatar-s-3.jpg\" alt=\"avatar\" id=\"navbar-avatar\">\n                            </span>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n                            <div class=\"arrow_box_right\">\n                                <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\n                                    <i class=\"ft-edit mr-2\"></i>\n                                    <span>My Profile</span>\n                                </a>\n                                <a class=\"dropdown-item py-1\" routerLink=\"/chat\">\n                                    <i class=\"ft-message-circle mr-2\"></i>\n                                    <span>My Chat</span>\n                                </a>\n                                <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                    <i class=\"ft-settings mr-2\"></i>\n                                    <span>Settings</span>\n                                </a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"dropdown-item\" href=\"javascript:;\">\n                                    <i class=\"ft-power mr-2\"></i>\n                                    <span>Logout</span>\n                                </a>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\n<!-- START Notification Sidebar -->\n<aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\n  <a class=\"notification-sidebar-close\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <div class=\"side-nav notification-sidebar-content\">\n    <div class=\"row\">\n      <div class=\"col-12 mt-1\">\n        <ngb-tabset>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"activity\" class=\"col-12 timeline-left\">\n                <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT ACTIVITY</h6>\n                <div class=\"timeline\">\n                  <ul class=\"list-unstyled base-timeline activity-timeline ml-0\">\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-danger\">\n                              <i class=\"ft-shopping-cart\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-danger\">Update</a>\n                              <span class=\"d-block\">Jim Doe Purchased new equipments for zonal office.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              just now\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-primary\">\n                              <i class=\"fa fa-plane\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-primary\">Added</a>\n                              <span class=\"d-block\">Your Next flight for USA will be on 15th August 2015.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              25 hours ago\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-dark\">\n                              <i class=\"ft-mic\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-dark\">Assined</a>\n                              <span class=\"d-block\">Natalya Parker Send you a voice mail for next conference.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              15 days ago\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-warning\">\n                              <i class=\"ft-map-pin\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-warning\">New</a>\n                              <span class=\"d-block\">Jessy Jay open a new store at S.G Road.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              20 days ago\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-primary\">\n                              <i class=\"ft-inbox\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-primary\">Added</a>\n                              <span class=\"d-block\">voice mail for conference.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              2 Week Ago\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-danger\">\n                              <i class=\"ft-mic\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-danger\">Update</a>\n                              <span class=\"d-block\">Natalya Parker Jessy Jay open a new store at S.G Road.</span>\n                          </div>\n                          <small class=\"text-muted\">1 Month Ago</small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-dark\">\n                              <i class=\"ft-inbox\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-dark\">Assined</a>\n                              <span class=\"d-block\">Natalya Parker Send you a voice mail for Updated conference.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              1 Month ago\n                          </small>\n                      </li>\n                      <li class=\"\">\n                          <div class=\"timeline-icon bg-warning\">\n                              <i class=\"ft-map-pin\"></i>\n                          </div>\n                          <div class=\"base-timeline-info\">\n                              <a href=\"#\" class=\"text-uppercase text-warning\">New</a>\n                              <span class=\"d-block\">Started New project with Jessie Lee.</span>\n                          </div>\n                          <small class=\"text-muted\">\n                              2 Month ago\n                          </small>\n                      </li>\n                  </ul>\n              </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"settings\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400\">GENERAL SETTINGS</h6>\n                <ul class=\"list-unstyled\">\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"notifications1\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"recent-activity1\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"notifications2\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"recent-activity2\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Show your emails</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" class=\"cz-bg-image-display\" id=\"show-emails\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li>\n                    <div class=\"togglebutton\">\n                      <div class=\"switch\">\n                        <span class=\"text-bold-500\">Show Task statistics</span>\n                        <div class=\"float-right\">\n                          <ui-switch size=\"small\" checked class=\"cz-bg-image-display\" id=\"show-stats\" switchColor=\"#666EE8\" color=\"white\"></ui-switch>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</aside>\n<!-- END Notification Sidebar -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo clearfix\">\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\n            <div class=\"logo-img\">\n                <img src=\"assets/logo/logo.jpg\" />\n            </div>\n            <span class=\"text align-middle\">COHORA</span>\n        </a>\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\n            <i class=\"ft-disc toggle-icon\" data-toggle=\"expanded\"></i>\n        </a>\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\n            <i class=\"ft-x\"></i>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\">\n    <!-- <div class=\"user-settings-wrap text-center\">\n        <img class=\"rounded-circle user-img mb-3\" src=\"./assets/img/portrait/small/avatar-s-3.jpg\" alt=\"User Image\" width=\"100\">\n        <h5 class=\"white mb-3\">John Doe</h5>\n        <div class=\"user-options\">\n            <a [routerLink]=\"['/']\" class=\"white p-1\"><i class=\"ft-home font-medium-3\"></i></a>\n            <a [routerLink]=\"['/pages/profile']\" class=\"white p-1 mx-3\"><i class=\"ft-user font-medium-3\"></i></a>\n            <a [routerLink]=\"['/chat-ngrx']\" class=\"white p-1\"><i class=\"ft-message-square font-medium-3\"></i></a>\n        </div>\n    </div> -->\n    <div class=\"nav-container\">\n        <ul class=\"navigation\">\n            <!-- First level menu -->\n            <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [ngClass]=\"[menuSubsubItem.class]\">\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Sidebar Content Ends -->"

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard/eCommerce',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_14__["FullLayoutComponent"],
                _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_13__["ContentLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_11__["SnotifyModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
                })
            ],
            providers: [
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_11__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_11__["SnotifyService"],
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_15__["DragulaService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        //customizer events
        this.elementRef.nativeElement.querySelector('#cz-compact-menu')
            .addEventListener('click', this.onClick.bind(this));
        this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
            .addEventListener('click', this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.customizer.open {\n  right: 0;\n}\n.customizer .customizer-content {\n  position: relative;\n  height: 100%;\n}\n.customizer a.customizer-toggle {\n  background: #FFF;\n  color: theme-color(\"primary\");\n  display: block;\n  box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n}\n.customizer a.customizer-close {\n  color: #000;\n}\n.customizer .customizer-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 7px;\n  width: auto;\n  z-index: 10;\n}\n.customizer .customizer-toggle {\n  position: absolute;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  left: -54px;\n  text-align: center;\n  line-height: 46px;\n  cursor: pointer;\n  border-radius: 15px 0 0 15px;\n}\n.customizer .color-options a {\n  white-space: pre;\n}\n.customizer .cz-bg-color {\n  margin: 0 auto;\n}\n.customizer .cz-bg-color span:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-color span.white {\n  color: #ddd !important;\n}\n.customizer .cz-bg-color span.rounded {\n  border-radius: 1rem !important;\n  border: 2px solid #e6e6e6;\n}\n.customizer .cz-bg-color span.rounded.selected {\n  border: 3px solid #314fe5;\n}\n.customizer .cz-bg-image:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-image img.rounded {\n  border-radius: 1rem !important;\n  border: 2px solid #e6e6e6;\n}\n.customizer .cz-bg-image img.rounded.selected {\n  border: 2px solid #FF586B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvQzpcXE15IEZpbGVzXFxNeSB3b3Jrc1xcYW5ndWxhclxcZnJlZWxhbmNlXFxjb2hvcmEvc3JjXFxhcHBcXHNoYXJlZFxcY3VzdG9taXplclxcY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDRyxhQUFBO0VBQ0gsVUFBQTtFQUNHLHNCQUFBO0VBQ0gsYUFBQTtFQUNHLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrRUFBQTtFQUFBLDBEQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7QUNDSjtBRENDO0VBQ0MsUUFBQTtBQ0NGO0FERUM7RUFDQyxrQkFBQTtFQUNHLFlBQUE7QUNBTDtBREdDO0VBQ0MsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDRywyQ0FBQTtBQ0RMO0FER0M7RUFDSSxXQUFBO0FDREw7QURHQztFQUNDLGtCQUFBO0VBQ0csV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNETDtBREdDO0VBQ0Msa0JBQUE7RUFDRyxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0RMO0FESUU7RUFDQyxnQkFBQTtBQ0ZIO0FETUM7RUFDSSxjQUFBO0FDSkw7QURNRztFQUNDLGVBQUE7QUNKSjtBRE1HO0VBQ0Msc0JBQUE7QUNKSjtBRE1HO0VBQ0MsOEJBQUE7RUFDQSx5QkFBQTtBQ0pKO0FES0k7RUFDQyx5QkFBQTtBQ0hMO0FEVUU7RUFDQyxlQUFBO0FDUkg7QURVRTtFQUNDLDhCQUFBO0VBQ0EseUJBQUE7QUNSSDtBRFNHO0VBQ0MseUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taXplcntcblx0d2lkdGg6IDQwMHB4O1xuICAgIHJpZ2h0OiAtNDAwcHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0ei1pbmRleDogMTA1MTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHQmLm9wZW57XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblxuXHQuY3VzdG9taXplci1jb250ZW50e1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdGEuY3VzdG9taXplci10b2dnbGV7XG5cdFx0YmFja2dyb3VuZDogI0ZGRjtcblx0XHRjb2xvcjp0aGVtZS1jb2xvcigncHJpbWFyeScpO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuICAgIFx0Ym94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxuXHRhLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIFx0Y29sb3I6ICMwMDA7XG5cdH1cblx0LmN1c3RvbWl6ZXItY2xvc2V7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdCAgICBwYWRkaW5nOiA3cHg7XG5cdCAgICB3aWR0aDogYXV0bztcblx0ICAgIHotaW5kZXg6IDEwO1xuXHR9XG5cdC5jdXN0b21pemVyLXRvZ2dsZXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDM1JTtcblx0ICAgIHdpZHRoOiA1NHB4O1xuXHQgICAgaGVpZ2h0OiA1MHB4O1xuXHQgICAgbGVmdDogLTU0cHg7XG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICBsaW5lLWhlaWdodDogNDZweDtcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDE1cHg7XG5cdH1cblx0LmNvbG9yLW9wdGlvbnN7XG5cdFx0YXtcblx0XHRcdHdoaXRlLXNwYWNlOnByZTtcblx0XHR9XG5cdH1cblxuXHQuY3otYmctY29sb3Ige1xuICAgIFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0c3Bhbntcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdCYud2hpdGV7XG5cdFx0XHRcdGNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmLnJvdW5kZWR7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcblx0XHRcdFx0Ji5zZWxlY3RlZHtcblx0XHRcdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjMzE0ZmU1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmN6LWJnLWltYWdle1xuXHRcdCY6aG92ZXJ7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHRcdGltZy5yb3VuZGVke1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcblx0XHRcdCYuc2VsZWN0ZWR7XG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn0iLCIuY3VzdG9taXplciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIub3BlbiB7XG4gIHJpZ2h0OiAwO1xufVxuLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLWNsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMTA7XG59XG4uY3VzdG9taXplciAuY3VzdG9taXplci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAtNTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4O1xufVxuLmN1c3RvbWl6ZXIgLmNvbG9yLW9wdGlvbnMgYSB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG4uY3VzdG9taXplciAuY3otYmctY29sb3Ige1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ud2hpdGUge1xuICBjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcbn1cbi5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuLnJvdW5kZWQuc2VsZWN0ZWQge1xuICBib3JkZXI6IDNweCBzb2xpZCAjMzE0ZmU1O1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlIGltZy5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlIGltZy5yb3VuZGVkLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2Qjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent.prototype.onChange = function (e) {
        if (e === true) {
            document.getElementsByClassName("sidebar-background")[0].style.display = "block";
        }
        else {
            document.getElementsByClassName("sidebar-background")[0].style.display = "none";
        }
    };
    CustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.isCollapsed = true;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n#notification-sidebar.open {\n  right: 0;\n}\n#notification-sidebar .notification-sidebar-content {\n  position: relative;\n  height: 100%;\n  padding: 10px;\n}\n#notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n  border: none;\n}\n#notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n  border: none;\n}\n#notification-sidebar a.notification-sidebar-toggle {\n  background: #FFF;\n  color: theme-color(\"primary\");\n  display: block;\n  box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n}\n#notification-sidebar a.notification-sidebar-close {\n  color: #000;\n}\n#notification-sidebar .notification-sidebar-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 7px;\n  width: auto;\n  z-index: 10;\n}\n#notification-sidebar .notification-sidebar-toggle {\n  position: absolute;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  left: -54px;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0M6XFxNeSBGaWxlc1xcTXkgd29ya3NcXGFuZ3VsYXJcXGZyZWVsYW5jZVxcY29ob3JhL3NyY1xcYXBwXFxzaGFyZWRcXG5vdGlmaWNhdGlvbi1zaWRlYmFyXFxub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNHLGFBQUE7RUFDSCxVQUFBO0VBQ0csc0JBQUE7RUFDSCxhQUFBO0VBQ0csZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQ0FBQTtBQ0NKO0FEQ0M7RUFDQyxRQUFBO0FDQ0Y7QURFQztFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7QUNBTDtBREtRO0VBQ0YsWUFBQTtBQ0hOO0FES1E7RUFDRixZQUFBO0FDSE47QURVQztFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0csMkNBQUE7QUNSTDtBRFVDO0VBQ0ksV0FBQTtBQ1JMO0FEVUM7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDUkw7QURVQztFQUNDLGtCQUFBO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDUkwiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aWZpY2F0aW9uLXNpZGViYXJ7XG5cdHdpZHRoOiA0MDBweDtcbiAgICByaWdodDogLTQwMHB4O1xuXHRwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cdHotaW5kZXg6IDEwNTE7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cblx0Ji5vcGVue1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG5cblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnR7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgIFx0cGFkZGluZzogMTBweDtcblxuICAgIFx0I3RpbWVsaW5le1xuICAgIFx0XHQmLnRpbWVsaW5lLWxlZnR7XG4gICAgXHRcdFx0LnRpbWVsaW5lLWl0ZW17XG4gICAgXHRcdFx0XHQmOmJlZm9yZXtcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fVxuXHR9XG5cblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XG5cdFx0YmFja2dyb3VuZDogI0ZGRjtcblx0XHRjb2xvcjp0aGVtZS1jb2xvcigncHJpbWFyeScpO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuICAgIFx0Ym94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBcdGNvbG9yOiAjMDAwO1xuXHR9XG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMTBweDtcblx0ICAgIHRvcDogMTBweDtcblx0ICAgIHBhZGRpbmc6IDdweDtcblx0ICAgIHdpZHRoOiBhdXRvO1xuXHQgICAgei1pbmRleDogMTA7XG5cdH1cblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDM1JTtcblx0ICAgIHdpZHRoOiA1NHB4O1xuXHQgICAgaGVpZ2h0OiA1MHB4O1xuXHQgICAgbGVmdDogLTU0cHg7XG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXHRcblxuXHRcblxufSIsIiNub3RpZmljYXRpb24tc2lkZWJhciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICByaWdodDogMDtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICN0aW1lbGluZS50aW1lbGluZS1sZWZ0IC50aW1lbGluZS1pdGVtOmJlZm9yZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTphZnRlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuI25vdGlmaWNhdGlvbi1zaWRlYmFyIGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IGF1dG87XG4gIHotaW5kZXg6IDEwO1xufVxuI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAtNTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent() {
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
        // notification-sidebar JS File
        $.getScript('./assets/js/notification-sidebar.js');
    };
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        })
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-content-pages-content-pages-module */ "pages-content-pages-content-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/content-pages/content-pages.module */ "./src/app/pages/content-pages/content-pages.module.ts")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
// Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../../calendar/calendar.module */ "./src/app/calendar/calendar.module.ts")).then(function (m) { return m.CalendarsModule; }); }
    },
    {
        path: 'charts',
        loadChildren: function () { return Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("default~charts-charts-module~tables-tables-module"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ../../charts/charts.module */ "./src/app/charts/charts.module.ts")).then(function (m) { return m.ChartsNg2Module; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("common"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ../../forms/forms.module */ "./src/app/forms/forms.module.ts")).then(function (m) { return m.FormModule; }); }
    },
    {
        path: 'maps',
        loadChildren: function () { return __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ../../maps/maps.module */ "./src/app/maps/maps.module.ts")).then(function (m) { return m.MapsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~charts-charts-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ../../tables/tables.module */ "./src/app/tables/tables.module.ts")).then(function (m) { return m.TablesModule; }); }
    },
    {
        path: 'datatables',
        loadChildren: function () { return __webpack_require__.e(/*! import() | data-tables-data-tables-module */ "data-tables-data-tables-module").then(__webpack_require__.bind(null, /*! ../../data-tables/data-tables.module */ "./src/app/data-tables/data-tables.module.ts")).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'uikit',
        loadChildren: function () { return Promise.all(/*! import() | ui-kit-ui-kit-module */[__webpack_require__.e("common"), __webpack_require__.e("ui-kit-ui-kit-module")]).then(__webpack_require__.bind(null, /*! ../../ui-kit/ui-kit.module */ "./src/app/ui-kit/ui-kit.module.ts")).then(function (m) { return m.UIKitModule; }); }
    },
    {
        path: 'components',
        loadChildren: function () { return Promise.all(/*! import() | components-ui-components-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~components-ui-components-module"), __webpack_require__.e("common"), __webpack_require__.e("components-ui-components-module")]).then(__webpack_require__.bind(null, /*! ../../components/ui-components.module */ "./src/app/components/ui-components.module.ts")).then(function (m) { return m.UIComponentsModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-full-pages-full-pages-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("pages-full-pages-full-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/full-pages/full-pages.module */ "./src/app/pages/full-pages/full-pages.module.ts")).then(function (m) { return m.FullPagesModule; }); }
    },
    {
        path: 'cards',
        loadChildren: function () { return Promise.all(/*! import() | cards-cards-module */[__webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("common"), __webpack_require__.e("cards-cards-module")]).then(__webpack_require__.bind(null, /*! ../../cards/cards.module */ "./src/app/cards/cards.module.ts")).then(function (m) { return m.CardsModule; }); }
    },
    {
        path: 'colorpalettes',
        loadChildren: function () { return __webpack_require__.e(/*! import() | color-palette-color-palette-module */ "color-palette-color-palette-module").then(__webpack_require__.bind(null, /*! ../../color-palette/color-palette.module */ "./src/app/color-palette/color-palette.module.ts")).then(function (m) { return m.ColorPaletteModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~components-ui-components-module"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ../../chat/chat.module */ "./src/app/chat/chat.module.ts")).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'chat-ngrx',
        loadChildren: function () { return Promise.all(/*! import() | chat-ngrx-chat-ngrx-module */[__webpack_require__.e("default~chat-chat-module~chat-ngrx-chat-ngrx-module~components-ui-components-module"), __webpack_require__.e("chat-ngrx-chat-ngrx-module")]).then(__webpack_require__.bind(null, /*! ../../chat-ngrx/chat-ngrx.module */ "./src/app/chat-ngrx/chat-ngrx.module.ts")).then(function (m) { return m.ChatNGRXModule; }); }
    },
    {
        path: 'taskboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-taskboard-module */ "taskboard-taskboard-module").then(__webpack_require__.bind(null, /*! ../../taskboard/taskboard.module */ "./src/app/taskboard/taskboard.module.ts")).then(function (m) { return m.TaskboardModule; }); }
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() | taskboard-ngrx-taskboard-ngrx-module */ "taskboard-ngrx-taskboard-ngrx-module").then(__webpack_require__.bind(null, /*! ../../taskboard-ngrx/taskboard-ngrx.module */ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts")).then(function (m) { return m.TaskboardNGRXModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_12__["ToggleFullscreenDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
// Sidebar menu Routes and data
var ROUTES = [
    {
        path: '', title: 'Overview', icon: 'icon-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger mt-1', isExternalLink: false, submenu: [
            { path: '/dashboard/eCommerce', title: 'eCommerce', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/analytics', title: 'Analytics', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Apps', icon: 'icon-screen-desktop', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/chat', title: 'Chat', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/chat-ngrx', title: 'Chat NgRx', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/taskboard', title: 'Task Board', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/calendar', title: 'Calendar', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'UI Kit', icon: 'icon-magnet', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/colorpalettes', title: 'Color Palette', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/grids', title: 'Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/uikit/feather', title: 'Feather', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '/cards', title: 'Cards', icon: 'icon-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Components', icon: 'icon-puzzle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Extra', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/select', title: 'Select', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/editor', title: 'Editor', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/player', title: 'Player', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag & Drop', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tags', title: 'Input Tags', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/switch', title: 'Switch', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Forms', icon: 'icon-doc', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/forms/validation', title: 'Validation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/ngx', title: 'NGX Wizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tables', icon: 'icon-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/tables/regular', title: 'Regular', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/extended', title: 'Extended', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Data Tables', icon: 'icon-notebook', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/datatables/basic', title: 'Basic', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/editing', title: 'Editing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/filter', title: 'Filter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/fullscreen', title: 'Fullscreen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/paging', title: 'Paging', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/pinning', title: 'Pinning', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/selection', title: 'Selection', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/sorting', title: 'Sorting', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Maps', icon: 'icon-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google', title: 'Google Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'FullScreen Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Charts', icon: 'icon-pie-chart', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success white mt-1', isExternalLink: false,
        submenu: [
            { path: '/charts/chartist', title: 'Chartist', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/ngx', title: 'NGX Chart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Pages', icon: 'icon-docs', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/timeline', title: 'Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/lockscreen', title: 'Lock Screen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: 'http://pixinvent.com/demo/convex-angular-bootstrap-admin-dashboard-template/documentation', title: 'Documentation', icon: 'icon-book-open', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'icon-support', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, translate) {
        this.router = router;
        this.route = route;
        this.translate = translate;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My Files\My works\angular\freelance\cohora\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map