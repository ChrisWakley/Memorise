const runesArray = [
    {
        id: 1,
        pair: 1,
        name: "Fire rune",
        imagesrc: "./images/fireRune.png"
    },
    {
        id: 2,
        pair: 1,
        name: "Fire rune",
        imagesrc: "./images/fireRune.png"
    },
    {
        id: 3,
        pair: 2,
        name: "Water rune",
        imagesrc: "./images/waterRune.png"
    },
    {
        id: 4,
        pair: 2,
        name: "Water rune",
        imagesrc: "./images/waterRune.png"
    },
    {
        id: 5,
        pair: 3,
        name: "Air rune",
        imagesrc: "./images/airRune.png"
    },
    {
        id: 6,
        pair: 3,
        name: "Air rune",
        imagesrc: "./images/airRune.png"
    },
    {
        id: 7,
        pair: 4,
        name: "Earth rune",
        imagesrc: "./images/earthRune.png"
    },
    {
        id: 8,
        pair: 4,
        name: "Earth rune",
        imagesrc: "./images/earthRune.png"
    },
    {
        id: 9,
        pair: 5,
        name: "Nature rune",
        imagesrc: "./images/natureRune.png"
    },
    {
        id: 10,
        pair: 5,
        name: "Nature rune",
        imagesrc: "./images/natureRune.png"
    },
    {
        id: 11,
        pair: 6,
        name: "Body rune",
        imagesrc: "./images/bodyRune.png"
    },
    {
        id: 12,
        pair: 6,
        name: "Body rune",
        imagesrc: "./images/bodyRune.png"
    },
    {
        id: 13,
        pair: 7,
        name: "Death rune",
        imagesrc: "./images/deathRune.png"
    },
    {
        id: 14,
        pair: 7,
        name: "Death rune",
        imagesrc: "./images/deathRune.png"
    },
    {
        id: 15,
        pair: 8,
        name: "Chaos rune",
        imagesrc: "./images/chaosRune.png"
    },
    {
        id: 16,
        pair: 8,
        name: "Chaos rune",
        imagesrc: "./images/chaosRune.png"
    },
    {
        id: 17,
        pair: 9,
        name: "Blood rune",
        imagesrc: "./images/bloodRune.png"
    },
    {
        id: 18,
        pair: 9,
        name: "Blood rune",
        imagesrc: "./images/bloodRune.png"
    },
    {
        id: 19,
        pair: 10,
        name: "Cosmic rune",
        imagesrc: "./images/cosmicRune.png"
    },
    {
        id: 20,
        pair: 10,
        name: "Cosmic rune",
        imagesrc: "./images/cosmicRune.png"
    },
    {
        id: 21,
        pair: 11,
        name: "Law rune",
        imagesrc: "./images/lawRune.png"
    },
    {
        id: 22,
        pair: 11,
        name: "Law rune",
        imagesrc: "./images/lawRune.png"
    },
    {
        id: 23,
        pair: 12,
        name: "Soul rune",
        imagesrc: "./images/soulRune.png"
    },
    {
        id: 24,
        pair: 12,
        name: "Soul rune",
        imagesrc: "./images/soulRune.png"
    },
    ]

    const gameContainer = document.querySelector(".game__container");
    const showCards = () => {
        runesArray.forEach((runes) => {
            gameContainer.innerHTML +=
            `<div class ="card">
                <img src="${runes.imagesrc}" class="card__image">
                <div class="card__content">${(runes.name)}</div>
            </div>`;
        })
    };
showCards(runesArray);
// console.log(runes);
    // const images = document.querySelector(".imageTesting")
    // images.src = "./images/fireRune.png"