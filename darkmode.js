const darkBtn = document.querySelector(".dark-mode-btn");

function changeTheme() {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  const btn = document.querySelector(".dark-mode-btn");
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    btn.innerHTML = "Dark Mode";
    header.style.backgroundColor = "orange";
    footer.style.backgroundColor = "orange";
  } else {
    body.classList.add("dark-mode");
    btn.innerHTML = "Light Mode";
    header.style.backgroundColor = "black";
    footer.style.backgroundColor = "black";
    header.style.color = "white";
    footer.style.color = "white";
    // document.querySelector(".header__logo").style.color = "white";
  }
}

darkBtn.addEventListener("click", changeTheme);
