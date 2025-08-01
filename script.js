document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView 
({
    behavior: 'smooth'
});        
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("theme-Toggle");

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.checked = true;
}
    
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

     if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
     } else {
        localStorage.setItem("theme", "light");
     }
  });
  
console.log("Dark Mode Loaded.");
});

function showImage(latteType) {
   let images = document.querySelectorAll(".image-container img");
   images.forEach(img => img.style.display = "none");
   document.getElementById(latteType).style.display = "block";
}

let currentIndex = 0;
const cards = document.querySelectorAll('.card');

   cards.forEach(card => {
      const slides = card.querySelectorAll('.slide');
      setInterval(() => {
        slides[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % slides.length;
         
        slides[currentIndex].classList.add('active');
     }, 3000);
   });