const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__item');

menuIcon.addEventListener('click', openMenu);
menuLinks.forEach(link => link.addEventListener('click', openMenu));

function openMenu() {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuList.classList.toggle('_active');
}

document.addEventListener('click', function(e) {
    if ((e.target != (menuIcon || menuLinks)) && document.body.classList.contains('_lock')) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
    };
});