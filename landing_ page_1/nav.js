$('document').ready(function() {

    var link = $('.menu-link');
    var link_active = $('link_active');
    var menu = $('.section-header-top-header-nav');
    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('nav-active');
    }) 
    link.active.click(function() {
        lunk.removeClass('menu-link_active');
    });
    


});