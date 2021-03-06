/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/app.js":
/*!***************************!*\
  !*** ./assets/src/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-helpers */ "./assets/src/form-helpers.js");
/* harmony import */ var _form_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_helpers__WEBPACK_IMPORTED_MODULE_0__);
/**
 * App.js
 */


/***/ }),

/***/ "./assets/src/app.scss":
/*!*****************************!*\
  !*** ./assets/src/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/form-helpers.js":
/*!************************************!*\
  !*** ./assets/src/form-helpers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Form Helpers
 */

/**
 * Actor Form
 */
$('.js-add-actor-form').on('submit', function (e) {
  var _this = this;

  e.preventDefault();
  $(this).request('onSaveActor', {
    success: function success(data) {
      $.oc.flashMsg({
        text: data.message,
        class: data.type
      });

      if (data.type === 'success') {
        $(_this).find(':input').val('');
        $('#image-result').html('');
      }
    },
    flash: true
  });
});
/**
 * Contact Form
 */

$('.js-contact-form').on('ajaxSuccess', function (e, context, data, status, jqXHR) {
  // On Successful validation, remove contact form.
  if (data.status === 'message sent') {
    var $inputs = $(this).find(':input');
    $inputs.val('');
    this.remove();
  }
});
/**
 * Movie Filter
 * @TODO, this should be called by component, not theme.
 */

var $form = $('#movie-filter');
var $pageInput = $('#page-number');
var $filterSubmit = $('#filter-submit');
document.addEventListener('click', function (e) {
  if (e.target.closest('[data-page]')) {
    $pageInput.val(e.target.closest('[data-page]').getAttribute('data-page'));
    $form.submit();
  }
}); // Reset page when a new filter is applied.

$filterSubmit.on('click', function (e) {
  e.preventDefault();
  $pageInput.val(1);
  $form.submit();
});

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/src/app.js ./assets/src/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/paulallen/Documents/TMD/october/themes/example-theme/assets/src/app.js */"./assets/src/app.js");
module.exports = __webpack_require__(/*! /Users/paulallen/Documents/TMD/october/themes/example-theme/assets/src/app.scss */"./assets/src/app.scss");


/***/ })

/******/ });