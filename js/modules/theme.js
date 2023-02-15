(function($){
    
    $(document).ready( function(){
        
        var html = $('html'),
            imgSrc = new Image(),
            windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            
        // shipping added below cepbox
        function waitForElementToDisplay(selector, time) {
            if(document.querySelector(selector)!=null) {
                $('.shipping-result').html($('.page-simula-frete'));
                return;
            }
            else {
                setTimeout(function() {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
        
        $('.botao-simular-frete, #shippingSimulatorButton').click(function() {
            $('.shipping-result').html('');
            waitForElementToDisplay('.page-simula-frete', 1000);
        });
        
        // start slick on banner home
        if($.fn.jquery != '1.6.2'){
            
            $('.banner-home-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-prev"><path d="M170.965,363.918l330.214,330.214c3.814,3.961,8.948,5.868,13.937,5.868c4.987,0,10.122-2.054,13.936-5.868c7.775-7.774,7.775-20.244,0-28.019L212.92,349.981L529.051,33.85c7.775-7.775,7.775-20.244,0-28.019	c-7.774-7.775-20.244-7.775-28.019,0L170.819,336.045C163.19,343.674,163.19,356.289,170.965,363.918z"/></svg>',
                nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-next"><path d="M529.18,336.045L198.966,5.831c-7.774-7.775-20.244-7.775-28.019,0c-7.775,7.775-7.775,20.244,0,28.019l316.131,316.131L170.948,666.113c-7.775,7.774-7.775,20.244,0,28.019c3.813,3.814,8.948,5.868,13.936,5.868c4.988,0,10.122-1.907,13.937-5.868l330.214-330.214C536.809,356.289,536.809,343.674,529.18,336.045z"/></svg>',
    
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }]
            });
            
            // start slick on products of home page
            $('.showcase > ul').slick({
                lazyLoad: 'ondemand',
                slidesToShow: 4,
                slidesToScroll: 4,
                prevArrow: '<svg class="icon-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M64.5 122.6c32 0 58.1-26 58.1-58.1s-26-58-58.1-58-58 26-58 58 26 58.1 58 58.1zm0-108c27.5 0 49.9 22.4 49.9 49.9S92 114.4 64.5 114.4 14.6 92 14.6 64.5 37 14.6 64.5 14.6z"/><path d="M70 93.5c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8L52.3 64.2l23.5-23.5c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0L43.6 61.3c-.8.8-1.2 1.8-1.2 2.9s.4 2.1 1.2 2.9L70 93.5z"/></svg>',
                nextArrow: '<svg class="icon-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M64.5 122.6c32 0 58.1-26 58.1-58.1S96.5 6.4 64.5 6.4 6.4 32.5 6.4 64.5s26.1 58.1 58.1 58.1zm0-108c27.5 0 49.9 22.4 49.9 49.9S92 114.4 64.5 114.4 14.6 92 14.6 64.5 37 14.6 64.5 14.6z"/><path d="M51.1 93.5c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l26.4-26.4c.8-.8 1.2-1.8 1.2-2.9 0-1.1-.4-2.1-1.2-2.9L56.9 34.9c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l23.5 23.5-23.5 23.5c-1.6 1.6-1.6 4.2 0 5.8z"/></svg>',
                
                responsive: [
                    {
                        breakpoint: 922,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 460,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            dots: false
                        }
                    }                
                ]
            });
            
            // start slick on images of product on product page
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                arrows: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });     
        }
        
        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }
        
        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }
        
        // open and close filters of smartfilter in catalog and search pages
        $('.open-filters').click(function() {
            $('.filters-list').slideToggle();
        });
    
    });
    
    //Topo flutuante
	var $fixedBar = $('.floating');
	$(window).scroll(function(){
		if($(window).scrollTop() > 212) {
			$fixedBar.addClass('fixed');
		} else {
			$fixedBar.removeClass('fixed');
		}
	});
	
    // modal login
    $('.modal-login').click(function(event) {
       event.preventDefault();
       $('tray-login').show();
    });		
    
})(jQuery);

// menu mobile
(function(){
    var btnMenu = document.getElementsByClassName('trigger-menu')[0];
    var html = document.getElementsByTagName('html')[0];
    var backdropMobile = document.getElementsByClassName('menu-mobile-backdrop')[0];

    btnMenu.addEventListener('touchend', function(){
        html.classList.add('menu-open');
    });

    html.addEventListener('touchend', function(e){
        if(e.target == backdropMobile){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
})();