(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-pages-full-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/faq/faq.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/faq/faq.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">FAQs</div>\n    <p class=\"content-sub-header\">We're here to help!!</p>\n  </div>\n</div>\n<!-- faq starts -->\n<section id=\"faq\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card bg-blue-grey white text-center p-4\">\n        <div class=\"card-header\">\n          <h1 class=\"white\">We're here to help!!</h1>\n          <p><em>If you have any question, enter what you are looking for!</em></p>\n        </div>\n        <div class=\"card-block\">\n          <fieldset class=\"form-group col-xl-12 col-lg-10 col-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search in faqs..\" (input)=\"filter($event.target.value)\" #messageInput>\n          </fieldset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"faq py-2 px-3\">\n          <ngb-accordion [closeOthers]=\"true\">\n            <ngb-panel [id]=\"faq.faqId\" *ngFor=\"let faq of faqs\">\n                <ng-template ngbPanelTitle>\n                   <p class=\"mb-0 font-medium-2\"><i class=\"fa fa-question mr-2\"></i> <span> {{faq.title}}</span></p>\n                  </ng-template>\n              <ng-template ngbPanelContent>\n                <div class=\"pt-0 px-2 pb-2\">\n                  {{faq.content}}\n                </div>\n              </ng-template>\n            </ngb-panel>           \n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- faq Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/gallery/gallery-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/gallery/gallery-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery Hover Effect Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">Hover Effects</div>\n        <p class=\"content-sub-header\">Image gallery grid with 30 subtle hover effect. Try to hover below demo images to show each hover effect.</p>\n    </div>\n</div>\n<section id=\"hover-effects\" class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"card-block my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Julia</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-julia\">\n              <img src=\"assets/img/gallery/22.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2 class=\"white\">Nice <span>Julia</span></h2>\n                <div>\n                  <p>Julia dances in the deep dark</p>\n                  <p>She loves the smell of the ocean</p>\n                  <p>And dives into the morning light</p>\n                </div>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-julia\">\n              <img src=\"assets/img/gallery/21.jpg\" alt=\"img1\" />\n              <figcaption>\n                <h2 class=\"white\">Passionate <span>Julia</span></h2>\n                <div>\n                  <p>Julia dances in the deep dark</p>\n                  <p>She loves the smell of the ocean</p>\n                  <p>And dives into the morning light</p>\n                </div>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Goliath</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-goliath\">\n              <img src=\"assets/img/gallery/23.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2 class=\"white\">Thoughtful <span>Goliath</span></h2>\n                <p>When Goliath comes out, you should run.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-goliath\">\n              <img src=\"assets/img/gallery/24.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2 class=\"white\">Thoughtful <span>Goliath</span></h2>\n                <p>When Goliath comes out, you should run.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Hera</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-hera\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2 class=\"white\">Tender <span>Hera</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-pdf-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-image-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-archive-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-code-o\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-hera\">\n              <img src=\"assets/img/gallery/25.jpg\" alt=\"img05\" />\n              <figcaption>\n                <h2 class=\"white\">Tender <span>Hera</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-pdf-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-image-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-archive-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-file-code-o\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Winston</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-winston\">\n              <img src=\"assets/img/gallery/26.jpg\" alt=\"img06\" />\n              <figcaption>\n                <h2 class=\"white\">Jolly <span>Winston</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-star-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-comments-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-envelope-o\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-winston\">\n              <img src=\"assets/img/gallery/27.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2 class=\"white\">Jolly <span>Winston</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-star-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-comments-o\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-envelope-o\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Selena</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-selena\">\n              <img src=\"assets/img/gallery/28.jpg\" alt=\"img25\" />\n              <figcaption>\n                <h2 class=\"white\">Happy <span>Selena</span></h2>\n                <p>Selena is a tiny-winged bird.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-selena\">\n              <img src=\"assets/img/gallery/29.jpg\" alt=\"img26\" />\n              <figcaption>\n                <h2 class=\"white\">Happy <span>Selena</span></h2>\n                <p>Selena is a tiny-winged bird.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Terry</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-terry\">\n              <img src=\"assets/img/gallery/30.jpg\" alt=\"img09\" />\n              <figcaption>\n                <h2 class=\"white\">Noisy <span>Terry</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-download\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-share\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-tags\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-terry\">\n              <img src=\"assets/img/gallery/31.jpg\" alt=\"img10\" />\n              <figcaption>\n                <h2 class=\"white\">Noisy <span>Terry</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-download\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-share\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-tags\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Phoebe</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-phoebe\">\n              <img src=\"assets/img/gallery/32.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2 class=\"white\">Plain <span>Phoebe</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-user\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-cog\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-phoebe\">\n              <img src=\"assets/img/gallery/33.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2 class=\"white\">Plain <span>Phoebe</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-user\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-cog\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Apollo</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-apollo\">\n              <img src=\"assets/img/gallery/10.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2 class=\"white\">Strong <span>Apollo</span></h2>\n                <p>Apollo's last game of pool was so strange.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-apollo\">\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2 class=\"white\">Strong <span>Apollo</span></h2>\n                <p>Apollo's last game of pool was so strange.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Kira</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-kira\">\n              <img src=\"assets/img/gallery/5.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2 class=\"white\">Dark <span>Kira</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-home\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-download\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-share\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-kira\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img01\" />\n              <figcaption>\n                <h2 class=\"white\">Dark <span>Kira</span></h2>\n                <p>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-home\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-download\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-heart\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-fw fa-share\"></i></a>\n                </p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Steve</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-steve\">\n              <img src=\"assets/img/gallery/20.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2>Lonely <span>Steve</span></h2>\n                <p>Steve was afraid of the Boogieman.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-steve\">\n              <img src=\"assets/img/gallery/19.jpg\" alt=\"img16\" />\n              <figcaption>\n                <h2>Lonely <span>Steve</span></h2>\n                <p>Steve was afraid of the Boogieman.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Moses</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-moses\">\n              <img src=\"assets/img/gallery/17.jpg\" alt=\"img17\" />\n              <figcaption>\n                <h2 class=\"white\">Cute <span>Moses</span></h2>\n                <p>Moses loves to run after butterflies.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-moses\">\n              <img src=\"assets/img/gallery/18.jpg\" alt=\"img18\" />\n              <figcaption>\n                <h2 class=\"white\">Cute <span>Moses</span></h2>\n                <p>Moses loves to run after butterflies.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Jazz</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-jazz\">\n              <img src=\"assets/img/gallery/19.jpg\" alt=\"img19\" />\n              <figcaption>\n                <h2 class=\"white\">Dynamic <span>Jazz</span></h2>\n                <p>When Jazz starts to chase cars, the whole world stands still.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-jazz\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2 class=\"white\">Dynamic <span>Jazz</span></h2>\n                <p>When Jazz starts to chase cars, the whole world stands still.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Ming</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ming\">\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2 class=\"white\">Funny <span>Ming</span></h2>\n                <p>Ming sits in the corner the whole day. She's into crochet.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ming\">\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img20\" />\n              <figcaption>\n                <h2 class=\"white\">Funny <span>Ming</span></h2>\n                <p>Ming sits in the corner the whole day. She's into crochet.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Lexi</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lexi\">\n              <img src=\"assets/img/gallery/5.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2 class=\"white\">Altruistic <span>Lexi</span></h2>\n                <p>Each and every friend is special. Lexi won't hide a single cookie.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lexi\">\n              <img src=\"assets/img/gallery/24.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2 class=\"white\">Altruistic <span>Lexi</span></h2>\n                <p>Each and every friend is special. Lexi won't hide a single cookie.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Duke</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-duke\">\n              <img src=\"assets/img/gallery/28.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2 class=\"white\">Messy <span>Duke</span></h2>\n                <p>Duke is very bored. When he looks at the sky, he feels to run.</p>\n                <a href=\"#\">View more</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-duke\">\n              <img src=\"assets/img/gallery/16.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2 class=\"white\">Messy <span>Duke</span></h2>\n                <p>Duke is very bored. When he looks at the sky, he feels to run.</p>\n                <a href=\"#\">View more</a>\n              </figcaption> \n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Gallery Hover Effect Starts-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/invoice/invoice-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/invoice/invoice-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Invoice template starts-->\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h4>Invoice</h4>\n    </div>\n</div>\n<section class=\"invoice-template\">\n    <div class=\"card\">\n        <div class=\"card-body p-3\">\n            <div id=\"invoice-template\" class=\"card-block\">\n                <!-- Invoice Company Details -->\n                <div id=\"invoice-company-details\" class=\"row\">\n                    <div class=\"col-6 text-left\">\n                        <img src=\"assets/img/logos/logo-big-black.png\" alt=\"company logo\" class=\"mb-2\" width=\"70\">\n                        <ul class=\"px-0 list-unstyled\">\n                            <li class=\"text-bold-800\">PIXINVENT</li>\n                            <li>4025 Oak Avenue,</li>\n                            <li>Melbourne,</li>\n                            <li>Florida 32940,</li>\n                            <li>USA</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <h2>INVOICE</h2>\n                        <p class=\"pb-3\"># INV-001001</p>\n                        <ul class=\"px-0 list-unstyled\">\n                            <li>Balance Due</li>\n                            <li class=\"lead text-bold-800\">$ 12,000.00</li>\n                        </ul>\n                    </div>\n                </div>\n                <!--/ Invoice Company Details -->\n                <!-- Invoice Customer Details -->\n                <div id=\"invoice-customer-details\" class=\"row pt-2\">\n                    <div class=\"col-sm-12 text-left\">\n                        <p class=\"text-muted\">Bill To</p>\n                    </div>\n                    <div class=\"col-6 text-left\">\n                        <ul class=\"px-0 list-unstyled\">\n                            <li class=\"text-bold-800\">Mr. Bret Lezama</li>\n                            <li>4879 Westfall Avenue,</li>\n                            <li>Albuquerque,</li>\n                            <li>New Mexico-87102.</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <p><span class=\"text-muted\">Invoice Date :</span> 06/05/2018</p>\n                        <p><span class=\"text-muted\">Terms :</span> Due on Receipt</p>\n                        <p><span class=\"text-muted\">Due Date :</span> 10/05/2018</p>\n                    </div>\n                </div>\n                <!--/ Invoice Customer Details -->\n                <!-- Invoice Items Details -->\n                <div id=\"invoice-items-details\" class=\"pt-2\">\n                    <div class=\"row\">\n                        <div class=\"table-responsive col-sm-12\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th>#</th>\n                                        <th>Item &amp; Description</th>\n                                        <th class=\"text-right\">Rate</th>\n                                        <th class=\"text-right\">Hours</th>\n                                        <th class=\"text-right\">Amount</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th scope=\"row\">1</th>\n                                        <td>\n                                            <p>Create PSD for mobile APP</p>\n                                            <p class=\"text-muted\">Simply dummy text of the printing and typesetting industry.</p>\n                                        </td>\n                                        <td class=\"text-right\">$ 20.00/hr</td>\n                                        <td class=\"text-right\">120</td>\n                                        <td class=\"text-right\">$ 2400.00</td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">2</th>\n                                        <td>\n                                            <p>iOS Application Development</p>\n                                            <p class=\"text-muted\">Pellentesque maximus feugiat lorem at cursus.</p>\n                                        </td>\n                                        <td class=\"text-right\">$ 25.00/hr</td>\n                                        <td class=\"text-right\">260</td>\n                                        <td class=\"text-right\">$ 6500.00</td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">3</th>\n                                        <td>\n                                            <p>WordPress Template Development</p>\n                                            <p class=\"text-muted\">Vestibulum euismod est eu elit convallis.</p>\n                                        </td>\n                                        <td class=\"text-right\">$ 20.00/hr</td>\n                                        <td class=\"text-right\">300</td>\n                                        <td class=\"text-right\">$ 6000.00</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-12 text-left\">\n                            <p class=\"lead\">Payment Methods:</p>\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <table class=\"table table-borderless table-sm\">\n                                        <tbody>\n                                            <tr>\n                                                <td>Bank name:</td>\n                                                <td class=\"text-right\">ABC Bank, USA</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Acc name:</td>\n                                                <td class=\"text-right\">Amanda Orton</td>\n                                            </tr>\n                                            <tr>\n                                                <td>IBAN:</td>\n                                                <td class=\"text-right\">FGS165461646546AA</td>\n                                            </tr>\n                                            <tr>\n                                                <td>SWIFT code:</td>\n                                                <td class=\"text-right\">BTNPP34</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-12\">\n                            <p class=\"lead\">Total due</p>\n                            <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>Sub Total</td>\n                                            <td class=\"text-right\">$ 14,900.00</td>\n                                        </tr>\n                                        <tr>\n                                            <td>TAX (12%)</td>\n                                            <td class=\"text-right\">$ 1,788.00</td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"text-bold-800\">Total</td>\n                                            <td class=\"text-bold-800 text-right\"> $ 16,688.00</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Payment Made</td>\n                                            <td class=\"pink text-right\">(-) $ 4,688.00</td>\n                                        </tr>\n                                        <tr class=\"bg-grey bg-lighten-4\">\n                                            <td class=\"text-bold-800\">Balance Due</td>\n                                            <td class=\"text-bold-800 text-right\">$ 12,000.00</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"text-center\">\n                                <p>Authorized person</p>\n                                <img src=\"assets/img/pages/signature-scan.png\" alt=\"signature\" class=\"width-250\">\n                                <h6>Amanda Orton</h6>\n                                <p class=\"text-muted\">Managing Director</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Invoice Footer -->\n                <div id=\"invoice-footer\">\n                    <div class=\"row\">\n                        <div class=\"col-md-9 col-sm-12\">\n                            <h6>Terms &amp; Condition</h6>\n                            <p>You know, being a test pilot isn't always the healthiest business in the world. We predict too\n                                much for the next year and yet far too little for the next 10.</p>\n                        </div>\n                        <div class=\"col-md-3 col-sm-12 text-center\">\n                            <button type=\"button\" class=\"btn btn-primary btn-raised my-1\"><i class=\"fa fa-paper-plane-o\"></i> Send Invoice</button>\n                        </div>\n                    </div>\n                </div>\n                <!--/ Invoice Footer -->\n            </div>\n        </div>\n    </div>\n</section>\n<!--Invoice template ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">Knowledge Base</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Convex template Knowledge Base starts -->\n<section id=\"kb\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card gradient-crystal-clear white text-center p-4\">\n        <div class=\"card-header\">\n          <h1 class=\"white\">Have a Question?</h1>\n          <p><em>If you have any question,You can enter what you are looking for!</em></p>\n        </div>\n        <div class=\"card-block\">\n          <fieldset class=\"form-group col-xl-12 col-lg-10 col-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type your search items here\">\n          </fieldset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"px-3 py-3\">\n            <div class=\"media\">\n              <div class=\"media-left align-self-center\">\n                <i class=\"icon-rocket danger font-large-2 float-left\"></i>\n              </div>\n              <div class=\"media-body text-center\">\n                <h5 class=\"mb-1 text-bold-500\">Our Blog</h5>\n                <span class=\"text-muted\">53 Articles / 10 Categories</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"px-3 py-3\">\n            <div class=\"media\">\n              <div class=\"media-left align-self-center\">\n                <i class=\"icon-bubble danger font-large-2 float-left\"></i>\n              </div>\n              <div class=\"media-body text-center\">\n                <h5 class=\"mb-1 text-bold-500\">Forum</h5>\n                <span class=\"text-muted\">18 Topics / 7 Posts</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"px-3 py-3\">\n            <div class=\"media\">\n              <div class=\"media-left align-self-center\">\n                <i class=\"icon-bulb danger font-large-2 float-left\"></i>\n              </div>\n              <div class=\"media-body text-center\">\n                <h5 class=\"mb-1 text-bold-500\">Innovation</h5>\n                <span class=\"text-muted\">43 ideas / 8 Topics</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"px-3 py-3\">\n            <div class=\"media\">\n              <div class=\"media-left align-self-center\">\n                <i class=\"icon-support danger font-large-2 float-left\"></i>\n              </div>\n              <div class=\"media-body text-center\">\n                <h5 class=\"mb-1 text-bold-500\">Support</h5>\n                <span class=\"text-muted\">28 Posts / 5 Categories</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xl-8 col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div class=\"card-title-wrap bar-success\">\n      \t\t\t\t\t<h4 class=\"card-title mb-0\">Featured Articles</h4>\n              </div>\n    \t\t\t\t</div>\n            <div class=\"card-body\">\n              <div class=\"card-block\">            \n                <ul class=\"list-group\">\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Activating an Account and Logging in')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Activating an Account and Logging in</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'User Profile')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> User Profile</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using the Dashboard')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Using the Dashboard</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Subscribing to Email Alerts')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Subscribing to Email Alerts</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Changing a Password')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Changing a Password</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Inviting and Managing Users')\">\n                      <i class=\"fa fa-check-square-o mr-1\"></i>\n                      <span> Inviting and Managing Users</span>\n                    </li>\n                    <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating and Managing Groups')\">\n                      <i class=\"fa fa-check-square-o mr-1\"></i>\n                      <span> Creating and Managing Groups</span>\n                    </li>\n                    <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Granting Roles')\">\n                      <i class=\"fa fa-check-square-o mr-1\"></i>\n                      <span> Granting Roles</span>\n                    </li>\n                    <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Quick Guide: Organizing Security Groups')\">\n                      <i class=\"fa fa-check-square-o mr-1\"></i>\n                      <span> Quick Guide: Organizing Security Groups</span>\n                    </li>\n                    <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'What to Do if a User is Unable to Login')\">\n                      <i class=\"fa fa-check-square-o mr-1\"></i>\n                      <span> What to Do if a User is Unable to Login</span>\n                    </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <a class=\"card-link info\">See all articles (50)</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-title-wrap bar-danger\">\n              <h4 class=\"card-title\">Latest Articles</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Files Overview')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Files Overview</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Search Overview')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Search Overview</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using Tasks')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Using Tasks</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Events')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Events</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Blogs')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Blogs</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Basic Files Module Features')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Basic Files Module Features</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Add a Single File')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> How to Add a Single File</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Drag-and-Drop upload files and folders')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Drag-and-Drop upload files and folders</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Searching Files')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Searching Files</span>\n                  </li>\n                  <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Digital Rights Management')\">\n                    <i class=\"fa fa-check-square-o mr-1\"></i>\n                    <span> Digital Rights Management</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <a class=\"card-link info\">See all articles (73)</a>\n            </div>\n          </div>\n        </div>\n        </div>      \n      </div>      \n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card card-inverse bg-warning text-center\">\n            <div class=\"card-header\">\n              <i class=\"icon-shield font-large-1 float-left mr-2\"></i>\n              <h4 class=\"card-title\">Support</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-block\">\n                <p>Contact our support team for </p><h3 class=\"white\">24x7</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div class=\"card-title-wrap bar-info\">\n                <h4 class=\"card-title\">Quick Links</h4>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-block\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-6\">\n                    <ul>\n                      <li><a href=\"#\" title=\"Our Blog\">Our Blog</a></li>\n                      <li><a href=\"#\" title=\"Plugins\">Plugins</a></li>\n                      <li><a href=\"#\" title=\"Ideas\">Ideas</a></li>\n                      <li><a href=\"#\" title=\"Wordpress\">Wordpress</a></li>\n                    </ul>\n                  </div>\n                  <div class=\"col-12 col-sm-6\">\n                    <ul>                  \n                      <li><a href=\"#\" title=\"Admin \">Admin </a></li>\n                      <li><a href=\"#\" title=\"Themes\">Themes</a></li>\n                      <li><a href=\"#\" title=\"Documentation\">Documentation</a></li>\n                      <li><a href=\"#\" title=\"Support\">Support</a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div class=\"card-title-wrap bar-success\">\n                <h4 class=\"card-title\">Tags</h4>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-block\">\n                <span class=\"badge badge-secondary mb-2 mr-1\">admin</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">admin dashboard</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">admin template</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">admin theme</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bitcoin</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bootstrap</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bootstrap 4</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bootstrap admin</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bootstrap template</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">bootstrap dashboard</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">crypto cards</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">crypto dashboard</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">dashboard template</span>\n                <span class=\"badge badge-secondary mb-2 mr-1\">responsive</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>      \n    </div>      \n  </div>\n  <!-- Convex template Knowledge Base Ends -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header bg-info\">\n      <h4 class=\"modal-title white\">{{title}}</h4>\n      <button type=\"button\" class=\"close white\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" id=\"kbModal-body\">\n      <p class=\"text-bold-500\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      <p>Curabitur et congue orci. Nullam tempor, lectus vitae facilisis consectetur, enim dolor sodales nunc, ut venenatis\n        ipsum massa non eros. Integer tristique consequat sagittis. Sed vitae sapien lobortis, viverra turpis non, hendrerit\n        erat. Vivamus luctus, nisl et dignissim pretium, quam risus sollicitudin augue, ut mollis erat neque a lectus. Donec\n        et ex vitae orci pretium volutpat eget sed est. Nunc ornare mauris nunc, id ullamcorper libero finibus id. Fusce\n        imperdiet laoreet suscipit. Nunc sagittis arcu non sem euismod auctor. Sed tellus odio, posuere id molestie quis,\n        egestas sit amet turpis. Duis velit diam, dictum a semper eu, ultricies id neque. Integer nec eros placerat lacus\n        bibendum viverra in eu urna.</p>\n      <p class=\"text-bold-500\">Suspendisse auctor nisl interdum arcu blandit, sed aliquam leo volutpat.</p>\n      <p>Donec laoreet in nibh vel maximus. Donec posuere aliquam lacus a congue. Interdum et malesuada fames ac ante ipsum\n        primis in faucibus. Aenean semper fringilla arcu, non auctor ante. Ut efficitur euismod scelerisque. Cras accumsan\n        orci rhoncus elementum auctor. Phasellus maximus volutpat nunc ut tincidunt. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Pellentesque aliquet tincidunt neque, et volutpat est dictum non. Nulla hendrerit leo sit amet nisl\n        blandit, quis pharetra lacus ultrices. Etiam pretium ipsum eu dui consectetur maximus. Vivamus pretium luctus lorem,\n        eu viverra velit malesuada at. Nam risus orci, gravida ut convallis et, cursus id velit.</p>\n        <p class=\"text-bold-500\"> Phasellus maximus volutpat nunc ut tincidunt.</p>\n        <p>Donec laoreet in nibh vel maximus. Donec posuere aliquam lacus a congue. Interdum et malesuada fames ac ante ipsum\n          primis in faucibus. Aenean semper fringilla arcu, non auctor ante. Ut efficitur euismod scelerisque. Cras accumsan\n          orci rhoncus elementum auctor. Phasellus maximus volutpat nunc ut tincidunt. Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit. Pellentesque aliquet tincidunt neque, et volutpat est dictum non. Nulla hendrerit leo sit amet nisl\n          blandit, quis pharetra lacus ultrices. Etiam pretium ipsum eu dui consectetur maximus. Vivamus pretium luctus lorem,\n          eu viverra velit malesuada at. Nam risus orci, gravida ut convallis et, cursus id velit.</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/search/search.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/search/search.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search form-->\n<section id=\"search-website\" class=\"card overflow-hidden\">\n  <div class=\"card-header\">\n      <h4 class=\"card-title\">Search</h4>\n\n  </div>\n  <div class=\"card-body\">\n      <div class=\"card-block pb-0\">\n        <form action=\"#\">\n          <fieldset class=\"form-group position-relative has-icon-right mb-0\">\n              <input type=\"text\" class=\"form-control form-control-lg input-lg\" id=\"iconLeft\" placeholder=\"Convex Admin Template\">\n              <div class=\"form-control-position\">\n                  <i class=\"ft-mic font-medium-4\"></i>\n              </div>\n          </fieldset>\n        </form>\n      </div>\n      <!--Search Navbar-->\n      <div id=\"search-nav\" class=\"card-block\">\n          <ul class=\"nav nav-inline\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\"><i class=\"fa fa-link\"></i> Website</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\"><i class=\"fa fa-file-image-o\"></i> Images</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\"><i class=\"fa fa-file-video-o\"></i> Videos</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\"><i class=\"fa fa-map-o\"></i> Maps</a>\n              </li>\n              <li class=\"dropdown nav-item float-right mt-1\">\n                  <a  class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"fa fa-cog\"></i> <span class=\"caret\"></span>\n                  </a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li class=\"dropdown-item\"><a  class=\"dropdown-link\">Languages</a></li>\n                      <li class=\"dropdown-item\"><a  class=\"dropdown-link\">Search Settings</a></li>\n                      <li class=\"dropdown-item\"><a  class=\"dropdown-link\">History</a></li>\n                      <li class=\"dropdown-item\"><a  class=\"dropdown-link\">Search Help</a></li>\n                  </ul>\n              </li>\n          </ul>\n      </div>\n      <!--/ Search Navbar-->\n      <!--Search Result-->\n      <div id=\"search-results\" class=\"card-block\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n              <p class=\"text-muted font-small-3\">About 68,00,000 results (0.58 seconds) </p>\n              <ul class=\"media-list row\">\n                  <!--search with list-->\n                  <li class=\"media\">\n                      <div class=\"media-body\">\n                          <p class=\"lead mb-0\"><a ><span class=\"text-bold-600\">Convex</span> - Responsive Angular 6+ Dashboard Template</a></p>\n                          <p class=\"mb-0\"><a  class=\"info darken-1\">http://pixinvent.com/<span class=\"text-bold-600\">Convex</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                          <ul class=\"list-inline list-inline-pipe text-muted\">\n                              <li>\n                                  <i class=\"fa fa-star yellow darken-2\"></i>\n                                  <i class=\"fa fa-star yellow darken-2\"></i>\n                                  <i class=\"fa fa-star yellow darken-2\"></i>\n                                  <i class=\"fa fa-star yellow darken-2\"></i>\n                                  <i class=\"fa fa-star yellow darken-2\"></i> &nbsp;5 stars\n                              </li>\n                              <li>590 votes</li>\n                              <li>US$ 28.00</li>\n                              <li>In stock</li>\n                          </ul>\n                          <p><span class=\"text-muted\">Oct 24, 2017 - </span><span class=\"text-bold-600\">Convex</span> nec nisl lobortis erat rutrum dignissim. Colonel <span class=\"text-bold-600\">Responsive Angular 6+ Dashboard Template</span> Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur purus quis viverra...</p>\n                          <div class=\"website-detailed-list mx-1 my-1\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">Dashboard</a></p>\n                                              <p>Donec vitae ante ipsum. In aliquet, urna id varius mattis...</p>\n                                          </div>\n                                      </div>\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">Form Components</a></p>\n                                              <p>Velit mi sodales turpis, nec consectetur leo elit.</p>\n                                          </div>\n                                      </div>\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">Charts</a></p>\n                                              <p>Vestibulum nec orci placerat, euismod turpis egestas...</p>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-6\">\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">UI Components</a></p>\n                                              <p>Nam in velit iaculis, vestibulum ex a, porta sapien...</p>\n                                          </div>\n                                      </div>\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">Support</a></p>\n                                              <p>Donec ullamcorper est vel dui commodo dictum.</p>\n                                          </div>\n                                      </div>\n                                      <div class=\"content-group\">\n                                          <div class=\"media-body\">\n                                              <p class=\"mb-0\"><a class=\"info darken-1\">Documentation</a></p>\n                                              <p>Ut rhoncus massa diam, in commodo enim posuere quis mosito...</p>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </li>\n                  <!--search with image-->\n                  <li class=\"media\">\n                      <div class=\"media-left\">\n                          <a >\n                              <img class=\"media-object width-150\" src=\"assets/img/width-600/portfolio-14.jpg\" alt=\"Generic placeholder image\">\n                          </a>\n                      </div>\n                      <div class=\"media-body media-search\">\n                        <p class=\"lead mb-0\"><a class=\"info darken-1\"><span class=\"text-bold-600\">Attire bench</span> -  Quick win shoot me an email</a></p>\n                        <p class=\"mb-0\"><a class=\"info darken-1\">http://pixinvent.com/<span class=\"text-bold-600\">Convex</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                        <ul class=\"list-inline list-inline-pipe text-muted\">\n                            <li>\n                                <i class=\"fa fa-star yellow darken-2\"></i>\n                                <i class=\"fa fa-star yellow darken-2\"></i>\n                                <i class=\"fa fa-star yellow darken-2\"></i>\n                                <i class=\"fa fa-star yellow darken-2\"></i>\n                                <i class=\"fa fa-star-half yellow darken-2\"></i> &nbsp;4.5 stars\n                            </li>\n                            <li>50 votes</li>\n                            <li>US$ 40.00</li>\n                            <li>In stock</li>\n                        </ul>\n                        <p><span class=\"text-muted\">Oct 24, 2017 - </span> We need to dialog around <span class=\"text-bold-600\">Convex Admin</span> your choice of work attire bench mark, or win-win-win. Quick win shoot me an email. Proceduralize i don't want to drain the whole swamp, i just want to shoot some alligators yet old boys club.</p>\n                      </div>\n                  </li>\n                  <!--search with video-->\n                  <li class=\"media\">\n                    <div class=\"media-left media-search\">\n                        <iframe width=\"150\" height=\"110\" src=\"https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&amp;controls=0&amp;showinfo=0\"></iframe>\n                    </div>\n                    <div class=\"media-body\">\n                      <p class=\"lead mb-0\"><a class=\"info darken-1\"><span class=\"text-bold-600\">The Table</span> - for what do you feel you would bring to</a></p>\n                      <p class=\"mb-0\"><a  class=\"info darken-1\">http://youtube.com/<span class=\"text-bold-600\">Convex</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                      <ul class=\"list-inline list-inline-pipe text-muted\">\n                          <li>Oct 24, 2017</li>\n                          <li>1M Views</li>\n                          <li>Uploaded by PlayStation</li>\n                      </ul>\n                      <p><span class=\"text-bold-600\">Proceduralize</span> Not the long pole in my tent. Get buy-in pixel pushing, and quick win . What's the status on the deliverables for eow? goalposts golden goose, and take five.</p>\n                    </div>\n                  </li>\n                  <li class=\"media\">\n                    <div class=\"media-body\">\n                      <p class=\"lead mb-0\"><a class=\"info darken-1\"><span class=\"text-bold-600\">Microdosing</span> - deep v actually schlitz chia</a></p>\n                      <p class=\"mb-0\"><a  class=\"info darken-1\">http://themeforest.net/<span class=\"text-bold-600\">Convex</span>/microdosing <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                      <p>Lobortis erat rutrum dignissim. Colonel <span class=\"text-bold-600\">Responsive Angular 6+ Dashboard Template</span> Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur purus quis viverra. Vivamus eros urna, scelerisque ac enim...</p>\n                    </div>\n                  </li>\n                  <li class=\"media\">\n                    <div class=\"media-body\">\n                      <p class=\"lead mb-0\"><a class=\"info darken-1\">Aesthetic neutra <span class=\"text-bold-600\">freegan</span>, mlkshk literally</a></p>\n                      <p class=\"mb-0\"><a  class=\"info darken-1\">http://envato.com/literally/<span class=\"text-bold-600\">Convex</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                      <p><span class=\"text-muted\">June 30, 2016 - </span><span class=\"text-bold-600\">Humblebrag</span> mixtape tumblr small batch, marfa blog mumblecore retro sustainable bitters normcore brunch whatever helvetica. <span class=\"text-bold-600\">Humblebrag mumblecore </span>beard irony, XOXO craft beer kogi letterpress freegan vegan disrupt...</p>\n                    </div>\n                  </li>\n                  <li class=\"media\">\n                    <div class=\"media-body\">\n                      <p class=\"lead mb-0\"><a class=\"info darken-1\"><span class=\"text-bold-600\">iCell</span> -  disrupt butcher pitchfork.</a></p>\n                      <p class=\"mb-0\"><a  class=\"info darken-1\">http://google.com/<span class=\"text-bold-600\">icell</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                      <ul class=\"list-inline list-inline-pipe text-muted\">\n                          <li>\n                              <i class=\"fa fa-star yellow darken-2\"></i>\n                              <i class=\"fa fa-star yellow darken-2\"></i>\n                              <i class=\"fa fa-star-half yellow darken-2\"></i>\n                              <i class=\"fa fa-star-outline yellow darken-2\"></i>\n                              <i class=\"fa fa-star-outline yellow darken-2\"></i> &nbsp;2.5 stars\n                          </li>\n                          <li>590 votes</li>\n                          <li>US$ 399.00</li>\n                          <li>In stock</li>\n                      </ul>\n                      <p><span class=\"text-muted\">March 23, 2016 - </span>Church-key selfies bitters man bun post-ironic. <span class=\"text-bold-600\">8-bit 3 wolf moon</span> drinking vinegar, direct trade plaid cred hashtag offal. Fap XOXO chambray, intelligentsia kogi keytar flexitarian cardigan kale chips food truck.</p>\n                    </div>\n                  </li>\n                  <li class=\"media\">\n                      <div class=\"media-body\">\n                          <p class=\"lead mb-0\"><a class=\"info darken-1\"><span class=\"text-bold-600\">Run it</span> - up the flagpole, ping the boss</a></p>\n                          <p class=\"mb-0\"><a  class=\"info darken-1\">http://mail.example.com/<span class=\"text-bold-600\">run</span>/ <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n                          <p>Pixel pushing horsehead offer that jerk from finance really threw me under the bus, but best practices new economy and take five, punch the tree, and come back in here with a clear head...</p>\n                      </div>\n                  </li>\n              </ul>\n              <div class=\"text-center\">\n                  <nav aria-label=\"Page navigation\">\n                      <ul class=\"pagination pagination-separate pagination-round pagination-flat\">\n                          <li class=\"page-item\">\n                              <a class=\"page-link\"  aria-label=\"Previous\">\n                                  <span aria-hidden=\"true\">« Prev</span>\n                                  <span class=\"sr-only\">Previous</span>\n                              </a>\n                          </li>\n                          <li class=\"page-item\"><a class=\"page-link\" >1</a></li>\n                          <li class=\"page-item\"><a class=\"page-link\" >2</a></li>\n                          <li class=\"page-item active\"><a class=\"page-link\" >3</a></li>\n                          <li class=\"page-item\"><a class=\"page-link\" >4</a></li>\n                          <li class=\"page-item\"><a class=\"page-link\" >5</a></li>\n                          <li class=\"page-item\">\n                              <a class=\"page-link\"  aria-label=\"Next\">\n                                  <span aria-hidden=\"true\">Next »</span>\n                                  <span class=\"sr-only\">Next</span>\n                              </a>\n                          </li>\n                      </ul>\n                  </nav>\n              </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</section>\n<!--/ Search form -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/timeline/component/timeline.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/timeline/component/timeline.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cd-horizontal-timeline\" [ngClass]=\"{'loaded': loaded}\">\n  <div class=\"timeline\">\n    <div class=\"events-wrapper\">\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\n        <ol>\n          <li *ngFor=\"let item of timelineElements; let index = index\">\n            <a #timelineEvents href=\"#\" [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\"\n               (click)=\"onEventClick($event, item)\">{{item.date | date:dateFormatTop}}</a>\n            <span></span>\n          </li>\n        </ol>\n        <span class=\"filling-line\" aria-hidden=\"true\" #fillingLine></span>\n      </div>\n    </div>\n\n    <ul class=\"cd-timeline-navigation\">\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\">Prev</a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\">Next</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"events-content\" *ngIf=\"showContent\">\n    <ol>\n      <li *ngFor=\"let item of timelineElements; let index = index\"\n          [@contentState]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\">\n        <h2 class=\"text-bold-500\">{{item.title}}</h2>\n        <em>{{item.date | date:dateFormat}}</em>\n        <p>{{item.content}}</p>\n      </li>\n    </ol>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/timeline/timeline-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/timeline/timeline-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Horizontal Timeline Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">Timeline</div>\n        <p class=\"content-sub-header\">This timeline contain date based post timeline.</p>\n    </div>\n</div>\n<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"card-block\">\n\t\t\t<timeline [timelineElements]=\"timeline\" [showContent]=\"true\"></timeline>\n\t\t</div>\n\t</div>\n</div>\n<!--Horizontal Timeline Starts-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/user-profile/user-profile-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/full-pages/user-profile/user-profile-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- User Profile Starts-->\n<!--Basic User Details Starts-->\n<section id=\"user-profile\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card profile-with-cover\">\n                <div class=\"card-img-top img-fluid bg-cover height-300\" style=\"background: url('assets/img/photos/14.jpeg') 50%;\"></div>\n                <div class=\"media profil-cover-details row\">\n                    <div class=\"col-5 mr-auto\">\n                        <div class=\"align-self-start halfway-fab pl-3 pt-2\">\n                            <div class=\"text-left\">\n                                <h3 class=\"card-title white\">Jose Diaz</h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"profile-cover-buttons\">\n                    <div class=\"media-body halfway-fab align-self-end\">\n                        <div class=\"text-right d-none d-sm-none d-md-none d-lg-block\">\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i> Follow</button>\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i> Message</button>\n                        </div>\n                        <div class=\"text-right d-block d-sm-block d-md-block d-lg-none\">\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Basic User Details Ends-->\n<section id=\"user-area\">\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-12\">\n            <div class=\"card mb-4\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-primary\">\n                        <div class=\"card-title\">Personal Information</div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <div class=\"align-self-center halfway-fab text-center\">\n                            <a class=\"profile-image\">\n                                <img src=\"assets/img/portrait/medium/avatar-m-9.jpg\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\n                            </a>\n                        </div>\n                        <div class=\"text-center\">\n                            <span class=\"font-medium-2 text-uppercase\">Jose Diaz</span>\n                            <p class=\"grey font-small-2\">Ninja Developer</p>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12 col-sm-6\">\n                                <ul class=\"no-list-style pl-0 text-center\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-present font-small-3\"></i> Birthday:</a></span>\n                                        <span class=\"display-block overflow-hidden\">June 10th, 1988</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Lives in:</a></span>\n                                        <span class=\"display-block overflow-hidden\">Denver, USA</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Gender:</a></span>\n                                        <span class=\"display-block overflow-hidden\">Male</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> Email:</a></span>\n                                        <a class=\"display-block overflow-hidden\">jose@yourmail.com</a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-12 col-sm-6\">\n                                <ul class=\"no-list-style pl-0 text-center\">                                    \n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> Website:</a></span>\n                                        <a class=\"display-block overflow-hidden\">pixinvent.com</a>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> Phone Number:</a></span>\n                                        <span class=\"display-block overflow-hidden\">(012)345-678-99</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> Occupation:</a></span>\n                                        <span class=\"display-block overflow-hidden\">Ninja Developer</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> Joined:</a></span>\n                                        <span class=\"display-block overflow-hidden\">April 1st, 2012</span>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card mb-4\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-danger\">\n                        <div class=\"card-title\">Hobbies</div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"row\">\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-plane danger font-medium-3\"></i> <div class=\"mt-1\">Travelling</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-speedometer danger font-medium-3\"></i> <div class=\"mt-1\">Driving</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-camera danger font-medium-3\"></i> <div class=\"mt-1\">Photography</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-game-controller danger font-medium-3\"></i> <div class=\"mt-1\">Gaming</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-music-tone-alt danger font-medium-3\"></i> <div class=\"mt-1\">Music</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-monitor danger font-medium-3\"></i> <div class=\"mt-1\">Surfing</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-pie-chart danger font-medium-3\"></i> <div class=\"mt-1\">Foodie</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-tv danger font-medium-3\"></i> <div class=\"mt-1\">TV</div></span>\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-basket-loaded danger font-medium-3\"></i> <div class=\"mt-1\">Shopping</div></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card mb-4\">\n                <div class=\"card-header\">\n                    <div class=\"card-title-wrap bar-success\">\n                        <div class=\"card-title\">Photos</div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-xl-6 col-lg-4 col-sm-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-9 col-lg-12\">\n            <!--About div starts-->\n            <div id=\"about\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <div class=\"card-title-wrap bar-info\">\n                                    <div class=\"card-title\">About</div>\n                                </div>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-block\">\n                                    <div class=\"mb-3\">\n                                        <span class=\"text-bold-500 primary\">About Me:</span>\n                                        <span class=\"display-block overflow-hidden\">Hi, I’m Jose, I’m 29 and I work as a Ninja Developer for the\n                                            “PIXINVENT” Creative Studio. In my research, I follow the flow of early medieval slavery from viking \n                                            raids in the west, through the booming ports of the Scandinavian north, and out into the Islamic world.\n                                            Reading texts against the grain and seeing artifacts as traces of the past can make their lives once \n                                            again visible to us today. This website documents my efforts to do just that, and I hope it will prove \n                                            a resource and an inspiration for others in similar pursuits.\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <div class=\"card-title-wrap bar-warning\">\n                                    <div class=\"card-title\">Educational Information</div>\n                                </div>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-block\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n                                            <ul class=\"no-list-style\">\n                                                <li class=\"mb-2\">\n                                                    <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Broklin Institute</a></span>\n                                                    <span class=\"grey line-height-0 display-block mb-2 font-small-2\">2008 - 2009</span>\n                                                    <span class=\"line-height-2 display-block overflow-hidden\">Professor: Leonardo Stagg. Six months of best Developing tools course.</span>\n                                                </li>\n                                                <li class=\"mb-2\">\n                                                    <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> The Ninja College </a></span>\n                                                    <span class=\"grey line-height-0 display-block mb-2 font-small-2\">2012 - 2013</span>\n                                                    <span class=\"line-height-2 display-block overflow-hidden\">Professor: Steve Ustreil. Gave me the best educational information for Ninja.</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n                                            <ul class=\"no-list-style\">\n                                                <li class=\"mb-2\">\n                                                    <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Ninja Developer</a></span>\n                                                    <span class=\"grey line-height-0 display-block mb-2 font-small-2\">2009-2011</span>\n                                                    <span class=\"line-height-2 display-block overflow-hidden\">Ninja Developer for the “PIXINVENT” creative studio. </span>\n                                                </li>\n                                                <li class=\"mb-2\">\n                                                    <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> Senior Ninja Developer</a></span>\n                                                    <span class=\"grey line-height-0 display-block mb-2 font-small-2\">2014-Now</span>\n                                                    <span class=\"line-height-2 display-block overflow-hidden\">Senior Ninja Developer for the “PIXINVENT” creative studio.</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--About div ends-->\n\n            <!--User Timeline div starts-->\n            <div id=\"timeline\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <div class=\"card-title-wrap bar-primary\">\n                            <div class=\"card-title\">User Timeline</div>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"card-block\">\n                            <div class=\"timeline\">\n                                <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">April 2018</div>\n                                <ul class=\"list-unstyled base-timeline activity-timeline\">\n\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-danger\">\n                                            <i class=\"fa fa-tasks\"></i>\n                                        </div>\n                                        <div class=\"act-time\">Today</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-danger\">Task Added</a>\n                                            <span class=\"d-block\">You have added task #15 Successfully to the project “Convex”</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            25 mins ago\n                                        </small>\n                                    </li>\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-primary\">\n                                            <i class=\"fa fa-handshake-o\"></i>\n                                        </div>\n                                        <div class=\"act-time\">Yesterday</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-primary\">Deal Added</a>\n                                            <span class=\"d-block\">Final deal with PIXINVENT is done and added to the “Next deal” list</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            23 hours ago\n                                        </small>\n                                    </li>\n                                </ul>\n\n                                <br>\n\n                                <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">March 2018</div>\n                                <ul class=\"list-unstyled base-timeline activity-timeline\">\n\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-dark\">\n                                            <i class=\"fa fa-tasks\"></i>\n                                        </div>\n                                        <div class=\"act-time\">09 March</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-dark\">Task Added</a>\n                                            <span class=\"d-block\">You have added task #11 Successfully to the project “Convex”</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            15 days ago\n                                        </small>\n                                    </li>\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-warning\">\n                                            <i class=\"fa fa-handshake-o\"></i>\n                                        </div>\n                                        <div class=\"act-time\">04 March</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-warning\">Deal Added</a>\n                                            <span class=\"d-block\">Final deal with ABC Company is done and added to the “Upcoming deal” list</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            20 days ago\n                                        </small>\n                                    </li>\n                                </ul>\n\n                                <br>\n\n                                <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">February 2018</div>\n                                <ul class=\"list-unstyled base-timeline activity-timeline\">\n\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-purple\">\n                                            <i class=\"fa fa-tasks\"></i>\n                                        </div>\n                                        <div class=\"act-time\">15 February</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-purple\">Task Added</a>\n                                            <span class=\"d-block\">You have added task #06 Successfully to the project “Convex”</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            1 month ago\n                                        </small>\n                                    </li>\n                                    <li class=\"\">\n                                        <div class=\"timeline-icon bg-danger\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </div>\n                                        <div class=\"act-time\">06 February</div>\n                                        <div class=\"base-timeline-info\">\n                                            <a href=\"#\" class=\"text-uppercase text-danger\">Event Created</a>\n                                            <span class=\"d-block\">Final deal with Geekslabs Company is done and added to the “New deal” list</span>\n                                        </div>\n                                        <small class=\"text-muted\">\n                                            1 month ago\n                                        </small>\n                                    </li>\n                                </ul>\n                                <br>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--User Timeline div ends-->\n        </div>\n    </div>\n</section>\n<!--User Profile Starts-->"

/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.service */ "./src/app/pages/full-pages/faq/faq.service.ts");



