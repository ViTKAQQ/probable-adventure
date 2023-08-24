
const links = document.querySelectorAll('.scp-nav a');
const sections = document.querySelectorAll('.scp-content');


sections.forEach(section => {
    if (section.id !== 'about') {
        section.style.display = 'none';
    }
});


links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        sections.forEach(section => {
            section.style.display = 'none';
        });

       
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" задрот", " гмод дрочер", " типо программист", ];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


function adjustTextSize() {
  const textElements = document.querySelectorAll(".auto-resize-text");
  const screenWidth = window.innerWidth;
  
  // Измените эти значения в зависимости от ваших предпочтений
  const minFontSize = 1;
  const maxFontSize =7;
  
  textElements.forEach(element => {
    const fontSize = Math.max(
      minFontSize,
      Math.min(maxFontSize, screenWidth / 20) // Настройте делитель по вашему желанию
    );
    
    element.style.fontSize = fontSize + "px";
  });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = adjustTextSize;
window.onresize = adjustTextSize;