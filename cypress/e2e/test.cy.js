const oldal = "https://wolfstons.github.io/Komplex_csoport_projekt/digitalis.html";
const url = "assets/js/data/digitalis.json";

/* helper függvény – termékek betöltése */
function betoltJatekok() {
  cy.intercept("GET", url).as("games");
  cy.visit(oldal);
}

describe("Digitális játékok – E2E tesztek", () => {

  beforeEach(() => {
    betoltJatekok();
  });

  it("Megjelennek a játék kártyák", () => {
    cy.get(".card")
      .should("have.length.greaterThan", 0);
  });

  it("Bővebb leírás megjelenik kattintásra", () => {
    cy.get(".card").first().within(() => {
      cy.contains("Bővebb leírás").click();
      cy.get(".long-description").should("be.visible");
    });
  });

  it("Bővebb leírás eltűnik újra kattintásra (toggle)", () => {
    cy.get(".card").first().within(() => {
      cy.contains("Bővebb leírás").click();
      cy.contains("Bővebb leírás").click();
      cy.get(".long-description").should("not.exist");
    });
  });

});
``