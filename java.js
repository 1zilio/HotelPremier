$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPos = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPos <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 600;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                activeSectionIndex = i;
                return false
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1700,
        distance: '20%',
    });

    ScrollReveal().reveal('#banner', {
        origin: 'top',
        duration: 1700,
        distance: '20%',
    });

    ScrollReveal().reveal('.quarto', {
        origin: 'left',
        duration: 1700,
        distance: '20%',
    });

    ScrollReveal().reveal('#maps', {
        origin: 'left',
        duration: 1500,
        distance: '20%',
    });

    ScrollReveal().reveal('#feedbacks', {
        origin: 'right',
        duration: 1400,
        distance: '20%',
    });
});
