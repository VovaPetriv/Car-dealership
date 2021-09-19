document.addEventListener("DOMContentLoaded", () => {
    const $menuButton = document.querySelector('.footer-hide__menu'),
        $hideMenu = document.querySelector('.hide-menu'),
        $hideMenuItem = document.querySelectorAll('.hide-menu__item')
        $closeMenu = document.querySelector('.hide-menu span');
    
    $menuButton.addEventListener('click', function () {
        $hideMenu.classList.toggle('active');
    });

    $hideMenuItem.forEach(el => {
        el.addEventListener('click', function () {
            $hideMenu.classList.remove('active');
        });
    });

    $closeMenu.addEventListener('click', function () {
        $hideMenu.classList.remove('active');
    });
});
