import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import mediaQueryListFactory from './common/media-query-list';


export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
        this.shopByPrice = this.context.shop_by_price;
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    onReady() {
        this.arrangeFocusOnSortBy();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();
        //filters




        this.topValue = 0;
        const $this = this;
        this.mediumMediaQueryList = mediaQueryListFactory('medium');
        $('[data-button-type="add-cart"]').on('click', (e) => {
            $(e.currentTarget).next().attr({
                role: 'status',
                'aria-live': 'polite',
            });
        });
        //filters ends

        compareProducts(this.context);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();

        //filters


        this.getMobileFilterInfo()
        this.mobileFilterAnable()

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


        $(document).on('click', (e) => {
            if ($('#facetedSearch-navList').length > 0 && $(e.target).closest('.accordion-block').length == 0) {
                $('#facetedSearch-navList .accordion-block').each(function () {
                    const getContElm = $(this).find('.accordion-content');
                    const getLinkElm = $(this).find('.accordion-navigation');
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

        let loadOptions = document.querySelector('.sort-block > :nth-child(2) #sort')
        let descOption = document.querySelector('.desktop-sort > :nth-child(2) #sort')

        if($(window).width() < 800){
            loadOptions.addEventListener('change',function(){
                setTimeout(()=>{
                    location.reload();
                }, 200)
            });
        }else{
            descOption.addEventListener('change',function(){
                setTimeout(()=>{
                    location.reload();
                }, 200)


            });
        }

    }

    //filters
    getMobileFilterInfo() {
        if (!this.mediumMediaQueryList.matches && $('.facetedSearch-refineFilters .inlineList li').length) {
            const getLength = $('.facetedSearch-refineFilters .inlineList li').length;
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
    }

    mobileFilterAnable() {
        $('div[id^="facetedSearch-content-"]').each(function () {
            if ($(this).find('ul').length && $(this).find('ul').find('a.is-selected').length > 0) {
                const getCount = $(this).find('ul').find('a.is-selected').length;
                $(this).parent('.accordion-block').find('.accordion-title').find('strong').text(`/ ${getCount} selected`);
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

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };
        const $this = this;
      //  this.appendingCurrency();
        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            //  console.log(content.productListing);

            $('body').triggerHandler('compareReset');

            // $this.appendingCurrency();

            const fragment = document.createDocumentFragment();
            // let elm = document.querySelector('form[data-sort-by]');
            fragment.appendChild(document.querySelector('form[data-sort-by]'));
            // console.log(elm);
            document.getElementById('sort-block').appendChild(fragment);
            $this.mobileFilterAnable();
            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
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
}
