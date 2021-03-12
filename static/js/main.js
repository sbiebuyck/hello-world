(function($) {
    $('.submit').on('click', function (e) {
        e.preventDefault();
        var txt=$('input:text[name=NewTask]:checked').val();
        var val = $("#new-task").val();
        $('.main-content').append('<div class="task"> <input class="checkbox" type="checkbox">' + val + '<button class="delete" type="button">x</button><button class="edit" type="button">o</button></div>');
    });

    $('body').on('click', '.delete', function (e) {
        $(this).closest('.task').remove();
    });

   /* $('body').on('click', '.edit', function (e) {
        $(this).hide();
        $(this).prev().hide();
        $(this).next().show();
        $(this).next().select(); 
    }); */

    $('.checkbox').on('click', function (e) {
        $(this).parent('.task').toggleClass('completed');
    });

})(jQuery);