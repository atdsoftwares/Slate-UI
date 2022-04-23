const btn = document.querySelector(".copy-btn");
const code_url = document.querySelector(".code-url");
const newCode_url = code_url.innerText;
console.log(newCode_url);

function changeBtnText() {
  btn.innerHTML = "copied";
  navigator.clipboard.writeText(newCode_url);
  /* Alert the copied text */
  alert("Copied the text: " + newCode_url);
}

btn.addEventListener("click", changeBtnText);
