//here is fullPage plugin contoller
$(function() {
    $('.page-container').fullpage({
        anchors: ['s1', 's2', 's3'],
        navigation: true,
    });
    $('[data-move]').click(function() {
            var target = parseFloat($(this).attr('data-move'));
            $.fn.fullpage.moveTo(target);
        });
});
//here is mobile-menu controller
$(function() {
     $('.fa-bars').click(function() {
         $('.mobile-page-menu').addClass("active");

     });
     $('.mobile-menu, .fa-times').click(function() {
         $('.mobile-page-menu').removeClass("active");
     });
});
