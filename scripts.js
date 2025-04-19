const images = [
    "/projects/Random/p1.JPG",
    "/projects/Random/place1.JPG",
    "/projects/Random/p2.JPG",
    "/projects/Random/p3.JPG"
  ];
  
  let current = 0;
  const sliderImage = document.querySelector("#slider-image");
  
  function showSlide(index) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1;
    }, 300);
  }
  
  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }
  
  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }
  
  // تشغيل تلقائي
  setInterval(() => {
    nextSlide();
  }, 4000);
  
  // فيديو
  const video = document.getElementById("myVideo");
  const watchBtn = document.querySelector("#watch-btn");
  const overlayText = document.querySelector(".video-overlay-text");
  
  // Scroll auto-play
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.classList.add("active");
        video.play();
      } else {
        video.pause();
        video.classList.remove("active");
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(video);
  
  // Watch button click
  watchBtn.addEventListener("click", () => {
    overlayText.style.opacity = "0";
    video.style.opacity = 1;
    video.play();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.2; // تأخير بين الكروت
          entry.target.style.setProperty('--delay', `${delay}s`);
          entry.target.classList.add('reveal');
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  });

  