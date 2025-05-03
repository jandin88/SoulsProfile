import React, { useEffect } from 'react';

// Adiciona dinamicamente o script particles.js e inicia a animação
const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    const loadParticles = async () => {
      if (!(window as any).particlesJS) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.onload = () => {
          (window as any).particlesJS('particles-js', particleConfig);
        };
        document.body.appendChild(script);
      } else {
        (window as any).particlesJS('particles-js', particleConfig);
      }
    };

    const particleConfig = {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          straight: false,
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: 'black',
      }}
    />
  );
};

export default ParticlesBackground;
