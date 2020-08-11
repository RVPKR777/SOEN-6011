class BookmarkButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", () => this.manage());
    }

    manage() {
        manageBookmark(this.getAttribute("bookmarkKey"), this.getAttribute("bookmarkLink"), this.getAttribute("bookmarkName"), this.getAttribute("buttonId"));
    }

    connectedCallback() {
        //always use this.getAttribute() in connectedCallback as the attributes might not have been defined yet in constructor.
        if (typeof (Storage) !== undefined) {
            if (localStorage.getItem(this.getAttribute("bookmarkKey"))) {
                this.value = "Remove Bookmark";
            } else {
                this.value = "Add Bookmark";
            }
            this.innerHTML = `<input type="button" value="${this.value}" id=${this.getAttribute("buttonId")}>`;
        } else {
            this.innerHTML = ``;
        }
    }
}

customElements.define("bookmark-button", BookmarkButton);
