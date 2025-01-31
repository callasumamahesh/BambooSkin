"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_wishlist_js"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV93aXNobGlzdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBNkJBLENBQUlDLFdBQVc7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFLQyxlQUFlLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBZkYsZUFBZSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQUEsT0FBS0MsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLGVBQWUsRUFBRSxVQUFDSyxDQUFDLEVBQUVDLEtBQUssRUFBSztJQUM3RyxJQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0lBRXpELElBQUlGLEtBQUssQ0FBQ1AsTUFBTSxJQUFJLENBQUNRLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDaEUsSUFBTUMsVUFBVSxHQUFHSixjQUFjLENBQUNFLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDOUNGLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBS2IsV0FBVyxhQUFRZSxVQUFZLENBQUM7SUFDbkU7RUFDSixDQUFDLENBQUM7QUFBQTs7QUFFRjtBQUNBO0FBQ0E7QUFDTyxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFBLEVBQVM7RUFDekMsSUFBTUMsZUFBZSxHQUFHVixDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFFN0MsSUFBSSxDQUFDVSxlQUFlLENBQUNkLE1BQU0sRUFBRTtFQUU3QixJQUFNZSxTQUFTLEdBQUdYLENBQUMsQ0FBQyx3QkFBd0IsRUFBRVUsZUFBZSxDQUFDO0VBQzlELElB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dUIsQ0FBQyxDQUFDO0lBQzdCO0lBRUEsSUFBSWdELGdCQUFnQixDQUFDN0QsTUFBTSxFQUFFO01BQ3pCLElBQUksQ0FBQzRDLDZCQUE2QixDQUFDaUIsZ0JBQWdCLENBQUM7SUFDeEQ7SUFFQSxJQUFJLENBQUMxQixxQkFBcUIsQ0FBQyxDQUFDO0VBQ2hDLENBQUM7RUFBQSxPQUFBWCxRQUFBO0FBQUEsRUFuRWlDRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzID0gKHdpc2hsaXN0VXJsLCAuLi5wYWdpbmF0aW9uSXRlbXMpID0+ICQuZWFjaChwYWdpbmF0aW9uSXRlbXMsIChfLCAkaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbkxpbmsgPSAkaXRlbS5jaGlsZHJlbignLnBhZ2luYXRpb24tbGluaycpO1xyXG5cclxuICAgIGlmICgkaXRlbS5sZW5ndGggJiYgIXBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKS5pbmNsdWRlcygncGFnZT0nKSkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBoZWxwcyB0byB3aXRoZHJhdyBkaWZmZXJlbmNlcyBpbiBzdHJ1Y3R1cmVzIGFyb3VuZCB0aGUgc3RlbmNpbCByZXNvdXJjZSBwYWdpbmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XHJcblxyXG4gICAgaWYgKCEkcGFnaW5hdGlvbkxpc3QubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XHJcbiAgICBjb25zdCAkcHJldkl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cycsICRwYWdpbmF0aW9uTGlzdCk7XHJcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9ICQoJ1tkYXRhLXBhZ2luYXRpb24tY3VycmVudC1wYWdlLWxpbmtdJykuYXR0cignaHJlZicpO1xyXG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xyXG5cclxuICAgIGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzKHBhcnRpYWxQYWdpbmF0aW9uVXJsLCAkcHJldkl0ZW0sICRuZXh0SXRlbSk7XHJcbn07XHJcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgfSBmcm9tICcuL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvdW50L2FkZC13aXNobGlzdCcsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXHJcbiAgICAgKi9cclxuICAgIHdpc2hsaXN0RGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaGxpc3RGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyV2lzaGxpc3ROYW1lRXJyb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XHJcblxyXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aXNobGlzdFBhZ2luYXRvckhlbHBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInBhZ2luYXRpb25JdGVtcyIsIkFycmF5IiwiX2tleSIsIiQiLCJlYWNoIiwiXyIsIiRpdGVtIiwicGFnaW5hdGlvbkxpbmsiLCJjaGlsZHJlbiIsImF0dHIiLCJpbmNsdWRlcyIsInBhZ2VOdW1iZXIiLCJ3aXNobGlzdFBhZ2luYXRvckhlbHBlciIsIiRwYWdpbmF0aW9uTGlzdCIsIiRuZXh0SXRlbSIsIiRwcmV2SXRlbSIsImN1cnJlbnRIcmVmIiwicGFydGlhbFBhZ2luYXRpb25VcmwiLCJzcGxpdCIsInNoaWZ0Iiwibm9kIiwiUGFnZU1hbmFnZXIiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiV2lzaExpc3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Byb3RvIiwicHJvdG90eXBlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiX3RoaXMyIiwib24iLCJldmVudCIsImNvbmZpcm1lZCIsIndpbmRvdyIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiX3RoaXMzIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlcnJvck1lc3NhZ2UiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwib25SZWFkeSIsIiRhZGRXaXNoTGlzdEZvcm0iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
