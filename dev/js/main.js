function initParallax() {
    $('.parallax').each(function () {
        var content = $(this).parent().find('.parallax-content');
        console.log(content.outerHeight());
        if (content.outerHeight() > 500) {
            $(this).parent().height(content.outerHeight() + 100);
            $(this).parallax();
        } else {
            $(this).parallax();
        }
    });

}

function initBanner() {
    $(".banner").slider({
        height: $(".section-banner").height(),
        transition: 1000
    });
}

function initProjectSlider() {
    $("#portfolio-preview-slider").slider({
        height: $('.portfolio-preview-slider-wrap').height() - 40,
    }).find(".portfolio-preview-slider-btn").on('click', function () {
        $("#portfolio-preview-slider").slider($(this).data('action'));
    });
}
var langListW = 50;
function showHideLangList() {
    if ($('#navbar-menu').outerWidth() > $('.nav-wrapper').outerWidth() - $('#brand-logo').width()) {
        $('#navbar-menu .lang-list-wrap').addClass('no-margin-left');
        $('#lang-but').addClass('visible');
        $('#lang-list').addClass('dropdown-content');
    } else if ($('#navbar-menu').outerWidth() + langListW < $('.nav-wrapper').outerWidth() - $('#brand-logo').width()) {
        $('#navbar-menu .lang-list-wrap').removeClass('no-margin-left');
        $('#lang-but').removeClass('visible');
        $('#lang-list').removeClass('dropdown-content');
    }
}

function popupToModal(toModal) {
    if (toModal) {
        $('.popup').each(function () {
            $(this).parent().find('.popup-trigger').addClass('modal-trigger');
            $(this).removeClass('popup-active');
        });
    } else {
        $('.popup').each(function () {
            $(this).parent().find('.popup-trigger').removeClass('modal-trigger');
            $(this).addClass('popup-active');
        });
    }
}
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('#lang-but').dropdown();
    $('#lang-list li').each(function () {
        langListW += $(this).width();
    });

    showHideLangList();

    $(window).on('load resize', function () {
        if ($(this).width() > 992) {
            popupToModal(false);
            showHideLangList();
        }
        else {
            popupToModal(true);
        }
    });

    $(document).ready(function () {
        $('select').material_select();
    });

    $('.modal-trigger').leanModal();

});