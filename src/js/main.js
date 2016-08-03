$(function () {

    $('.dropdown').hover(function () {
            $(this).children('.sub-menu').slideDown(200);
        }, function () {
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    $('.jcarousel').jcarousel({
        // Configuration goes here
        wrap: 'circular'
    });
    $('.jcarousel-prev').click(function () {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function () {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.chosen-select').chosen();

    //Custom CHECKBOX

    var $input = $('.sprite').children();

    $('.sprite').mousedown(function () {
        if ($input.attr('checked')) {
            $input.attr('checked', false);
            $(this).removeClass('sprite-checked')
                   .addClass('sprite-unchecked');
        } else {
            $input.attr('checked', true);
            $(this).removeClass('sprite-unchecked')
                   .addClass('sprite-checked');
        }

    });

    $('.js-checkbox label').mousedown(function () {
        if ($input.attr('checked')) {
            $input.attr('checked', false);
            $(this).prev().removeClass('sprite-checked')
                .addClass('sprite-unchecked');
        } else {
            $input.attr('checked', true);
            $(this).prev().removeClass('sprite-unchecked')
                .addClass('sprite-checked');
        }

    });

    $('.js-checkbox input[type=checkbox]').each(function () {
        if ($(this).attr('checked'))
            $(this).parent()
                .removeClass('sprite-unchecked')
                .addClass('sprite-checked');
    });
});