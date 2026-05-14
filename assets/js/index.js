// assets/js/index.js

const page = window.location.pathname;

if (page.includes("digitalis")) {
  initCards("assets/js/data/digitalis.json");
}

if (page.includes("tarsas")) {
  initCards("assets/js/data/tarsas.json");
}

function initCards(jsonPath) {
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => renderCards(data));
}

function renderCards(games) {
  const container = document.getElementById("cards-container");
  if (!container) return;

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
