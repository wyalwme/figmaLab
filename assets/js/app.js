
document.querySelector('.menu__burger').addEventListener('click', () => {
    document.querySelector('.header__navbar-mobile .header__navbar-menu').classList.toggle('active');
    document.querySelector('.menu__burger').classList.toggle('close');
});
