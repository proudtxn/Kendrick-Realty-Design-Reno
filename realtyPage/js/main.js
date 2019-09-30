

// MAKING NAVBAR STICK & ADJUSTING SOME OF ITS PROPERTIES
const nav = document.querySelector('#navContainer');
const navProperties = document.querySelector('.nav-inner');
const navTop = nav.offsetTop;

function fixNav() {
    if (window.scrollY > navTop) {
        document.body.classList.add('sticky-nav');
        document.body.classList.add('nav-properties');
    }
    else {
        document.body.classList.remove('sticky-nav');
        document.body.classList.remove('nav-properties');
    }
}

window.addEventListener('scroll', fixNav);
// END ~ MAKING NAVBAR STICKY & ADJUSTING SOME OF ITS PROPERTIES


//  BURGER FUNCTIONALITY
const navSlide = () => {
    const burger = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {

        // Toggle Nav Slide
        nav.classList.toggle('nav-active');

        // Animate 'a'Links Slide in
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.5}s`;
            }
        });
    });
}
navSlide();
//  END ~ BURGER FUNCTIONALITY


//  PARALLAX SLIDING IMAGES 
$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('slide').css('background-position', 'center ' + (wScroll * .75) + 'px');  
}
//  END ~ PARALLAX SLIDING IMAGES
