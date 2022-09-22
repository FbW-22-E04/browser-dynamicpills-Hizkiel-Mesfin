const listItems = document.querySelectorAll("aside li");
const sections = document.querySelectorAll("section");
const h3 = document.querySelectorAll("h3");

listItems.forEach((li) => {
  li.addEventListener("click", () => {
    [...listItems].some((el) => {
      if (el.id === li.textContent) {
        el.classList.add("selected");
      } else {
        el.classList.remove("selected");
      }
    });

    sections.forEach((section) => {
      if (li.textContent === section.children[0].textContent) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});
