

// MAKING NAVBAR STICK & ADJUSTING SOME OF ITS PROPERTIES
const nav = document.querySelector('#navContainer');
const navProperties = document.querySelector('.nav-inner');
const navTop = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= navTop) {
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
