const hamburger = document.querySelector(".hamburger") as HTMLElement;
const navLinks = document.querySelector(".nav-links") as HTMLElement;

if (hamburger && navLinks) {
  hamburger.setAttribute("aria-expanded", "false");
  navLinks.setAttribute("aria-hidden", "true");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.classList.toggle("expanded");
    navLinks.classList.toggle("expanded");

    hamburger.setAttribute("aria-expanded", expanded.toString());
    navLinks.setAttribute("aria-hidden", (!expanded).toString());
  });
}

// accessability for keyboard navigation
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});
