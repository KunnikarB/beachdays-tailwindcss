const heroParallax = () => {
  // Disable on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const images = document.querySelectorAll('.parallax');
  const offset = 400; 

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    images.forEach((img) => {
      const speed = Number(img.dataset.parallaxPosition) || 0;

      const x = ((mouseX - centerX) * speed) / offset;
      const y = ((mouseY - centerY) * speed) / offset;

      img.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
};

heroParallax();
