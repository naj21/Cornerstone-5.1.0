(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });

    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/*! exports provided: createPasswordValidationErrorTextObject, classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPasswordValidationErrorTextObject", function() { return createPasswordValidationErrorTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Set up Object with Error Messages on Password Validation. Please use messages in mentioned order
 * @param {string} empty defines error text for empty field
 * @param {string} confirm defines error text for empty confirmation field
 * @param {string} mismatch defines error text if confirm passford mismatches passford field
 * @param {string} invalid defines error text for invalid password charaters sequence
 * @return {object} messages or default texts if nothing is providing
 */

var createPasswordValidationErrorTextObject = function createPasswordValidationErrorTextObject(empty, confirm, mismatch, invalid) {
  return {
    onEmptyPasswordErrorText: empty,
    onConfirmPasswordErrorText: confirm,
    onMismatchPasswordErrorText: mismatch,
    onNotValidPasswordErrorText: invalid
  };
};
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   * @param {string} errorText describes errorMassage on email validation
   */
  setEmailValidation: function setEmailValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: errorText
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param {object} errorTextsObject
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, _ref, isOptional) {
    var onEmptyPasswordErrorText = _ref.onEmptyPasswordErrorText,
        onConfirmPasswordErrorText = _ref.onConfirmPasswordErrorText,
        onMismatchPasswordErrorText = _ref.onMismatchPasswordErrorText,
        onNotValidPasswordErrorText = _ref.onNotValidPasswordErrorText;
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onEmptyPasswordErrorText
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onNotValidPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onConfirmPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: onMismatchPasswordErrorText
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors, priceValidationErrorTexts) {
    if (priceValidationErrorTexts === void 0) {
      priceValidationErrorTexts = {};
    }

    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector; // eslint-disable-next-line object-curly-newline

    var _priceValidationError = priceValidationErrorTexts,
        onMinPriceError = _priceValidationError.onMinPriceError,
        onMaxPriceError = _priceValidationError.onMaxPriceError,
        minPriceNotEntered = _priceValidationError.minPriceNotEntered,
        maxPriceNotEntered = _priceValidationError.maxPriceNotEntered,
        onInvalidPrice = _priceValidationError.onInvalidPrice;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: onMinPriceError,
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: onMaxPriceError,
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: maxPriceNotEntered,
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: minPriceNotEntered,
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: onInvalidPrice,
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: errorText
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzLmpzIl0sIm5hbWVzIjpbImZvcm1zIiwiZW1haWwiLCJ2YWx1ZSIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJsZW5ndGgiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImNvbnRleHQiLCJhdHRycyIsInByb3AiLCJyZXN1bHQiLCJpdGVtIiwicmV0IiwibmFtZSIsInJlcGxhY2VtZW50QXR0cmlidXRlcyIsImlkIiwicmVwbGFjZVdpdGgiLCIkIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJyZW1vdmUiLCJwcmV2IiwiZmluZCIsImFwcGVuZCIsInJlcXVpcmVkIiwic2hvdyIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwidHlwZSIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJoaWRlIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJvcHRpb25zIiwiY29udGFpbmVyIiwicHVzaCIsInByZWZpeCIsInN0YXRlcyIsInN0YXRlT2JqIiwidXNlSWRGb3JTdGF0ZXMiLCJodG1sIiwiam9pbiIsImNhbGxiYWNrIiwib24iLCJldmVudCIsImNvdW50cnlOYW1lIiwiY3VycmVudFRhcmdldCIsInZhbCIsInV0aWxzIiwiYXBpIiwiY291bnRyeSIsImdldEJ5TmFtZSIsImVyciIsInJlc3BvbnNlIiwic2hvd0FsZXJ0TW9kYWwiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJkYXRhIiwibmV3RWxlbWVudCIsImlucHV0VGFnTmFtZXMiLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJlbXB0eSIsImNvbmZpcm0iLCJtaXNtYXRjaCIsImludmFsaWQiLCJvbkVtcHR5UGFzc3dvcmRFcnJvclRleHQiLCJvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dCIsIm9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dCIsIm9uTm90VmFsaWRQYXNzd29yZEVycm9yVGV4dCIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCIkZm9ybSIsIiRpbnB1dHMiLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJhZnRlciIsIlZhbGlkYXRvcnMiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJmaWVsZCIsImVycm9yVGV4dCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwicHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBRztBQUNWQyxPQURVLGlCQUNKQyxLQURJLEVBQ0c7QUFDVCxRQUFNQyxFQUFFLEdBQUcsWUFBWDtBQUNBLFdBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7QUFDSCxHQUpTOztBQU1WO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSUcsVUFYVSxvQkFXREgsS0FYQyxFQVdNO0FBQ1osV0FBTyxLQUFLSSxRQUFMLENBQWNKLEtBQWQsQ0FBUDtBQUNILEdBYlM7O0FBZVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lJLFVBckJVLG9CQXFCREosS0FyQkMsRUFxQk07QUFDWixXQUFPQSxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUF0QjtBQUNIO0FBdkJTLENBQWQ7QUEwQmVQLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU1EsaUJBQVQsQ0FBMkJDLFlBQTNCLEVBQXlDQyxPQUF6QyxFQUFrRDtBQUM5QyxNQUFNQyxLQUFLLEdBQUcsd0RBQVlGLFlBQVksQ0FBQ0csSUFBYixDQUFrQixZQUFsQixDQUFaLEVBQTZDLFVBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUN6RSxRQUFN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QU1zQyxrQkFBa0IsR0FBR3RILENBQUMsbUJBQWlCZ0YsS0FBSyxDQUFDeEMsSUFBTixDQUFXLFdBQVgsQ0FBakIsU0FBNUI7QUFFQStFLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZQyw0Q0FBRyxDQUFDQyxPQUFoQixFQUF5QkMsT0FBekIsQ0FBaUMsVUFBQzdJLEtBQUQsRUFBVztBQUN4QyxVQUFJd0ksa0JBQWtCLENBQUNNLFFBQW5CLENBQTRCSCw0Q0FBRyxDQUFDQyxPQUFKLENBQVk1SSxLQUFaLENBQTVCLENBQUosRUFBcUQ7QUFDakR3SSwwQkFBa0IsQ0FBQ08sV0FBbkIsQ0FBK0JKLDRDQUFHLENBQUNDLE9BQUosQ0FBWTVJLEtBQVosQ0FBL0I7QUFDSDtBQUNKLEtBSkQ7QUFLSDtBQXZMYyxDQUFuQiIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcbi8qKlxuICogU2V0IHVwIE9iamVjdCB3aXRoIEVycm9yIE1lc3NhZ2VzIG9uIFBhc3N3b3JkIFZhbGlkYXRpb24uIFBsZWFzZSB1c2UgbWVzc2FnZXMgaW4gbWVudGlvbmVkIG9yZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wdHkgZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBmaWVsZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpcm0gZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBjb25maXJtYXRpb24gZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtaXNtYXRjaCBkZWZpbmVzIGVycm9yIHRleHQgaWYgY29uZmlybSBwYXNzZm9yZCBtaXNtYXRjaGVzIHBhc3Nmb3JkIGZpZWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gaW52YWxpZCBkZWZpbmVzIGVycm9yIHRleHQgZm9yIGludmFsaWQgcGFzc3dvcmQgY2hhcmF0ZXJzIHNlcXVlbmNlXG4gKiBAcmV0dXJuIHtvYmplY3R9IG1lc3NhZ2VzIG9yIGRlZmF1bHQgdGV4dHMgaWYgbm90aGluZyBpcyBwcm92aWRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCA9IChlbXB0eSwgY29uZmlybSwgbWlzbWF0Y2gsIGludmFsaWQpID0+ICh7XG4gICAgb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0OiBlbXB0eSxcbiAgICBvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dDogY29uZmlybSxcbiAgICBvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQ6IG1pc21hdGNoLFxuICAgIG9uTm90VmFsaWRQYXNzd29yZEVycm9yVGV4dDogaW52YWxpZCxcbn0pO1xuXG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvclRleHQgZGVzY3JpYmVzIGVycm9yTWFzc2FnZSBvbiBlbWFpbCB2YWxpZGF0aW9uXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JUZXh0c09iamVjdFxuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCB7XG4gICAgICAgIG9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCwgb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsIG9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dCwgb25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgIH0sIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMsIHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgICAgICBjb25zdCB7IG9uTWluUHJpY2VFcnJvciwgb25NYXhQcmljZUVycm9yLCBtaW5QcmljZU5vdEVudGVyZWQsIG1heFByaWNlTm90RW50ZXJlZCwgb25JbnZhbGlkUHJpY2UgfSA9IHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==