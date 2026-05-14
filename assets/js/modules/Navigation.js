export default class Navigation {
    constructor() {
        this.menuItems = document.querySelectorAll("nav a");
        this.activePage = window.location.pathname;
    }

    render() {
        this.menuItems.forEach(item => {
            if (this.activePage.includes(item.getAttribute("href"))) {
                item.classList.add("active");
            }
        });
    }

    setActive(page) {
        this.activePage = page;
    }

    handleClick() {
        this.menuItems.forEach(item => {
            item.addEventListener("click", () => {
                this.setActive(item.getAttribute("href"));
            });
        });
    }
}