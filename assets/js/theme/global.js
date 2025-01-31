import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import modalFactory from "./global/modal";

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        svgInjector();


        if (/Android|webOS|iPhone|iPad|iPod|Safari|iPhone 12|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 768)  {
            $('.footer-info-col .footer-info-heading').on('click', function () {
                $(this).toggleClass('active');
                $(this).siblings('.footer-info-list').slideToggle();
            });



            // let navItem = document.querySelectorAll(".mob-item");
            // // let navItem = document.querySelectorAll(".icon.navPages-action-moreIcon");
            //
            // navItem.forEach(function (item) {
            //     item.addEventListener('click', function (event) {
            //         // Check if the clicked item or its parent has the class "navPage-subMenu-item"
            //         console.log('target2', event.target)
            //         const isSubMenu = event.target.classList.contains("navPage-subMenu-item") || event.target.closest(".navPage-subMenu-item");
            //         if (!isSubMenu) {
            //             navItem.forEach(function (otherItem) {
            //                 if (otherItem !== item) {
            //                     otherItem.style.display = (otherItem.style.display === "none") ? "block" : "none";
            //                 }
            //             });
            //         }
            //     });
            // });

            let $navItem = $(".mob-item");

            $navItem.each(function() {
                $(this).on('click', function(event) {
                    console.log('target2', event.target);
                    const isSubMenu = $(event.target).hasClass("navPage-subMenu-item") || $(event.target).closest(".navPage-subMenu-item").length;
                    if (!isSubMenu) {
                        $navItem.each(function() {
                            if (this !== event.currentTarget) {
                                $(this).toggle();
                            }
                        });
                    }
                });
            });
            function toggleArrivals(){
                document.querySelectorAll('.navPages-list .mob-item').forEach((e)=>{
                    e.style.display="block"
                })
            }
            let newArrival = document.querySelector('.navPages-list > :nth-child(2).mob-item');
            let blogD = document.querySelector('.navPages-list > :nth-child(6).mob-item')

            newArrival.addEventListener('click',(a)=>{
                toggleArrivals()
            })
            blogD.addEventListener('click',(a)=>{
                toggleArrivals()
            })



            const closeButton = document.querySelector(".mobileMenu-toggle");
            const navs = document.querySelectorAll(".navPages-list li");
            closeButton.addEventListener('click', function () {
                navs.forEach(function (item) {
                    item.style.display = "block";
                });
            });

        }


//size guid start
        $('#sizeModal .modal-close').on('click', function(){
            // console.log('clicked')
            window.location.reload();
        })
        $('body').on('click', '.modal-background', function(){
                    // console.log('clicked')
                    window.location.reload();
                })

        $('.size-chart-link').on('click', () => {

            //  console.log('modal open',this.sizeModal)
            this.sizeModal = modalFactory('#sizeModal')[0];
            // console.log('modal open',this.sizeModal)
            // $('.modal-content').empty();
            this.sizeModal.open({clearContent: false, pending: false});
            // $('.modal-content').append($('.size-content'));
            // console.log('length',$('#sizeModal .modal-content .size-content').length)
            //$(".modal-content .size-content:not(:first)").remove();
            // if($('#sizeModal .modal-content .size-content').length > 1){
            //     $("#sizeModal  .modal-content .size-content:not(:first)").remove();
            // }

        });

