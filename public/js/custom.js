//------------------------------------------
    //Custom JS
//------------------------------------------
jQuery(document).ready(function() {
	
	//lib--------------------------------------
	initScrollup("#id_your_btn"); // or .class_your_btn
	//initDatepicker();
	
	jQuery("#header-left-menu li a").click(function(){
		var shref = jQuery(this).attr("href");
		if( shref.indexOf('#') > -1 && shref.length > 1 ){
			gotoEleId(shref);
			return false;
		}
	});
	
	//your custom here-------------------------
	new WOW().init();
	
	jQuery('.fancybox').fancybox();
	
	jQuery(".hc-search-wrapper > a").click(function(){
		jQuery(".search-bar-header").toggle();
	});
	
	jQuery('#main-slider').on('init', function (e, slick) {
		var $firstAnimatingElements = jQuery('div.main-slide:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	jQuery('#main-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = jQuery('div.main-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	jQuery('#main-slider').slick({
		autoplay: true,
		arrows:false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true
	});
	jQuery('.gallery-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows:false,
					dots:true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows:false,
					dots:true,
				}
			}
		]
	});
	jQuery('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		//autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows:false,
					dots:true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows:false,
					dots:true,
				}
			}
		]
	});

	jQuery("#related-product-slider").owlCarousel({
		items: 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 4],
		itemsTablet: [768, 3],
		itemsMobile: [480,2],
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	jQuery("#owl-blog-single-slider1").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		margin:0,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	jQuery("#owl-blog-single-slider2").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider3").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider4").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider5").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider6").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider7").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider8").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider9").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	jQuery("#owl-blog-single-slider10").owlCarousel({
		items: 2,
		itemsDesktop: [1000, 2],
		itemsDesktopSmall: [900, 2],
		itemsTablet: [600, 1],
		itemsMobile: false,
		navigation: true,
		pagination: false,
		slideSpeed: 1000,
		paginationSpeed: 1000,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('#back-to-top').fadeIn(duration);
		} else {
			jQuery('#back-to-top').fadeOut(duration);
		}
	});

	jQuery('#back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	window.onscroll = changePos;

	 function changePos() {
		 var header = jQuery("#header");
		 var headerheight = jQuery("#header").height();
		 if (window.pageYOffset > headerheight) {		
			 header.addClass('scrolldown');
		 } else {
			 header.removeClass('scrolldown');
		 }
	 }
	 
	var date = new Date();
	var minutes = 60;
	date.setTime(date.getTime() + (minutes * 60 * 1000));

	if (getCookie('popupNewLetterStatus') != 'closed') {
		jQuery('#popup-btn').trigger('click');
		setCookie('popupNewLetterStatus', 'closed', date);
	};
	
	if(jQuery(window).width()> 768){
		setTimeout(function() {
			jQuery("#ProductThumbs .thumbnail-item:first-child a").trigger('click');
		},3000);

		jQuery('#ProductThumbs .thumbnail-item').click(function(){
			jQuery(this).addClass('thumbnail-overlay').siblings().removeClass('thumbnail-overlay');
		});
	};

	if(jQuery(window).width()< 768){
		jQuery('#ProductThumbs .thumbnail-item').click(function(){
			jQuery(this).addClass('thumbnail-overlay').parent().siblings().children().removeClass('thumbnail-overlay');
		});
	}
		
});

var modal = document.getElementById('popup-subscribe');
var span = document.getElementsByClassName("close-popup")[0];

var btn = document.getElementById("popup-btn");
if(btn != null){
	btn.onclick = function() {
		modal.style.display = "block";
		setTimeout(function(){
			jQuery('#popup-modal').addClass('show');
		}, 500)
	}
}
if(span != null){
	span.onclick = function() {
		hidePopupSub(modal)
	}
}

window.onclick = function(event) {
	if (event.target == modal) {
		hidePopupSub(modal)
	} 
}

function hidePopupSub(modal){
	jQuery('#popup-modal').removeClass('show');
	setTimeout(function(){
		modal.style.display = "none";
	}, 500)
}

function openTabs(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpenTab").click();

function doAnimations(elements) {
	var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	elements.each(function () {
		var $this = jQuery(this);
		var $animationDelay = $this.data('delay');
		var $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
	});
}
	
function initScrollup(id_or_class){
	jQuery(id_or_class).click(function(){
		jQuery("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
}

function initDatepicker(){
	//References: http://eonasdan.github.io/bootstrap-datetimepicker/Options/
	jQuery('input.datetimepicker').datetimepicker({
		format: 'DD/MM/YYYY'
	});
	
	jQuery('input.timepicker').datetimepicker({
		 format: 'HH:mm'
	});
}

function gotoEleClass(clss){
	 jQuery('html, body').animate({
        scrollTop: jQuery(clss).offset().top
    }, 1000);
}

function gotoEleId(id){
	 jQuery('html, body').animate({
        scrollTop: jQuery(id).offset().top
    }, 1000);
}

function gotoEle(e){
	 jQuery('html, body').animate({
        scrollTop: jQuery(e).offset().top
    }, 1000);
}
