class BookmarkButton extends HTMLElement {
    connectedCallback() {
        //always use this.getAttribute() in connectedCallback as the attributes might not have been defined yet in constructor.
        if (typeof (Storage) !== undefined) {
            if (localStorage.getItem(this.getAttribute("bookmarkKey"))) {
                this.value = "Remove Bookmark";
            } else {
                this.value = "Add Bookmark";
            }
            this.innerHTML = `<input type="button" value="${this.value}" id=${this.getAttribute("buttonId")} onclick="manageBookmark(${this.getAttribute("bookmarkKey")},
            ${this.getAttribute("bookmarkLink")}, ${this.getAttribute("bookmarkName")}, ${this.getAttribute("buttonId")})">`;
            // <button id="${this.getAttribute("buttonId")}"
            //         onclick="manageBookmark(${this.getAttribute("bookmarkKey")},${this.getAttribute("bookmarkLink")},
            //                 ${this.getAttribute("bookmarkName")}, ${this.getAttribute("buttonId")})">${this.value}</button>
        } else {
            this.innerHTML = ``;
        }
    }
}

customElements.define("bookmark-button", BookmarkButton);
