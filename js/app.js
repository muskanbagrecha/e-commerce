const elements = document.querySelectorAll(".component-close");

const closeComponent = () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
      e.target.parentElement.parentElement.style.display = "none";
    });
  }
};

closeComponent();
