import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import FacetedSearch from './common/faceted-search';
import { announceInputErrorMessage } from './common/utils/form-utils';
import compareProducts from './global/compare-products';
import urlUtils from './common/utils/url-utils';
import Url from 'url';
import collapsibleFactory from './common/collapsible';
import 'jstree';
import nod from './common/nod';



const leftArrowKey = 37;
const rightArrowKey = 39;

export default class Search extends CatalogPage {



    formatCategoryTreeForJSTree(node) {

        const nodeData = {
            text: node.data,
            id: node.metadata.id,
            state: {
                selected: node.selected,
            },
        };

        if (node.state) {
            nodeData.state.opened = node.state === 'open';
            nodeData.children = true;
        }

        if (node.children) {
            nodeData.children = [];
            node.children.forEach((childNode) => {
                nodeData.children.push(this.formatCategoryTreeForJSTree(childNode));
            });
        }

        return nodeData;
    }


    showProducts(navigate = true) {
        this.$productListingContainer.removeClass('u-hidden');
        this.$facetedSearchContainer.removeClass('u-hidden');
        this.$contentResultsContainer.addClass('u-hidden');

        $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
        $('[data-content-results-toggle]').addClass('navBar-action');

        $('[data-product-results-toggle]').removeClass('navBar-action');
        $('[data-product-results-toggle]').addClass('navBar-action-color--active');

        this.activateTab($('[data-product-results-toggle]'));

        if (!navigate) {
            return;
        }

        const searchData = $('#search-results-product-count span').data();
        const url = (searchData.count > 0) ? searchData.url : urlUtils.replaceParams(searchData.url, {
            page: 1,
        });

        urlUtils.goToUrl(url);
    }

    showContent(navigate = true) {
        this.$contentResultsContainer.removeClass('u-hidden');
        this.$productListingContainer.addClass('u-hidden');
        this.$facetedSearchContainer.addClass('u-hidden');

        $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
        $('[data-product-results-toggle]').addClass('navBar-action');

        $('[data-content-results-toggle]').removeClass('navBar-action');
        $('[data-content-results-toggle]').addClass('navBar-action-color--active');

        this.activateTab($('[data-content-results-toggle]'));

        if (!navigate) {
            return;
        }

        const searchData = $('#search-results-content-count span').data();
        const url = (searchData.count > 0) ? searchData.url : urlUtils.replaceParams(searchData.url, {
            page: 1,
        });

        urlUtils.goToUrl(url);
    }

    activateTab($tabToActivate) {
        const $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');

        $tabsCollection.each((idx, tab) => {
            const $tab = $(tab);

            if ($tab.is($tabToActivate)) {
                $tab.removeAttr('tabindex');
                $tab.attr('aria-selected', true);
                return;
            }

            $tab.attr('tabindex', '-1');
            $tab.attr('aria-selected', false);
        });
    }

    onTabChangeWithArrows(event) {
        const eventKey = event.which;
        const isLeftOrRightArrowKeydown = eventKey === leftArrowKey
            || eventKey === rightArrowKey;
        if (!isLeftOrRightArrowKeydown) return;

        const $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');

        const isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
        if (isActiveElementNotTab) return;

        const $activeTab = $(`#${document.activeElement.id}`);
        const activeTabIdx = $tabsCollection.index($activeTab);
        const lastTabIdx = $tabsCollection.length - 1;

        let nextTabIdx;
        switch (eventKey) {
            case leftArrowKey:
                nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
                break;
            case rightArrowKey:
                nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
                break;
            default: break;
        }

        $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
    }

    onReady() {
        compareProducts(this.context);
        this.arrangeFocusOnSortBy();


        // let perentInput = document.querySelectorAll('div[id^="facetedSearch-content-"]')
        // perentInput.forEach((a)=>{
        //     if(a.querySelectorAll('ul li a.is-selected').length > 0){
        //         const filterCount = a.querySelectorAll('ul li a.is-selected').length
        //         a.parentElement.querySelector('.selected-items').innerText = `/ ${filterCount} selected`
        //     }
        // })


        const $searchForm = $('[data-advanced-search-form]');
        const $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
        const url = Url.parse(window.location.href, true);
        const treeData = [];
        this.$productListingContainer = $('#product-listing-container');
        this.$facetedSearchContainer = $('#faceted-search-container');
        this.$contentResultsContainer = $('#search-results-content');

        const $this = this;

        // Init faceted search
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
        $(".closeFilter").on("click", function () {
            location.reload(true);
        });

        // Init collapsibles
        collapsibleFactory();

        $('[data-product-results-toggle]').on('click', event => {
            event.preventDefault();
            this.showProducts();
        });

        $('[data-content-results-toggle]').on('click', event => {
            event.preventDefault();
            this.showContent();
        });

        $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);

