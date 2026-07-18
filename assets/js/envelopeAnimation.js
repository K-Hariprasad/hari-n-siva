// envelopeAnimation.js
// Handles the interactive envelope opening sequence for the preloader.

document.addEventListener('DOMContentLoaded', function () {
  var preloader = document.getElementById('invitation-envelope');
  var wrapper = document.querySelector('#invitation-envelope .wrapper');
  if (!preloader || !wrapper) return;

  var isAnimating = false;

  // After CTA entrance animation finishes (~2.1s), switch to pulse mode
  var ctaEl = document.querySelector('.click-to-open');
  if (ctaEl) {
    setTimeout(function () {
      ctaEl.classList.add('animate-pulse');
    }, 2200);
  }

  preloader.addEventListener('click', function () {
    if (wrapper.classList.contains('opened') || isAnimating) return;
    isAnimating = true;

    // Stop the floating animation and lock the wrapper visible
    wrapper.style.animation = 'none';
    wrapper.style.opacity = '1';
    wrapper.style.transform = 'scale(1)';

    // Apply the opened class to initiate the css transitions
    wrapper.classList.add('opened');

    // Play a subtle paper slide sound effect
    var audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav');
    audio.volume = 0.4;
    audio.play().catch(function () {});

    // Hide instruction text
    if (ctaEl) {
      ctaEl.style.transition = 'opacity 0.3s ease';
      ctaEl.style.opacity = '0';
    }

    // Fade out preloader to enter site
    setTimeout(function () {
      var preloader = document.getElementById('invitation-envelope');
      if (preloader) {
        preloader.classList.add('fade-out');
      }
      setTimeout(function () {
        // Remove scroll-lock classes
        document.documentElement.classList.remove('scroll-lock');
        document.body.classList.remove('scroll-lock');
        
        // Force inline resets to guarantee page scroll is restored
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
        document.body.style.height = 'auto';
        
        if (preloader) preloader.remove();
      }, 800);
    }, 2200); // Wait for open & letter slide up animation (takes ~2s)
  });
});
