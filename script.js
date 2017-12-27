$(document).ready(function() {
    $('#header').removeClass('default');
    $(document).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#header').addClass('default');
        }
        else {
            $('#header').removeClass('default');
        }
    });
});