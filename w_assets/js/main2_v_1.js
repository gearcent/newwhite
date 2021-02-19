    jQuery(document).ready(function () {
        jQuery(".js__modal-cross").click(function () {
            var e = jQuery(this).closest(".js__modal");
            jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                setTimeout(function () {
                    jQuery(".opacity").fadeOut(300), jQuery(e).hide().css({ left: "" });
                }, 500),
                jQuery("body").hasClass("offcanvas_opened") && (jQuery("body").removeClass("offcanvas_opened"), window.removeEventListener("touchmove", handler));
        }),
            jQuery(".dropdown-button").click(function () {
                var e = jQuery(this).parent().children(".comment--text"),
                    t = jQuery(this).children("svg.icon").eq(0);
                jQuery(this).hasClass("opened") ? jQuery(this).text("Показать весь") : jQuery(this).text("Свернуть"), jQuery(this).append(t), jQuery(this).toggleClass("opened"), e.toggleClass("opened");
            }),
            jQuery(".hovered").click(function () {
                jQuery(this).toggleClass("hovered_true");
            }),
            jQuery(".header__block--search-block").click(function () {
                if (1170 < jQuery(window).outerWidth()) return 0;
                var e = jQuery(".search-adaptive.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500);
                    }, 100),
                    jQuery("body").addClass("offcanvas_opened"),
                    window.addEventListener("touchmove", handler, { passive: !1 });
            }),
            jQuery(".header__block--phone").click(function (e) {
                jQuery(window).outerWidth() < 768 && (e.preventDefault(), jQuery(this).toggleClass("_active"), jQuery("#headerMobilePhone").toggleClass("_active"));
            }),
            jQuery(".view-button").on("click", function () {
                var e = jQuery(this).parent();
                jQuery(e).find(".view-button_active").removeClass("view-button_active"), jQuery(this).addClass("view-button_active");
            }),
            jQuery(".select--active-block").on("click", function () {
                jQuery(this).closest(".select").toggleClass("select_shown");
            }),
            jQuery(".select--option").on("click", function () {
                var e = jQuery(this).closest(".select"),
                    t = jQuery(this).text();
                e.find("option").each(function () {
                    if (jQuery(this).text() === t) return e.find("select").val(jQuery(this).val()), !1;
                }),
                    e.find(".select--option_chosen").removeClass("select--option_chosen"),
                    jQuery(this).addClass("select--option_chosen"),
                    e.find(".select--active").text(t),
                    e.toggleClass("select_shown");
            }),
            $(document).mouseup(function (e) {
                var t = jQuery(".select");
                0 === t.has(e.target).length && t.removeClass("select_shown");
            }),
            jQuery(".js__favorite-button").click(function () {
                var e = jQuery(this);
                e.hasClass("favorite")
                    ? (e.text("Добавить статью в избранное"), e.append('<span><svg class="icon"><use xlink:href="/img/sprite.svg#icons--015-star"></use></svg></span>'))
                    : (e.text("Статья уже в избранном"), e.append('<span><svg class="icon"><use xlink:href="/img/sprite.svg#icons--015-star-full"></use></svg></span>')),
                    e.toggleClass("favorite");
            }),
            jQuery(".js__partner-button").click(function () {
                var e = jQuery(this);
                e.hasClass("favorite")
                    ? (e.text("Стать партнером"), e.append('<span><svg class="icon"><use xlink:href="/img/sprite.svg#icons--015-star"></use></svg></span>'))
                    : (e.text("Вы уже партнер"), e.append('<span><svg class="icon"><use xlink:href="/img/sprite.svg#icons--015-star-full"></use></svg></span>')),
                    e.toggleClass("favorite");
            }),
            jQuery(".button-small.js__toggle").click(function () {
                jQuery(this).toggleClass("button-small_active");
            });
            jQuery(".js__header-city").click(function () {
                var e = jQuery(".search-modal.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500);
                    }, 100);
            }),
            jQuery(".js__menu-button").click(function () {
                var e = jQuery(".offcanvas"),
                    t = jQuery(window).outerWidth();
                jQuery(e).css({ left: -t }).show(), jQuery(e).animate({ left: 0 }, 500), jQuery("body").toggleClass("offcanvas_opened");
            }),
            jQuery(".js__offcanvas--cross").click(function () {
                var e = jQuery(this).closest(".offcanvas");
                jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                    setTimeout(function () {
                        jQuery(e).hide().css({ left: "" });
                    }, 500),
                    jQuery("body").toggleClass("offcanvas_opened");
            });
        var t = jQuery(".header:eq(0)"),
            i = 0;
        if (
            (jQuery(window).on("scroll", function () {
                var e = jQuery(window).scrollTop();
                e < jQuery(t).outerHeight() || i <= e ? jQuery(t).removeClass("scrolling") : jQuery(t).addClass("scrolling"), (i = e);
            }),
            jQuery(".js__education--video-slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 2,
                slidesToScroll: 2,
                appendArrows: $(".js__education--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            }),
            jQuery(".album__images").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                responsive: [
                    { breakpoint: 4e3, settings: "unslick" },
                    { breakpoint: 1170, settings: { slidesToShow: 3, slidesToScroll: 3, arrows: !1, dots: !1, centerMode: !0, centerPadding: "100px" } },
                    { breakpoint: 980, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: !1, dots: !1, centerMode: !0, centerPadding: "100px" } },
                    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !1, centerMode: !0, centerPadding: "100px" } },
                    { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1, dots: !1, centerMode: !0, centerPadding: "20px" } },
                ],
            }),
            jQuery(".js__reviews--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0,
                arrows: !0,
                appendArrows: $(".js__reviews--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                customPaging: function (e, t) {
                    return '<span class="dot"></span>';
                },
                responsive: [{ breakpoint: 1170, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            }),
            jQuery(".js__reviews-wide--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !0,
                appendArrows: $(".js__reviews-wide--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                customPaging: function (e, t) {
                    return '<span class="dot"></span>';
                },
            }),
            jQuery(".js__documents--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 4,
                slidesToScroll: 4,
                appendArrows: $(".js__documents--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [
                    { breakpoint: 1170, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                    { breakpoint: 550, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                ],
            }),
            jQuery(".js__staff--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 4,
                slidesToScroll: 4,
                appendArrows: $(".js__staff--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [
                    { breakpoint: 1170, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !0, centerPadding: "30%" } },
                    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: !1 } },
                ],
            }),
            jQuery(".js__news-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__news-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [
                    { breakpoint: 1170, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                    { breakpoint: 768, settings: { slidesToScroll: 1, slidesToShow: 1 } },
                ],
            }),
            jQuery(".js__profit-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__profit-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__interesting--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 2,
                slidesToScroll: 2,
                appendArrows: $(".js__interesting--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            }),
            jQuery(".js__interesting-wide--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 3,
                slidesToScroll: 3,
                appendArrows: $(".js__interesting-wide--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [
                    { breakpoint: 1170, settings: { slidesToScroll: 2, slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToScroll: 1, slidesToShow: 1 } },
                ],
            }),
            jQuery(".js__slider-info-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__slider-info-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [
                    { breakpoint: 1170, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                ],
            }),
            jQuery(".js__wide-events--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 2,
                slidesToScroll: 2,
                appendArrows: $(".js__wide-events--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                responsive: [{ breakpoint: 768, settings: { slidesToScroll: 1, slidesToShow: 1 } }],
            }),
            jQuery(".js__reviews-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__reviews-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__branches-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__branches-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__video-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__video-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__photos-widget--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__photos-widget--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__popular-tests--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $(".js__popular-tests--arrows"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
            }),
            jQuery(".js__event-block--slider").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !1,
                asNavFor: ".js__event-block--slider--navigation",
            }),
            jQuery(".js__event-block--slider--navigation").slick({
                fnCanGoNext: function (e, t) {
                    return !0;
                },
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: ".js__event-block--slider",
                arrows: !0,
                appendArrows: $(".js__event-block--slider--navigation"),
                prevArrow: '<a href="javascript:void(0)" class="slider-arrow_small"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                nextArrow: '<a href="javascript:void(0)" class="slider-arrow_small slider-arrow_small_left"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--047-next"></svg></a>',
                centerMode: !0,
                focusOnSelect: !0,
                centerPadding: 0,
            }),
            jQuery(".js__faq--item").click(function () {
                var e = jQuery(this).parent();
                e.hasClass("contacts-faq__item_opened") ? e.removeClass("contacts-faq__item_opened") : (jQuery(".contacts-faq__item_opened").removeClass("contacts-faq__item_opened"), jQuery(e).addClass("contacts-faq__item_opened"));
            }),
            jQuery(".tab").click(function () {
                jQuery(this).parent().find(".tab_active").removeClass("tab_active"), jQuery(this).addClass("tab_active");
            }),
            jQuery(".js__notify-open").click(function () {
                var e = jQuery(".notification-modal.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500),
                            jQuery(window).trigger("resize");
                    }, 100);
            }),
            jQuery(".notification-modal--slider")
                .slick({
                    dots: !1,
                    infinite: !1,
                    arrows: !0,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: !0,
                    slidesToScroll: 1,
                    appendArrows: $(".notification-modal--buttons"),
                    prevArrow: '<a href="javascript:void(0)" class="notification-modal--prev"><svg class="icon"><use xlink:href="/img/sprite.svg#icons--007-right-arrow"></svg>Назад</a>',
                    nextArrow: '<a href="javascript:void(0)" class="notification-modal--next">Продолжить <svg class="icon"><use xlink:href="/img/sprite.svg#icons--007-right-arrow"></svg></a>',
                    swipe: !1,
                    fnCanGoNext: function (e, t) {
                        return !!(t = e.$slides.eq(t)).find("input[type=checkbox]:checked").length;
                    },
                })
                .on("beforeChange", function (e, t, i, n) {
                    (button = jQuery(this).parent().find(".send-button")),
                        n == t.slideCount - 1 ? button.addClass("is-shown") : button.removeClass("is-shown"),
                        jQuery(".notification-modal--step.current--step").removeClass("current--step"),
                        jQuery('.notification-modal--step[data-step="' + (n + 1) + '"]').addClass("current--step"),
                        jQuery(".notification-modal--step").each(function () {
                            parseInt(jQuery(this).attr("data-step")) < n + 1 ? jQuery(this).addClass("done--step") : jQuery(this).removeClass("done--step");
                        });
                })
                .on("afterChange", function () {
                    jQuery('.slick-current input[type="checkbox"]:checked').length ? jQuery(".notification-modal--next").removeClass("disabled") : jQuery(".notification-modal--next").addClass("disabled");
                }),
            jQuery(".notification-modal .send-button").click(function (e) {
                if ("" == jQuery("#notifyPhone").val() || "" == jQuery("#notifyEmail").val())
                    return "" == jQuery("#notifyPhone").val() && jQuery("#notifyPhone").parent().addClass("wrong"), "" == jQuery("#notifyEmail").val() && jQuery("#notifyEmail").parent().addClass("wrong"), e.preventDefault(), 0;
            }),
            "notify" ===
                window.location.search
                    .replace("?", "")
                    .split("&")
                    .reduce(function (e, t) {
                        var i = t.split("=");
                        return (e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])), e;
                    }, {}).sended && jQuery(".notification-modal--done").length)
        ) {
            $(window).scrollTop(0);
            var e = jQuery(".notification-modal--done"),
                n = jQuery(e).outerWidth(),
                o = (jQuery(window).outerWidth() - n) / 2;
            jQuery(e).attr("data-left", o),
                jQuery(".opacity").fadeIn(300),
                setTimeout(function () {
                    jQuery(e)
                        .css({ left: jQuery(window).outerWidth() + n })
                        .show(),
                        jQuery(e).animate({ left: o }, 500);
                }, 100);
        }
        if (
            (jQuery(".notification-modal--ok").click(function () {
                var e = jQuery(this).closest(".js__modal");
                jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                    setTimeout(function () {
                        jQuery(".opacity").fadeOut(300), jQuery(e).hide().css({ left: "" });
                    }, 500);
            }),
            jQuery(".notification-modal--next").addClass("disabled"),
            jQuery('.notification-modal--slider input[type="checkbox"]').on("change", function () {
                console.log(jQuery('.slick-current input[type="checkbox"]:checked').length),
                    jQuery('.slick-current input[type="checkbox"]:checked').length ? jQuery(".notification-modal--next").removeClass("disabled") : jQuery(".notification-modal--next").addClass("disabled");
            }),
            jQuery(".js__next-open").click(function () {
                var e = jQuery(".next-modal.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500);
                    }, 100);
            }),
            jQuery(".next-modal .send-button").click(function (e) {
                if ("" == jQuery("#nextPhone").val() || "" == jQuery("#nextEmail").val())
                    return "" == jQuery("#nextPhone").val() && jQuery("#nextPhone").parent().addClass("wrong"), "" == jQuery("#nextEmail").val() && jQuery("#nextEmail").parent().addClass("wrong"), e.preventDefault(), 0;
            }),
            jQuery(".next-modal--ok").click(function () {
                var e = jQuery(this).closest(".js__modal");
                jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                    setTimeout(function () {
                        jQuery(".opacity").fadeOut(300), jQuery(e).hide().css({ left: "" });
                    }, 500);
            }),
            jQuery(".js__about-me-open").click(function () {
                var e = jQuery(".about-modal.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500);
                    }, 100);
            }),
            jQuery(".event-day.event-day__has-event").click(function () {
                var e = jQuery(this).find(".info-card:eq(0)").clone().css("left", "300px");
                jQuery(".event-block__info").find("div").animate({ left: "-300px" }, 150),
                    setTimeout(function () {
                        jQuery(".event-block__info").find("div").remove(), jQuery(".event-block__info").append($(e)), jQuery(".event-block__info").find(".info-card").animate({ left: 0 }, 150);
                    }, 200),
                    jQuery(".event-day.active").removeClass("active"),
                    jQuery(this).addClass("active");
            }),
            jQuery(".js__sended-open").click(function () {
                var e = jQuery(".sended-modal--done.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500);
                    }, 100);
            }),
            jQuery(".sended-modal--ok").click(function () {
                var e = jQuery(this).closest(".js__modal");
                jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                    setTimeout(function () {
                        jQuery(".opacity").fadeOut(300), jQuery(e).hide().css({ left: "" });
                    }, 500);
            }),
            jQuery(".js__anketa-open").click(function () {
                var e = jQuery(".anketa-modal.js__modal"),
                    t = jQuery(e).outerWidth(),
                    i = (jQuery(window).outerWidth() - t) / 2;
                jQuery(e).attr("data-left", i),
                    jQuery(".opacity").fadeIn(300),
                    setTimeout(function () {
                        jQuery(e)
                            .css({ left: jQuery(window).outerWidth() + t })
                            .show(),
                            jQuery(e).animate({ left: i }, 500),
                            jQuery(window).trigger("resize");
                    }, 100);
            }),
            jQuery('.anketa--list input[type="radio"]').change(function () {
                jQuery(".anketa-modal--next").removeClass("disabled").prop("disabled", !1);
            }),
            "sended" ===
                window.location.search
                    .replace("?", "")
                    .split("&")
                    .reduce(function (e, t) {
                        var i = t.split("=");
                        return (e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])), e;
                    }, {}).anketa && jQuery(".anketa-modal--done").length)
        ) {
            $(window).scrollTop(0);
            (e = jQuery(".anketa-modal--done")), (n = jQuery(e).outerWidth()), (o = (jQuery(window).outerWidth() - n) / 2);
            jQuery(e).attr("data-left", o),
                jQuery(".opacity").fadeIn(300),
                setTimeout(function () {
                    jQuery(e)
                        .css({ left: jQuery(window).outerWidth() + n })
                        .show(),
                        jQuery(e).animate({ left: o }, 500);
                }, 100);
        }
        jQuery(".anketa-modal--ok").click(function () {
            var e = jQuery(this).closest(".js__modal");
            jQuery(e).animate({ left: -1 * e.outerWidth() }, 500),
                setTimeout(function () {
                    jQuery(".opacity").fadeOut(300), jQuery(e).hide().css({ left: "" });
                }, 500);
        });
    });

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
        and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

jQuery(".js__menu-button").click(function(){var e=jQuery(".offcanvas"),t=jQuery(window).outerWidth();jQuery(e).css({left:-t}).show(),jQuery(e).animate({left:0},500),jQuery("body").toggleClass("offcanvas_opened")}),jQuery(".js__offcanvas--cross").click(function(){var e=jQuery(this).closest(".offcanvas");jQuery(e).animate({left:-1*e.outerWidth()},500),setTimeout(function(){jQuery(e).hide().css({left:""})},500),jQuery("body").toggleClass("offcanvas_opened")});