//size guid end





        let yourAccountSpan = document.querySelectorAll('[aria-label="Breadcrumb"] > .breadcrumbs > li >a > span')
        yourAccountSpan.forEach((value)=>{
            if(value.textContent === "your orders"){
                value.textContent = "My account";
            }
            if(value.textContent === "Error"){
                let pData = document.querySelector('.u-textAlignCenter')
                pData.style.color='#212121';
            }
            if (value.textContent === "your account") {
                let liElement = value.parentElement.parentElement;
                liElement.remove();
            }
            if(value.textContent ==="your messages"){
                value.textContent="My account"
            }
            if(value.textContent ==="address book"){
                value.textContent="My account"
            }
            if(value.textContent ==="your wishlists"){
                value.textContent="My account"
            }
            if(value.textContent ==="recently viewed items"){
                value.textContent="My account"
            }
            if(value.textContent ==="account details"){
                value.textContent="My account"
            }

        })






        $('.banners svg').on('click', function () {
            // $('.banners').hide();
            $('.banners').css({'display': 'none'});
            $('.header').css({'margin-top': '0'});
            if($(window).width() >= 1280) {
                $('.body').css({'margin-top': '6.6rem'});
            }
            if($(window).width() <= 1280) {
                $('.body').css({'margin-top': '6rem'});
            }
            if($(window).width() <= 786) {
                $('.body').css({'margin-top': '1rem'});
            }
        });





        ///ajax code start
        if(document.querySelectorAll('.category-product-section').length){
            $('.category-product-section').each(function(){
                let url = $(this).data('prod');
                let $this = $(this);
                $.ajax({
                    url: url,
                    method: 'GET',
                    success:function(data){
                        console.log(data,'data')
                        if($(data).find('li.product').length) {
                            if ($(window).width() > 800) {
                                $this.find('.category-product-list ul.productGrid').html($(data).find('li.product:lt(10)'))
                            }
                            else{
                                $this.find('.category-product-list ul.productGrid').html($(data).find('li.product:lt(6)'))
                            }
                            $('.category-product-list').addClass("act-loaded")
                            if ($(window).width() > 800) {
                                $('.new-cate').slick({
                                    slidesToShow: 4,
                                    slidesToScroll: 4,
                                    dots: true,
                                    infinite: true
                                });
                            }
                            if (window.location.pathname !== "/cart.php") {
                                if ($(window).width() < 800) {
                                    $('.productGrid li .card-img-mobile-slide').slick({
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        infinite: false,
                                        dots: true
                                    })
                                }
                            }

                        }else{
                            $this.find('.category-product-list ul.productGrid').html('<li>No any product yet</li>')
                        }
                    }
                })
            });
        }
        ///end ajax

        //home-page category image section
        if ($(window).width() < 800) {
            $('.category-container').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // autoplay: true,
                // autoplaySpeed: 2000,
                centerMode: true,
                arrows: false

            })
        }
        //end of the homepage category image section
        $('.home-page-up-going-arrow').click(function() {
            // console.log("howm-arrow")
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        });


        //custom pages start
        var coll = document.getElementsByClassName("collapsible");

        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var collapsibleContent = this.nextElementSibling;
                if (collapsibleContent.style.maxHeight) {
                    collapsibleContent.style.maxHeight = null;
                } else {
                    collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
                }
            });
        }

        $('.dropdown-toggle').click(function () {
            $('.static-sidebar-mob ').toggle();
            $('.caret').toggleClass('open');
        })
        $(function () {
            let current = location.pathname;
            $('.static-sidebar-mob li a').each(function () {
                let $this = $(this);
                // if the current path is like this link, make it active
                if ($this.attr('href').indexOf(current) !== -1) {
                    $(".listname").text($(this).text());
                    $this.addClass('active');
                    $(".listname").addClass('active');
                }
            })
        })

        $('.select-toggle').click(function () {
            $('.navBar-section li').toggle();
            $('.arrow').toggleClass('close');
        })

        $(function () {
            let current = location.pathname;
            if ($('.navBar-section li').length > 0) {
                $('.navBar-section li').each(function () {
                    let $this = $(this);
                    if ($this.hasClass('is-active')) {
                        $(".select-toggle .display-value").text($this.text());
                    }
                })
            }
        })


        $('.size-tabs').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            variableWidth: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3, // Set the number of slides to show at 768px and above
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        $('.size-tabs').on('click', 'a', function (event) {
            event.preventDefault();
            var targetTabId = $(this).attr('href').substring(1);

            // Remove 'is-active' class from all tabs
            $('.size-tab').removeClass('is-active');
            // Add 'is-active' class to the clicked tab
            $(this).parent('.size-tab').addClass('is-active');

            // Remove 'is-active' class from all tab contents
            $('.tabs-contents .tab-content').removeClass('is-active');
            // Add 'is-active' class to the corresponding tab content
            $('#' + targetTabId).addClass('is-active');

            // Remove 'is-active' class from all sub-tab contents
            $('#' + targetTabId + ' .sub-tab-content').removeClass('is-active');
            // Add 'is-active' class to the first sub-tab content
            $('#' + targetTabId + ' .sub-tab-content:first-child').addClass('is-active');
        });
        //custom pages end



