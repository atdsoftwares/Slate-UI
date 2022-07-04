const menuIcon = document.querySelector(".nav-menu-icon");
const aside = document.querySelector(".aside");

function showAside() {
  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else {
    aside.style.display = "none";
    console.log(aside);
  }
}

menuIcon.addEventListener("click", showAside);
