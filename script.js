const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__item');
let isMenuOpened = false;

menuIcon.addEventListener('click', openMenu);
menuLinks.forEach(link => link.addEventListener('click', openMenu));
document.addEventListener('click', checkClick);

function openMenu() {
    if (!isMenuOpened) {
        document.body.classList.add('_lock');
        menuIcon.classList.add('_active');
        menuBody.classList.add('_active');
        menuList.classList.add('_active');
        isMenuOpened = true;
    } else {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
        menuList.classList.remove('_active');
        isMenuOpened = false;
    }

}

function checkClick() {
    if (event.target == menuBody) {
        openMenu();
    };
}
