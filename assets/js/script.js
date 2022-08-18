
/* REVEAL EACH SECTION WHEN SCROLLING*/

const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section__hidden');
	observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});
allSections.forEach(function(section) {
	sectionObserver.observe(section);
	section.classList.add('section__hidden');
});

/* Open and close menu on an icon click*/
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
	navbarMenu.classList.toggle('active');
};
menuToggler.addEventListener('click', toggleMenu);

/*SWIPER*/
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
});
/* MODAL POP UP*/
const infoWindow = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnClosePopup = document.querySelector('.close_popup');
const btnsOpenPopup = document.querySelectorAll('.show_popup');
const openPopup = function() {
	infoWindow.classList.remove('hidden');
	overlay.classList.remove('hidden');
};
const closePopup = function() {
	infoWindow.classList.add('hidden');
	overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenPopup.length; i++) btnsOpenPopup[i].addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
document.addEventListener('keydown', function(e) {
	// console.log(e.key);
	if (e.key === 'Escape' && !infoWindow.classList.contains('hidden')) {
		closePopup();
	}
});
/* Open and Close submission form*/
function openForm() {
	document.getElementById("signupForm").style.display = "block";
}

function closeForm() {
	document.getElementById("signupForm").style.display = "none";
}
/* Save name and date from form*/
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const getDate = document.querySelector("#classdate");
form.addEventListener("submit", function(e) {
	e.preventDefault();
});
submitBtn.addEventListener("click", function() {
	localStorage.setItem("name", getName.value);
	localStorage.setItem("date", getDate.value);
});
/* Required fields on the form*/
function navigate() {
	let entername = document.getElementById('entername').value;
	let email = document.getElementById('email').value;
	let classdate = document.getElementById('classdate').value;
	let classname = document.getElementById('classname').value;
	if (entername == "" || email == "" || classdate == "" || classname == "") {
		alert("Please fill in all fields");
	} else {
		window.open("thankyou.html", '_parent');
	}
}


