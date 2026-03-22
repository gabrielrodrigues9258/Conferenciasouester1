document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach((item) => observer.observe(item));

  const hero = document.querySelector('.hero');
  const heroBadge = document.querySelector('.hero-badge');
  const heroMain = document.querySelector('.hero-main');

  if (hero && heroBadge && heroMain) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5);
      const y = ((e.clientY - rect.top) / rect.height - 0.5);

      heroBadge.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      heroMain.style.transform = `rotateY(${x * 2.2}deg) rotateX(${y * -2.2}deg)`;
    });

    hero.addEventListener('mouseleave', () => {
      heroBadge.style.transform = 'translate(0, 0)';
      heroMain.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }
});