let FaqComponent = class FaqComponent {
    constructor(faqService) {
        this.faqService = faqService;
        this.faqs = faqService.faqs;
    }
    filter(searchValue) {
        if (searchValue === '') {
            this.faqs = this.faqService.faqs;
        }
        else {
            this.faqs = this.faqService.faqs.filter((faqs) => faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
        }
    }
};
FaqComponent.ctorParameters = () => [
    { type: _faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"] }
];
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/faq/faq.component.html"),
        providers: [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]],
        styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/full-pages/faq/faq.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]])
], FaqComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.model.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.model.ts ***!
  \***************************************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
class FAQ {
    constructor(faqId, title, content) {
        this.faqId = faqId;
        this.title = title;
        this.content = content;
    }
}
FAQ.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.service.ts ***!
  \*****************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _faq_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.model */ "./src/app/pages/full-pages/faq/faq.model.ts");



let FaqService = class FaqService {
    constructor() {
        this.faqs = [
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', `Aenean eget leo vel lorem tincidunt tempor sit amet non ex.
             Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
             Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](2, 'Vestibulum hendrerit eros id finibus fermentum?', `Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id.
             Etiam eu velit felis. Duis at vehicula ligula, et suscipit nunc.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](3, 'Nunc maximus turpis et vulputate euismod?', `Aenean eget leo vel lorem tincidunt tempor sit amet non ex.
            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
            Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](4, 'Vivamus pulvinar diam at viverra sagittis?', `Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id. Etiam eu velit felis.
             Duis at vehicula ligula, et suscipit nunc.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](5, 'Sed elementum nisl ac lectus luctus viverra?', `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](6, 'Nulla ut tortor et arcu porttitor sollicitudin a a odio?', `Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem. Cras eu viverra metus, fringilla tincidunt est. Aenean cursus,
             lacus ut posuere convallis, est dolor tincidunt nunc, nec viverra justo lorem a enim.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](7, 'Phasellus imperdiet eros vitae mi malesuada consectetur?', `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](8, 'Duis at metus eleifend, elementum mauris eu, tincidunt du?', `Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem. Cras eu viverra metus, fringilla tincidunt est.
             Aenean cursus, lacus ut posuere convallis, est dolor tincidunt nunc, nec viverra justo lorem a enim`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](9, 'Sed sit amet lacus sagittis, viverra ex at, volutpat leo?', `Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae.
             Mauris viverra nulla vitae pulvinar sollicitudin. Morbi non iaculis tortor. In hac habitasse platea dictumst`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](10, 'Proin facilisis magna congue mattis mattis?', `Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat, aliquam placerat risus at, fermentum efficitur nibh.
             Ut sed viverra neque, nec hendrerit tortor. `),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](11, 'Suspendisse eget nibh ut urna tincidunt efficitur?', `Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae. Mauris viverra nulla vitae pulvinar sollicitudin.
             Morbi non iaculis tortor. In hac habitasse platea dictumst`),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](12, 'Fusce sed velit ut nibh blandit posuere?', `Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat, aliquam placerat risus at, fermentum efficitur nibh.
             Ut sed viverra neque, nec hendrerit tortor. `),
        ];
    }
};
FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqService);



