var x = 1;
function slider() {
    if (x >= 10)
        x = 1;
    //$("#slider").fadeOut(800);
    
    $('#slider').fadeTo(900, function () {
        $(this).css({ "background-image": "url('games/" + x + ".jpg')" }).fadeIn(900);
    });
    x++;
    setTimeout(function () {
        slider();
    }, 8000);
}
$(document).ready(function () {
    slider();
    change('', 'div1');
    $('.browse-mwnu-item')[1].classList.add('banner');
    $('.half-menu>.browse-mwnu-item')[1].classList.add('banner');
});
function change(this_, div) {
    if (this_ != '') {
        for (var i = 1; i < 5; i++) {
            $('.div' + i).css('display', "none");
        }
        $('.browse-mwnu-item').removeClass('banner')
        $('.' + div).css('display', "block");
        this_.classList.add('banner');
    } else {
        for (var i = 1; i < 5; i++) {
            $('.div' + i).css('display', "none");
        }
        $('.browse-mwnu-item').removeClass('banner')
        $('.' + div).css('display', "block");
    }
}