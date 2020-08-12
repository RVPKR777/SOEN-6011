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
                this.innerHTML = `<input type="button" class="btn btn-warning" value="${this.value}" id=${this.getAttribute("buttonId")}>`;
            } else {
                this.value = "Add Bookmark";
                this.innerHTML = `<input type="button" class="btn btn-link" value="${this.value}" id=${this.getAttribute("buttonId")}>`;
            }
            this.innerHTML += `<hr>`;
        } else {
            this.innerHTML = ``;
        }
    }
}

customElements.define("bookmark-button", BookmarkButton);
