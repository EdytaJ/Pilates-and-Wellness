const h1 = document.querySelector("h1");
const greeting = document.querySelector(".personal-greeting");



function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `Welcome ${name}!`;
    greeting.textContent = `Welcome to your yoga class, ${name}! I hope you will love it!`;

    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h1.textContent = `Maybe next time..`;
    greeting.textContent = `Check out my social media for more inspiration.`;

    forgetMe.style.display = "none";
    rememberMe.style.display = "block";
  }
}

document.body.onload = nameDisplayCheck;

const forgetBtn = document.querySelector("#forgetname");

forgetBtn.addEventListener("click", function () {
    localStorage.removeItem("name");
  
    nameDisplayCheck();
  });