/* Experience Tabs */
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('experience-active');
        });
        target.classList.add('experience-active');

        tab.forEach(tab =>{
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