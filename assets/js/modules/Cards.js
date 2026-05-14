import Service from "./Service.js";
import Game from "./Game.js";

export default class Cards {
  #containerElem;
  constructor(containerId) {
    this.#containerElem = document.getElementById(containerId);
    this.cards = [];
  }

  loadGames(gamesData) {
    this.cards = gamesData.map((data) => new Game(data));
  }

  
renderCards() {
        this.#containerElem.innerHTML = "";

        this.cards.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${game.getImagePath()}" alt="${game.getTitle()}">
                <h3>${game.getTitle()}</h3>
                <p>${game.getShortText()}</p>
                <button class="details-btn">Bővebb leírás</button>
            `;

            //eseményt küldünk
            card.querySelector(".details-btn").addEventListener("click", () => {
                this.dispatchDetailsEvent(game, card);
            });

            this.#containerElem.appendChild(card);
        });
    }

  //fejlesztésre szorulo rész!!!!

  
 dispatchDetailsEvent(game, cardElement) {
        const event = new CustomEvent("showGameDetails", {
            detail: {
                game: game,
                cardElement: cardElement
            }
        });

        document.dispatchEvent(event);
    }

}

