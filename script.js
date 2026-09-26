const navigationLinks = [...document.querySelectorAll('nav a')];
const sections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = () => {
  const currentSection = sections.findLast((section) => section.getBoundingClientRect().top <= 140);

  navigationLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection?.id}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
