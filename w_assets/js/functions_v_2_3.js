$(document).ready(function(){

	$(document).on('click', '.newsNoticeClose', function () {
	    $.ajax({
	        url: '/api/time_cookie.php',
	        method: 'post',
	        data: {
	        },
	        success: function (response) {
		        $('#newsNoticeTopBanner2').slideUp();
///		        alert(response);
		    }
		});        		
		return false;
	});	

 if ( $(window).width() > 767 ) {
 
    if ( $(".comment--text").height() < 157) {
		$("a.dropdown-button").hide();
	}
 
  } 
  
  else {
  
	if ( $(".comment--text").height() < 130) {
		$("a.dropdown-button").hide();
	}
	
  }

/* var itemscomm = $('.blog-comment'),
linescomm = $('.blog-comment-line'),
per = 4,
i = 1,	
total = 0;
$(itemscomm).hide();
$(linescomm).hide();
$('#showmore').on('click', function(){
  total = per * (i++);
  itemscomm.slice(0, total).show();
  linescomm.slice(0, total).show();
    $(this)[total >= itemscomm.length ? 'hide' : 'show']();
	$(this)[total >= linescomm.length ? 'hide' : 'show']();
}).click(); */


jQuery('.js__interesting--slider-items').slick({
fnCanGoNext: function (e, t) {
return !0
},
slidesToShow: 2,
slidesToScroll: 2,
appendArrows: $('.js__interesting--arrows-items'),
prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
responsive: [
{
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});
var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
function setCookie(name, value, options) {
  options = options || {};
  
  var date = new Date;
  date.setDate(date.getDate() + 14);    
  var expires = date;

  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
	
	var utm_and_partner_code = 0;
	if (getCookie("utm_and_partner_params")) {
		utm_and_partner_code = 1;
	}
	
	var partner_code = 0; 
	if (getCookie("pr_gcpc")) {
		partner_code = 1;
	} else if (getCookie("pr_fuid")) {
		partner_code = 2;
	}

	var utm_code = 0;
	if (getCookie("utm_params")) {
		utm_code = 1;
	}	
	
	$("a[href]").each(function(index,elem){
		if(~$(elem).attr("href").indexOf("?")) {
		} else if ((~$(elem).attr("href").indexOf("pavelrakov.com/page/")) || (~$(elem).attr("href").indexOf("total-life.ru")) || (~$(elem).attr("href").indexOf("edprodpo.com")) || (~$(elem).attr("href").indexOf("edprodpo.ru")) || (~$(elem).attr("href").indexOf("course.pavelrakov.online"))) {
			if (utm_and_partner_code==1) {
				$(elem).attr("href",$(elem).attr("href")+getCookie("utm_and_partner_params"));
			} else if (partner_code==1) {
				$(elem).attr("href",$(elem).attr("href")+"?gcpc="+getCookie("pr_gcpc")+"&utm_source=centr_com");
			} else if (partner_code==2) {
				$(elem).attr("href",$(elem).attr("href")+"?fuid="+getCookie("pr_fuid")+"&utm_source=centr_com"); 
			} else if (location.search) {
				$(elem).attr("href",$(elem).attr("href")+location.search);	
			} else if (utm_code==1) {
				$(elem).attr("href",$(elem).attr("href")+getCookie("utm_params"));
			} else {
				$(elem).attr("href",$(elem).attr("href")+"?fuid=19198329&utm_source=centr_com");
			}
		};
	});
	
	jQuery(".js__documents--slider--tel").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 4,
	slidesToScroll: 4,
	appendArrows: $(".js__documents--arrows--tel"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})

	jQuery(".js__documents--slider--alpluga").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 4,
	slidesToScroll: 4,
	appendArrows: $(".js__documents--arrows--alpluga"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})

	jQuery(".js__documents--slider--exp").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 4,
	slidesToScroll: 4,
	appendArrows: $(".js__documents--arrows--exp"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})

	jQuery(".js__documents--slider--books").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 3,
	slidesToScroll: 3,
	appendArrows: $(".js__documents--arrows--books"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})


	jQuery(".js__documents--slider--stars").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 2,
	slidesToScroll: 2,
	appendArrows: $(".js__documents--arrows--stars"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})

	jQuery(".js__documents--slider--sertificats").slick({
	fnCanGoNext: function(e, t) {
		return !0
	},
	slidesToShow: 4,
	slidesToScroll: 4,
	appendArrows: $(".js__documents--arrows--sertificats"),
	prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
	responsive: [{
		breakpoint: 1170,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 550,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
})
	
});

(function($) {
 
jQuery( document ).ready(function() {
    add_target_blank_to_external_links();
});

function add_target_blank_to_external_links(){
    // This is the single line advertised in title ;) 
    $('.article-content a').attr('target','_blank');
}

})(jQuery);

$(function(){
	$(".hiddlist").click(function(){
		$(this).toggleClass("active");
		if($(this).hasClass('active')) {
			$(this).html('Свернуть список');
			$(".programa ul").slideToggle();
		}
		else {
			$(this).html('Развернуть список');
			$(".programa ul").slideToggle();			
		}
	})	
})


//setcookie('Posted',true,24*60*60*1000) //Кук на сутки