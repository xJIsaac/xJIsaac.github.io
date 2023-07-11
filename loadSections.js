function loadNavbar() {
  fetch("./components/navbar/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

function loadHeader() {
  fetch("./components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
}

function loadProfile() {
  fetch("./components/profile/profile.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("profile").innerHTML = data;
    });
}

function loadContact() {
  fetch("./components/contact/contact.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contact").innerHTML = data;
    });
}

// Call the functions to load the navbar, header, and footer
loadNavbar();
loadHeader();
loadProfile();
loadContact();

window.addEventListener("load", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