//pdp start

        $('.description-container').find('.description-title').click(function(){
            var isActive = $(this).hasClass("active");
            $('.description-title').removeClass('active')
            if (!isActive) {
                $(this).toggleClass('active');
            }

            $(this).next().slideToggle(500);
            //Hide the other panels
            $(".description-content").not($(this).next()).slideUp(500);

        });


        $('.productView-img-containers').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            })

        $('.productView-img-containers').css('opacity', 1);
        $('.productView-thumbnails li[data-index=0]').css('opacity',0.6);
        $('.productView-img-containers').on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('.productView-thumbnails li').css('opacity',1);
            $('.productView-thumbnails li[data-index='+currentSlide+']').css('opacity',0.6);
            if(currentSlide == $(slick.$slides).length-1){
                let playVideo = $(slick.$slides)[currentSlide]
                let player1 = new Vimeo.Player(playVideo);
                player1.play().then(function () {
                    // Video started playing
                }).catch(function (error) {
                    // console.log('Error playing video:', error.name);
                });
            }
        });



        let mobilePdpImagelen = $('.mobile-productView-images .productView-thumbnail').length;
        if(mobilePdpImagelen > 1) {
            $('.mobile-productView-images').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                centerMode: false,
                arrows: false,
                dots: true
            });
        }
        else{
            $('.mobile-productView-images .productView-thumbnail img').css({'width': '100%'});
        }
        updateSlideNumbers();
        $('.mobile-productView-images').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            updateSlideNumbers();
            if(currentSlide == $(slick.$slides).length-1){
                let playVideo = $(slick.$slides)[currentSlide]
                var player1 = new Vimeo.Player(playVideo);
                player1.play().then(function () {
                    // Video started playing
                }).catch(function (error) {
                    // console.log('Error playing video:', error.name);
                });
            }
        })
        updateSlideNumbers();
        function updateSlideNumbers() {
            var totalSlider = $('.mobile-productView-images').slick('getSlick').slideCount;
            $('.mobile-productView-images').find('.slick-slide').each(function (index,el) {
                $(el).attr('data-index', (index + 1) + '/' + totalSlider )
            })
        }





        // $('.accordion-block').find('.filter-title').click(function(){
        //     var isActive = $(this).hasClass("is-open");
        //     $('.filter-title').removeClass('is-open')
        //     if (!isActive) {
        //         $(this).toggleClass('is-open');
        //     }
        //
        //     $(this).next().slideToggle(500);
        //     //Hide the other panels
        //     $(".filter-content").not($(this).next()).slideUp(500);
        //
        // });




