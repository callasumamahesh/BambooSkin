"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    var $this = this;
    var perentInput = document.querySelectorAll('div[id^="facetedSearch-content-"]');
    perentInput.forEach(function (a) {
      if (a.querySelectorAll('ul li a.is-selected').length > 0) {
        var filterCount = a.querySelectorAll('ul li a.is-selected').length;
        a.parentElement.querySelector('.selected-items').innerText = "/ " + filterCount + " selected";
      }
      var listD = a.querySelectorAll('ul li');
      listD.forEach(function (a) {
        a.addEventListener('click', function () {
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        });
      });
    });
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
        //  $this.getMobileFilterInfo();
      }
    });
    $(document).on('click', '.pagination-item--previous', function (e) {
      console.log('reloading');
      location.reload();
    });
    $(document).on('click', '.pagination-item--next', function (e) {
      console.log('reloading');
      location.reload();
    });
    $(document).on('click', '#facetedSearch .facetLabel', function (e) {
      location.reload();
    });
    $(document).on('click', '.close-filters, .close-filter, .cal ', function (e) {
      location.reload();
    });
    var loadOptions = document.querySelector('.sort-block > :nth-child(2) #sort');
    var descData = document.querySelector('.desktop-sort > :nth-child(2) #sort');
    if ($(window).width() < 800) {
      loadOptions.addEventListener('change', function () {
        setTimeout(function () {
          location.reload();
        }, 200);
      });
    } else {
      descData.addEventListener('change', function () {
        setTimeout(function () {
          location.reload();
        }, 200);
      });
    }
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
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
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
  return Brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLEtBQUssMEJBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sS0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxLQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05aLG9FQUFlLENBQUMsSUFBSSxDQUFDSyxPQUFPLENBQUM7SUFFN0IsSUFBSVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEbkIsNkRBQUssQ0FBQ29CLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNGLGNBQWMsQ0FBQztJQUNyRDtJQUNBLElBQU1HLEtBQUssR0FBRyxJQUFJO0lBQ2xCLElBQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVoRkYsV0FBVyxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsQ0FBQyxFQUFJO01BQ3RCLElBQUlBLENBQUMsQ0FBQ0YsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0RCxJQUFNVyxXQUFXLEdBQUdELENBQUMsQ0FBQ0YsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQ1IsTUFBTTtRQUNwRVUsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxTQUFTLFVBQVFILFdBQVcsY0FBVztNQUM1RjtNQUVBLElBQU1JLEtBQUssR0FBR0wsQ0FBQyxDQUFDRixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7TUFDekNPLEtBQUssQ0FBQ04sT0FBTyxDQUFDLFVBQUNDLENBQUMsRUFBRztRQUNmQSxDQUFDLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxZQUFJO1VBQzNCQyxVQUFVLENBQUMsWUFBSTtZQUNYQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7VUFDNUIsQ0FBQyxFQUFDLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGckIsQ0FBQyxDQUFDUSxRQUFRLENBQUMsQ0FBQ0gsRUFBRSxDQUFDLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxVQUFVaUIsQ0FBQyxFQUFFO01BQ3ZFQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCdkIsQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUN3QixPQUFPLENBQUMsT0FBTyxDQUFDO01BQy9ELElBQUl4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5QixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEI7UUFDQSxJQUFJekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1VBQy9CbkIsS0FBSyxDQUFDbUIsUUFBUSxHQUFHLElBQUk7UUFDekIsQ0FBQyxNQUFNO1VBQ0huQixLQUFLLENBQUNtQixRQUFRLEdBQUcsS0FBSztRQUMxQjtRQUNBekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMEIsUUFBUSxDQUFDLGFBQWEsQ0FBQztNQUNyQyxDQUFDLE1BQU07UUFDSDFCLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUlyQixLQUFLLENBQUNtQixRQUFRLEVBQUV6QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzBCLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDN0Q7UUFDQTFCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzRCLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdEM7TUFDRjtJQUNKLENBQUMsQ0FBQztJQUNGNUIsQ0FBQyxDQUFDUSxRQUFRLENBQUMsQ0FBQ0gsRUFBRSxDQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxVQUFVaUIsQ0FBQyxFQUFFO01BQy9ETyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDeEJWLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBQ0ZyQixDQUFDLENBQUNRLFFBQVEsQ0FBQyxDQUFDSCxFQUFFLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVVpQixDQUFDLEVBQUU7TUFDM0RPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUN4QlYsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFDRnJCLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLENBQUNILEVBQUUsQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsVUFBVWlCLENBQUMsRUFBRTtNQUMvREYsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFFRnJCLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLENBQUNILEVBQUUsQ0FBQyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsVUFBVWlCLENBQUMsRUFBRTtNQUN6RUYsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFDRixJQUFJVSxXQUFXLEdBQUd2QixRQUFRLENBQUNNLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQztJQUM3RSxJQUFJa0IsUUFBUSxHQUFHeEIsUUFBUSxDQUFDTSxhQUFhLENBQUMscUNBQXFDLENBQUM7SUFDNUUsSUFBSWQsQ0FBQyxDQUFDbUIsTUFBTSxDQUFDLENBQUNjLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ3pCRixXQUFXLENBQUNkLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZO1FBRS9DQyxVQUFVLENBQUMsWUFBTTtVQUNiRSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFWCxDQUFDLENBQUM7SUFDTixDQUFDLE1BQUs7TUFDRlcsUUFBUSxDQUFDZixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUMsWUFBVTtRQUV6Q0MsVUFBVSxDQUFDLFlBQUk7VUFDWEUsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO01BRVgsQ0FBQyxDQUFDO0lBQ047SUFFQXJCLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLENBQUNILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ2lCLENBQUMsRUFBSztNQUMzQixJQUFJdEIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlELENBQUMsQ0FBQ3NCLENBQUMsQ0FBQ1ksTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDbEMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUMvRkQsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNvQyxJQUFJLENBQUMsWUFBWTtVQUMxRCxJQUFNQyxVQUFVLEdBQUdyQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7VUFDckQsSUFBTUMsVUFBVSxHQUFHdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1VBQ3hELElBQUlELFVBQVUsQ0FBQ1osUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDWSxVQUFVLENBQUNULFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDakNTLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7WUFDcENELFVBQVUsQ0FBQ1gsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUNqQ1csVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztVQUMzQztRQUNKLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBR04sQ0FBQztFQUFBM0MsTUFBQSxDQUdESyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBQXVDLHFCQUFBLEdBTUksSUFBSSxDQUFDOUMsb0JBQW9CO01BTEgrQyxlQUFlLEdBQUFELHFCQUFBLENBQXJDRSxvQkFBb0I7TUFDRUMsZUFBZSxHQUFBSCxxQkFBQSxDQUFyQ0ksb0JBQW9CO01BQ0dDLGtCQUFrQixHQUFBTCxxQkFBQSxDQUF6Q00scUJBQXFCO01BQ0VDLGtCQUFrQixHQUFBUCxxQkFBQSxDQUF6Q1EscUJBQXFCO01BQ0FDLGNBQWMsR0FBQVQscUJBQUEsQ0FBbkNVLG1CQUFtQjtJQUV2QixJQUFNQyx3QkFBd0IsR0FBR3BELENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNoRSxJQUFNcUQsdUJBQXVCLEdBQUdyRCxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDOUQsSUFBTXNELGVBQWUsR0FBRyxJQUFJLENBQUM5RCxPQUFPLENBQUMrRCxvQkFBb0I7SUFDekQsSUFBTUMsY0FBYyxHQUFHO01BQ25CQyxRQUFRLEVBQUU7UUFDTkMsY0FBYyxFQUFFLHVCQUF1QjtRQUN2Q0MsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEQyxNQUFNLEVBQUU7UUFDSkMsYUFBYSxFQUFFLElBQUk7UUFDbkJDLEtBQUssRUFBRTtVQUNIQyxRQUFRLEVBQUU7WUFDTkMsS0FBSyxFQUFFVjtVQUNYO1FBQ0o7TUFDSixDQUFDO01BQ0RXLFFBQVEsRUFBRTtJQUNkLENBQUM7SUFFRCxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJOUUsOERBQWEsQ0FBQ29FLGNBQWMsRUFBRSxVQUFDVyxPQUFPLEVBQUs7TUFDaEVmLHdCQUF3QixDQUFDZ0IsSUFBSSxDQUFDRCxPQUFPLENBQUNULGNBQWMsQ0FBQztNQUNyREwsdUJBQXVCLENBQUNlLElBQUksQ0FBQ0QsT0FBTyxDQUFDUixPQUFPLENBQUM7TUFFN0MzRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNxRSxjQUFjLENBQUMsY0FBYyxDQUFDO01BRXhDckUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDc0UsT0FBTyxDQUFDO1FBQ3BCM0MsU0FBUyxFQUFFO01BQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsRUFBRTtNQUNDNEMsdUJBQXVCLEVBQUU7UUFDckI3QixlQUFlLEVBQWZBLGVBQWU7UUFDZkUsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkUsY0FBYyxFQUFkQTtNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUE1RCxLQUFBO0FBQUEsRUF4SjhCSixnREFBVzs7Ozs7Ozs7Ozs7Ozs7O0FDTjlDLElBQU11RixZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQStCQSxDQUFJQyxVQUFVO0VBQUEsT0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFDLENBQUN4RSxNQUFNO0FBQUE7QUFDdEcsSUFBTTZFLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBOEI7RUFDdEQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQUEsQ0FBbUIvRSxNQUFNLEVBQUU4RSxDQUFDLEVBQUUsRUFBRTtJQUNoRCxJQUFNSixVQUFVLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFvQkgsQ0FBQyxRQUFBQyxTQUFBLENBQUEvRSxNQUFBLElBQUQ4RSxDQUFDLEdBQUFJLFNBQUEsR0FBQUgsU0FBQSxDQUFERCxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJTCwrQkFBK0IsQ0FBQ0MsVUFBVSxDQUFDLEVBQUU7TUFDN0MsT0FBT0EsVUFBVTtJQUNyQjtFQUNKO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNdEYsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUcsT0FBTyxFQUFLO0VBQ3BELElBQVE0Rix3QkFBd0IsR0FBd0U1RixPQUFPLENBQXZHNEYsd0JBQXdCO0lBQUVDLGdDQUFnQyxHQUFzQzdGLE9BQU8sQ0FBN0U2RixnQ0FBZ0M7SUFBRUMsK0JBQStCLEdBQUs5RixPQUFPLENBQTNDOEYsK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHVCxzQkFBc0IsQ0FBQ00sd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTWlCLGVBQWUsR0FBR2QsTUFBTSxDQUFDQyxJQUFJLENBQUNVLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQyxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9KLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUosR0FBRyxFQUFFYixDQUFDLEVBQUs7SUFDM0NpQixHQUFHLENBQUNKLEdBQUcsQ0FBQyxHQUFHSixhQUFhLENBQUNULENBQUMsQ0FBQztJQUMzQixPQUFPaUIsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgJHRoaXMgPSB0aGlzO1xyXG4gICAgICAgIGxldCBwZXJlbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltpZF49XCJmYWNldGVkU2VhcmNoLWNvbnRlbnQtXCJdJylcclxuXHJcbiAgICAgICAgcGVyZW50SW5wdXQuZm9yRWFjaCgoYSk9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsIGxpIGEuaXMtc2VsZWN0ZWQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJDb3VudCA9IGEucXVlcnlTZWxlY3RvckFsbCgndWwgbGkgYS5pcy1zZWxlY3RlZCcpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgYS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1pdGVtcycpLmlubmVyVGV4dCA9IGAvICR7ZmlsdGVyQ291bnR9IHNlbGVjdGVkYFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaXN0RCA9IGEucXVlcnlTZWxlY3RvckFsbCgndWwgbGknKVxyXG4gICAgICAgICAgICBsaXN0RC5mb3JFYWNoKChhKT0+e1xyXG4gICAgICAgICAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sMjAwMClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50ZiwgLmNsb3NlLWZpbHRlcnMsIC5jbG9zZS1maWx0ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJ2FbYXJpYS1jb250cm9scz0gXCJmYWNldGVkU2VhcmNoLW5hdkxpc3RcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGYnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gJHRoaXMudG9wVmFsdWUgPSAkKCcudG9nZ2xlLWZpbHRlcicpLmNzcygndG9wJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndG9wLWZpeGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5oYXNDbGFzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmhhc0NsYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2ZpbHRlci1vcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKSAkKCcudG9nZ2xlLWZpbHRlcicpLmFkZENsYXNzKCd0b3AtZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vICQoJy50b2dnbGUtZmlsdGVyJykuY3NzKCd0b3AnLCAnMzUwcHgnKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZmlsdGVyLW9wZW4nKTtcclxuICAgICAgICAgICAgICAvLyAgJHRoaXMuZ2V0TW9iaWxlRmlsdGVySW5mbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRMYWJlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLWZpbHRlcnMsIC5jbG9zZS1maWx0ZXIsIC5jYWwgJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGxvYWRPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtYmxvY2sgPiA6bnRoLWNoaWxkKDIpICNzb3J0JylcclxuICAgICAgICBsZXQgZGVzY0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcC1zb3J0ID4gOm50aC1jaGlsZCgyKSAjc29ydCcpXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgODAwKSB7XHJcbiAgICAgICAgICAgIGxvYWRPcHRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMClcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZGVzY0RhdGEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMClcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnKS5sZW5ndGggPiAwICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5hY2NvcmRpb24tYmxvY2snKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCAuYWNjb3JkaW9uLWJsb2NrJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0Q29udEVsbSA9ICQodGhpcykuZmluZCgnLmFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0TGlua0VsbSA9ICQodGhpcykuZmluZCgnLmFjY29yZGlvbi1uYXZpZ2F0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldENvbnRFbG0uaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb250RWxtLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbnRFbG0uYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlua0VsbS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRMaW5rRWxtLmF0dHIoJ2FyZWEtZXhwYW5kZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXHJcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCIkdGhpcyIsInBlcmVudElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImEiLCJmaWx0ZXJDb3VudCIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwibGlzdEQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlciIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkT3B0aW9ucyIsImRlc2NEYXRhIiwid2lkdGgiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZWFjaCIsImdldENvbnRFbG0iLCJmaW5kIiwiZ2V0TGlua0VsbSIsImF0dHIiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJicmFuZFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJjb25maWciLCJzaG9wX2J5X2JyYW5kIiwiYnJhbmQiLCJwcm9kdWN0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9