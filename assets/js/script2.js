const h1 = document.querySelector("h1");
const greeting = document.querySelector(".personal-greeting");


function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `Thank you ${name}!`;


  } else {
    h1.textContent = `Maybe next time..`;
    greeting.textContent = `Need more inspiration? Check out my social media links below or get in touch if you have any questions`;

  }
}

document.body.onload = nameDisplayCheck;

