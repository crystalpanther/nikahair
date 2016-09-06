$(function() {

    $('.page-container').fullpage({
        anchors: ['s1', 's2', 's3', 's4', 's5'],
        navigation: true,
        onLeave: function(index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('[data-anchor="s' + index + '"]').find('h2').removeClass('active');
        },
        afterLoad: function(anchorLink, index) {
            console.log(anchorLink, index);
            $('[data-anchor="' + anchorLink + '"]').find('h2').addClass('active');
        }
    });

    $('[data-move]').click(function() {
        var target = parseFloat($(this).attr('data-move'));
        $.fn.fullpage.moveTo(target);
    });

});
