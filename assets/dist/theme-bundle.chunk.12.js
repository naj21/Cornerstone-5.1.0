(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ "./assets/js/theme/cart.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_7__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    this.$overlay = $('[data-category] .loadingOverlay').hide();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      $(e.currentTarget).next().attr({
        role: 'status',
        'aria-live': 'polite'
      });
    });
    this.bindEvents();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    $('a.reset-btn').on('click', function () {
      $('span.reset-message').attr({
        role: 'status',
        'aria-live': 'polite'
      });
    });
    $('.cart-remove-all').on('click', function (event) {
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove items from cart
          new _cart__WEBPACK_IMPORTED_MODULE_4__["default"]().cartRemoveItems(_this2.$overlay, _this2.context.cartId);
        }
      });
      event.preventDefault();
    });
    this.ariaNotifyNoProducts();
  };

  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');

    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_6__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  _proto.addAllProductsToCart = function addAllProductsToCart(event) {
    var _this3 = this;

    var $addAllToCartBtn = $('[data-add-all]#form-action-addToCart');
    var originalBtnVal = $addAllToCartBtn.val();
    var waitMessage = $addAllToCartBtn.data('waitMessage');
    var _this$context = this.context,
        cartId = _this$context.cartId,
        categoryProducts = _this$context.categoryProducts;
    var successMsg = "Products successfully added to cart";
    var products = categoryProducts.filter(function (product) {
      return !product.has_options;
    });
    var cartQuantity = parseInt($('.cart-quantity').text()); // Do not do AJAX if browser doesn't support FormData

    if (window.FormData === undefined) {
      return;
    } // Prevent default


    event.preventDefault();

    if (!products.length) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: "You have no item without variant in this category. Select a product and pick a variant to add",
        icon: 'info'
      });
    }

    $addAllToCartBtn.val(waitMessage).prop('disabled', true);
    this.$overlay.show();

    var errorAction = function errorAction(error) {
      var tmp = document.createElement('DIV');
      tmp.innerHTML = error;
      $addAllToCartBtn.val(originalBtnVal).prop('disabled', false);

      _this3.$overlay.hide();

      return Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["showAlertModal"])(tmp.textContent || tmp.innerText);
    }; //Recursively add all items to cart


    var addItems = function addItems(formData, index) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.itemAdd(formData, function (err, response) {
        var errorMessage = err || response.error;

        if (errorMessage) {
          errorAction(errorMessage);
        }

        if (index == products.length - 1) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
            text: successMsg,
            icon: 'success'
          }).then(function () {
            window.location = response.data.cart_item.cart_url || _this3.context.urls.cart;
          });
        } else {
          index++;

          var _formData = new FormData();

          _formData.append('product_id', products[index].id);

          addItems(_formData, index);
        }
      });
    }; // Add items to cart


    if (!cartQuantity) {
      var formData = new FormData();
      formData.append('product_id', products[0].id);
      addItems(formData, 0);
    } else {
      fetch("https://ligk183p53.execute-api.us-east-2.amazonaws.com/default/cart/items?cart_id=" + cartId, {
        method: 'POST',
        body: JSON.stringify({
          line_items: products.map(function (product) {
            return {
              quantity: 1,
              product_id: product.id,
              list_price: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(product, 'price.without_tax.value')
            };
          })
        })
      }).then(function () {
        $addAllToCartBtn.val(originalBtnVal).prop('disabled', false);

        _this3.$overlay.hide();

        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: successMsg,
          icon: 'success'
        }).then(function () {
          window.location = _this3.context.urls.cart;
        });
      })["catch"](function (err) {
        errorAction(err);
      });
    }

    $addAllToCartBtn.next().attr({
      role: 'status',
      'aria-live': 'polite'
    });
  };

  _proto.bindEvents = function bindEvents() {
    var addAllProductsToCart = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(this.addAllProductsToCart, this);

    $('[data-add-all]#form-action-addToCart').on('click', function (event) {
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
        text: "Only items without variants will be added to cart",
        icon: 'info',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          addAllProductsToCart(event);
        }
      });
      event.preventDefault();
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIm9uUmVhZHkiLCIkb3ZlcmxheSIsIiQiLCJoaWRlIiwib24iLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJhdHRyIiwicm9sZSIsImJpbmRFdmVudHMiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxzIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsImV2ZW50Iiwic3RyaW5nIiwiZGF0YSIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiQ2FydFBhZ2UiLCJjYXJ0UmVtb3ZlSXRlbXMiLCJjYXJ0SWQiLCJwcmV2ZW50RGVmYXVsdCIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiZm9jdXMiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJhZGRBbGxQcm9kdWN0c1RvQ2FydCIsIiRhZGRBbGxUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsInZhbCIsIndhaXRNZXNzYWdlIiwiY2F0ZWdvcnlQcm9kdWN0cyIsInN1Y2Nlc3NNc2ciLCJmaWx0ZXIiLCJwcm9kdWN0IiwiaGFzX29wdGlvbnMiLCJjYXJ0UXVhbnRpdHkiLCJwYXJzZUludCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwicHJvcCIsInNob3ciLCJlcnJvckFjdGlvbiIsImVycm9yIiwidG1wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2hvd0FsZXJ0TW9kYWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImFkZEl0ZW1zIiwiZm9ybURhdGEiLCJpbmRleCIsInV0aWxzIiwiYXBpIiwiY2FydCIsIml0ZW1BZGQiLCJlcnIiLCJyZXNwb25zZSIsImVycm9yTWVzc2FnZSIsImxvY2F0aW9uIiwiY2FydF9pdGVtIiwiY2FydF91cmwiLCJhcHBlbmQiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5lX2l0ZW1zIiwibWFwIiwicXVhbnRpdHkiLCJwcm9kdWN0X2lkIiwibGlzdF9wcmljZSIsIkNhdGFsb2dQYWdlIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0lBRXFCQSxROzs7QUFDakIsb0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFDQSxVQUFLQyxvQkFBTCxHQUE0QkMsMEdBQTJCLENBQUNGLE9BQUQsQ0FBdkQ7QUFGaUI7QUFHcEI7Ozs7U0FFREcsTyxHQUFBLG1CQUFVO0FBQUE7O0FBQ04sU0FBS0MsUUFBTCxHQUFnQkMsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FDWEMsSUFEVyxFQUFoQjtBQUVBRCxLQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0UsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xESCxPQUFDLENBQUNHLENBQUMsQ0FBQ0MsYUFBSCxDQUFELENBQW1CQyxJQUFuQixHQUEwQkMsSUFBMUIsQ0FBK0I7QUFDM0JDLFlBQUksRUFBRSxRQURxQjtBQUUzQixxQkFBYTtBQUZjLE9BQS9CO0FBSUgsS0FMRDtBQU9BLFNBQUtDLFVBQUw7QUFFQUMsNEVBQWUsQ0FBQyxLQUFLZCxPQUFMLENBQWFlLElBQWQsQ0FBZjs7QUFFQSxRQUFJVixDQUFDLENBQUMsZ0JB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Q1gsWUFBRCxDQUE5QixDQUF0QjtBQUNBLE1BQU1jLGVBQWUsR0FBR1gsTUFBTSxDQUFDQyxJQUFQLENBQVlPLGdCQUFnQixDQUFDWCxZQUFELENBQTVCLEVBQTRDTCxHQUE1QyxDQUFnRCxVQUFBb0IsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLEdBQVYsRUFBZUMsR0FBZixFQUFKO0FBQUEsR0FBbkQsQ0FBeEI7QUFFQSxTQUFPSCxlQUFlLENBQUNJLE1BQWhCLENBQXVCLFVBQUNDLEdBQUQsRUFBTUosR0FBTixFQUFXVCxDQUFYLEVBQWlCO0FBQzNDYSxPQUFHLENBQUNKLEdBQUQsQ0FBSCxHQUFXSCxhQUFhLENBQUNOLENBQUQsQ0FBeEI7QUFDQSxXQUFPYSxHQUFQO0FBQ0gsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlILENBVk0sQzs7Ozs7Ozs7Ozs7QUNqQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNaQSxjQUFjLG1CQUFPLENBQUMscURBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxPQUFPLFNBQVMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgQ2FydFBhZ2UgZnJvbSAnLi9jYXJ0JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcbmltcG9ydCB7IGJpbmQsIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhdGVnb3J5XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTtcbiAgICAgICAgJCgnW2RhdGEtYnV0dG9uLXR5cGU9XCJhZGQtY2FydFwiXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgIHJvbGU6ICdzdGF0dXMnLFxuICAgICAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKVxuXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLmF0dHIoe1xuICAgICAgICAgICAgICAgIHJvbGU6ICdzdGF0dXMnLFxuICAgICAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUtYWxsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW1zIGZyb20gY2FydFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydFBhZ2UoKS5jYXJ0UmVtb3ZlSXRlbXModGhpcy4kb3ZlcmxheSwgdGhpcy5jb250ZXh0LmNhcnRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcbiAgICAgICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQWxsUHJvZHVjdHNUb0NhcnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFkZEFsbFRvQ2FydEJ0biA9ICQoJ1tkYXRhLWFkZC1hbGxdI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRBbGxUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZEFsbFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuICAgICAgICBjb25zdCB7Y2FydElkLCBjYXRlZ29yeVByb2R1Y3RzfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc01zZyA9IFwiUHJvZHVjdHMgc3VjY2Vzc2Z1bGx5IGFkZGVkIHRvIGNhcnRcIjtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBjYXRlZ29yeVByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+ICFwcm9kdWN0Lmhhc19vcHRpb25zKTtcbiAgICAgICAgY29uc3QgY2FydFF1YW50aXR5ID0gcGFyc2VJbnQoJCgnLmNhcnQtcXVhbnRpdHknKS50ZXh0KCkpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgbm8gaXRlbSB3aXRob3V0IHZhcmlhbnQgaW4gdGhpcyBjYXRlZ29yeS4gU2VsZWN0IGEgcHJvZHVjdCBhbmQgcGljayBhIHZhcmlhbnQgdG8gYWRkXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRBbGxUb0NhcnRCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgY29uc3QgZXJyb3JBY3Rpb24gPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yO1xuICAgICAgICAgICAgJGFkZEFsbFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9SZWN1cnNpdmVseSBhZGQgYWxsIGl0ZW1zIHRvIGNhcnRcbiAgICAgICAgY29uc3QgYWRkSXRlbXMgPSAoZm9ybURhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZvcm1EYXRhLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQWN0aW9uKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHByb2R1Y3RzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdWNjZXNzTXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2lkJywgIHByb2R1Y3RzW2luZGV4XS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZEl0ZW1zKGZvcm1EYXRhLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBcblxuICAgICAgICAvLyBBZGQgaXRlbXMgdG8gY2FydFxuICAgICAgICBpZighY2FydFF1YW50aXR5KSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2lkJywgIHByb2R1Y3RzWzBdLmlkKTtcbiAgICAgICAgICAgIGFkZEl0ZW1zKGZvcm1EYXRhLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vbGlnazE4M3A1My5leGVjdXRlLWFwaS51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2NhcnQvaXRlbXM/Y2FydF9pZD0ke2NhcnRJZH1gLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfaXRlbXM6IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0X3ByaWNlOiBnZXQocHJvZHVjdCwgJ3ByaWNlLndpdGhvdXRfdGF4LnZhbHVlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICRhZGRBbGxUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogc3VjY2Vzc01zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmNvbnRleHQudXJscy5jYXJ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yQWN0aW9uKGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgJGFkZEFsbFRvQ2FydEJ0bi5uZXh0KCkuYXR0cih7XG4gICAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgYWRkQWxsUHJvZHVjdHNUb0NhcnQgPSBiaW5kKHRoaXMuYWRkQWxsUHJvZHVjdHNUb0NhcnQsIHRoaXMpO1xuXG4gICAgICAgICQoJ1tkYXRhLWFkZC1hbGxdI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJPbmx5IGl0ZW1zIHdpdGhvdXQgdmFyaWFudHMgd2lsbCBiZSBhZGRlZCB0byBjYXJ0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEFsbFByb2R1Y3RzVG9DYXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9