const button = document.getElementById("button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});