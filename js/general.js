$('.mobile-type-link a').click(function () {
    if($('.mobile-type-link').hasClass('click')) {
        $(this).parents('.mobile-type-link').removeClass('click');
        $(this).addClass('active');
    } else {
        $(this).parents('.mobile-type-link').addClass('click');
        $(this).removeClass('active');

    }

});
$(".header-type-link").each(function () {
    $(this).click(function () {
        $(".header-type-link.active").removeClass("active");
        $(this).addClass("active");
    })
});

$(".header-icon-block-link").each(function () {
    $(this).click(function () {
        $(".header-icon-block-link").removeClass("active");
        $(this).addClass("active");
    })
});


/*$(".filter-items-block").each(function () {
   $(this).find(".filter-item").click(function () {
       if(!$(this).hasClass("active")) {
           $(this).addClass("active");
       }
   })
});*/


var filterCriteriaHeight = $(".filter-criteria-block").height();
$('.filter-criteria-title').click(function () {
    if($(".filter-criteria-block").hasClass('active')) {
        $(".filter-criteria-block").stop().animate({height: 56},200);
        $('.filter-criteria-block').removeClass('active');
    } else {
        $(".filter-criteria-block").stop().animate({height: filterCriteriaHeight+40},200); // 40 получена опытным путем
        $(".filter-criteria-block").addClass('active');
    }
});


$(".block-filter-icon").click(function () {
    if($(this).hasClass('show')){
        $(this).removeClass('show');
        $('.block-filter').css('position', 'absolute');
        if ($(window).width() <= '991') {
            $('.block-filter').css('left', '-100%');
        } else {
            $('.block-filter').css('left', '-408px');
        }
        $('.block-filter-icon').css('display', 'block');
    } else {
        $(this).addClass('show');
        $('.block-filter').css('left', '0');
        $('.block-filter').css('position', 'relative');
        $('.block-filter-icon').css('display', 'none');
    }

});

function closeFilter() {
    $('.block-filter').css('position', 'absolute');
    if ($(window).width() <= '991') {
        $('.block-filter').css('left', '-100%');
    } else {
        $('.block-filter').css('left', '-408px');
    }
    $('.block-filter-icon').css('display', 'block').removeClass('show');
}

$('.close-mobile-filter').click(function () {
    closeFilter();
});

$('.header-mobile .right').click(function () {
    if ($(this).hasClass('open') && !$('.block-filter-icon').hasClass('show')) {
        $(this).removeClass('open');
        $('.header-wrap').css('display', 'none');
        closeFilter();
    } else {
        $(this).addClass('open');
        $('.header-wrap').css('display', 'block');
        closeFilter();
    }
});

$('.list-item').each(function () {
    $(this).find('.view-ap').click(function () {
        // var height = $(this).parents('.list-item').find('.item-wrap').height();
        if($(this).parents('.list-item').hasClass('active')) {
            $(this).parents('.list-item').removeClass('active').end().removeClass('active');
            //$(this).parents('.list-item').css('height', height + 'px').css('oveflow', 'hidden');

        } else {
            $(this).parents('.list-item').addClass('active').end().addClass('active');
            //$(this).parents('.list-item').css('height', 'auto').css('oveflow', 'auto');
        }

    })
});

$('.close-apartaments-block').click(function () {
    $(this).parents('.list-item').removeClass('active');
    $('.view-ap').removeClass('active');
});

$('#filter .owl-carousel').owlCarousel({
  items: 1,
  margin: 30,
  dots: false,
  nav: true,
  navText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABDUlEQVRYhe3YsYqEMBCA4YluvIvcGxiwsBPf/ylsJZWFnZ3hhHVNJF5ls1ccZGa4hc3/AMOHIYlEzPP8DS9c9t+Av0pAbAmILQGxJSC2BMTGCgwhoGewAa21ed/3X+u65pg5LEBrbW6MKb33YhgG5ZwTsbPIgRfuWl6ttSuK4oydRwp8xtV1vWutHWYmGZADB0AE5MIBEAA5cQAEwGmaPi6cUipUVUWGAyAAtm27lWUZAAC2bcuMMeo8ozftr9BAKeXZdd39Qi7LcqNEkmwSTiTZMcOFJD2oOZDkV90zct/37DiO6LtYcD19eO/FOI6fTdM8pJTRn5ANSNV7/1FTlIDYEhBbAmJLQGwvD/wBC/yvfAFbbyQAAAAASUVORK5CYII=">','<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABk0lEQVRYhe3YzYuCQBjH8d9oTioeIqFrpxiy+f//EoWIgogCeznVpGaae9jcFwgW9pnYWOZ7d+aDzDyILE3TI144668BP2WA1AyQmgFSM0BqBkiNDKzrmu12O0cH5lEdysNVVbEkSTyllJ3nuTUcDi+6YG2kN3g8Hm2llA0A6/WaL5fLrh7WZyRgv9+vRqNRwRgDAGw2G75YLLQiyWdwMBhchRB5i0zTlM/nc5csu6flFodhWAkhcst6X2673Tqz2cxtmoa8trYxE4ZhNR6Psxa53++1ILXOwV6vV9+RDQAcDgdnOp16FKT2QR0Ewc3zvA+RUsouiuLX+2gFtnPxfD5bAMA5b6SUmed5t9+uSRrUX7teryyOYz/LMgsAXNe9RVGUU3CAJmBZlixJkm84KWXW7XbJ15gMvFwuLI5jvz1nvu/fJpNJxjmnzxgQgY9wUsrMcRwtOIAILIrCKsvSAoAgCOooinKdOABg1F8fp9PJXq1WXAhRdDodrThAA/DZ/f8v6mdngNQMkJoBUjNAai8PfAMBf7AwWQ6oYQAAAABJRU5ErkJggg==">'],
  responsive:{
    575:{
      items: 2
    },
    991:{
      items: 3
    },
  }
});

(function() {
  var position = $(window).scrollTop();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    (scroll > position && $(window).scrollTop() >= 100) ? $('#search').addClass('on') : $('#search').removeClass('on');
    position = scroll;
  });
})();
