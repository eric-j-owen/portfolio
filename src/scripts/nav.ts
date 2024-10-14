const hamburger = document.querySelector(".hamburger") as HTMLElement;
const navLinks = document.querySelector(".nav-links") as HTMLElement;

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("expanded");
    navLinks.classList.toggle("expanded");
  });
}

// accessability for keyboard navigation
hamburger?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});
