/*load ajax once time*/
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if (user != "" && user != null) {
			setCookie("username", user, 365);
		}
	}
}

/* Owl carousel */
var navLeftText = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
var navRightText = '<i class="fa fa-angle-left" aria-hidden="true"></i>';

jQuery(function(){

	jQuery(".owl-carousel.owl-enable").each(function(){
		var config = {
			margin: 10,
			lazyLoad: true,
			navigationText: [navLeftText, navRightText]
		}; 

		var owl = jQuery(this);
		if( jQuery(this).data('slide') == 1 ){
			config.singleItem = true;
		}else {
			config.items = jQuery(this).data( 'items' );
		}
		if (jQuery(this).data('items')) {
			config.itemsDesktop = jQuery(this).data('items');
		}
		if (jQuery(this).data('desktop')) {
			config.itemsDesktop = jQuery(this).data('desktop');
		}
		if (jQuery(this).data('desktopsmall')) {
			config.itemsDesktopSmall = jQuery(this).data('desktopsmall');
		}
		if (jQuery(this).data('tablet')) {
			config.itemsTablet = jQuery(this).data('tablet');
		}
		if (jQuery(this).data('tabletsmall')) {
			config.itemsTabletSmall = jQuery(this).data('tabletsmall');
		}
		if (jQuery(this).data('mobile')) {
			config.itemsMobile = jQuery(this).data('mobile');
		}
		if (jQuery(this).data('autoplay')) {
			config.autoPlay = jQuery(this).data('autoplay');
		}
		if (jQuery(this).data('nav')) {
			config.navigation = jQuery(this).data('nav');
		}

		jQuery(this).owlCarousel( config );
	});
})

