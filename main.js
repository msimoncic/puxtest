/*=============== MENU JS ===============*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


/*=============== SCROLL REVEAL ===============*/

const scroll = ScrollReveal( {
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 0,

})

// after open/refresh page
scroll.reveal(".home__text, .reservation__box, .surroundings__img", {origin:"left"} )
scroll.reveal(".reservation__img, .surroundings__box", {origin:"right"} )
scroll.reveal(".begonia", {delay:150} )
scroll.reveal(".pelargonium", {delay:250} )
scroll.reveal(".viola", {delay:350} )
scroll.reveal(".header, .gallery-wrap" )



/*=============== GALLERY SLIDER ===============*/
$('.gallery-wrap').slick({
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrow: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});