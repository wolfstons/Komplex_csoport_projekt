export default class Game {
    
    constructor({ id, title, imagePath, shortDescription, longDescription, type }) {
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.type = type;
    }

    getShortText() {
        return this.shortDescription;
    }

    getDetails() {
        return this.longDescription;
    }
}