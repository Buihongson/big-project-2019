$(document).ready(function() {
    $(function() {
        $(".box--hidden").slice(0, 8).show();

        $("#loadMore").on('click', function(e) {
            e.preventDefault();

            if($(".box--hidden:hidden").length !== 0) {
                $(".box--hidden:hidden").slice(0, 4).slideDown();
            } else {
                $("#load").fadeOut('slow');
                alert("Đây là sản phẩm cuối cùng.");
            }

            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        })
    });
});