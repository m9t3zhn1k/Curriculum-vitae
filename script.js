const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__item');


menuIcon.addEventListener('click', (e) => toggle());
menuLinks.forEach(link => link.addEventListener('click', (e) => toggle()));


function toggle() {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
}

document.addEventListener('click', function(e) {
    if ( (e.target != (menuIcon || menuLinks)) && document.body.classList.contains('_lock')) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
    };
});