window.addEventListener("scroll", function () {
  var navbar = document.querySelector("#navbar");

  if (window.scrollY === 0) {
    navbar.classList.remove("opaque");
  } else {
    navbar.classList.add("opaque");
  }
});
