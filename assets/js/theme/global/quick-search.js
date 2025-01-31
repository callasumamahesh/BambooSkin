import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import StencilDropDown from './stencil-dropdown';

export default function () {

    const $quickSearchResults = $('.quickSearchResults');
    const $quickSearchForms = $('[data-quick-search-form]');
    const $quickSearchExpand = $('#quick-search-expand');
    const $searchQuery = $quickSearchForms.find('[data-search-quick]');
    const stencilDropDownExtendables = {
        hide: () => {
            $quickSearchExpand.attr('aria-expanded', false);
            $searchQuery.trigger('blur');
        },
        show: (event) => {
            $quickSearchExpand.attr('aria-expanded', true);
            $searchQuery.trigger('focus');
            event.stopPropagation();
        },
    };
    const stencilDropDown = new StencilDropDown(stencilDropDownExtendables);
    stencilDropDown.bind($('[data-search="quickSearch"]'), $('#quickSearch'));

    stencilDropDownExtendables.onBodyClick = (e, $container) => {
        // If the target element has this data tag or one of it's parents, do not close the search results
        // We have to specify `.modal-background` because of limitations around Foundation Reveal not allowing
        // any modification to the background element.
        if ($(e.target).closest('[data-prevent-quick-search-close], .modal-background').length === 0) {
            stencilDropDown.hide($container);
        }
    };

    // stagger searching for 1200ms after last input
    const debounceWaitTime = 1200;
    const doSearch = _.debounce((searchQuery) => {
        utils.api.search.search(searchQuery, { template: 'search/quick-results' }, (err, response) => {
            if (err) {
                return false;
            }

            $quickSearchResults.html(response);
            const $quickSearchResultsCurrent = $quickSearchResults.filter(':visible');

            const $noResultsMessage = $quickSearchResultsCurrent.find('.quickSearchMessage');
            if ($noResultsMessage.length) {
                $noResultsMessage.attr({
                    role: 'status',
                    'aria-live': 'polite',
                });
            } else {
                const $quickSearchAriaMessage = $quickSearchResultsCurrent.next();
                $quickSearchAriaMessage.addClass('u-hidden');

                const predefinedText = $quickSearchAriaMessage.data('search-aria-message-predefined-text');
                const itemsFoundCount = $quickSearchResultsCurrent.find('.product').length;

                $quickSearchAriaMessage.text(`${itemsFoundCount} ${predefinedText} ${searchQuery}`);

                setTimeout(() => {
                    $quickSearchAriaMessage.removeClass('u-hidden');
                }, 100);
            }
        });
    }, debounceWaitTime);

    // utils.hooks.on('search-quick', (event, currentTarget) => {
    //     const searchQuery = $(currentTarget).val();
    //
    //     // server will only perform search with at least 3 characters
    //     if (searchQuery.length < 3) {
    //         return;
    //     }
    //
    //     doSearch(searchQuery);
    // });


    utils.hooks.on('search-quick', (event, currentTarget) => {
        const searchQuery = $(currentTarget).val();
        const removeValue = document.querySelector('.quickSearchResults')
        var deleteValue = document.getElementById('delete-value')
        const closeButton = document.querySelector('.modal-close')


        if (searchQuery.length === 0) {
            removeValue.style.display = 'hide'

        }
        else if(searchQuery.length < 1){

            return true;
        }
        doSearch(searchQuery);
        deleteValue.style.display="block"
        closeButton.style.display="none"

        if(searchQuery.length === 0){
            deleteValue.style.display="none"
            closeButton.style.display="block"
        }
    });
    var deleteValue = document.getElementById('delete-value')
    var searchElement = document.querySelector('.form-input')
    const removeValue = document.querySelector('.quickSearchResults')
    const addValue = document.querySelector('#nav-quick-search')
    const closeButton = document.querySelector('.closeButton')
    const closeSearch = document.querySelector('#quickSearch')
    const suggestionText = document.querySelector('.below-search-bar-suggestion');

    deleteValue.addEventListener('click',()=>{
        searchElement.value = "";
        removeValue.style.display = "none";
        deleteValue.style.display="none";
        suggestionText.style.display="block";
    })
    addValue.addEventListener('click',()=>{
        removeValue.style.display = "block";
    })

    closeButton.addEventListener('click',()=>{
        closeSearch.style.display='none';
    })

    // Catch the submission of the quick-search forms
    $quickSearchForms.on('submit', event => {
        event.preventDefault();

        const $target = $(event.currentTarget);
        const searchQuery = $target.find('input').val();
        const searchUrl = $target.data('url');

        if (searchQuery.length === 0) {
            return;
        }

        window.location.href = `${searchUrl}?search_query=${encodeURIComponent(searchQuery)}`;
    });
}