/***/ }),

/***/ "./src/app/pages/full-pages/full-pages-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/full-pages/full-pages-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FullPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function() { return FullPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/timeline-page.component */ "./src/app/pages/full-pages/timeline/timeline-page.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts");










const routes = [
    {
        path: '',
        children: [
            {
                path: 'gallery',
                component: _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"],
                data: {
                    title: 'Gallery Page'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__["InvoicePageComponent"],
                data: {
                    title: 'Invoice Page'
                }
            },
            {
                path: 'timeline',
                component: _timeline_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__["TimelinePageComponent"],
                data: {
                    title: 'Timeline Page'
                }
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_6__["UserProfilePageComponent"],
                data: {
                    title: 'User Profile Page'
                }
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                data: {
                    title: 'Search'
                }
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'kb',
                component: _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_9__["KnowledgeBaseComponent"],
                data: {
                    title: 'Knowledge Base'
                }
            }
        ]
    }
];
let FullPagesRoutingModule = class FullPagesRoutingModule {
};
FullPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FullPagesRoutingModule);



/***/ }),

/***/ "./src/app/pages/full-pages/full-pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/full-pages/full-pages.module.ts ***!
  \*******************************************************/
/*! exports provided: FullPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesModule", function() { return FullPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-pages-routing.module */ "./src/app/pages/full-pages/full-pages-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline-page.component */ "./src/app/pages/full-pages/timeline/timeline-page.component.ts");
/* harmony import */ var _timeline_component_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeline/component/timeline.component */ "./src/app/pages/full-pages/timeline/component/timeline.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts");
















