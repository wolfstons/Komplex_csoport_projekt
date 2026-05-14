import Service from "./Service.js";
import Game from "./Game.js";

export default class Cards {
    
    #containerElem
    constructor(containerId) {
        this.#containerElem = document.getElementById(containerId);
        this.cards = [];
    }

    loadGames(gamesData) {
        this.cards = gamesData.map(data => new Game(data));
    }

    renderCards() {
        if (!this.#containerElem) return;

        this.#containerElem.innerHTML = "";

        this.cards.forEach(game => {
            const card = Service.createElement("div", "card");

            card.innerHTML = `
                <img src="${game.imagePath}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.getShortText()}</p>
                <button data-id="${game.id}">Bővebb leírás</button>
            `;

            card.querySelector("button")
                .addEventListener("click", () => this.handleDetailsClick(game));

            this.#containerElem.appendChild(card);
        });
    }

    handleDetailsClick(game) {
        alert(game.getDetails());
    }
}