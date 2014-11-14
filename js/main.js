var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
//        $('#top-chest').attr('src', $('#top-chest').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});

$(function () {

});