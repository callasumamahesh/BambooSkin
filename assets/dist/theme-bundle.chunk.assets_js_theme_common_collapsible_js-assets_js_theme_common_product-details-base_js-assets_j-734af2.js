"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_collapsible_js-assets_js_theme_common_product-details-base_js-assets_j-734af2"],{

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleEvents: () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {String} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {String} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-label', this._getToggleAriaLabelText($toggle)).attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto._getToggleAriaLabelText = function _getToggleAriaLabelText($toggle) {
    var $textToggleChildren = $toggle.children().filter(function (__, child) {
      return $(child).text().trim();
    });
    var $ariaLabelTarget = $textToggleChildren.length ? $textToggleChildren.first() : $toggle;
    return $($ariaLabelTarget).text().trim();
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return this.$target.is(':hidden') && !this.$target.hasClass(this.openClassName);
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
  return Collapsible;
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [overrideOptions]
 * @param {Object} [overrideOptions.$context]
 * @param {String} [overrideOptions.disabledBreakpoint]
 * @param {Object} [overrideOptions.disabledState]
 * @param {Object} [overrideOptions.enabledState]
 * @param {String} [overrideOptions.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mediaQueryListFactory)
/* harmony export */ });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  large: 1261,
  medium: 801,
  small: 551
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_0__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_1__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockDefaultMessage = this.context.outOfStockDefaultMessage;
    var outOfStockMessage = data.out_of_stock_message;
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    if (outOfStockMessage) {
      outOfStockMessage = " (" + outOfStockMessage + ")";
    } else {
      outOfStockMessage = " (" + outOfStockDefaultMessage + ")";
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope),
      $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (data.price instanceof Object) {
      this.updatePriceView(viewModel, data.price);
    }
    if (data.weight instanceof Object) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && typeof data.stock === 'number') {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);
    this.updateWalletButtonsView(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
      $messageBox.addClass("mob-alertBox");
    } else {
      $messageBox.hide();
      $messageBox.removeClass("mob-alertBox");
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.updateWalletButtonsView = function updateWalletButtonsView(data) {
    this.toggleWalletButtonsVisibility(data.purchasable && data.instock);
  };
  _proto.toggleWalletButtonsVisibility = function toggleWalletButtonsVisibility(shouldShow) {
    var viewModel = this.getViewModel(this.$scope);
    if (shouldShow) {
      viewModel.$walletButtons.show();
    } else {
      viewModel.$walletButtons.hide();
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY29sbGFwc2libGVfanMtYXNzZXRzX2pzX3RoZW1lX2NvbW1vbl9wcm9kdWN0LWRldGFpbHMtYmFzZV9qcy1hc3NldHNfai03MzRhZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQztBQUUzQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxjQUFjLEVBQUVDLE9BQU8sRUFBSztFQUNyREQsY0FBYyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUNGLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtGLE9BQU8sRUFBRTtNQUNqQkksS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUFILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUMsV0FBVyxFQUFFQyxVQUFVLEVBQUs7RUFDN0QsUUFBUSxJQUFJ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T0FBTyxDQUFDcUo7SUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFFRlQsZ0JBQWdCLENBQUMvUSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUF5RSxLQUFLLEVBQUk7TUFDbkNxRSxNQUFJLENBQUNrSSxvQkFBb0IsQ0FBQ1MsWUFBWSxDQUFDLENBQUM7TUFFeEMsSUFBSTNJLE1BQUksQ0FBQ2tJLG9CQUFvQixDQUFDVSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDM0M7TUFDSjtNQUVBak4sS0FBSyxDQUFDbEYsY0FBYyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOEMsTUFBQSxDQUVEc1AsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOLElBQU1DLGdCQUFnQixHQUFHdlQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBRTVDLElBQUlBLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDYyxNQUFNLEVBQUU7TUFDeEN1USx1RkFBdUIsQ0FBQyxDQUFDO0lBQzdCO0lBRUEsSUFBSWtDLGdCQUFnQixDQUFDelMsTUFBTSxFQUFFO01BQ3pCLElBQUksQ0FBQzJSLDZCQUE2QixDQUFDYyxnQkFBZ0IsQ0FBQztJQUN4RDtJQUVBLElBQUksQ0FBQ2xCLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFMLFFBQUE7QUFBQSxFQW5FaUNGLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL3JhZGlvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY29sbGFwc2libGUuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy1iYXNlLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9pZS1oZWxwZXJzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XHJcbiAgICBSRVRVUk46IDEzLFxyXG4gICAgU1BBQ0U6IDMyLFxyXG4gICAgTEVGVDogMzcsXHJcbiAgICBVUDogMzgsXHJcbiAgICBSSUdIVDogMzksXHJcbiAgICBET1dOOiA0MCxcclxufTtcclxuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xyXG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcclxuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIHRydWUpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5mb2N1cygpO1xyXG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xyXG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xyXG4gICAgZGVmYXVsdDogcmV0dXJuIGN1cnJlbnRJZHg7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xyXG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xyXG4gICAgY29uc3QgaXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmluZGV4KGUuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChPYmplY3QudmFsdWVzKGFyaWFLZXlDb2RlcykuaW5jbHVkZXMoa2V5Q29kZSkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkxFRlQ6XHJcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xyXG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xyXG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChwcmV2SXRlbUlkeCkuZm9jdXMoKTtcclxuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcclxuICAgICAgICBjb25zdCBuZXh0SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggKyAxKTtcclxuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLmZvY3VzKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XHJcblxyXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XHJcbn07XHJcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9tZWRpYS1xdWVyeS1saXN0JztcclxuXHJcbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlRXZlbnRzID0ge1xyXG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxyXG4gICAgY2xvc2U6ICdjbG9zZS5jb2xsYXBzaWJsZScsXHJcbiAgICB0b2dnbGU6ICd0b2dnbGUuY29sbGFwc2libGUnLFxyXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXHJcbn07XHJcblxyXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xyXG4gICAgY2xvc2VkOiAnY2xvc2VkJyxcclxuICAgIG9wZW46ICdvcGVuJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByZXBlbmRIYXNoKGlkKSB7XHJcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgIyR7aWR9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gb3B0aW9uc0Zyb21EYXRhKCRlbGVtZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxyXG4gICAgICAgIGRpc2FibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZFN0YXRlYCksXHJcbiAgICAgICAgZW5hYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RW5hYmxlZFN0YXRlYCksXHJcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2xsYXBzZS9FeHBhbmQgdG9nZ2xlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIENvbnRlbnQgdG8gY29sbGFwc2UgLyBleHBhbmRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBDb25maWd1cmFibGUgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRpc2FibGVkQnJlYWtwb2ludF1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5vcGVuQ2xhc3NOYW1lXVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqXHJcbiAgICAgKiA8YnV0dG9uIGlkPVwiI21vcmVcIj5Db2xsYXBzZTwvYnV0dG9uPlxyXG4gICAgICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cclxuICAgICAqXHJcbiAgICAgKiBuZXcgQ29sbGFwc2libGUoJCgnI21vcmUnKSwgJCgnI2NvbnRlbnQnKSk7XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcclxuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQsXHJcbiAgICAgICAgZGlzYWJsZWRTdGF0ZSxcclxuICAgICAgICBlbmFibGVkU3RhdGUsXHJcbiAgICAgICAgb3BlbkNsYXNzTmFtZSA9ICdpcy1vcGVuJyxcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XHJcbiAgICAgICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcclxuICAgICAgICB0aGlzLnRhcmdldElkID0gJHRhcmdldC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFN0YXRlID0gZGlzYWJsZWRTdGF0ZTtcclxuICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZSA9IGVuYWJsZWRTdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGRpc2FibGVkQnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoZGlzYWJsZWRCcmVha3BvaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF1dG8tYmluZFxyXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoID0gdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICB0aGlzLiR0YXJnZXQuYXR0cignYXJpYS1oaWRkZW4nLCB0aGlzLmlzQ29sbGFwc2VkKTtcclxuICAgICAgICB0aGlzLiR0b2dnbGVcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtbGFiZWwnLCB0aGlzLl9nZXRUb2dnbGVBcmlhTGFiZWxUZXh0KCR0b2dnbGUpKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1jb250cm9scycsICR0YXJnZXQuYXR0cignaWQnKSlcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzT3Blbik7XHJcblxyXG4gICAgICAgIC8vIExpc3RlblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kdGFyZ2V0LmlzKCc6aGlkZGVuJykgJiYgIXRoaXMuJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ29sbGFwc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5kaXNhYmxlZFN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5lbmFibGVkU3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUb2dnbGVBcmlhTGFiZWxUZXh0KCR0b2dnbGUpIHtcclxuICAgICAgICBjb25zdCAkdGV4dFRvZ2dsZUNoaWxkcmVuID0gJHRvZ2dsZS5jaGlsZHJlbigpLmZpbHRlcigoX18sIGNoaWxkKSA9PiAkKGNoaWxkKS50ZXh0KCkudHJpbSgpKTtcclxuICAgICAgICBjb25zdCAkYXJpYUxhYmVsVGFyZ2V0ID0gJHRleHRUb2dnbGVDaGlsZHJlbi5sZW5ndGggPyAkdGV4dFRvZ2dsZUNoaWxkcmVuLmZpcnN0KCkgOiAkdG9nZ2xlO1xyXG5cclxuICAgICAgICByZXR1cm4gJCgkYXJpYUxhYmVsVGFyZ2V0KS50ZXh0KCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuJHRvZ2dsZVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLiR0YXJnZXRcclxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZiAobm90aWZ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLm9wZW4sIFt0aGlzXSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuJHRvZ2dsZVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kdGFyZ2V0XHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXHJcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAobm90aWZ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsb3NlLCBbdGhpc10pO1xyXG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJ5U3RhdGUoc3RhdGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLm9wZW46XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4uYXBwbHkodGhpcywgYXJncyk7XHJcblxyXG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5jbG9zZWQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuICQuY29udGFpbnModGhpcy4kdGFyZ2V0LmdldCgwKSwgY29sbGFwc2libGVJbnN0YW5jZS4kdGFyZ2V0LmdldCgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR0b2dnbGUub24oQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kdG9nZ2xlLm9mZihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tlZChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gobWVkaWEpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gbWVkaWEubWF0Y2hlcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgY29uc3RydWN0aW5nIENvbGxhcHNpYmxlIGluc3RhbmNlXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3ZlcnJpZGVPcHRpb25zXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9ucy4kY29udGV4dF1cclxuICogQHBhcmFtIHtTdHJpbmd9IFtvdmVycmlkZU9wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9ucy5lbmFibGVkU3RhdGVdXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3ZlcnJpZGVPcHRpb25zLm9wZW5DbGFzc05hbWVdXHJcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBDb2xsYXBzaWJsZSBpbnN0YW5jZXNcclxuICpcclxuICogQGV4YW1wbGVcclxuICogPGEgaHJlZj1cIiNjb250ZW50XCIgZGF0YS1jb2xsYXBzaWJsZT5Db2xsYXBzZTwvYT5cclxuICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cclxuICpcclxuICogY29sbGFwc2libGVGYWN0b3J5KCk7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsYXBzaWJsZUZhY3Rvcnkoc2VsZWN0b3IgPSBgW2RhdGEtJHtQTFVHSU5fS0VZfV1gLCBvdmVycmlkZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgJGNvbGxhcHNpYmxlcyA9ICQoc2VsZWN0b3IsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuICRjb2xsYXBzaWJsZXMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gYCR7UExVR0lOX0tFWX1JbnN0YW5jZWA7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkQ29sbGFwc2libGUgPSAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXkpO1xyXG5cclxuICAgICAgICBpZiAoY2FjaGVkQ29sbGFwc2libGUgaW5zdGFuY2VvZiBDb2xsYXBzaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ29sbGFwc2libGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHByZXBlbmRIYXNoKCR0b2dnbGUuZGF0YShQTFVHSU5fS0VZKSB8fFxyXG4gICAgICAgICAgICAkdG9nZ2xlLmRhdGEoYCR7UExVR0lOX0tFWX1UYXJnZXRgKSB8fFxyXG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnNGcm9tRGF0YSgkdG9nZ2xlKSwgb3ZlcnJpZGVPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9IG5ldyBDb2xsYXBzaWJsZSgkdG9nZ2xlLCAkKHRhcmdldElkLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5LCBjb2xsYXBzaWJsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xsYXBzaWJsZTtcclxuICAgIH0pLnRvQXJyYXkoKTtcclxufVxyXG4iLCIvKlxyXG4gKiBSZW1lbWJlciB0byB1cGRhdGUgL2Fzc2V0cy9zY3NzL3NldHRpbmdzL2dsb2JhbC9zY3JlZW5zaXplcy9zY3JlZW5zaXplcy5zY3NzXHJcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXHJcbiAqL1xyXG5jb25zdCBicmVha3BvaW50U2l6ZXMgPSB7XHJcbiAgICBsYXJnZTogMTI2MSxcclxuICAgIG1lZGl1bTogODAxLFxyXG4gICAgc21hbGw6IDU1MSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgTWVkaWFRdWVyeUxpc3QgdXNpbmcgYnJlYWtwb2ludCBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBicmVha3BvaW50TmFtZVxyXG4gKiBAcmV0dXJuIHtNZWRpYVF1ZXJ5TGlzdHxudWxsfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KGJyZWFrcG9pbnROYW1lKSB7XHJcbiAgICBpZiAoIWJyZWFrcG9pbnROYW1lIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBicmVha3BvaW50U2l6ZXNbYnJlYWtwb2ludE5hbWVdO1xyXG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpYDtcclxuICAgIGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIG1lZGlhUXVlcnlMaXN0O1xyXG59XHJcbiIsImltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7XHJcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xyXG5cclxuY29uc3Qgb3B0aW9uc1R5cGVzTWFwID0ge1xyXG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxyXG4gICAgSU5QVVRfVEVYVDogJ2lucHV0LXRleHQnLFxyXG4gICAgSU5QVVRfTlVNQkVSOiAnaW5wdXQtbnVtYmVyJyxcclxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxyXG4gICAgVEVYVEFSRUE6ICd0ZXh0YXJlYScsXHJcbiAgICBEQVRFOiAnZGF0ZScsXHJcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXHJcbiAgICBTRVRfUkVDVEFOR0xFOiAnc2V0LXJlY3RhbmdsZScsXHJcbiAgICBTRVRfUkFESU86ICdzZXQtcmFkaW8nLFxyXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcclxuICAgIFBST0RVQ1RfTElTVDogJ3Byb2R1Y3QtbGlzdCcsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yKGFyZURlZmF1bHRPdGlvbnNTZXQpIHtcclxuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3Rpb25zU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xyXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLmVhY2goKF9fLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU0VUX1JBRElPOlxyXG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xyXG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxyXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSA9IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2U7XHJcbiAgICAgICAgbGV0IG91dE9mU3RvY2tNZXNzYWdlID0gZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tNZXNzYWdlfSlgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2V9KWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXHJcbiAgICAgKi9cclxuICAgIGdldFRhYlJlcXVlc3RzKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKCcudGFicycpLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcclxuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRhY3RpdmVUYWIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHRhYkNvbnRlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcclxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gJHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBza3U6IHtcclxuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBjOiB7XHJcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXHJcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXHJcbiAgICAgKi9cclxuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVmlldyhkYXRhLCBjb250ZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEud2VpZ2h0IGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcclxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxyXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgdHlwZW9mIGRhdGEuc3RvY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcblxyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcclxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGlmIChhZGRUb0NhcnRXcmFwcGVyLmlzKCc6aGlkZGVuJykgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xyXG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9YFxyXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbCh1cGRhdGVkUHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cclxuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcclxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwodXBkYXRlZFByaWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxyXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5hZGRDbGFzcyhcIm1vYi1hbGVydEJveFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XHJcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnJlbW92ZUNsYXNzKFwibW9iLWFsZXJ0Qm94XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXHJcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0SW50b0FycmF5ID0gY29sbGVjdGlvbiA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcclxuIiwiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XHJcblxyXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJywgYCR7d2lzaGxpc3RVcmx9cGFnZT0ke3BhZ2VOdW1iZXJ9YCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcclxuXHJcbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCAkbmV4dEl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XHJcbiAgICBjb25zdCBwYXJ0aWFsUGFnaW5hdGlvblVybCA9IGN1cnJlbnRIcmVmLnNwbGl0KCdwYWdlPScpLnNoaWZ0KCk7XHJcblxyXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcclxufTtcclxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcclxuICAgICAqL1xyXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcclxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJXaXNobGlzdE5hbWVFcnJvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImVhY2giLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCIkIiwiYXR0ciIsInByb3AiLCJmb2N1cyIsInRyaWdnZXIiLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImUiLCJrZXlDb2RlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwibGFzdENvbGxlY3Rpb25JdGVtSWR4IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwiZ2V0IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwiZmluZCIsIm9uIiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsIl9nZXRUb2dnbGVBcmlhTGFiZWxUZXh0IiwiaXNPcGVuIiwiYmluZEV2ZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIiR0ZXh0VG9nZ2xlQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImZpbHRlciIsIl9fIiwiY2hpbGQiLCJ0ZXh0IiwidHJpbSIsIiRhcmlhTGFiZWxUYXJnZXQiLCJmaXJzdCIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkbm90aWZ5Iiwibm90aWZ5IiwiYWRkQ2xhc3MiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJG5vdGlmeSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQnlTdGF0ZSIsInN0YXRlIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsInVuZGVmaW5lZCIsImhhc0NvbGxhcHNpYmxlIiwiY29sbGFwc2libGVJbnN0YW5jZSIsImNvbnRhaW5zIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsImV2ZW50IiwibWVkaWEiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJpcyIsImhhc0NsYXNzIiwiX2Rpc2FibGVkIiwic2V0IiwiY29sbGFwc2libGVGYWN0b3J5Iiwic2VsZWN0b3IiLCJvdmVycmlkZU9wdGlvbnMiLCIkY29sbGFwc2libGVzIiwiJGNvbnRleHQiLCJtYXAiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJXaXNobGlzdCIsImluaXRSYWRpb09wdGlvbnMiLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3Rpb25zU2V0IiwiX3RoaXMiLCJlcnIiLCJyZXNwb25zZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJjb250ZXh0IiwiX3RoaXMyIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImxvYWQiLCJnZXRUYWJSZXF1ZXN0cyIsInZhbHVlIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsIl90aGlzMyIsImkiLCJyYWRpbyIsIiRyYWRpbyIsIl90aGlzNCIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInNpYmxpbmdzIiwiZ2V0Vmlld01vZGVsIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCIkbGFiZWwiLCIkdmFsdWUiLCJ1cGMiLCJxdWFudGl0eSIsIiR0ZXh0IiwiJGJ1bGtQcmljaW5nIiwiJHdhbGxldEJ1dHRvbnMiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInZpZXdNb2RlbCIsImhpZGUiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcmljZSIsInVwZGF0ZVByaWNlVmlldyIsIndlaWdodCIsImh0bWwiLCJmb3JtYXR0ZWQiLCJ2YXJpYW50SWQiLCJ2YWwiLCJzaG93IiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsInB1cmNoYXNhYmxlIiwid2l0aF90YXgiLCJ1cGRhdGVkUHJpY2UiLCJwcmljZV9yYW5nZSIsIm1pbiIsIm1heCIsIndpdGhvdXRfdGF4IiwicnJwX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4IiwibWVzc2FnZSIsIiRtZXNzYWdlQm94IiwiaW5zdG9jayIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5Iiwic2hvdWxkU2hvdyIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsImNsb3Nlc3QiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInJlcGxhY2UiLCJkZWZhdWx0IiwiaXNCcm93c2VySUUiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsImNvbnZlcnRJbnRvQXJyYXkiLCJjb2xsZWN0aW9uIiwic2xpY2UiLCJjYWxsIiwiY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MiLCJ3aXNobGlzdFVybCIsInBhZ2luYXRpb25JdGVtcyIsIl8iLCJwYWdpbmF0aW9uTGluayIsInBhZ2VOdW1iZXIiLCJ3aXNobGlzdFBhZ2luYXRvckhlbHBlciIsIiRwYWdpbmF0aW9uTGlzdCIsIiRuZXh0SXRlbSIsIiRwcmV2SXRlbSIsImN1cnJlbnRIcmVmIiwicGFydGlhbFBhZ2luYXRpb25VcmwiLCJzcGxpdCIsInNoaWZ0Iiwibm9kIiwiUGFnZU1hbmFnZXIiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiV2lzaExpc3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndpc2hsaXN0RGVsZXRlQ29uZmlybSIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiYWRkIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImVudGVyV2lzaGxpc3ROYW1lRXJyb3IiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJvblJlYWR5IiwiJGFkZFdpc2hMaXN0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=
