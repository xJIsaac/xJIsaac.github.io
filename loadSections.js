import "./Components/portfolio/portfolioCards.js";
import "./Components/header/header.js";
import "./Components/navbar/navbar.js";
import "./form.js";

const fetchAndSetData = (url, elementId) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
};

fetchAndSetData("./components/navbar/navbar.html", "navbar");
fetchAndSetData("./components/header/header.html", "header");
fetchAndSetData("./components/profile/profile.html", "profile");
fetchAndSetData("./components/contact/contact.html", "contact");

window.addEventListener("load", () => {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
});
