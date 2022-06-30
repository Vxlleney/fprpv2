// DARK AND LIGHT THEME
const themeButton = document.getElementById('theme_change')
const themeSelector = localStorage.getItem('theme');

    if (themeSelector == 'dark'){
        themeButton.href = "assets/css/dark_styles.css";  
    }

    else {
        themeButton.href = "assets/css/styles.css";  
    }

function toggleTheme() {

    localStorage.removeItem('theme');

    if (themeButton.href.match("assets/css/dark_styles.css")) {
        themeButton.href = "assets/css/styles.css";  

        localStorage.setItem('theme', 'light');  
    }

    else {
        themeButton.href = "assets/css/dark_styles.css";  

        localStorage.setItem('theme', 'dark');  
    }
}


// MENU RESPONSIVE
const navResponsive = document.querySelector('.nav-menu');
const iconSelectorFormation = document.getElementById('icon-selector-formations');
const menuSelectorFormation = document.getElementById('selector-formations');


function toggleMenu() {

    if(navResponsive.classList.contains('active')) {
        navResponsive.classList.remove('active');
        iconSelectorFormation.classList.add('active');
        menuSelectorFormation.classList.remove('active');
    } else {
        navResponsive.classList.add('active');
        menuSelectorFormation.classList.remove('active');
        iconSelectorFormation.classList.remove('active');
    }
}


// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// FORMATIONS
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');

const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const m5 = document.getElementById('m5');


function toggleF1(){

    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');

    // SELECTOR FORMATION

    if(f2.classList.contains('active')) {
        f2.classList.remove('active');
        f1.classList.add('active');
    }

    if(f3.classList.contains('active')) {
        f3.classList.remove('active');
        f1.classList.add('active');
    }

    if(f4.classList.contains('active')) {
        f4.classList.remove('active');
        f1.classList.add('active');
    }

    if(f5.classList.contains('active')) {
        f5.classList.remove('active');
        f1.classList.add('active');
    }

    // CONTENT FORMATION

    if(c2.classList.contains('active')) {
        c2.classList.remove('active');
        c1.classList.add('active');
    }

    if(c3.classList.contains('active')) {
        c3.classList.remove('active');
        c1.classList.add('active');
    }

    if(c4.classList.contains('active')) {
        c4.classList.remove('active');
        c1.classList.add('active');
    }

    if(c5.classList.contains('active')) {
        c5.classList.remove('active');
        c1.classList.add('active');
    }

    // MENU SELECTOR

    if(m2.classList.contains('active')) {
        m2.classList.remove('active');
        m1.classList.add('active');
    }

    if(m3.classList.contains('active')) {
        m3.classList.remove('active');
        m1.classList.add('active');
    }

    if(m4.classList.contains('active')) {
        m4.classList.remove('active');
        m1.classList.add('active');
    }

    if(m5.classList.contains('active')) {
        m5.classList.remove('active');
        m1.classList.add('active');
    }
}

function toggleF2(){

    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');

    // SELECTOR FORMATION

    if(f1.classList.contains('active')) {
        f1.classList.remove('active');
        f2.classList.add('active');
    }

    if(f3.classList.contains('active')) {
        f3.classList.remove('active');
        f2.classList.add('active');
    }

    if(f4.classList.contains('active')) {
        f4.classList.remove('active');
        f2.classList.add('active');
    }

    if(f5.classList.contains('active')) {
        f5.classList.remove('active');
        f2.classList.add('active');
    }

    // CONTENT FORMATION

    if(c1.classList.contains('active')) {
        c1.classList.remove('active');
        c2.classList.add('active');
    }

    if(c3.classList.contains('active')) {
        c3.classList.remove('active');
        c2.classList.add('active');
    }

    if(c4.classList.contains('active')) {
        c4.classList.remove('active');
        c2.classList.add('active');
    }

    if(c5.classList.contains('active')) {
        c5.classList.remove('active');
        c2.classList.add('active');
    }

    // MENU SELECTOR

    if(m1.classList.contains('active')) {
        m1.classList.remove('active');
        m2.classList.add('active');
    }

    if(m3.classList.contains('active')) {
        m3.classList.remove('active');
        m2.classList.add('active');
    }

    if(m4.classList.contains('active')) {
        m4.classList.remove('active');
        m2.classList.add('active');
    }

    if(m5.classList.contains('active')) {
        m5.classList.remove('active');
        m2.classList.add('active');
    }
}

