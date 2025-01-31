"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_global_foundation_js-assets_js_theme_global_modal_js"],{

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalEvents: () => (/* binding */ ModalEvents),
/* harmony export */   alertModal: () => (/* binding */ alertModal),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   defaultModal: () => (/* binding */ defaultModal),
/* harmony export */   showAlertModal: () => (/* binding */ showAlertModal)
/* harmony export */ });
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal',
  loaded: 'loaded.data.custom'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  if ($content.length === 0) return;
  var $body = $("." + modalBodyClass, $content);
  if ($body.length === 0) return;
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.$preModalFocusedEl = null;
    this.focusTrap = null;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = $(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    this.$modal.trigger(ModalEvents.loaded);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.setupFocusTrap = function setupFocusTrap() {
    var _this = this;
    if (!this.$preModalFocusedEl) this.$preModalFocusedEl = $(document.activeElement);
    if (!this.focusTrap) {
      this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap(this.$modal[0], {
        escapeDeactivates: false,
        returnFocusOnDeactivate: false,
        allowOutsideClick: true,
        fallbackFocus: function fallbackFocus() {
          var fallbackNode = _this.$preModalFocusedEl && _this.$preModalFocusedEl.length ? _this.$preModalFocusedEl[0] : $('[data-header-logo-link]')[0];
          return fallbackNode;
        }
      });
    }
    this.focusTrap.deactivate();
    this.focusTrap.activate();
  };
  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
    this.clearContent();
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
    if (this.focusTrap) this.focusTrap.deactivate();
    if (this.$preModalFocusedEl) this.$preModalFocusedEl.focus();
    this.$preModalFocusedEl = null;
  };
  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    var _this2 = this;
    if (this.pending) {
      this.$modal.one(ModalEvents.loaded, function () {
        if (_this2.$modal.hasClass('open')) _this2.setupFocusTrap();
      });
    } else {
      this.setupFocusTrap();
    }
    restrainContentHeight(this.$content);
  };
  _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
  return Modal;
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  return modalFactory('#modal')[0];
}

/*
 * Return the default alert modal
 */
function alertModal() {
  return modalFactory('#alert-modal')[0];
}

/*
 * Display the given message in the default alert modal
 */