jQuery(window).on('load', function(){
	if(jQuery('#ProductThumbs').length){
		var productThumb = jQuery('#ProductThumbs');
		var productThumbInner = jQuery('#ProductThumbs .inner');
		var productFeatureImage = jQuery('#ProductPhoto');
		var thumbControlUp = jQuery('.product-thumb-control .up');
		var thumbControlDown = jQuery('.product-thumb-control .down');
		var productFeatureImage = jQuery('.product-single__photos');

		if(jQuery(window).width() < 480){
			productThumbInner.addClass('owl-carousel');
			productThumbInner.owlCarousel({
				margin: 10,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [768, 3],
				itemsMobile: [480, 3],
				navigation: true,
				pagination: false,
				slideSpeed: 1000,
				paginationSpeed: 1000,
				navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		}else{
			var _temp = 0;
			var _mt = parseInt(productThumbInner.css("margin-top"));
			productThumb.css('max-height',productFeatureImage.height());
			var _maxScroll = productThumb.height() - productThumbInner.height();
			if(_maxScroll === 0 ){
				jQuery('.product-thumb-control').remove();
			}
			thumbControlUp.click(function(){
				_temp = _mt + 110;
				console.log(_mt);
				if(_temp > 0){
					_mt = 0;
					productThumbInner.css("margin-top", _mt)
				}else{
					_mt = _temp;
					productThumbInner.css("margin-top", _mt)
				}
			});
			thumbControlDown.click(function(){
				_temp = _mt - 110;
				console.log(_mt);
				if(_temp < _maxScroll){
					_mt = _maxScroll;
					productThumbInner.css("margin-top", _mt)
				}else{
					_mt = _temp;
					productThumbInner.css("margin-top", _mt)
				}
			});
		}
	}
})

/* variant click */

function convertToSlug(str) {

	str= str.toLowerCase();  
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");  
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  
	str= str.replace(/đ/g,"d");  
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-"); 
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,"");  
	return str;  
} 

var swatch_size = 0;
jQuery(document).ready(function(){

	jQuery('#productQuickView').on('click','input.input-quickview', function(e) {  
		e.preventDefault();
		console.log('quickviewXXX');
		swatch_size = parseInt(jQuery('#productQuickView .select-swatch').children().size());
		var jQuerythis = jQuery(this);
		var _available = '';
		jQuerythis.parent().siblings().find('label').removeClass('sd');
		jQuerythis.next().addClass('sd');
		var name = jQuerythis.attr('name');
		var value = jQuerythis.val();
		jQuery('#productQuickView select[data-option='+name+']').val(value).trigger('change');
		if(jQuery(this).data('img-src')){
			var img_ = jQuery(this).data('img-src');
			jQuery('#productQuickView .product-single__thumbnail[href="'+img_+'"]').trigger('click');
		}
		if(swatch_size == 2){
			if(name.indexOf('1') != -1){
				jQuery('#variant-swatch-1-quickview .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-2-quickview .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-1-quickview .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-1-quickview .swatch-element').removeClass('soldout');
				jQuery('#productQuickView .selector-wrapper .single-option-selector').eq(1).find('option').each(function(){
					var _tam = jQuery(this).val();
					jQuery(this).parent().val(_tam).trigger('change');
					if(check_variant_quickview){
						if(_available == '' ){
							_available = _tam;
						}
					}else{
						jQuery('#variant-swatch-1-quickview .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
						jQuery('#variant-swatch-1-quickview .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);
					}
				})
				jQuery('#productQuickView .selector-wrapper .single-option-selector').eq(1).val(_available).trigger('change');
				jQuery('#variant-swatch-1-quickview .swatch-element[data-value="'+_available+'"] label').addClass('sd');
			}
		}else if (swatch_size == 3){
			var _count_op2 = jQuery('#variant-swatch-1-quickview .swatch-element').size();
			var _count_op3 = jQuery('#variant-swatch-2-quickview .swatch-element').size();
			if(name.indexOf('1') != -1){
				jQuery('#variant-swatch-1-quickview .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-2-quickview .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-1-quickview .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-1-quickview .swatch-element').removeClass('soldout');
				jQuery('#variant-swatch-2-quickview .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-2-quickview .swatch-element').removeClass('soldout');
				var _avi_op1 = '';
				var _avi_op2 = '';
				jQuery('#variant-swatch-1-quickview .swatch-element').each(function(ind,value){
					var _key = jQuery(this).data('value');
					var _unavi = 0;
					jQuery('#productQuickView .single-option-selector').eq(1).val(_key).change();
					jQuery('#variant-swatch-2-quickview .swatch-element label').removeClass('sd');
					jQuery('#variant-swatch-2-quickview .swatch-element').removeClass('soldout');
					jQuery('#variant-swatch-2-quickview .swatch-element').find('input').prop('disabled', false);
					jQuery('#variant-swatch-2-quickview .swatch-element').each(function(i,v){
						var _val = jQuery(this).data('value');
						jQuery('#productQuickView .single-option-selector').eq(2).val(_val).change();
						if(check_variant == true){
							if(_avi_op1 == ''){
								_avi_op1 = _key;
							}
							if(_avi_op2 == ''){
								_avi_op2 = _val;
							}
							//console.log(_avi_op1 + ' -- ' + _avi_op2)
						}else{
							_unavi += 1;
						}
					})
					if(_unavi == _count_op3){
						jQuery('#variant-swatch-1-quickview .swatch-element[data-value = "'+_key+'"]').addClass('soldout');
						setTimeout(function(){
							jQuery('#variant-swatch-1-quickview .swatch-element[data-value = "'+_key+'"] input').attr('disabled','disabled');
						})
					}
				})
				jQuery('#variant-swatch-1-quickview .swatch-element[data-value="'+_avi_op1+'"] input').click();
			}
			else if(name.indexOf('2') != -1){
				jQuery('#variant-swatch-2-quickview .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-2-quickview .swatch-element').removeClass('soldout');
				jQuery('#productQuickView .selector-wrapper .single-option-selector').eq(2).find('option').each(function(){
					var _tam = jQuery(this).val();
					jQuery(this).parent().val(_tam).trigger('change');
					if(check_variant_quickview){
						if(_available == '' ){
							_available = _tam;
						}
					}else{
						jQuery('#variant-swatch-2-quickview .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
						jQuery('#variant-swatch-2-quickview .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);				
					}
				})
				jQuery('#productQuickView .selector-wrapper .single-option-selector').eq(2).val(_available).trigger('change');
				jQuery('#variant-swatch-2-quickview .swatch-element[data-value="'+_available+'"] label').addClass('sd');
			}
		}else{

		}
	})

	jQuery('#PageContainer').on('click','.input-product', function(e) {  
		swatch_size = parseInt(jQuery('#product-select-watch').children().size());
		console.log('productX');
		var $this = jQuery(this);
		var _available = '';
		$this.parent().siblings().find('label').removeClass('sd');
		$this.next().addClass('sd');
		var name = $this.attr('name');
		var value = $this.val();
		jQuery('select[data-option='+name+']').val(value).trigger('change');
		if(jQuery(this).data('img-src')){
			var img_ = jQuery(this).data('img-src');
			jQuery('.product-single__thumbnail[href="'+img_+'"]').trigger('click');
		}
		if(swatch_size == 2){
			if(name.indexOf('1') != -1){
				jQuery('#variant-swatch-1 .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-1 .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-1 .swatch-element').removeClass('soldout');
				jQuery('.selector-wrapper .single-option-selector').eq(1).find('option').each(function(){
					var _tam = jQuery(this).val();
					jQuery(this).parent().val(_tam).trigger('change');
					if(check_variant){
						if(_available == '' ){
							_available = _tam;
						}
					}else{
						jQuery('#variant-swatch-1 .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
						jQuery('#variant-swatch-1 .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);
					}
				})
				jQuery('.selector-wrapper .single-option-selector').eq(1).val(_available).trigger('change');
				jQuery('#variant-swatch-1 .swatch-element[data-value="'+_available+'"] label').addClass('sd');
			}
		}else if (swatch_size == 3){
			var _count_op2 = jQuery('#variant-swatch-1 .swatch-element').size();
			var _count_op3 = jQuery('#variant-swatch-2 .swatch-element').size();
			if(name.indexOf('1') != -1){
				jQuery('#variant-swatch-1 .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
				jQuery('#variant-swatch-1 .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-1 .swatch-element').removeClass('soldout');
				jQuery('#variant-swatch-2 .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-2 .swatch-element').removeClass('soldout');
				var _avi_op1 = '';
				var _avi_op2 = '';
				jQuery('#variant-swatch-1 .swatch-element').each(function(ind,value){
					var _key = jQuery(this).data('value');
					var _unavi = 0;
					jQuery('.single-option-selector').eq(1).val(_key).change();
					jQuery('#variant-swatch-2 .swatch-element label').removeClass('sd');
					jQuery('#variant-swatch-2 .swatch-element').removeClass('soldout');
					jQuery('#variant-swatch-2 .swatch-element').find('input').prop('disabled', false);
					jQuery('#variant-swatch-2 .swatch-element').each(function(i,v){
						var _val = jQuery(this).data('value');
						jQuery('.single-option-selector').eq(2).val(_val).change();
						if(check_variant == true){
							if(_avi_op1 == ''){
								_avi_op1 = _key;
							}
							if(_avi_op2 == ''){
								_avi_op2 = _val;
							}
							//console.log(_avi_op1 + ' -- ' + _avi_op2)
						}else{
							_unavi += 1;
						}
					})
					if(_unavi == _count_op3){
						jQuery('#variant-swatch-1 .swatch-element[data-value = "'+_key+'"]').addClass('soldout');
						setTimeout(function(){
							jQuery('#variant-swatch-1 .swatch-element[data-value = "'+_key+'"] input').attr('disabled','disabled');
						})
					}
				})
				jQuery('#variant-swatch-1 .swatch-element[data-value="'+_avi_op1+'"] input').click();
			}
			else if(name.indexOf('2') != -1){
				jQuery('#variant-swatch-2 .swatch-element label').removeClass('sd');
				jQuery('#variant-swatch-2 .swatch-element').removeClass('soldout');
				jQuery('.selector-wrapper .single-option-selector').eq(2).find('option').each(function(){
					var _tam = jQuery(this).val();
					jQuery(this).parent().val(_tam).trigger('change');
					if(check_variant){
						if(_available == '' ){
							_available = _tam;
						}
					}else{
						jQuery('#variant-swatch-2 .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
						jQuery('#variant-swatch-2 .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);				
					}
				})
				jQuery('.selector-wrapper .single-option-selector').eq(2).val(_available).trigger('change');
				jQuery('#variant-swatch-2 .swatch-element[data-value="'+_available+'"] label').addClass('sd');
			}
		}else{
			 if(name.indexOf('1') != -1){

				 jQuery('#variant-swatch-0 .swatch-element').find('input').prop('disabled', false);

				 jQuery('#variant-swatch-0 .swatch-element label').removeClass('sd');

				 jQuery('#variant-swatch-0 .swatch-element').removeClass('soldout');

				 jQuery('.selector-wrapper .single-option-selector').eq(0).find('option').each(function(){

					 var _tam = jQuery(this).val();

					 jQuery(this).parent().val(_tam).trigger('change');

					 if(check_variant){
						 _available = _tam;
					 } else{
						 jQuery('#variant-swatch-0 .swatch-element[data-value="'+_tam+'"]').addClass('soldout');
						 jQuery('#variant-swatch-0 .swatch-element[data-value="'+_tam+'"]').find('input').prop('disabled', true);
					 }

				 })

				 jQuery('.selector-wrapper .single-option-selector').eq(0).val(value).trigger('change');
				 jQuery('#variant-swatch-0 .swatch-element[data-value="'+ value +'"] label').addClass('sd');
			 }
		}
	})
})