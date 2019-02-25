!function(a) {
    var b = /iPhone/i, c = /iPod/i, d = /iPad/i, e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i, g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, i = /Windows Phone/i, j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, k = /BlackBerry/i, l = /BB10/i, m = /Opera Mini/i, n = /(CriOS|Chrome)(?=.*\bMobile\b)/i, o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), q = function(a, b) {
        return a.test(b);
    }, r = function(a) {
        var r = a || navigator.userAgent, s = r.split("[FBAN");
        if ("undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"), "undefined" != typeof s[1] && (r = s[0]),
        this.apple = {
            phone: q(b, r),
            ipod: q(c, r),
            tablet: !q(b, r) && q(d, r),
            device: q(b, r) || q(c, r) || q(d, r)
        }, this.amazon = {
            phone: q(g, r),
            tablet: !q(g, r) && q(h, r),
            device: q(g, r) || q(h, r)
        }, this.android = {
            phone: q(g, r) || q(e, r),
            tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)),
            device: q(g, r) || q(h, r) || q(e, r) || q(f, r)
        }, this.windows = {
            phone: q(i, r),
            tablet: q(j, r),
            device: q(i, r) || q(j, r)
        }, this.other = {
            blackberry: q(k, r),
            blackberry10: q(l, r),
            opera: q(m, r),
            firefox: q(o, r),
            chrome: q(n, r),
            device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r)
        }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch,
        this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
        "undefined" == typeof window) return this;
    }, s = function() {
        var a = new r();
        return a.Class = r, a;
    };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = r : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = s() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s();
}(this);

$(document).ready(function() {
    app.init();
});

var move = false, MARKETING_RIBBON = $(".marketing-ribbon");

var app = {
    inputFile: $("#foto").clone(),
    init: function() {
       
        console.log("blacksheep");
        $(".arrow-scroll").click(function(event) {
            app.scrolling($.attr(this, "href"), 750);
            return false;
        });
        if (!isMobile.any) {
            _top_filtros = $("#mainmenu").offset().top;
            offset_filtros = _top_filtros - 0;
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $("#mainmenu").addClass("fixed").css({
                        top:0
                    });
                } else {
                    $("#mainmenu").removeClass("fixed").removeAttr("style");
                }
            });
        } else {
           
            if ($(window).width() < 768) {
                $("#btn-mobile").click(function(event) {
                    $(".nav-bar").toggleClass("collapse-movil");
                });
                $("#main-menu li a").click(function(event) {
                    $(".nav-bar").toggleClass("collapse-movil");
                });
                $(".title-menu").click(function(event) {
                    event.preventDefault();
                    i = $(".title-menu").index(this);
                    if ($(this).parent().parent().parent().hasClass("expand")) {
                        $(".menu-mobile").eq(i).removeClass("expand");
                    } else {
                        $(".menu-mobile").eq(i).addClass("expand");
                    }
                });
                this.sliders();
            }
            _top_filtros = $("#mainmenu").offset().top;
            offset_filtros = _top_filtros - 0;
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $("#mainmenu").addClass("fixed").css({
                        top: 0
                    });
                } else {
                    $("#mainmenu").removeClass("fixed").removeAttr("style");
                }
            });
            _top_nav = $(".nav-bar").offset().top;
            offset_nav = _top_nav - 0;
            $(window).scroll(function(event) {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_nav) {
                    $(".nav-bar").addClass("fixed").css({
                        top: 0
                    });
                } else {
                    $(".nav-bar").removeClass("fixed").removeAttr("style");
                }
            });
        }
        $(".lnk-menu").click(function(event) {
            event.preventDefault();
            app.scrolling($.attr(this, "href"), 750);
            event.stopPropagation();
        });
        $(".lnk-menuu").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - $(".nav-bar").height() - 0 - 10
            }, 750);
        });
        $(window).scroll(function(event) {
            var fromTop = $(this).scrollTop();
            var indice = $(".section").map(function(index, elem) {
                if (fromTop > $(this).offset().top - $("#mainmenu").innerHeight()) {
                    return index;
                }
            });
  
        });
        this.sliders();
    },
    scrolling: function(_hash, _speed) {
        if ($(_hash).length > 0) {
            $("html, body").animate({
                scrollTop: $(_hash).offset().top - 50
            }, _speed, function() {
                var item = $(".submenu li a").map(function(index, elem) {
                    if ($(this).attr("href") == _hash) {
                        return index;
                    }
                });
                $(".submenu li a").removeClass("active");
                $(".submenu li a").eq(item[0]).addClass("active");
            });
        }
        return false;
    },
    sliders: function() {
       
        $("#slider1").slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            autoplay: false,
            responsive: [ {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
        });

        $("#section-procesadores .fondo").hide();
        $("#section-procesadores .fondo").eq(0).show();
        $("#slider1").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
                    
                    params = {
                        slider: "#" + $(event.currentTarget).attr("data-section"),
                        index: nextSlide,
                        speed: slick.defaults.speed/3
                    };
                    app.changeItem(params);
                });
    },
    changeItem: function(_params) {
        
        $(_params.slider + " .fondo").fadeOut(_params.speed);
        $(_params.slider + " .fondo").eq(_params.index).fadeIn(_params.speed);
        },

    playVideo: function() {
       
        $(".youtube").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
};
$(".video").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
});

