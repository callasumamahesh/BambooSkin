import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Brand extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    onReady() {
        compareProducts(this.context);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
        const $this = this;
        let perentInput = document.querySelectorAll('div[id^="facetedSearch-content-"]')

        perentInput.forEach((a)=> {
            if (a.querySelectorAll('ul li a.is-selected').length > 0) {
                const filterCount = a.querySelectorAll('ul li a.is-selected').length
                a.parentElement.querySelector('.selected-items').innerText = `/ ${filterCount} selected`
            }

            const listD = a.querySelectorAll('ul li')
            listD.forEach((a)=>{
                a.addEventListener('click',()=>{
                    setTimeout(()=>{
                        window.location.reload()
                    },2000)
                })
            })
        })

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
            console.log('reloading')
            location.reload();
        });
        $(document).on('click', '.pagination-item--next', function (e) {
            console.log('reloading')
            location.reload();
        });
        $(document).on('click', '#facetedSearch .facetLabel', function (e) {
            location.reload();
        });

        $(document).on('click', '.close-filters, .close-filter, .cal ', function (e) {
            location.reload();
        });
        let loadOptions = document.querySelector('.sort-block > :nth-child(2) #sort')
        let descData = document.querySelector('.desktop-sort > :nth-child(2) #sort')
        if ($(window).width() < 800) {
            loadOptions.addEventListener('change', function () {

                setTimeout(() => {
                    location.reload();
                }, 200)

            });
        }else {
            descData.addEventListener('change',function(){

                setTimeout(()=>{
                    location.reload();
                }, 200)

            });
        }

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
        const productsPerPage = this.context.brandProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar',
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            showMore: 'brand/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

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
}
