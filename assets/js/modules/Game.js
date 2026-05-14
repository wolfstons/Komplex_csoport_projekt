export default class Game {
   //kárty osztálya  
    
    
    #id;
    #title;
    #imagePath;
    #shortDescription;
    #longDescription;
    #type;

    constructor({ id, title, imagePath, shortDescription, longDescription, type }) {
        this.#id = id;
        this.#title = title;
        this.#imagePath = imagePath;
        this.#shortDescription = shortDescription;
        this.#longDescription = longDescription;
        this.#type = type;
    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getImagePath() {
        return this.#imagePath;
    }

    getShortText() {
        return this.#shortDescription;
    }

    getDetails() {
        return this.#longDescription;
    }

    getType() {
        return this.#type;
    }
}