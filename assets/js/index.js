import AppController from "../js/modules/AppController.js"


//eltároljuk a oldal utvonalát
const page = window.location.pathname;


//utvonal alapján idditjuk az init fügvényt
if (page.includes("digitalis")) {
  initCards("assets/js/data/digitalis.json");
}

if (page.includes("tarsas")) {
  initCards("assets/js/data/tarsas.json");
}



//init call back fugveny
function initCards(jsonPath) {
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => renderCards(data));
}




//ki rakjuk a kártyákat a jsonbol jövő adatokbol
function renderCards(games) {
  const container = document.getElementById("cards-container");
  if (!container) return;
//megjelenítjük
  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${game.imagePath}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.shortDescription}</p>
            <button>Részletek</button>
        `;

    container.appendChild(card);
  });
}

const app=new AppController(page)
app.start();

/*document.addEventListener("showGameDetails", (event) => {
    app.handleShowDetails(event.detail.game, event.detail.cardElement);
});*/