        if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
            this.showContent(false);
        } else {
            this.showProducts(false);
        }

        const validator = this.initValidation($searchForm)
            .bindValidation($searchForm.find('#search_query_adv'));

        this.context.categoryTree.forEach((node) => {
            treeData.push(this.formatCategoryTreeForJSTree(node));
        });

        this.categoryTreeData = treeData;
        this.createCategoryTree($categoryTreeContainer);

        $searchForm.on('submit', event => {
            const selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

            if (!validator.check()) {
                return event.preventDefault();
            }

            $searchForm.find('input[name="category\[\]"]').remove();

            for (const categoryId of selectedCategoryIds) {
                const input = $('<input>', {
                    type: 'hidden',
                    name: 'category[]',
                    value: categoryId,
                });

                $searchForm.append(input);
            }
        });

        const $searchResultsMessage = $(`<p
            class="aria-description--hidden"
            tabindex="-1"
            role="status"
            aria-live="polite"
            >${this.context.searchResultsCount}</p>`)
            .prependTo('body');

        setTimeout(() => $searchResultsMessage.focus(), 100);







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




        let loadOptions = document.querySelector('.sort-block > :last-child #sort')
        let descTop = document.querySelector('.desktop-sort > :last-child #sort')


        if($(window).width() < 800){
            loadOptions.addEventListener('change',function(){
                setTimeout(()=>{
                    location.reload();
                },300)

            });
        }else{
            descTop.addEventListener('change',function(){

                setTimeout(()=>{
                    location.reload();
                },300 )
            })
        }
    }


    loadTreeNodes(node, cb) {
        $.ajax({
            url: '/remote/v1/category-tree',
            data: {
                selectedCategoryId: node.id,
                prefix: 'category',
            },
            headers: {
                'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : '',
            },
        }).done(data => {
            const formattedResults = [];

            data.forEach((dataNode) => {
                formattedResults.push(this.formatCategoryTreeForJSTree(dataNode));
            });

            cb(formattedResults);
        });
    }

    createCategoryTree($container) {
        const treeOptions = {
            core: {
                data: (node, cb) => {
                    // Root node
                    if (node.id === '#') {
                        cb(this.categoryTreeData);
                    } else {
                        // Lazy loaded children
                        this.loadTreeNodes(node, cb);
                    }
                },
                themes: {
                    icons: true,
                },
            },
            checkbox: {
                three_state: false,
            },
            plugins: [
                'checkbox',
            ],
        };

        $container.jstree(treeOptions);
    }

    initFacetedSearch() {
        // eslint-disable-next-line object-curly-newline
        const { onMinPriceError, onMaxPriceError, minPriceNotEntered, maxPriceNotEntered, onInvalidPrice } = this.context;
        const $productListingContainer = $('#product-listing-container');
        const $contentListingContainer = $('#search-results-content');
        const $facetedSearchContainer = $('#faceted-search-container');
        const $searchHeading = $('#search-results-heading');
        const $searchCount = $('#search-results-product-count');
        const $contentCount = $('#search-results-content-count');
        const productsPerPage = this.context.searchProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'search/product-listing',
                contentListing: 'search/content-listing',
                sidebar: 'search/sidebar',
                heading: 'search/heading',
                productCount: 'search/product-count',
                contentCount: 'search/content-count',
            },
            config: {
                product_results: {
                    limit: productsPerPage,
                },
            },
            showMore: 'search/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $searchHeading.html(content.heading);

            const url = Url.parse(window.location.href, true);
            if (url.query.section === 'content') {
                $contentListingContainer.html(content.contentListing);
                $contentCount.html(content.contentCount);
                this.showContent(false);
            } else {
                $productListingContainer.html(content.productListing);
                $facetedSearchContainer.html(content.sidebar);
                $searchCount.html(content.productCount);
                this.showProducts(false);
            }

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

    initValidation($form) {
        this.$form = $form;
        this.validator = nod({
            submit: $form,
            tap: announceInputErrorMessage,
        });

        return this;
    }

    bindValidation($element) {
        if (this.validator) {
            this.validator.add({
                selector: $element,
                validate: 'presence',
                errorMessage: $element.data('errorMessage'),
            });
        }

        return this;
    }

    check() {
        if (this.validator) {
            this.validator.performCheck();
            return this.validator.areAll('valid');
        }

        return false;
    }


}
