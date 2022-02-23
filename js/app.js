const elements = document.querySelectorAll(".component-close");

const closeComponent = () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
      e.target.parentElement.parentElement.style.display = "none";
    });
  }
};

closeComponent();



/* Theme toggle */
const themeStyle = document.querySelector('.themestyle');
let activeSheet = document.querySelector("#active-stylesheet");
let themeToggle = document.querySelector(".theme-toggle");
let themeIcon = document.querySelector('.theme-toggle i');

if (localStorage.getItem("lastActiveSheet")) {
    activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

function switchStyle() {
  console.log("clicked!")
    let selectedSheet = this.getAttribute("data-stylesheet");
    if (selectedSheet === "https://fashgram-ui.netlify.app/lighttheme.css") {
        selectedSheet = "https://fashgram-ui.netlify.app/darktheme.css";
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        selectedSheet = "https://fashgram-ui.netlify.app/lighttheme.css";
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    this.setAttribute("data-stylesheet", selectedSheet);
    activeSheet.setAttribute("href", selectedSheet);
    localStorage.setItem("lastActiveSheet", selectedSheet);
}

themeToggle.addEventListener('click', switchStyle);