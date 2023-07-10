function loadNavbar() {
  fetch("./Components/navbar/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

function loadProfile() {
  fetch("./Components/profile/profile.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("profile").innerHTML = data;
    });
}

function loadHeader() {
  fetch("./Components/header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
}

// Call the functions to load the navbar, header, and footer
loadNavbar();
loadHeader();
loadProfile();

window.addEventListener("load", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
