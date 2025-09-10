// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Section fade-in animation on scroll
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
  });

  // Hover effects on project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
      });
  });

  // Click-to-copy email
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
      emailLink.addEventListener('click', function(e) {
          const email = this.href.replace('mailto:', '');
          navigator.clipboard.writeText(email).then(() => {
              const tooltip = document.createElement('div');
              tooltip.textContent = 'Email copied to clipboard!';
              tooltip.style.cssText = `
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  background: #4F46E5;
                  color: white;
                  padding: 10px 15px;
                  border-radius: 5px;
                  z-index: 1000;
                  font-size: 14px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              `;
              document.body.appendChild(tooltip);
              setTimeout(() => tooltip.remove(), 2000);
          });
      });
  }

  // Hover effect on skills
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
      tag.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px) scale(1.05)';
      });
      
      tag.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
      });
  });

  // Print button
  const printButton = document.createElement('button');
  printButton.innerHTML = '<i class="fas fa-print"></i> Print CV';
  printButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #4F46E5;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      transition: all 0.3s ease;
  `;
  printButton.addEventListener('mouseenter', () => {
      printButton.style.transform = 'translateY(-2px)';
  });
  printButton.addEventListener('mouseleave', () => {
      printButton.style.transform = 'translateY(0)';
  });
  printButton.addEventListener('click', () => window.print());
  document.body.appendChild(printButton);

  // Theme toggle
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 80px;
      background: #4F46E5;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      transition: all 0.3s ease;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
  `;
  let isDarkMode = false;
  themeToggle.addEventListener('click', function() {
      isDarkMode = !isDarkMode;
      const body = document.body;
      const container = document.querySelector('.container');
      
      if (isDarkMode) {
          body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
          container.style.background = '#1f2937';
          container.style.color = '#f9fafb';
          this.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
          body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
          container.style.background = 'white';
          container.style.color = '#333';
          this.innerHTML = '<i class="fas fa-moon"></i>';
      }
  });
  document.body.appendChild(themeToggle);

  // Scroll to top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #4F46E5;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      transition: all 0.3s ease;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
  `;
  scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          scrollToTopButton.style.opacity = '1';
          scrollToTopButton.style.visibility = 'visible';
      } else {
          scrollToTopButton.style.opacity = '0';
          scrollToTopButton.style.visibility = 'hidden';
      }
  });
  document.body.appendChild(scrollToTopButton);
});

// Page load animation
window.addEventListener('load', function() {
  const container = document.querySelector('.container');
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';
  setTimeout(() => {
      container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
  }, 100);
});