let FullPagesModule = class FullPagesModule {
};
FullPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["FullPagesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ],
        declarations: [
            _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__["GalleryPageComponent"],
            _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__["InvoicePageComponent"],
            _timeline_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__["TimelinePageComponent"],
            _timeline_component_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"],
            _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_12__["UserProfilePageComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FaqComponent"],
            _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_15__["KnowledgeBaseComponent"]
        ]
    })
], FullPagesModule);



/***/ }),

/***/ "./src/app/pages/full-pages/gallery/gallery-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-pages/gallery/gallery-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/full-pages/gallery/gallery-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/full-pages/gallery/gallery-page.component.ts ***!
  \********************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryPageComponent = class GalleryPageComponent {
};
GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery-page',
        template: __webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/gallery/gallery-page.component.html"),
        styles: [__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/pages/full-pages/gallery/gallery-page.component.scss")]
    })
], GalleryPageComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/invoice/invoice-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-pages/invoice/invoice-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvaW52b2ljZS9pbnZvaWNlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/full-pages/invoice/invoice-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/full-pages/invoice/invoice-page.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageComponent", function() { return InvoicePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InvoicePageComponent = class InvoicePageComponent {
};
InvoicePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-page',
        template: __webpack_require__(/*! raw-loader!./invoice-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/invoice/invoice-page.component.html"),
        styles: [__webpack_require__(/*! ./invoice-page.component.scss */ "./src/app/pages/full-pages/invoice/invoice-page.component.scss")]
    })
], InvoicePageComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMva25vd2xlZGdlLWJhc2Uva25vd2xlZGdlLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts ***!
  \*****************************************************************************/
