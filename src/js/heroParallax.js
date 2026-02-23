const heroParallax = () => {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const images = document.querySelectorAll('.parallax');
  const offset = 400;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  const animate = () => {
    images.forEach((img) => {
      const speed = img.dataset.parallaxPosition;
      const x = (window.innerWidth - mouseX * speed) / offset;
      const y = (window.innerHeight - mouseY * speed) / offset;

      img.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
};

heroParallax();
