const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 50 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
};
window.addEventListener('scroll', headerScroll);


/* Open and close manu on an icon click*/
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
    slidesPerView: '2',
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
);

/* Open and Close form*/

function openForm() {
    document.getElementById("signupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("signupForm").style.display = "none";
  }

/* Save name from form*/

  const form = document.querySelector("form");
  const getName = document.querySelector("#entername");
  const submitBtn = document.querySelector("#submitname");
  const forgetBtn = document.querySelector("#forgetname");
  
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  
  submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", getName.value);
  
    nameDisplayCheck();
  });
  
  forgetBtn.addEventListener("click", function () {
    localStorage.removeItem("name");
  
    nameDisplayCheck();
  });
  
  

  