/*! exports provided: KnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseComponent", function() { return KnowledgeBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let KnowledgeBaseComponent = class KnowledgeBaseComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    GetDetails(content, titleText) {
        this.title = titleText;
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
        }, (reason) => {
        });
    }
};
KnowledgeBaseComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
KnowledgeBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-knowledge-base',
        template: __webpack_require__(/*! raw-loader!./knowledge-base.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html"),
        styles: [__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], KnowledgeBaseComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/search/search.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/full-pages/search/search.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/full-pages/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/full-pages/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/full-pages/search/search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/timeline/component/timeline.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/component/timeline.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvY29tcG9uZW50L3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/full-pages/timeline/component/timeline.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/component/timeline.component.ts ***!
  \***************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

var TimelineComponent_1;


let TimelineComponent = TimelineComponent_1 = class TimelineComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 80;
        this._dateFormat = 'dd.MM.yyyy';
        this._dateFormatTop = 'dd MMM';
        this._disabled = false;
        this._showContent = false;
    }
    set timelineWrapperWidth(value) {
        this._timelineWrapperWidth = value;
        this._cdr.detectChanges();
    }
    set eventsMinDistance(value) {
        this._eventsMinDistance = value;
        this.initView();
    }
    get timelineElements() {
        return this._timelineElements;
    }
    set timelineElements(value) {
        this._timelineElements = value;
        this.initView();
    }
    get dateFormat() {
        return this._dateFormat;
    }
    get dateFormatTop() {
        return this._dateFormatTop;
    }
    set dateFormat(value) {
        this._dateFormat = value;
        this.initView();
    }
    set dateFormatTop(value) {
        this._dateFormatTop = value;
        this.initView();
    }
    set disabled(value) {
        this._disabled = value;
    }
    get showContent() {
        return this._showContent;
    }
    set showContent(value) {
        this._showContent = value;
        this._cdr.detectChanges();
    }
    static pxToNumber(val) {
        return Number(val.replace('px', ''));
    }
    static getElementWidth(element) {
        const computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return TimelineComponent_1.pxToNumber(computedStyle.width);
    }
    static parentElement(element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        let parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    }
    static getTranslateValue(timeline) {
        let timelineStyle = window.getComputedStyle(timeline);
        let timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
            timelineStyle.getPropertyValue('-moz-transform') ||
            timelineStyle.getPropertyValue('-ms-transform') ||
            timelineStyle.getPropertyValue('-o-transform') ||
            timelineStyle.getPropertyValue('transform');
        let translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            let timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    }
    static setTransformValue(element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    }
    static dayDiff(first, second) {
        return Math.round(second.getTime() - first.getTime());
    }
    static minLapse(elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        let result = 0;
        for (let i = 1; i < elements.length; i++) {
            let distance = TimelineComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    }
    ngAfterViewInit() {
        this._cdr.detach();
        this._viewInitialized = true;
        this.initView();
    }
    onScrollClick(event, forward) {
        event.preventDefault();
        this.updateSlide(this.eventsWrapperWidth, forward);
        this._cdr.detectChanges();
    }
    onEventClick(event, selectedItem) {
        event.preventDefault();
        if (this._disabled) {
            return;
        }
        let element = event.target;
        // detect click on the a single event - show new event content
        let visibleItem = this._timelineElements[0];
        this._timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this._timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        this.updateFilling(element);
        this._cdr.detectChanges();
    }
    initTimeline(timeLines) {
        let eventsMinLapse = TimelineComponent_1.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    }
    updateSlide(timelineTotWidth, forward) {
        let translateValue = TimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
        }
    }
    updateTimelinePosition(element) {
        let eventStyle = window.getComputedStyle(element);
        let eventLeft = TimelineComponent_1.pxToNumber(eventStyle.getPropertyValue('left'));
        let translateValue = TimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
        }
    }
    translateTimeline(value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        TimelineComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
        console.log(value + '   ' + totWidth);
    }
    setTimelineWidth(elements, width, eventsMinLapse) {
        let timeSpan = 100;
        if (elements.length > 1) {
            timeSpan = TimelineComponent_1.dayDiff(elements[0].date, elements[elements.length - 1].date);
        }
        let timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        let aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        this.updateFilling(aHref);
        this.updateTimelinePosition(aHref);
        return this.eventsWrapperWidth;
    }
    updateFilling(element) {
        // change .filling-line length according to the selected event
        let eventStyle = window.getComputedStyle(element);
        let eventLeft = eventStyle.getPropertyValue('left');
        let eventWidth = eventStyle.getPropertyValue('width');
        let eventLeftNum = TimelineComponent_1.pxToNumber(eventLeft) + TimelineComponent_1.pxToNumber(eventWidth) / 2;
        let scaleValue = eventLeftNum / this.eventsWrapperWidth;
        TimelineComponent_1.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
    }
    initView() {
        if (!this._viewInitialized) {
            return;
        }
        if (this._timelineElements && this._timelineElements.length) {
            for (let i = 0; i < this._timelineElements.length; i++) {
                if (this._timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initTimeline(this._timelineElements);
        }
        this._cdr.detectChanges();
    }
    setDatePosition(elements, min, eventsMinLapse) {
        let timelineEventsArray = this.timelineEvents.toArray();
        let i = 0;
        for (let component of elements) {
            let distance = TimelineComponent_1.dayDiff(elements[0].date, component.date);
            let distanceNorm = Math.round(distance / eventsMinLapse);
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            let span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            let spanWidth = TimelineComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
            i++;
        }
    }
};
TimelineComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventsWrapper', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TimelineComponent.prototype, "eventsWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillingLine', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TimelineComponent.prototype, "fillingLine", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('timelineEvents'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TimelineComponent.prototype, "timelineEvents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], TimelineComponent.prototype, "timelineWrapperWidth", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], TimelineComponent.prototype, "eventsMinDistance", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], TimelineComponent.prototype, "timelineElements", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TimelineComponent.prototype, "dateFormat", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TimelineComponent.prototype, "dateFormatTop", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], TimelineComponent.prototype, "disabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], TimelineComponent.prototype, "showContent", null);
TimelineComponent = TimelineComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/timeline/component/timeline.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('contentState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    position: 'relative', 'z-index': 2, opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => active', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => right', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => left', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => active', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                    ]))
                ]),
            ])
        ],
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/pages/full-pages/timeline/component/timeline.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TimelineComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/timeline/timeline-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/timeline-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvdGltZWxpbmUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/full-pages/timeline/timeline-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/timeline-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: TimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageComponent", function() { return TimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelinePageComponent = class TimelinePageComponent {
    constructor() {
        this.content = `Sugar plum pastry pie tart marzipan gummi bears croissant apple pie topping. Biscuit wafer topping croissant pastry cookie jujubes. Chupa chups cake danish pie jelly halvah tootsie roll pie. Powder croissant jelly jujubes donut lollipop. Powder halvah sweet gummies cake biscuit. Cake sweet roll oat cake sweet roll. Pudding pudding muffin marshmallow donut apple pie jelly beans apple pie. Chupa chups candy dragée candy gummi bears danish jelly beans pie cake. Icing apple pie powder marshmallow.`;
        this.timeline = [
            { date: new Date(2017, 7, 11), selected: true, title: 'Horizontal Timeline', content: this.content },
            { date: new Date(2017, 8, 18), title: 'Event title here', content: this.content },
            { date: new Date(2017, 9, 20), title: 'Event title here', content: this.content },
            { date: new Date(2017, 10, 21), title: 'Event title here', content: this.content },
            { date: new Date(2017, 11, 9), title: 'Event title here', content: this.content },
            { date: new Date(2017, 12, 27), title: 'Event title here', content: this.content },
            { date: new Date(2018, 1, 10), title: 'Event title here', content: this.content },
            { date: new Date(2018, 3, 15), title: 'Event title here', content: this.content },
            { date: new Date(2018, 4, 12), title: 'Event title here', content: this.content },
            { date: new Date(2018, 5, 28), title: 'Event title here', content: this.content },
            { date: new Date(2018, 6, 3), title: 'Event title here', content: this.content },
        ];
    }
};
TimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline-page',
        template: __webpack_require__(/*! raw-loader!./timeline-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/timeline/timeline-page.component.html"),
        styles: [__webpack_require__(/*! ./timeline-page.component.scss */ "./src/app/pages/full-pages/timeline/timeline-page.component.scss")]
    })
], TimelinePageComponent);



