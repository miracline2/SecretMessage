// 💌 Affirmation logic
const affirmations = [
   "You’re my forever, and I’m proud of your every step  💞",
    "I admire your heart and your unshakable determination 🌟",
    "Your passion and drive make me fall in love with you all over again  💘",
    "You make my world brighter with your love and strength 💖",
    "You are my heart’s home 🏡",
    "You’re everything I ever dreamed of and more ✨",
    "I Love You More Vishnu 😘"
  ];
  
  function showAffirmation() {
    const text = affirmations[Math.floor(Math.random() * affirmations.length)];
    const affirmationEl = document.getElementById("affirmation");
    affirmationEl.style.opacity = 0; // restart animation
    setTimeout(() => {
      affirmationEl.textContent = text;
      affirmationEl.style.animation = "fadeIn 0.6s ease forwards";
    }, 100);
  }
  
  // 💗 Floating hearts background
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 7 + "s";
    heart.textContent = "💗";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
  
  setInterval(createHeart, 800);
  