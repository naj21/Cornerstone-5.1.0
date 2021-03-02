(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};
/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJ1cmxVdGlscyIsImJ1aWxkUXVlcnlTdHJpbmciLCJQYWdlTWFuYWdlciIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaWQiLCJhdHRyIiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwibGVuZ3RoIiwidmFsaWRhdG9yIiwibm9kIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInVuYmluZEV2ZW50cyIsIm9uIiwib25Qb3BTdGF0ZSIsImRvY3VtZW50IiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInRyaWdnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJ2YWx1ZSIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsInNob3dBbGVydE1vZGFsIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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QUFNMEQsb0JBQW9CLEdBQUc1SyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVU0SixJQUFWLENBQWUsb0NBQWYsQ0FBN0I7O0FBRUEsUUFBSWdCLG9CQUFvQixDQUFDMUUsTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEN5RSxtRUFBYyxDQUFDLGtEQUFELENBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFRSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay40LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgbW9kYWxPcGVuOiBmYWxzZSxcbn07XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzLCB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbkVycm9yTWVzc2FnZXMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFVybCk7XG4gICAgICAgIC8vIElmIHNlYXJjaFBhcmFtcyBkb2VzIG5vdCBjb250YWluIGEgcGFnZSB2YWx1ZSB0aGVuIG1vZGlmeSB1cmwgcXVlcnkgc3RyaW5nIHRvIGhhdmUgcGFnZT0xXG4gICAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcygncGFnZScpKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rVXJsID0gJCgnLnBhZ2luYXRpb24tbGluaycpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlID0gL3BhZ2U9WzAtOV0rL2k7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlua1VybCA9IGxpbmtVcmwucmVwbGFjZShyZSwgJ3BhZ2U9MScpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXBkYXRlZExpbmtVcmwpO1xuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9