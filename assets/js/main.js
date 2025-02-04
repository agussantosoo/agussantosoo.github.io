//inisialisasi aos
AOS.init();

// Toggle class active pada .skills__data saat diklik
$('.skills__data').on('click', function() {
    $(this).toggleClass('active');
});

/*===== SHOW SCROLL TOP=====*/ 
$(window).on('scroll', function() {
    if ($(this).scrollTop() >= 560) {
        $('#scroll-top').addClass('show-scroll');
    } else {
        $('#scroll-top').removeClass('show-scroll');
    }
});

/*===== MIXITUP FILTER project =====*/ 
var mixer = mixitup(".project__container", {
    selectors: {
        target: '.project__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active project */ 
$('.project__item').on('click', function() {
    $('.project__item').removeClass('active-project');
    $(this).addClass('active-project');
});

// GSAP Animations
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 });
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 });
gsap.from('.home__greeting, .home__name, .home__profession, .floating__menu', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 });

// get year footer
$('#year').text(new Date().getFullYear());

// Slider
$('.slider').each(function() {
    $(this).bxSlider({
        auto: true,
        speed: 1000,
        controls: false,
        pager: false,
        slideHeight: 100
    });
});

// slider dan viewer 
// pointer jika mouse di img-viewer dan img-slider
$('.home__img, .project__img').css('cursor', 'pointer');

// img-viewer
$('.home__img').each(function() {
    new Viewer(this, {
        title: false,
        toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            reset: 1,
            prev: 0,
            play: 0,
            next: 0,
            rotateLeft: 0,
            rotateRight: 0,
            flipHorizontal: 0,
            flipVertical: 0,
        },
    });
});

// img-slider
$('.project__img').on('click', function() {
    const slider = $(this).closest('.slider');
    const imgslider = slider[0];
    console.log(imgslider)
    const sliderviewer = new Viewer(imgslider, {
        title: false,
        toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            reset: 1,
            prev: 1,
            play: 0,
            next: 1,
            rotateLeft: 0,
            rotateRight: 0,
            flipHorizontal: 0,
            flipVertical: 0,
        },
    });
});
