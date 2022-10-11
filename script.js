// import { runesArray } from "./runes.js";

// console.log(runesArray);
const gameContainer = document.querySelector(".game__container");
const cards = Array.from(document.querySelectorAll(".card"));
const startGame = document.querySelector(".pannel__button--start");
const resetGame = document.querySelector(".pannel__button--reset");
// let cardOne, cardTwo;
// let disableDeck = false;

//THIS SHUFFLES THE CARDS ON PAGE LOAD AND ON START CLICK.
//REMOVES FLIPCARD CLASS AS WELL.
const shuffle = (e) => {
    cards.forEach((card) => {
        card.classList.remove('flipCard');
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
startGame.addEventListener("click", shuffle);


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

////THIS WORKS!

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle('flipCard');
    });
});
// cards.forEach((card) => {
//     card.addEventListener("click", () => {
//         card.classList.toggle('hiddenFront');
//     });
// });
// cards.forEach((card) => {
//     card.addEventListener("click", flipCard)
// });