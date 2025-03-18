
// Utility function to apply fade-in animations to elements as they enter the viewport
export const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      } else {
        revealElements[i].classList.remove('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check to reveal elements that are already visible
  revealOnScroll();
  
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
};

// Utility function to handle image loading with blur effect
export const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.target as HTMLImageElement;
  img.classList.remove('img-loading');
  img.classList.add('img-loaded');
};

// Staggered animation for list items
export const staggeredAnimationClasses = (index: number, total: number) => {
  // Calculate a delay based on index
  const delay = Math.min(index * 0.05, 0.5); // Cap maximum delay at 0.5s
  
  return {
    className: `animate-slide-up opacity-0`,
    style: { 
      animationDelay: `${delay}s`,
      animationFillMode: 'forwards'
    }
  };
};

// Page transition animation
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] }
};
