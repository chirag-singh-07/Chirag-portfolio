const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollup);

const sections = document.querySelectorAll("section");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav__link[href*="${sectionId}"]`
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) {
        sectionsClass.classList.add("active-link");
      }
    } else {
      if (sectionsClass) {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //   reset: true,
});

sr.reveal(".perfil, .contact__form");
sr.reveal(".info", { origin: "left", delay: 800 });
sr.reveal(".skills", { origin: "left", delay: 800 });
sr.reveal(".about", { origin: "right", delay: 1200 });
sr.reveal(".projects__card, .services__card, .timeline-item", {
  interval: 100,
});