//pdp end

        // PLP sort reload
        $('select#sort').change( function(){
            window.location.reload();
        })

        if($('.breadcrumbs .breadcrumb.is-active span').text().includes('-')){
                let hyphenIndex = $('.breadcrumbs .breadcrumb.is-active span').text().indexOf('-');
                if (hyphenIndex !== -1) {
                    let result = $('.breadcrumbs .breadcrumb.is-active span').text().substring(0, hyphenIndex).trim();
                    $('.breadcrumbs .breadcrumb.is-active span').text(result)

                }
            }


        //blog pagination end




        $('.navUser-action.account-menu[href="#"]').click(function(){
            $('.user-profile').toggle();
        })

        $(document).on('click touch', function (event) {
            if (!$(event.target).parents().addBack().is('.navUser-action.account-menu[href="#"]')) {
                $('.user-profile').hide();
            }
        });
        $('.user-profile').on('click touch', function (event) {
            event.stopPropagation();
        });
        //filters

        // $('.accordion-content').hide();
        // $('.accordion-navigation').click(function () {
        //     var collapsible = $(this).data('collapsible');
        //     var isOpen = $(collapsible).is(':visible');
        //     $('.accordion-content').hide();
        //     $('.accordion-navigation').removeClass('is-open');
        //     $('.accordion-navigation').attr('aria-expanded', 'false');
        //     if (!isOpen) {
        //         $(collapsible).slideDown();
        //         $(this).addClass('is-open');
        //         $(this).attr('aria-expanded', 'true');
        //     }
        // });
        let countOfMobSecondImage = $('.productGrid .product .card-figure .card-img-mobile-slide').length;
        // console.log("countOfMobSecondImage", countOfMobSecondImage)
        if ($(window).width() < 800) {
            $('.productGrid li .card-img-mobile-slide').each(function() {
                $(this).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                });
                $(this).on('afterChange', function(event, slick, currentSlide, nextSlide){
                    // if($(slick.$slides[1].localName) == 'iframe'){
                    //     let id = $(slick.$slides[1].id);
                    //     console.log('id', id.selector);
                    //     var player = new Vimeo.Player(id.selector);
                    //     player.play().then(function () {
                    //     }).catch(function (error) {
                    //     });
                    //  }
                    let id = $(slick.$slides[1].id);
                    var player = new Vimeo.Player(id.selector);
                    player.play().then(function () {
                        // Video started playing
                    }).catch(function (error) {
                        // console.log('Error playing video:', error.name);
                    });
                })
            });
            // $('.productGrid li .card-img-mobile-slide').on('afterChange',function(event, slick, currentSlide, nextSlide){
            //     console.log('currentSlide',$(currentSlide).find('iframe'));
            //     console.log('nextSlide',nextSlide);
            // })

        }

        if ($(window).width() > 800) {
            $('.productView-thumbnails').slick({
                vertical: true,
                verticalSwiping: true,
                infinite: false,
                slidesToScroll: 1,
                slidesToShow: 5.7
            })
        }


        const plpCenterArrow = document.querySelector('.plp-centerArrow');
        plpCenterArrow.addEventListener('click',()=>{
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // if(window.location.href.includes('search')){
        //     // /search.php?page=2&section=product&search_query=+mac+cain"
        //     let nextLinkUrl = $('.pagination-item.pagination-item--next a').attr('href');
        //     let onlyPageInfo = nextLinkUrl.split('&')[0].split('?')[1];
        //     let lastLinkURLText = $('.pagination').data('total');
        //     $('.last-page-link a').attr('href',nextLinkUrl.replace(onlyPageInfo, 'page='+lastLinkURLText));
        //
        //
        //     let previousLinkUrl = $('.pagination-item.pagination-item--previous a').attr('href');
        //     let onlyPageInfoPrev = previousLinkUrl.split('&')[0].split('?')[1];
        //     let firstLinkURLText = $('.pagination').data('first');
        //
        //     $('.first-page-link a').attr('href', previousLinkUrl.replace(onlyPageInfoPrev, 'page='+firstLinkURLText))
        //
        //     if(window.location.href.includes('page=1') || !window.location.href.includes('page')){
        //         $('.first-page-link a, .pagination-item.pagination-item--previous a').css('pointer-events','none');
        //     }
        //     if(window.location.href.includes(`page=${lastLinkURLText}`) ){
        //         $('.last-page-link a, .pagination-item.pagination-item--next a').css('pointer-events','none');
        //     }
        // }
        // else{
        //     //blogs pagination
        //     let lastLinkURL = $('li.pagination-item--current a').attr('href');
        //     let lastLinkFirstPart = lastLinkURL.split('=')[0];
        //     let lastLinkURLText = $('.pagination').data('total');
        //
        //     console.log(lastLinkFirstPart)
        //     if (window.location.href.includes('?')) {
        //         let lastLinkFirstPart1 = lastLinkURL.split('&page=')[0];
        //         console.log(lastLinkFirstPart1,"hello")
        //         $('.last-page-link a').attr('href', lastLinkFirstPart1+'&page='+lastLinkURLText)
        //     }
        //     else {
        //         $('.last-page-link a').attr('href', lastLinkFirstPart+'='+lastLinkURLText)
        //     }
        //
        //
        //     let firstLinkURL = $('li.pagination-number-link:first a').attr('href');
        //     let firstLinkFirstPart = firstLinkURL;
        //     // let firstLinkURLText = $('.pagination').data('first');
        //     $('.first-page-link a').attr('href', firstLinkFirstPart)
        //
        //
        //
        //
        //
        //     if(window.location.href.includes('page=1') || !window.location.href.includes('page')){
        //         $('.first-page-link a, .pagination-item.pagination-item--previous a').css('pointer-events','none');
        //     }
        //     if(window.location.href.includes(`page=${lastLinkURLText}`) ){
        //         $('.last-page-link a, .pagination-item.pagination-item--next a').css('pointer-events','none');
        //     }
        // }



    }
}
