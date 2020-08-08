class SkillCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //always use this.getAttribute() in connectedCallback as the attributes might not have been defined yet in constructor.
        this.innerHTML = `<div class="col-xs-3 card">
        <div class="skillCard" data-toggle="tooltip" data-placement="top" title=${this.getAttribute("title")}>
          <div class="card-header">${this.getAttribute("cardHeader")}</div>
          <img class="card-img-top" src="${this.getAttribute("skillLogoPath")}" alt="Card image">
          <div class="card-body"><br>
            <h6 class="card-title">${this.getAttribute("cardTitle")}</b></h6>
            <p>1 line Detail</p>
          </div>
          <div class="card-footer">
            <a href=${this.getAttribute("skillPagePath")} class="btn btn-primary">Click to see more!</a>
          </div>
        </div>
      </div>`;
    }
}
customElements.define("skill-card", SkillCard);