import { runesArray } from "./runes.js";

console.log(runesArray);
const gameContainer = document.querySelector(".game__container");
const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;


const showCards = () => {
    runesArray.forEach((runes) => {
        gameContainer.innerHTML +=
        `<div class= "card">
            <div class= "card__front">
                <img src="${runes.imagesrcfront}" class= "card__imagefront">
                <div class= "card__content">${(runes.name)}</div>
                </div>
            <div class= "card__back">
                <img src="${runes.imagesrcback}" class= "card__imageback">
                </div>
            </div>`;
    })
};
showCards(runesArray);

const card = document.querySelector(".card");
const flipCard = () => {
    card.classList.toggle("flipCard");
}
card.addEventListener("click", flipCard);



// const flipCard = ({target:clickedCard}) => {
//     if(cardOne !== clickedCard && !disableDeck) {
//         clickedCard.classList.add(".flipCard");
//         if(!cardOne) {
//             return cardOne = clickedCard;
//         }
//         cardTwo = clickedCard;
//         disableDeck = true;
//         let getCardOnePair = (runesArray) => {
//             const cardPair = runesArray.map((runesArray) => {
//             return runesArray[0].id;
//             });
//             return cardPair;
//             }
//         }
// }



// console.log(cardTwo);
// const flipCard = () => {
//     cards.forEach (card => {
//         card.classList.toggle(".flipCard")
//         card.addEventListener("click", flipCard)
//     });
// }