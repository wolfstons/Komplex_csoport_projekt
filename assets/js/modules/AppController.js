import Navigation from "./Navigation.js";
import Cards from "./Cards.js";
import Service from "./Service.js";

export default class AppController {
  #currentPage;
  constructor(currentPage) {
    this.#currentPage = currentPage;
    this.navigation = new Navigation();
    this.cards = null;
  }

  start() {

    //feliratkozunk az eseményre, hogy megjelenítsük a részletes leírást
    document.addEventListener("showGameDetails", (event) => {
      this.showDetails(event.detail.game, event.detail.cardElement);
    });

    this.navigation.render();
    this.navigation.handleClick();

    if (this.#currentPage.includes("digitalis")) {
      this.initCards("assets/js/data/digitalis.json");
    }

    if (this.#currentPage.includes("tarsas")) {
      this.initCards("assets/js/data/tarsas.json");
    }
  }

  initCards(jsonPath) {
    this.cards = new Cards("cards-container");

    Service.fetchJSON(jsonPath).then((data) => {
      this.cards.loadGames(data);
      this.cards.renderCards();
    });
  }

  showDetails(game, cardElement) {
    // ha már van részletes leírás, eltüntetjük (toggle)
    const existing = cardElement.querySelector(".long-description");
    if (existing) {
      existing.remove();
      return;
    }

    const details = document.createElement("div");
    details.classList.add("long-description");
    details.textContent = game.getDetails();

    cardElement.appendChild(details);
  }
}

