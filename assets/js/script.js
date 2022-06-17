const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 50 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
};
window.addEventListener('scroll', headerScroll);

/* Open and close manu on on icon click*/
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
};
menuToggler.addEventListener('click', toggleMenu);

const linksToggleMenu = (e) => {
    if(e.target.classList.contains('.navbar__list-link')) navbarMenu.classList.remove('active');
};
window.addEventListener('click', linksToggleMenu);

const swiper = new Swiper('.myswiper', {
    effect: 'coverflow', 
    grabCursor: true,
    centeredSlides: true,
    slidePerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,  
    },

    pagination: {
        el: '.swiper-pagination'
    }
}
)