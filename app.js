particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,  // Number of particles
        density: {
          enable: true,
          value_area: 400  // Adjust the density of particles
        },
      },
      opacity: {
        value: 0.3 // Adjust the opacity of the particles
      },
      color: {
        value: '#24343d'  // Color of the particles
      },
      shape: {
        type: 'polygon',  // Shape of the particles (circle, edge, triangle, polygon, etc.)
      },
      size: {
        value: 3,  // Size of the particles
        random: true,  // Enable random size
      },
      move: {
        enable: true,
        speed: 4  // Speed of particle movement
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onclick: {
          enable: true,
          mode: 'repulse'
        },
      },
    },
    line_linked: {
        enable: true,
        distance: 150,
        color: "#24343d",
        opacity: 0.4,
        width: 1
      }
  });