/***/ }),

/***/ "./src/app/pages/full-pages/user-profile/user-profile-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/full-pages/user-profile/user-profile-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-menu .active {\n  border-bottom: 2px solid;\n  margin-bottom: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbC1wYWdlcy91c2VyLXByb2ZpbGUvQzpcXE15IEZpbGVzXFxNeSB3b3Jrc1xcYW5ndWxhclxcZnJlZWxhbmNlXFxjb2hvcmEvc3JjXFxhcHBcXHBhZ2VzXFxmdWxsLXBhZ2VzXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mdWxsLXBhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbWVudXtcbiAgICAuYWN0aXZle1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgfVxufSIsIi5wcm9maWxlLW1lbnUgLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/full-pages/user-profile/user-profile-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageComponent", function() { return UserProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfilePageComponent = class UserProfilePageComponent {
    constructor() {
        //Variable Declaration
        this.currentPage = "About";
    }
    ngOnInit() {
        // Horizontal Timeline js for user timeline
        // $.getScript('./assets/js/vertical-timeline.js');
    }
    showPage(page) {
        this.currentPage = page;
    }
};
UserProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile-page',
        template: __webpack_require__(/*! raw-loader!./user-profile-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/full-pages/user-profile/user-profile-page.component.html"),
        styles: [__webpack_require__(/*! ./user-profile-page.component.scss */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.scss")]
    })
], UserProfilePageComponent);



/***/ })

}]);
//# sourceMappingURL=pages-full-pages-full-pages-module-es2015.js.map