export default class Service {

    static createElement(tag, className = "") {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    }

    static fetchJSON(path) {
        return fetch(path).then(response => response.json());
    }
}