let noBtn = document.querySelector(".nobtn");
let yesBtn = document.querySelector(".yesBtn");
let gif1 = document.querySelector(".gif-1");
let titleCard = document.querySelector("#title-card");
let card = document.querySelector(".card");  // Get the card element
let gif2 = document.querySelector("#gif2");
let gif3 = document.querySelector("#gif3");
let gif4 = document.querySelector("#gif4");
let gif5 = document.querySelector("#gif5");
let gif6 = document.querySelector("#gif6");
let gif7= document.querySelector("#gif7");
const rotation = [30, 60, 90, 120];

noBtn.addEventListener("mouseover", () => {
    let X = Math.random() * 300 - 150;
    let Y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${X}px, ${Y}px)`;
});

const yesBtnClicked = () => {
    gif1.src = "pictures/dancing-cat-jump-cat.webp";
    titleCard.textContent = "Love youuu so much ganing<3!!!";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    let audio = new Audio("music/Yellow-Coldplay.mp3");
    audio.play();

    // Add glowing effect to the card
    card.classList.add("glow-effect");
   
     gif2.style.display = "block";
     gif3.style.display = "block";
     gif4.style.display = "block";
     gif5.style.display = "block";
     gif6.style.display = "block";
     gif7.style.display = "block";

   
};
yesBtn.addEventListener("click", yesBtnClicked);
