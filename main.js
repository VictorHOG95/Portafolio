/* Experience Tabs */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('experience-active');
        });
        target.classList.add('experience-active');

        tab.forEach(tab => {
            tab.classList.remove('experience-active');
        });
        tab.classList.add('experience-active');
    });
});
/*  */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/**/
const menu_btn_hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

menu_btn_hamburger.addEventListener('click', function () {
    menu_btn_hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('active');
});