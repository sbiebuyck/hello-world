(function($) {
    $('.main-box').on({
        mouseenter: function () {
            $(this).css('background', 'red')
        },
        mouseleave: function () {
            $(this).css('background', 'blue') 
        }
    })

})(jQuery);