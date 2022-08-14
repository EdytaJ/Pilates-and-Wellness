const h1 = document.querySelector("h1");
const greeting = document.querySelector(".personal-greeting");


function nameDisplayCheck() {
  if (localStorage.getItem("name", "date")) {
    let name = localStorage.getItem("name");
    let date = localStorage.getItem("date");
    h1.textContent = `Thank you ${name}!`
    greeting.textContent = `See you in Savasana studio on ${date}`;
  } else {
    h1.textContent = `Maybe next time..`;
    greeting.textContent = `Need more inspiration? Check out my social media links below or get in touch if you have any questions`;

  }
};
document.body.onload = nameDisplayCheck;
document.body.onload = dateDisplayCheck;