$('.lo-quiero-universitario').click(function(){

  $("#slider1").slick('unslick');
  $('#blacksheep .scroll').css("display","block");

    $('#alianza-lima .section-procesadores').removeAttr("id","section-procesadores");
    $('#alianza-lima .section-video').removeAttr("id","section-video");
    $('#alianza-lima .slider-productos').removeAttr("id","slider1");
    $('#alianza-lima').removeAttr("class","active");

  $('#universitario .section-procesadores').attr("id","section-procesadores");
  $('#universitario .section-video').attr("id","section-video");
  $('#universitario .slider-productos').attr("id","slider1");
  $('#universitario').attr("class","active");
  $('#mainmenu .univ-menu.lnk-menu').addClass("active");
  $('#mainmenu .alian-menu.lnk-menu').removeClass("active");

    app.sliders();
});
$('.lo-quiero-alianza').click(function(){
  $("#slider1").slick('unslick');

  $('#blacksheep .scroll').css("display","block");
  $('#universitario .section-procesadores').removeAttr("id","section-procesadores");
  $('#universitario .section-video').removeAttr("id","section-video");
  $('#universitario .slider-productos').removeAttr("id","slider1");
  $('#universitario').removeAttr("class","active");

  $('#alianza-lima .section-procesadores').attr("id","section-procesadores");
  $('#alianza-lima .section-video').attr("id","section-video");
  $('#alianza-lima .slider-productos').attr("id","slider1");
  $('#alianza-lima').attr("class","active");
  $('#mainmenu .alian-menu.lnk-menu').addClass("active");
  $('#mainmenu .univ-menu.lnk-menu').removeClass("active");


  app.sliders();

});

// Videos Universitario

  $('#universitario .section-video .reproductor-video img').click(function(){
    $('#universitario .section-video .reprod-video-1').attr("src","https://www.youtube.com/embed/dffA5MvOaOI");
    $('#universitario .section-video .reproductor-video img').addClass('display-none');
  });
    $('#universitario .section-video .video-play-1').click(function(){
      $("#universitario .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/qVqeoXBjJfI");
      $('#universitario .section-video .reproductor-video img').addClass('display-none');
    });
    $('#universitario .section-video .video-play-2').click(function(){
      $("#universitario .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/Ozr7oKLNJkg");
      $('#universitario .section-video .reproductor-video img').addClass("display-none");
    });
    $('#universitario .section-video .video-play-3').click(function(){
      $("#universitario .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/fFGcHddmw8c");
      $('#universitario .section-video .reproductor-video img').addClass("display-none");
    });
    $('#universitario .section-video .video-play-4').click(function(){
      $("#universitario .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/nHWM-E1LWVU");
      $('#universitario .section-video .reproductor-video img').addClass("display-none");
    });

// Videos Alianza Lima

    $('#alianza-lima .section-video .reproductor-video img').click(function(){
      $('#alianza-lima .section-video .reprod-video-1').attr("src","https://www.youtube.com/embed/YMqfC_f6XIo");
      $('#alianza-lima .section-video .reproductor-video img').addClass('display-none');
    });
      $('#alianza-lima .section-video .video-play-1').click(function(){
        $("#alianza-lima .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/CWtpjTWNmUQ");
        $('#alianza-lima .section-video .reproductor-video img').addClass('display-none');
      });
      $('#alianza-lima .section-video .video-play-2').click(function(){
        $("#alianza-lima .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/NROidxepYZ4");
        $('#alianza-lima .section-video .reproductor-video img').addClass("display-none");
      });
      $('#alianza-lima .section-video .video-play-3').click(function(){
        $("#alianza-lima .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/2Y80SyC4n1o");
        $('#alianza-lima .section-video .reproductor-video img').addClass("display-none");
      });
      $('#alianza-lima .section-video .video-play-4').click(function(){
        $("#alianza-lima .section-video .reprod-video-1").attr("src","https://www.youtube.com/embed/cQZmDKarOYU");
        $('#alianza-lima .section-video .reproductor-video img').addClass("display-none");
      });


window.onload = function() {
    $("#container").animate({
        opacity: 1
    }, 500);
    $(".loader").remove();
    $('#jugador-u').addClass('mov-left');
    $('#jugador-a').addClass('mov-right');

};
