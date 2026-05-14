import Navigation from "./modules/navigation/Navigation.js";
import Cards from "./modules/card/Cards.js";
import Service from "./modules/service/Service.js";

class AppController {
    constructor() {
        this.currentPage = window.location.pathname;
        this.navigation = new Navigation();
        this.cards = null;
    }

    start() {
        this.navigation.render();
        this.navigation.handleClick();

        if (this.currentPage.includes("digitalis")) {
            this.initCards("assets/js/data/digitalis.json");
        }

        if (this.currentPage.includes("tarsas")) {
            this.initCards("assets/js/data/tarsas.json");
        }
    }

    initCards(jsonPath) {
        this.cards = new Cards("cards-container");

        Service.fetchJSON(jsonPath)
            .then(data => {
                this.cards.loadGames(data);
                this.cards.renderCards();
            });
    }
}

new AppController().start();
``