// import { runesArray } from "./runes.js";

// console.log(runesArray);
const gameContainer = document.querySelector(".game__container");
const cards = Array.from(document.querySelectorAll(".card"));
const startGame = document.querySelector(".pannel__button--start");
const resetGame = document.querySelector(".pannel__button--reset");
const timerRef = document.querySelector(".pannel__timer");
const congrats = document.querySelector(".congrats");

let m;
let s;
let ms;
let [milliseconds, seconds, minutes] = [0, 0, 0];
let int = null;
let pairs = [];
let selectedCards = [];
let leng = selectedCards.Array.length;
//CLOCK RUNS BUT NOT STABLE..
const setDeck = (e) => {
    gameContainer.classList.remove("disable");
    // if(int !== null) {
    //     clearInterval(int);
    //     timerRef.innerHTML = '00 : 00';
    // }
};
const displayTimer = (e) => {
    int = setInterval(displayTimer, 10)
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
    }}
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
        if (milliseconds < 10) {
            ms = "00" + milliseconds
        } else if (milliseconds < 100) {
            ms = "0" + milliseconds
        } else {
            ms = milliseconds
        }
    timerRef.innerHTML = `${m} : ${s} : ${ms}`;
};


const cardSelected = () => {
    selectedCards.push(this);
    console.log(selectedCards);
    if (selectedCards[0] === selectedCards[1]) {
        matchedPairs();
    } else {
        noMatch();
    }
        if(leng === 2) {
            gameContainer.classList.add('disable');
        };
}

const matchedPairs = () => {
    selectedCards[0].classList.add("match");
    selectedCards[1].classList.add("match");
    pairs.append(selectedCards);
    console.log(pairs);
    selectedCards = [];
    gameContainer.classList.remove('disable');
}

const noMatch = () => {
    setTimeout(() => {
        selectedCards[0].classlist.add("shake");
        selectedCards[1].classlist.add("shake");
    }, 2000);
    setTimeout(() => {
        selectedCards[0].classList.remove("shake", "disable");
        selectedCards[1].classList.remove("shake", "disable");
        gameContainer.classList.remove('disable');
    }, 2000);
}

const gameWin = () => {
    if (matchedPairs.length == 20) {
        congrats.classList.remove("congrats");
        congrats.classList.add("visible");
    }
};

//THIS SHUFFLES THE CARDS ON PAGE LOAD AND ON START CLICK.
//REMOVES FLIPCARD CLASS AS WELL.
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
        ms = 0;
        s = 0;
        m = 0;
    }
    timerRef.innerHTML = '00 : 00 : 000 ';
};
resetGame.addEventListener("click", (e) => {
    shuffle(e);
    setTimer(e);
});
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
cards.forEach((card) => {
    card.addEventListener("click", cardSelected)
    
});
startGame.addEventListener("click", (e) => {
    setDeck(e);
    displayTimer(e);
});