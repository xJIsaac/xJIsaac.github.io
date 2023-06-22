function loadProfile() {
  fetch("./Components/profile/profile.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("profile").innerHTML = data;
    });
}

// Call the functions to load the header and footer
loadProfile();
