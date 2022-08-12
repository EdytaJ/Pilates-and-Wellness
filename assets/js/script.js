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

/* MODAL POP UP*/

const infoWindow = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnClosePopup = document.querySelector('.close_popup');
const btnsOpenPopup = document.querySelectorAll('.show_popup');

const openPopup = function () {
  infoWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closePopup = function () {
  infoWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenPopup.length; i++)
  btnsOpenPopup[i].addEventListener('click', openPopup);

btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closePopup();
  }
});

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
  

  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  
  submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", getName.value);
  
    nameDisplayCheck();
  });

  function navigate() {
    entername = document.getElementById('entername').value;
    email = document.getElementById('email').value;
    if (entername == "" || email == "") {
      alert("First name and email required");
      exit;
    } else {
      window.open("thankyou.html", '_parent');
    }
  };


