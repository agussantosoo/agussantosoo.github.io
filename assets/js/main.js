//inisialisasi aos
AOS.init({
	easing: "ease-in-out-sine",
});

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
var owl = $('.slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// img viewer
$('.home__img').each(function() {
    imgviewer(this);
});

$('.project__img').each(function() {
    imgviewer(this);
});

function imgviewer(data){
    new Viewer(data, {
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
}

const imgslider = $('.slider');
const sliderviewer = new Viewer(imgslider[0], {
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

