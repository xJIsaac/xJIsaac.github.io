window.addEventListener("load", function () {
  var animatedText = document.getElementById("animated-text");
  animatedText.style.opacity = "1";
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("#navbar");

  if (window.scrollY === 0) {
    navbar.classList.remove("opaque");
  } else {
    navbar.classList.add("opaque");
  }
});