function toggleF3(){

    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');

    // SELECTOR FORMATION

    if(f1.classList.contains('active')) {
        f1.classList.remove('active');
        f3.classList.add('active');
    }

    if(f2.classList.contains('active')) {
        f2.classList.remove('active');
        f3.classList.add('active');
    }

    if(f4.classList.contains('active')) {
        f4.classList.remove('active');
        f3.classList.add('active');
    }

    if(f5.classList.contains('active')) {
        f5.classList.remove('active');
        f3.classList.add('active');
    }

    // CONTENT FORMATION

    if(c1.classList.contains('active')) {
        c1.classList.remove('active');
        c3.classList.add('active');
    }

    if(c2.classList.contains('active')) {
        c2.classList.remove('active');
        c3.classList.add('active');
    }

    if(c4.classList.contains('active')) {
        c4.classList.remove('active');
        c3.classList.add('active');
    }

    if(c5.classList.contains('active')) {
        c5.classList.remove('active');
        c3.classList.add('active');
    }

    // MENU SELECTOR

    if(m1.classList.contains('active')) {
        m1.classList.remove('active');
        m3.classList.add('active');
    }

    if(m2.classList.contains('active')) {
        m2.classList.remove('active');
        m3.classList.add('active');
    }

    if(m4.classList.contains('active')) {
        m4.classList.remove('active');
        m3.classList.add('active');
    }

    if(m5.classList.contains('active')) {
        m5.classList.remove('active');
        m3.classList.add('active');
    }
}

function toggleF4(){

    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');

    // SELECTOR FORMATION

    if(f1.classList.contains('active')) {
        f1.classList.remove('active');
        f4.classList.add('active');
    }

    if(f2.classList.contains('active')) {
        f2.classList.remove('active');
        f4.classList.add('active');
    }

    if(f3.classList.contains('active')) {
        f3.classList.remove('active');
        f4.classList.add('active');
    }

    if(f5.classList.contains('active')) {
        f5.classList.remove('active');
        f4.classList.add('active');
    }

    // CONTENT FORMATION

    if(c1.classList.contains('active')) {
        c1.classList.remove('active');
        c4.classList.add('active');
    }

    if(c2.classList.contains('active')) {
        c2.classList.remove('active');
        c4.classList.add('active');
    }

    if(c3.classList.contains('active')) {
        c3.classList.remove('active');
        c4.classList.add('active');
    }

    if(c5.classList.contains('active')) {
        c5.classList.remove('active');
        c4.classList.add('active');
    }

    // MENU SELECTOR

    if(m1.classList.contains('active')) {
        m1.classList.remove('active');
        m4.classList.add('active');
    }

    if(m2.classList.contains('active')) {
        m2.classList.remove('active');
        m4.classList.add('active');
    }

    if(m3.classList.contains('active')) {
        m3.classList.remove('active');
        m4.classList.add('active');
    }

    if(m5.classList.contains('active')) {
        m5.classList.remove('active');
        m4.classList.add('active');
    }
}

function toggleF5(){

    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');

    // SELECTOR FORMATION

    if(f1.classList.contains('active')) {
        f1.classList.remove('active');
        f5.classList.add('active');
    }

    if(f2.classList.contains('active')) {
        f2.classList.remove('active');
        f5.classList.add('active');
    }

    if(f3.classList.contains('active')) {
        f3.classList.remove('active');
        f5.classList.add('active');
    }

    if(f4.classList.contains('active')) {
        f4.classList.remove('active');
        f5.classList.add('active');
    }

    // CONTENT FORMATION

    if(c1.classList.contains('active')) {
        c1.classList.remove('active');
        c5.classList.add('active');
    }

    if(c2.classList.contains('active')) {
        c2.classList.remove('active');
        c5.classList.add('active');
    }

    if(c3.classList.contains('active')) {
        c3.classList.remove('active');
        c5.classList.add('active');
    }

    if(c4.classList.contains('active')) {
        c4.classList.remove('active');
        c5.classList.add('active');
    }

    // MENU SELECTOR

    if(m1.classList.contains('active')) {
        m1.classList.remove('active');
        m5.classList.add('active');
    }

    if(m2.classList.contains('active')) {
        m2.classList.remove('active');
        m5.classList.add('active');
    }

    if(m3.classList.contains('active')) {
        m3.classList.remove('active');
        m5.classList.add('active');
    }

    if(m4.classList.contains('active')) {
        m4.classList.remove('active');
        m5.classList.add('active');
    }
}

// LISTE FORMATION


function listSelector() {

    iconSelectorFormation.classList.remove('active');
    menuSelectorFormation.classList.add('active');
    navResponsive.classList.remove('active');
}

function menuSelector() {
    
    iconSelectorFormation.classList.add('active');
    menuSelectorFormation.classList.remove('active');
}