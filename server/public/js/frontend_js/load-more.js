$(document).ready(function () {
    $(function () {
        $(".box--hidden").slice(0, 8).show();

        $("#loadMore").on('click', function (e) {
            e.preventDefault();

            if ($(".box--hidden:hidden").length !== 0) {
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

    $('select').on('change', function (e) {
        var url = $(this).val();
        if (url) {
            window.location = url;
        }
        return false;
    });

    setTimeout(() => {
        $('#account-success').remove();
    }, 5000);

    $('#toggle-main-menu').on('click', function (e) {
        $('#menu--mb').removeClass('hidden');
        $(this).addClass('hidden');
        $('#toggle-active-main').removeClass('hidden');
    });

    $('#toggle-active-main').on('click', function (e) {
        $('#menu--mb').addClass('hidden');
        $(this).addClass('hidden');
        $('#toggle-main-menu').removeClass('hidden');
    });

    $('#toggle-one').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--one').removeClass('hidden');
        $('#menu--mb__sub--one').addClass('show');
        $(this).addClass('hidden');
        $('#toggle-active-one').removeClass('hidden');
    });

    $('#toggle-active-one').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--one').removeClass('show');
        $('#menu--mb__sub--one').addClass('hidden');
        $(this).removeClass('show');
        $(this).addClass('hidden');
        $('#toggle-one').removeClass('hidden');
    });

    $('#toggle-two').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--two').removeClass('hidden');
        $('#menu--mb__sub--two').addClass('show');
        $(this).addClass('hidden');
        $('#toggle-active-two').removeClass('hidden');
    });

    $('#toggle-active-two').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--two').removeClass('show');
        $('#menu--mb__sub--two').addClass('hidden');
        $(this).removeClass('show');
        $(this).addClass('hidden');
        $('#toggle-two').removeClass('hidden');
    });

    $('#toggle-three').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--three').removeClass('hidden');
        $('#menu--mb__sub--three').addClass('show');
        $(this).addClass('hidden');
        $('#toggle-active-three').removeClass('hidden');
    });

    $('#toggle-active-three').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--three').removeClass('show');
        $('#menu--mb__sub--three').addClass('hidden');
        $(this).removeClass('show');
        $(this).addClass('hidden');
        $('#toggle-three').removeClass('hidden');
    });

    $('#toggle-account').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--account').removeClass('hidden');
        $('#menu--mb__sub--account').addClass('show');
        $(this).addClass('hidden');
        $('#toggle-active-account').removeClass('hidden');
    });

    $('#toggle-active-account').on('click', function (e) {
        e.preventDefault();

        $('#menu--mb__sub--account').removeClass('show');
        $('#menu--mb__sub--account').addClass('hidden');
        $(this).removeClass('show');
        $(this).addClass('hidden');
        $('#toggle-account').removeClass('hidden');
    });
});