// import { runesArray } from "./runes.js";

// console.log(runesArray);
const gameContainer = document.querySelector(".game__container");
const cards = Array.from(document.querySelectorAll(".card"));
const startGame = document.querySelector(".pannel__button--start");
const resetGame = document.querySelector(".pannel__button--reset");
const timerRef = document.querySelector('.pannel__timer');
// let cardOne, cardTwo;
let [seconds,minutes] = [0,0];
let int = null;
//FIX CLOCK
const setDeck = (e) => {
    gameContainer.classList.remove("disable");
    // if(int !== null) {
    //     clearInterval(int);
    //     timerRef.innerHTML = '00 : 00';
    // }
};
const displayTimer = () => {
    int = setInterval(displayTimer, 1);
    seconds+=1;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }
    let m = minutes < 10 ? "0" : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerRef.innerHTML = `${m} : ${s}`;
};
startGame.addEventListener("click", setDeck, displayTimer);

//THIS SHUFFLES THE CARDS ON PAGE LOAD AND ON START CLICK.
//REMOVES FLIPCARD CLASS AS WELL. REMOVE DISABLED CARDS.
const shuffle = (e) => {
    gameContainer.classList.add("disable");
    cards.forEach((card) => {
        card.classList.remove('flipCard', 'disable');
    });
    const children = [...gameContainer.children];
    let currentIndex = children.length, temporaryValue, randomIndex;
    while (0!== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = children[currentIndex];
        children[currentIndex] = children[randomIndex];
        children[randomIndex] = temporaryValue;
    }
    gameContainer.innerHTML=""
    children.forEach(child => gameContainer.append(child))
};
shuffle();
const setTimer = () => {
    if(int !== null) {
        clearInterval(int);
        timerRef.innerHTML = '00 : 00';
    }
};
resetGame.addEventListener("click", shuffle, setTimer);


// const showCards = () => {
//     runesArray.forEach((runes) => {
//         gameContainer.innerHTML +=
//         `<div class= "card">
//             <div class= "card__front">
//                 <img src="${runes.imagesrcfront}" class= "card__imagefront">
//                 <div class= "card__content">${(runes.name)}</div>
//                 </div>
//             <div class= "card__back">
//                 <img src="${runes.imagesrcback}" class= "card__imageback">
//                 </div>
//             </div>`;
//     })
// };
// showCards(runesArray);

// const flipCard = (e) => {
//     e.target.classList.toggle("flipCard");
//     console.log(e.target);
//     e.preventDefault()
// };

// for(let i = 0; i < cards.length; i++){
//     cards[i].addEventListener("click", flipCard);
// }

////THIS FLIPS THE CARD OVER AND DISABLES FURTHER INTERRACTION.

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle('flipCard');
    });
});
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle('disable');
    });
});
