"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    _this.shopByPrice = _this.context.shop_by_price;
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    //filters

    this.topValue = 0;
    var $this = this;
    this.mediumMediaQueryList = (0,_common_media_query_list__WEBPACK_IMPORTED_MODULE_5__["default"])('medium');
    $('[data-button-type="add-cart"]').on('click', function (e) {
      $(e.currentTarget).next().attr({
        role: 'status',
        'aria-live': 'polite'
      });
    });
    //filters ends

    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();

    //filters

    this.getMobileFilterInfo();
    this.mobileFilterAnable();
    $(document).on('click', '.tf, .close-filters, .close-filter', function (e) {
      e.preventDefault();
      $('a[aria-controls= "facetedSearch-navList"]').trigger('click');
      if ($(this).hasClass('tf')) {
        // $this.topValue = $('.toggle-filter').css('top');
        if ($(this).hasClass('top-fixed')) {
          $this.hasClass = true;
        } else {
          $this.hasClass = false;
        }
        $('body').addClass('filter-open');
      } else {
        $(window).scrollTop(0);
        if ($this.hasClass) $('.toggle-filter').addClass('top-fixed');
        // $('.toggle-filter').css('top', '350px');
        $('body').removeClass('filter-open');
        $this.getMobileFilterInfo();
      }
    });
    $(document).on('click', function (e) {
      if ($('#facetedSearch-navList').length > 0 && $(e.target).closest('.accordion-block').length == 0) {
        $('#facetedSearch-navList .accordion-block').each(function () {
          var getContElm = $(this).find('.accordion-content');
          var getLinkElm = $(this).find('.accordion-navigation');
          if (getContElm.hasClass('is-open')) {
            getContElm.removeClass('is-open');
            getContElm.attr('aria-hidden', true);
            getLinkElm.removeClass('is-open');
            getLinkElm.attr('area-expanded', false);
          }
        });
      }
    });
    $(document).on('click', '#facetedSearch .facetLabel', function (e) {
      location.reload();
    });
    $(document).on('click', '.close-filters, .close-filter, .cal ', function (e) {
      location.reload();
    });
    var loadOptions = document.querySelector('.sort-block > :nth-child(2) #sort');
    var descOption = document.querySelector('.desktop-sort > :nth-child(2) #sort');
    if ($(window).width() < 800) {
      loadOptions.addEventListener('change', function () {
        setTimeout(function () {
          location.reload();
        }, 200);
      });
    } else {
      descOption.addEventListener('change', function () {
        setTimeout(function () {
          location.reload();
        }, 200);
      });
    }
  }

  //filters
  ;
  _proto.getMobileFilterInfo = function getMobileFilterInfo() {
    if (!this.mediumMediaQueryList.matches && $('.facetedSearch-refineFilters .inlineList li').length) {
      var getLength = $('.facetedSearch-refineFilters .inlineList li').length;
      // if (getLength === 1) {
      //     $('a.tf').text(`${getLength} ${$('a.tf').data('single')}`);
      // } else {
      //     $('a.tf').text(`${getLength} ${$('a.tf').data('multy')}`);
      // }

      // if ($('.toggle-filter .clear-filter').length === 0){
      //    // $('.close-filters, .clearallfilter').attr('disabled', false);
      //     $('.clearallfilter').attr('href', $('.cal').attr('href'));
      // }
    }
  };
  _proto.mobileFilterAnable = function mobileFilterAnable() {
    $('div[id^="facetedSearch-content-"]').each(function () {
      if ($(this).find('ul').length && $(this).find('ul').find('a.is-selected').length > 0) {
        var getCount = $(this).find('ul').find('a.is-selected').length;
        $(this).parent('.accordion-block').find('.accordion-title').find('strong').text("/ " + getCount + " selected");
      }
    });
    if (!this.mediumMediaQueryList.matches) {
      // console.log($('.cal').length, "mobilefilteranable");
      if ($('.cal').length === 0) {
        $('.close-filters, .clearallfilter').attr('disabled', true);
        // $('.clearallfilter').attr('href', $('.cal').attr('href'));
      } else {
        $('.clearallfilter').attr('href', $('.cal').attr('href'));
        $('.close-filters, .clearallfilter').attr('disabled', false);
      }
    }
  }
  //filters end
  ;
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
    var $this = this;
    //  this.appendingCurrency();
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      //  console.log(content.productListing);

      $('body').triggerHandler('compareReset');

      // $this.appendingCurrency();

      var fragment = document.createDocumentFragment();
      // let elm = document.querySelector('form[data-sort-by]');
      fragment.appendChild(document.querySelector('form[data-sort-by]'));
      // console.log(elm);
      document.getElementById('sort-block').appendChild(fragment);
      $this.mobileFilterAnable();
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
  }
  // appendingCurrency() {
  //     const $this = this;
  //     if ($('.inlineList').length > 0 && $('.inlineList li').length > 0) {
  //         $('.inlineList li').each(function () {
  //             if ($(this).find('a').text().trim().search('-') > 0) {
  //                 let getCurrencyV = '$';
  //                 if ($this.shopByPrice[0].low.currency === 'AUD') {
  //                     getCurrencyV = '$';
  //                 }
  //                 const getV = $(this).find('a').html().trim().replace('- ', `- ${getCurrencyV}`);
  //                 $(this).find('a').html(getCurrencyV + getV);
  //             }
  //         });
  //     }
  // }
  ;
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUN6QjtBQUFBLElBR3pDTSxRQUFRLDBCQUFBQyxZQUFBO0VBQ3pCLFNBQUFELFNBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLG9CQUFvQixHQUFHUCxtR0FBMkIsQ0FBQ0ksT0FBTyxDQUFDO0lBQ2hFQyxLQUFBLENBQUtHLFdBQVcsR0FBR0gsS0FBQSxDQUFLRCxPQUFPLENBQUNLLGFBQWE7SUFBQyxPQUFBSixLQUFBO0VBQ2xEO0VBQUNLLGNBQUEsQ0FBQVIsUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVEsTUFBQSxHQUFBVCxRQUFBLENBQUFVLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFD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QixHQUFLakgsT0FBTyxDQUEzQ2lILCtCQUErQjtFQUNuRyxJQUFNQyxnQkFBZ0IsR0FBR1Qsc0JBQXNCLENBQUNNLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHWixNQUFNLENBQUNhLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUNkLFlBQVksQ0FBQyxDQUFDO0VBQ25FLElBQU1pQixlQUFlLEdBQUdkLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVKLEdBQUcsRUFBRWIsQ0FBQyxFQUFLO0lBQzNDaUIsR0FBRyxDQUFDSixHQUFHLENBQUMsR0FBR0osYUFBYSxDQUFDVCxDQUFDLENBQUM7SUFDM0IsT0FBT2lCLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnNob3BCeVByaWNlID0gdGhpcy5jb250ZXh0LnNob3BfYnlfcHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xyXG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcclxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XHJcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XHJcbiAgICAgICAgLy9maWx0ZXJzXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMudG9wVmFsdWUgPSAwO1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm1lZGl1bU1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KCdtZWRpdW0nKTtcclxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgIHJvbGU6ICdzdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2ZpbHRlcnMgZW5kc1xyXG5cclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xyXG5cclxuICAgICAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XHJcblxyXG4gICAgICAgIC8vZmlsdGVyc1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nZXRNb2JpbGVGaWx0ZXJJbmZvKClcclxuICAgICAgICB0aGlzLm1vYmlsZUZpbHRlckFuYWJsZSgpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGYsIC5jbG9zZS1maWx0ZXJzLCAuY2xvc2UtZmlsdGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCdhW2FyaWEtY29udHJvbHM9IFwiZmFjZXRlZFNlYXJjaC1uYXZMaXN0XCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3RmJykpIHtcclxuICAgICAgICAgICAgICAgIC8vICR0aGlzLnRvcFZhbHVlID0gJCgnLnRvZ2dsZS1maWx0ZXInKS5jc3MoJ3RvcCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3RvcC1maXhlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuaGFzQ2xhc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5oYXNDbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdmaWx0ZXItb3BlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcykgJCgnLnRvZ2dsZS1maWx0ZXInKS5hZGRDbGFzcygndG9wLWZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcudG9nZ2xlLWZpbHRlcicpLmNzcygndG9wJywgJzM1MHB4Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5nZXRNb2JpbGVGaWx0ZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JykubGVuZ3RoID4gMCAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuYWNjb3JkaW9uLWJsb2NrJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QgLmFjY29yZGlvbi1ibG9jaycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldENvbnRFbG0gPSAkKHRoaXMpLmZpbmQoJy5hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldExpbmtFbG0gPSAkKHRoaXMpLmZpbmQoJy5hY2NvcmRpb24tbmF2aWdhdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRDb250RWxtLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29udEVsbS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb250RWxtLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldExpbmtFbG0ucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlua0VsbS5hdHRyKCdhcmVhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0TGFiZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1maWx0ZXJzLCAuY2xvc2UtZmlsdGVyLCAuY2FsICcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbG9hZE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1ibG9jayA+IDpudGgtY2hpbGQoMikgI3NvcnQnKVxyXG4gICAgICAgIGxldCBkZXNjT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2t0b3Atc29ydCA+IDpudGgtY2hpbGQoMikgI3NvcnQnKVxyXG5cclxuICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA8IDgwMCl7XHJcbiAgICAgICAgICAgIGxvYWRPcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRlc2NPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9maWx0ZXJzXHJcbiAgICBnZXRNb2JpbGVGaWx0ZXJJbmZvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tZWRpdW1NZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzICYmICQoJy5mYWNldGVkU2VhcmNoLXJlZmluZUZpbHRlcnMgLmlubGluZUxpc3QgbGknKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0TGVuZ3RoID0gJCgnLmZhY2V0ZWRTZWFyY2gtcmVmaW5lRmlsdGVycyAuaW5saW5lTGlzdCBsaScpLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gaWYgKGdldExlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgJCgnYS50ZicpLnRleHQoYCR7Z2V0TGVuZ3RofSAkeyQoJ2EudGYnKS5kYXRhKCdzaW5nbGUnKX1gKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICQoJ2EudGYnKS50ZXh0KGAke2dldExlbmd0aH0gJHskKCdhLnRmJykuZGF0YSgnbXVsdHknKX1gKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKCQoJy50b2dnbGUtZmlsdGVyIC5jbGVhci1maWx0ZXInKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAvLyAgICAvLyAkKCcuY2xvc2UtZmlsdGVycywgLmNsZWFyYWxsZmlsdGVyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAkKCcuY2xlYXJhbGxmaWx0ZXInKS5hdHRyKCdocmVmJywgJCgnLmNhbCcpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW9iaWxlRmlsdGVyQW5hYmxlKCkge1xyXG4gICAgICAgICQoJ2RpdltpZF49XCJmYWNldGVkU2VhcmNoLWNvbnRlbnQtXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ3VsJykubGVuZ3RoICYmICQodGhpcykuZmluZCgndWwnKS5maW5kKCdhLmlzLXNlbGVjdGVkJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0Q291bnQgPSAkKHRoaXMpLmZpbmQoJ3VsJykuZmluZCgnYS5pcy1zZWxlY3RlZCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuYWNjb3JkaW9uLWJsb2NrJykuZmluZCgnLmFjY29yZGlvbi10aXRsZScpLmZpbmQoJ3N0cm9uZycpLnRleHQoYC8gJHtnZXRDb3VudH0gc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdGhpcy5tZWRpdW1NZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQoJy5jYWwnKS5sZW5ndGgsIFwibW9iaWxlZmlsdGVyYW5hYmxlXCIpO1xyXG4gICAgICAgICAgICBpZiAoJCgnLmNhbCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmNsb3NlLWZpbHRlcnMsIC5jbGVhcmFsbGZpbHRlcicpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuY2xlYXJhbGxmaWx0ZXInKS5hdHRyKCdocmVmJywgJCgnLmNhbCcpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2xlYXJhbGxmaWx0ZXInKS5hdHRyKCdocmVmJywgJCgnLmNhbCcpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2xvc2UtZmlsdGVycywgLmNsZWFyYWxsZmlsdGVyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL2ZpbHRlcnMgZW5kXHJcblxyXG4gICAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJCgnW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXScpO1xyXG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXHJcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0ICR0aGlzID0gdGhpcztcclxuICAgICAgLy8gIHRoaXMuYXBwZW5kaW5nQ3VycmVuY3koKTtcclxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vICR0aGlzLmFwcGVuZGluZ0N1cnJlbmN5KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgLy8gbGV0IGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bZGF0YS1zb3J0LWJ5XScpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW2RhdGEtc29ydC1ieV0nKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsbSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LWJsb2NrJykuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAkdGhpcy5tb2JpbGVGaWx0ZXJBbmFibGUoKTtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gYXBwZW5kaW5nQ3VycmVuY3koKSB7XHJcbiAgICAvLyAgICAgY29uc3QgJHRoaXMgPSB0aGlzO1xyXG4gICAgLy8gICAgIGlmICgkKCcuaW5saW5lTGlzdCcpLmxlbmd0aCA+IDAgJiYgJCgnLmlubGluZUxpc3QgbGknKS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgICQoJy5pbmxpbmVMaXN0IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdhJykudGV4dCgpLnRyaW0oKS5zZWFyY2goJy0nKSA+IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgZ2V0Q3VycmVuY3lWID0gJyQnO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICgkdGhpcy5zaG9wQnlQcmljZVswXS5sb3cuY3VycmVuY3kgPT09ICdBVUQnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbmN5ViA9ICckJztcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgZ2V0ViA9ICQodGhpcykuZmluZCgnYScpLmh0bWwoKS50cmltKCkucmVwbGFjZSgnLSAnLCBgLSAke2dldEN1cnJlbmN5Vn1gKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2EnKS5odG1sKGdldEN1cnJlbmN5ViArIGdldFYpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XHJcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcclxuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcclxuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxyXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcclxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcclxuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsInNob3BCeVByaWNlIiwic2hvcF9ieV9wcmljZSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuZXh0IiwidG9wVmFsdWUiLCIkdGhpcyIsIm1lZGl1bU1lZGlhUXVlcnlMaXN0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsImdldE1vYmlsZUZpbHRlckluZm8iLCJtb2JpbGVGaWx0ZXJBbmFibGUiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlciIsImFkZENsYXNzIiwid2luZG93Iiwic2Nyb2xsVG9wIiwicmVtb3ZlQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZWFjaCIsImdldENvbnRFbG0iLCJmaW5kIiwiZ2V0TGlua0VsbSIsImxvY2F0aW9uIiwicmVsb2FkIiwibG9hZE9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwiZGVzY09wdGlvbiIsIndpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJtYXRjaGVzIiwiZ2V0TGVuZ3RoIiwiZ2V0Q291bnQiLCJwYXJlbnQiLCJ0ZXh0IiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJhbmltYXRlIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==