function showAlertModal(message, options) {
  if (options === void 0) {
    options = {};
  }
  var modal = alertModal();
  var $cancelBtn = modal.$modal.find('.cancel');
  var $confirmBtn = modal.$modal.find('.confirm');
  var _options = options,
    _options$icon = _options.icon,
    icon = _options$icon === void 0 ? 'error' : _options$icon,
    _options$$preModalFoc = _options.$preModalFocusedEl,
    $preModalFocusedEl = _options$$preModalFoc === void 0 ? null : _options$$preModalFoc,
    showCancelButton = _options.showCancelButton,
    onConfirm = _options.onConfirm;
  if ($preModalFocusedEl) {
    modal.$preModalFocusedEl = $preModalFocusedEl;
  }
  modal.open();
  modal.$modal.find('.alert-icon').hide();
  if (icon === 'error') {
    modal.$modal.find('.error-icon').show();
  } else if (icon === 'warning') {
    modal.$modal.find('.warning-icon').show();
  }
  modal.updateContent("<span>" + message + "</span>");
  if (onConfirm) {
    $confirmBtn.on('click', onConfirm);
    modal.$modal.one(ModalEvents.closed, function () {
      $confirmBtn.off('click', onConfirm);
    });
  }
  if (showCancelButton) {
    $cancelBtn.show();
  } else {
    $cancelBtn.hide();
  }
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
  return RevealClose;
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZGFsX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDRjtBQUNIO0FBQ3BCO0FBQ2E7QUFFaEQsNkJBQWUsb0NBQVVFLFFBQVEsRUFBRTtFQUMvQkEsUUFBUSxDQUFDQyxVQUFVLENBQUM7SUFDaEJDLFFBQVEsRUFBRTtNQUNOO01BQ0FDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKQyxRQUFRLEVBQUUsa0JBQWtCO01BQzVCQyxtQkFBbUIsRUFBRSxhQUFhO01BQ2xDQyx5QkFBeUIsRUFBRTtJQUMvQixDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNETCxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDLENBQUM7RUFFRkwsa0RBQVksQ0FBQyxlQUFlLEVBQUU7SUFBRVcsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztFQUNyREQseURBQWtCLENBQUMscUJBQXFCLEVBQUU7SUFBRVUsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztBQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnNDO0FBQ0U7QUFFeEMsSUFBTVcsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDNUMsSUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDbkMsSUFBTUMsaUJBQWlCLEdBQUcsZUFBZTtBQUV6QyxJQUFNQyxXQUFXLEdBQUc7RUFDaEJDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxLQUFLLEVBQUUsY0FBYztFQUNyQkMsTUFBTSxFQUFFO0FBQ1osQ0FBQztBQUVNLElBQU1DLFdBQVcsR0FBRztFQUN2QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QkMsSUFBSSxFQUFFLG1CQUFtQjtF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dGhlbWUvZ2xvYmFsL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL21vZGFsLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9yZXZlYWwtY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24udGFiJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHJldmVhbENsb3NlRmFjdG9yeSBmcm9tICcuL3JldmVhbC1jbG9zZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcclxuICAgICRlbGVtZW50LmZvdW5kYXRpb24oe1xyXG4gICAgICAgIGRyb3Bkb3duOiB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpZnkgdGhlIGNsYXNzIHVzZWQgZm9yIGFjdGl2ZSBkcm9wZG93bnNcclxuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtb3BlbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZlYWw6IHtcclxuICAgICAgICAgICAgYmdfY2xhc3M6ICdtb2RhbC1iYWNrZ3JvdW5kJyxcclxuICAgICAgICAgICAgZGlzbWlzc19tb2RhbF9jbGFzczogJ21vZGFsLWNsb3NlJyxcclxuICAgICAgICAgICAgY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljazogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhYjoge1xyXG4gICAgICAgICAgICBhY3RpdmVfY2xhc3M6ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcclxuICAgIHJldmVhbENsb3NlRmFjdG9yeSgnW2RhdGEtcmV2ZWFsLWNsb3NlXScsIHsgJGNvbnRleHQ6ICRlbGVtZW50IH0pO1xyXG59XHJcbiIsImltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XHJcbmltcG9ydCAqIGFzIGZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJztcclxuXHJcbmNvbnN0IGJvZHlBY3RpdmVDbGFzcyA9ICdoYXMtYWN0aXZlTW9kYWwnO1xyXG5jb25zdCBsb2FkaW5nT3ZlcmxheUNsYXNzID0gJ2xvYWRpbmdPdmVybGF5JztcclxuY29uc3QgbW9kYWxCb2R5Q2xhc3MgPSAnbW9kYWwtYm9keSc7XHJcbmNvbnN0IG1vZGFsQ29udGVudENsYXNzID0gJ21vZGFsLWNvbnRlbnQnO1xyXG5cclxuY29uc3QgU2l6ZUNsYXNzZXMgPSB7XHJcbiAgICBzbWFsbDogJ21vZGFsLS1zbWFsbCcsXHJcbiAgICBsYXJnZTogJ21vZGFsLS1sYXJnZScsXHJcbiAgICBub3JtYWw6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsRXZlbnRzID0ge1xyXG4gICAgY2xvc2U6ICdjbG9zZS5mbmR0bi5yZXZlYWwnLFxyXG4gICAgY2xvc2VkOiAnY2xvc2VkLmZuZHRuLnJldmVhbCcsXHJcbiAgICBvcGVuOiAnb3Blbi5mbmR0bi5yZXZlYWwnLFxyXG4gICAgb3BlbmVkOiAnb3BlbmVkLmZuZHRuLnJldmVhbCcsXHJcbiAgICBsb2FkZWQ6ICdsb2FkZWQuZGF0YS5jdXN0b20nLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U2l6ZUZyb21Nb2RhbCgkbW9kYWwpIHtcclxuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpKSB7XHJcbiAgICAgICAgcmV0dXJuICdzbWFsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRtb2RhbC5oYXNDbGFzcyhTaXplQ2xhc3Nlcy5sYXJnZSkpIHtcclxuICAgICAgICByZXR1cm4gJ2xhcmdlJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ25vcm1hbCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KG11bHRpcGxlciA9IDEpIHtcclxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuICAgIHJldHVybiB2aWV3cG9ydEhlaWdodCAqIG11bHRpcGxlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcE1vZGFsQm9keShjb250ZW50KSB7XHJcbiAgICBjb25zdCAkbW9kYWxCb2R5ID0gJCgnPGRpdj4nKTtcclxuXHJcbiAgICAkbW9kYWxCb2R5XHJcbiAgICAgICAgLmFkZENsYXNzKG1vZGFsQm9keUNsYXNzKVxyXG4gICAgICAgIC5odG1sKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiAkbW9kYWxCb2R5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0cmFpbkNvbnRlbnRIZWlnaHQoJGNvbnRlbnQpIHtcclxuICAgIGlmICgkY29udGVudC5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCAkYm9keSA9ICQoYC4ke21vZGFsQm9keUNsYXNzfWAsICRjb250ZW50KTtcclxuXHJcbiAgICBpZiAoJGJvZHkubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm9keUhlaWdodCA9ICRib2R5Lm91dGVySGVpZ2h0KCk7XHJcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub3V0ZXJIZWlnaHQoKTtcclxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gZ2V0Vmlld3BvcnRIZWlnaHQoMC45KTtcclxuICAgIGNvbnN0IG1heEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gKGNvbnRlbnRIZWlnaHQgLSBib2R5SGVpZ2h0KTtcclxuXHJcbiAgICAkYm9keS5jc3MoJ21heC1oZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RhbENvbnRlbnQoJG1vZGFsKSB7XHJcbiAgICBsZXQgJGNvbnRlbnQgPSAkKGAuJHttb2RhbENvbnRlbnRDbGFzc31gLCAkbW9kYWwpO1xyXG5cclxuICAgIGlmICgkY29udGVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0NvbnRlbnQgPSAkbW9kYWwuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnQgPSAkKCc8ZGl2PicpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhtb2RhbENvbnRlbnRDbGFzcylcclxuICAgICAgICAgICAgLmFwcGVuZChleGlzdGluZ0NvbnRlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9hZGluZ092ZXJsYXkoJG1vZGFsKSB7XHJcbiAgICBsZXQgJGxvYWRpbmdPdmVybGF5ID0gJChgLiR7bG9hZGluZ092ZXJsYXlDbGFzc31gLCAkbW9kYWwpO1xyXG5cclxuICAgIGlmICgkbG9hZGluZ092ZXJsYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJGxvYWRpbmdPdmVybGF5ID0gJCgnPGRpdj4nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGluZ092ZXJsYXlDbGFzcylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRtb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRsb2FkaW5nT3ZlcmxheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcXVpcmUgZm91bmRhdGlvbi5yZXZlYWxcclxuICogRGVjb3JhdGUgZm91bmRhdGlvbi5yZXZlYWwgd2l0aCBhZGRpdGlvbmFsIG1ldGhvZHNcclxuICogQHBhcmFtIHtqUXVlcnl9ICRtb2RhbFxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwge1xyXG4gICAgICAgIHNpemUgPSBudWxsLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwgPSAkbW9kYWw7XHJcbiAgICAgICAgdGhpcy4kY29udGVudCA9IGNyZWF0ZU1vZGFsQ29udGVudCh0aGlzLiRtb2RhbCk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9IGNyZWF0ZUxvYWRpbmdPdmVybGF5KHRoaXMuJG1vZGFsKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTaXplID0gc2l6ZSB8fCBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm9uTW9kYWxPcGVuID0gdGhpcy5vbk1vZGFsT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW5lZCA9IHRoaXMub25Nb2RhbE9wZW5lZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlID0gdGhpcy5vbk1vZGFsQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZWQgPSB0aGlzLm9uTW9kYWxDbG9zZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8qIFNUUkYtMjQ3MSAtIE11bHRpcGxlIFdpc2ggTGlzdHMgLSBwcmV2ZW50cyBkb3VibGUtZmlyaW5nXHJcbiAgICAgICAgICogb2YgZm91bmRhdGlvbi5kcm9wZG93biBjbGljay5mbmR0bi5kcm9wZG93biBldmVudCAqL1xyXG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudS1idXR0b24nLCBlID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGVuZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGVuZGluZyhwZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcGVuZGluZyA9IHBlbmRpbmc7XHJcblxyXG4gICAgICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2l6ZShzaXplKSB7XHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuJG1vZGFsXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhTaXplQ2xhc3Nlcy5zbWFsbClcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLmxhcmdlKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoU2l6ZUNsYXNzZXNbc2l6ZV0gfHwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMub25Nb2RhbENsb3NlKTtcclxuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZWQsIHRoaXMub25Nb2RhbENsb3NlZCk7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbiwgdGhpcy5vbk1vZGFsT3Blbik7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbmVkLCB0aGlzLm9uTW9kYWxPcGVuZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oe1xyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgcGVuZGluZyA9IHRydWUsXHJcbiAgICAgICAgY2xlYXJDb250ZW50ID0gdHJ1ZSxcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IHBlbmRpbmc7XHJcblxyXG4gICAgICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xlYXJDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuJG1vZGFsLmZvdW5kYXRpb24oJ3JldmVhbCcsICdjbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICAgICAgbGV0ICRjb250ZW50ID0gJChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHdyYXApIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQgPSB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCRjb250ZW50KTtcclxuICAgICAgICB0aGlzLiRtb2RhbC50cmlnZ2VyKE1vZGFsRXZlbnRzLmxvYWRlZCk7XHJcblxyXG4gICAgICAgIHJlc3RyYWluQ29udGVudEhlaWdodCh0aGlzLiRjb250ZW50KTtcclxuICAgICAgICBmb3VuZGF0aW9uKHRoaXMuJGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ29udGVudCgpIHtcclxuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRm9jdXNUcmFwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwpIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGZvY3VzVHJhcC5jcmVhdGVGb2N1c1RyYXAodGhpcy4kbW9kYWxbMF0sIHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tGb2N1czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrTm9kZSA9IHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsICYmIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCgnW2RhdGEtaGVhZGVyLWxvZ28tbGlua10nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbGxiYWNrTm9kZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb2RhbENsb3NlKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kYWxDbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCkgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kYWxPcGVuKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kYWxPcGVuZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMubG9hZGVkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkgdGhpcy5zZXR1cEZvY3VzVHJhcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwRm9jdXNUcmFwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbW9kYWxzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxyXG4gKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEZhY3Rvcnkoc2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXScsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgJG1vZGFscyA9ICQoc2VsZWN0b3IsIG9wdGlvbnMuJGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAkbW9kYWxzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gJ21vZGFsSW5zdGFuY2UnO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZE1vZGFsID0gJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXkpO1xyXG5cclxuICAgICAgICBpZiAoY2FjaGVkTW9kYWwgaW5zdGFuY2VvZiBNb2RhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkTW9kYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgkbW9kYWwsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAkbW9kYWwuZGF0YShpbnN0YW5jZUtleSwgbW9kYWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW9kYWw7XHJcbiAgICB9KS50b0FycmF5KCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBwYWdlIG1vZGFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1vZGFsKCkge1xyXG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XHJcbn1cclxuXHJcbi8qXHJcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBhbGVydCBtb2RhbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0TW9kYWwoKSB7XHJcbiAgICByZXR1cm4gbW9kYWxGYWN0b3J5KCcjYWxlcnQtbW9kYWwnKVswXTtcclxufVxyXG5cclxuLypcclxuICogRGlzcGxheSB0aGUgZ2l2ZW4gbWVzc2FnZSBpbiB0aGUgZGVmYXVsdCBhbGVydCBtb2RhbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBhbGVydE1vZGFsKCk7XHJcbiAgICBjb25zdCAkY2FuY2VsQnRuID0gbW9kYWwuJG1vZGFsLmZpbmQoJy5jYW5jZWwnKTtcclxuICAgIGNvbnN0ICRjb25maXJtQnRuID0gbW9kYWwuJG1vZGFsLmZpbmQoJy5jb25maXJtJyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaWNvbiA9ICdlcnJvcicsXHJcbiAgICAgICAgJHByZU1vZGFsRm9jdXNlZEVsID0gbnVsbCxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uLFxyXG4gICAgICAgIG9uQ29uZmlybSxcclxuICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgIGlmICgkcHJlTW9kYWxGb2N1c2VkRWwpIHtcclxuICAgICAgICBtb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkcHJlTW9kYWxGb2N1c2VkRWw7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwub3BlbigpO1xyXG4gICAgbW9kYWwuJG1vZGFsLmZpbmQoJy5hbGVydC1pY29uJykuaGlkZSgpO1xyXG5cclxuICAgIGlmIChpY29uID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgbW9kYWwuJG1vZGFsLmZpbmQoJy5lcnJvci1pY29uJykuc2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChpY29uID09PSAnd2FybmluZycpIHtcclxuICAgICAgICBtb2RhbC4kbW9kYWwuZmluZCgnLndhcm5pbmctaWNvbicpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RhbC51cGRhdGVDb250ZW50KGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApO1xyXG5cclxuICAgIGlmIChvbkNvbmZpcm0pIHtcclxuICAgICAgICAkY29uZmlybUJ0bi5vbignY2xpY2snLCBvbkNvbmZpcm0pO1xyXG5cclxuICAgICAgICBtb2RhbC4kbW9kYWwub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkY29uZmlybUJ0bi5vZmYoJ2NsaWNrJywgb25Db25maXJtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2hvd0NhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICRjYW5jZWxCdG4uc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkY2FuY2VsQnRuLmhpZGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCByZXZlYWxDbG9zZUF0dHIgPSAncmV2ZWFsQ2xvc2UnO1xyXG5jb25zdCByZXZlYWxDbG9zZVNlbGVjdG9yID0gYFtkYXRhLSR7cmV2ZWFsQ2xvc2VBdHRyfV1gO1xyXG5jb25zdCByZXZlYWxTZWxlY3RvciA9ICdbZGF0YS1yZXZlYWxdJztcclxuXHJcbmNsYXNzIFJldmVhbENsb3NlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRidXR0b24pIHtcclxuICAgICAgICB0aGlzLiRidXR0b24gPSAkYnV0dG9uO1xyXG4gICAgICAgIHRoaXMubW9kYWxJZCA9ICRidXR0b24uZGF0YShyZXZlYWxDbG9zZUF0dHIpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZGFsKCkge1xyXG4gICAgICAgIGxldCAkbW9kYWw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGFsSWQpIHtcclxuICAgICAgICAgICAgJG1vZGFsID0gJChgIyR7dGhpcy5tb2RhbElkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RhbCA9IHRoaXMuJGJ1dHRvbi5wYXJlbnRzKHJldmVhbFNlbGVjdG9yKS5lcSgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAkbW9kYWwuZGF0YSgnbW9kYWxJbnN0YW5jZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kYnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyBtb2RhbCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICogRXh0ZW5kIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggdGhlIGFiaWxpdHkgdG8gY2xvc2UgYSBtb2RhbCBieSBjbGlja2luZyBvbiBhbnkgb2YgaXRzIGNoaWxkIGVsZW1lbnRcclxuICogd2l0aCBkYXRhLXJldmVhbC1jbG9zZSBhdHRyaWJ1dGUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIDxkaXYgZGF0YS1yZXZlYWwgaWQ9XCJoZWxsb01vZGFsXCI+XHJcbiAqICAgPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT5Db250aW51ZTwvYnV0dG9uPlxyXG4gKiA8L2Rpdj5cclxuICpcclxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj48L2Rpdj5cclxuICogPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT1cImhlbGxvTW9kYWxcIj5Db250aW51ZTwvYnV0dG9uPlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZWFsQ2xvc2VGYWN0b3J5KHNlbGVjdG9yID0gcmV2ZWFsQ2xvc2VTZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCAkYnV0dG9ucyA9ICQoc2VsZWN0b3IsIG9wdGlvbnMuJGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAkYnV0dG9ucy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtyZXZlYWxDbG9zZUF0dHJ9SW5zdGFuY2VgO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEJ1dHRvbiA9ICRidXR0b24uZGF0YShpbnN0YW5jZUtleSk7XHJcblxyXG4gICAgICAgIGlmIChjYWNoZWRCdXR0b24gaW5zdGFuY2VvZiBSZXZlYWxDbG9zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IFJldmVhbENsb3NlKCRidXR0b24pO1xyXG5cclxuICAgICAgICAkYnV0dG9uLmRhdGEoaW5zdGFuY2VLZXksIGJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9KS50b0FycmF5KCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vZGFsRmFjdG9yeSIsInJldmVhbENsb3NlRmFjdG9yeSIsIiRlbGVtZW50IiwiZm91bmRhdGlvbiIsImRyb3Bkb3duIiwiYWN0aXZlX2NsYXNzIiwicmV2ZWFsIiwiYmdfY2xhc3MiLCJkaXNtaXNzX21vZGFsX2NsYXNzIiwiY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljayIsInRhYiIsIiRjb250ZXh0IiwiZm9jdXNUcmFwIiwiYm9keUFjdGl2ZUNsYXNzIiwibG9hZGluZ092ZXJsYXlDbGFzcyIsIm1vZGFsQm9keUNsYXNzIiwibW9kYWxDb250ZW50Q2xhc3MiLCJTaXplQ2xhc3NlcyIsInNtYWxsIiwibGFyZ2UiLCJub3JtYWwiLCJNb2RhbEV2ZW50cyIsImNsb3NlIiwiY2xvc2VkIiwib3BlbiIsIm9wZW5lZCIsImxvYWRlZCIsImdldFNpemVGcm9tTW9kYWwiLCIkbW9kYWwiLCJoYXNDbGFzcyIsImdldFZpZXdwb3J0SGVpZ2h0IiwibXVsdGlwbGVyIiwidmlld3BvcnRIZWlnaHQiLCIkIiwid2luZG93IiwiaGVpZ2h0Iiwid3JhcE1vZGFsQm9keSIsImNvbnRlbnQiLCIkbW9kYWxCb2R5IiwiYWRkQ2xhc3MiLCJodG1sIiwicmVzdHJhaW5Db250ZW50SGVpZ2h0IiwiJGNvbnRlbnQiLCJsZW5ndGgiLCIkYm9keSIsImJvZHlIZWlnaHQiLCJvdXRlckhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJjc3MiLCJjcmVhdGVNb2RhbENvbnRlbnQiLCJleGlzdGluZ0NvbnRlbnQiLCJjaGlsZHJlbiIsImFwcGVuZCIsImFwcGVuZFRvIiwiY3JlYXRlTG9hZGluZ092ZXJsYXkiLCIkbG9hZGluZ092ZXJsYXkiLCJNb2RhbCIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCIkb3ZlcmxheSIsImRlZmF1bHRTaXplIiwicGVuZGluZyIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsIm9uTW9kYWxPcGVuIiwiYmluZCIsIm9uTW9kYWxPcGVuZWQiLCJvbk1vZGFsQ2xvc2UiLCJvbk1vZGFsQ2xvc2VkIiwiYmluZEV2ZW50cyIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9wcm90byIsInByb3RvdHlwZSIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkcGVuZGluZyIsIl9yZWYyJGNsZWFyQ29udGVudCIsImNsZWFyQ29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJHdyYXAiLCJ3cmFwIiwidHJpZ2dlciIsInNldHVwRm9jdXNUcmFwIiwiX3RoaXMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjcmVhdGVGb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJmYWxsYmFja0ZvY3VzIiwiZmFsbGJhY2tOb2RlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRlIiwicmVtb3ZlQ2xhc3MiLCJmb2N1cyIsIl90aGlzMiIsIm9uZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl9wZW5kaW5nIiwic2V0Iiwic2hvdyIsImhpZGUiLCJfc2l6ZSIsInNlbGVjdG9yIiwib3B0aW9ucyIsIiRtb2RhbHMiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZE1vZGFsIiwiZGF0YSIsIm1vZGFsIiwidG9BcnJheSIsImRlZmF1bHRNb2RhbCIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIm1lc3NhZ2UiLCIkY2FuY2VsQnRuIiwiZmluZCIsIiRjb25maXJtQnRuIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRpY29uIiwiaWNvbiIsIl9vcHRpb25zJCRwcmVNb2RhbEZvYyIsInNob3dDYW5jZWxCdXR0b24iLCJvbkNvbmZpcm0iLCJvZmYiLCJyZXZlYWxDbG9zZUF0dHIiLCJyZXZlYWxDbG9zZVNlbGVjdG9yIiwicmV2ZWFsU2VsZWN0b3IiLCJSZXZlYWxDbG9zZSIsIiRidXR0b24iLCJtb2RhbElkIiwib25DbGljayIsInVuYmluZEV2ZW50cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRzIiwiZXEiLCIkYnV0dG9ucyIsImNhY2hlZEJ1dHRvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=
