const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedElements.forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();