function initParallax(){
    $('.parallax').each(function(){
        var content = $(this).parent().find('.parallax-content');
        console.log(content.outerHeight());
        if(content.outerHeight() > 500){
            $(this).parent().height(content.outerHeight() + 100);
            $(this).parallax();
        }else{
            $(this).parallax();
        }
    });

}

function initBanner(){
    $(".banner").slider({
        height: $(".section-banner").height(),
        transition: 1000
    });
}

function initProjectSlider(){
    $("#portfolio-preview-slider").slider({
        height: $('.portfolio-preview-slider-wrap').height() - 40,
    }).find(".portfolio-preview-slider-btn").on('click', function(){
        $("#portfolio-preview-slider").slider($(this).data('action'));
    });
}
var langListW = 50;
function showHideLangList(){
    if($('#navbar-menu').outerWidth() > $('.nav-wrapper').outerWidth() - $('#brand-logo').width()){
        $('#navbar-menu .lang-list-wrap').addClass('no-margin-left');
        $('#lang-but').addClass('visible');
        $('#lang-list').addClass('dropdown-content');
    }else if($('#navbar-menu').outerWidth() + langListW < $('.nav-wrapper').outerWidth() - $('#brand-logo').width()){
        $('#navbar-menu .lang-list-wrap').removeClass('no-margin-left');
        $('#lang-but').removeClass('visible');
        $('#lang-list').removeClass('dropdown-content');
    }
}
$(document).ready(function(){
    $(".button-collapse").sideNav();
    $("#grs-feedback").grsFeedback();
    $('#lang-but').dropdown();
    $('#lang-list li').each(function(){
        langListW += $(this).width();
    });

    showHideLangList();

    $(window).on('resize', function(){
        if($(this).width() > 992){
            showHideLangList();
        }
    });

});