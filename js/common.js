(function(){
  "use strict"

  $('.quantity span').on('click', function() {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		var newVal = 0;

		if ($button.hasClass('increase')) {
			newVal = parseFloat(oldValue) + 1;
		}else{
			if (oldValue > 0) {
				newVal = parseFloat(oldValue) - 1;
			}else{
				newVal = 0;
			}
		}

		$button.parent().find('input').val(newVal);
	});

  $('.quantity input').on('input', function() {
    $(this).val(parseInt($(this).val()) || 0);
  })

  var position = 0;
  $('.discounts .swiper_inner').on('move', function(e){
    if((+position+e.distX) < 50)
      $(this).css('transform', 'translateX('+(+position+e.distX)+'px)');
  }).bind('moveend', function(){
    position = $(this).css('transform').split(',')[4];
    if(position > 0)
      $(this).css('transform', 'translateX(0px)');
  })

  $('.dropdown').on('click', function(){
    $(this).toggleClass('on').find('p').slideToggle();
  })

  $('.chosen-select').chosen({
    disable_search_threshold: 20,
    width: 'auto'
  }).change(function(e){
    $('.calculation-img img').hide();
    $('.calculation-img img:eq('+e.target.selectedIndex+')').fadeIn();
  })

  var screens = $('.screen').each(function(k, v){
    $('.screener').append('<div class="owl-dot" data-position="'+k+'"><span><p>'+(k<9?'0'+(k+1):(k+1))+'</p></div>');
    $('.screener .owl-dot:first').addClass('active');
  })

  $('.screener .owl-dot').on('click', function(){
    $('.screener .owl-dot').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $(screens[$(this).data('position')]).offset().top
    }, 500);
  })


  $(window).on('scroll', function(){
    var fromTop = $(this).scrollTop()

    var cur = $('.screen').map(function(){
      if ($(this).offset().top < fromTop + 20)
        return this;
    });

    cur = cur[cur.length-1];

    $('.screener .owl-dot').removeClass('active')
    $('.screener .owl-dot[data-position="'+$(cur).data('index')+'"]').addClass('active')

    if($(cur).hasClass('screen-hidden')){
      $('.screener').addClass('hidden')
    } else {
      $('.screener').removeClass('hidden')
    }
  })





  // $('#map-wrapper .overlay,#map-wrapper .close').click(function() {
  //   $('#map-wrapper').toggleClass('on');
  // })
  //
  // $('#map-wrapper').on('transitionend webkitTransitionEnd oTransitionEnd', function() {
  //   google.maps.event.trigger(map, "resize");
  // });
  //
  // $('#main-slider').fullpage({
  //   anchors: ['section-1', 'section-2', 'section-3'],
  //   responsiveWidth: 1470,
  //   afterResponsive: function(isResponsive) {
  //     if(isResponsive) {
  //       $.fn.fullpage.destroy('all');
  //     } else {
  //       $.fn.fullpage.reBuild();
  //     }
  //   }
  // });
  //
  // $('.owl-carousel').owlCarousel({
  //   items: 1,
  //   navText: [],
  //   loop: true,
  //   nav: true,
  // });
  //
  // $('section.certificates .owl-carousel').owlCarousel({
  //   items: 1,
  //   margin: 20,
  //   navText: [],
  //   // autoplay: true,
  //   loop: true,
  //   nav: false,
  //   mouseDrag: false,
  //   responsive: {
  //     650: {
  //       items: 2,
  //       margin: 0
  //     },
  //     991: {
  //       items: 3
  //     },
  //     1300: {
  //       items: 4
  //     }
  //   }
  // });
  //
  // $('.top-menu_btn svg, .top-menu_btn button, #dropdown_menu .close').click(function() {
  //   $('body, .top-menu_btn, #dropdown_menu').toggleClass('on');
  // });
  //
  // $('.main-header #switcher a').click(function() {
  //   $('.main-header #switcher a').removeClass('active');
  //   $(this).addClass('active');
  // });
  //
  // $(".tabs-menu a").click(function(e) {
  //   e.preventDefault();
  //   $(this).addClass("active");
  //   $(this).siblings().removeClass("active");
  //   var tab = $(this).attr("href");
  //   var container = $(this).attr('data-container');
  //   $('#' + container + " .tab-content").not(tab).css("display", "none");
  //   $(tab).fadeIn();
  // });
  //
  //
  // $('.approval input').on('change', function(){
  //   var btn = $(this).parents('form').find('.btn');
  //   $(this).prop('checked')?btn.attr('disabled', false):btn.attr('disabled', true);
  // })
  //
  // $('.certificates .list a').on('click', function(e){
  //   e.preventDefault()
  //   var container = $(this).parents('.item');
  //   container.find('.hover-underline').removeClass('active');
  //   $(this).addClass('active');
  //   container.find('.certificat a').attr('href', $(this).attr('href'));
  //   container.find('.certificat img').hide().attr('src', $(this).attr('href')).fadeIn();
  // })
  //
  // // $('.inline-offer__counter-item .counter').counterUp();
  //
  // $('[type="tel"]').inputmask("+ 7 (999) 999 99 99");
  //
  // $(window).scroll(function () {
  //   $('#top-menu').hasClass('on') ||
  //     $(window).scrollTop() > $('.main-header').height() * 3 &&
  //     $(window).width() < 1200 ?
  //       $('#top-menu_btn').addClass('visible') : $('#top-menu_btn').removeClass('visible');
  // });
})();
