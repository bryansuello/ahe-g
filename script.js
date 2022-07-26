let burger = document.getElementById("chec");
let dropdown = document.getElementById("dropdown");

burger.addEventListener("click", () => {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});
