// Efek animasi saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".gunung-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
