// const heroParallax = () => {

//   // Select all elements with the class 'parallax'
//   const parallaxImages = document.querySelectorAll('.parallax');

//   // Define the parallax offset value / Speed
//   const parallaxOffset = 400;

//   // Function to handle the parallax effect on scroll
//   const parallaxEffect = (event) => {

//     parallaxImages.forEach(image => {

//       const imagePosition = image.dataset.parallaxPosition

//       // Calculate the new position for the image based on the mouse position and parallax offset
//       const xPos = (window.innerWidth - event.pageX * imagePosition) / parallaxOffset;

//       const yPos = (window.innerWidth - event.pageY * imagePosition) / parallaxOffset;

//       // Move the image based on the calculated positions
//       image.style.transform = `translateX(${xPos}px) translateY(${yPos}px)`;

//     });
//   }

//   // Event listener for scroll event
//   document.addEventListener('mousemove', parallaxEffect);

// };

//  heroParallax();

const heroParallax = () => {
  // Disable parallax on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const parallaxImages = document.querySelectorAll('.parallax');
  const parallaxOffset = 400;

  const parallaxEffect = (event) => {
    parallaxImages.forEach((image) => {
      const imagePosition = image.dataset.parallaxPosition;

      const xPos =
        (window.innerWidth - event.pageX * imagePosition) / parallaxOffset;
      const yPos =
        (window.innerHeight - event.pageY * imagePosition) / parallaxOffset;

      image.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
  };

  document.addEventListener('mousemove', parallaxEffect);
};

heroParallax();