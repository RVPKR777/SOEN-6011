class NavBar extends HTMLElement {
    constructor() {
        super();
        this.renderBookmarkList = false;
        this.renderDarkLightMode = false;
    }

    connectedCallback() {
        if (typeof (Storage) !== undefined) {
            this.renderDarkLightMode = true;
            this.renderBookmarkList = true;
        }

        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="${this.getAttribute("logoPath")}" width="30" height="30" alt="Sestopia Logo">
        </a>
        <a class="navbar-brand" href="../index.html">Sestopia</a>
    
        ${this.getAttribute("collapse") ? `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>` : ""}
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
                       
          ${this.getAttribute("renderSkillsDropdown") ? `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" href="#"
            aria-expanded="false">Skills</a>
          <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="../infoPages/apiProgramming1.html">API Programming</a>
            <a class="dropdown-item" href="../infoPages/interfaceDesign1.html">Interface Design</a>
            <a class="dropdown-item" href="../infoPages/Software_testing1.html">Writing Unit Tests</a>
            <a class="dropdown-item" href="../infoPages/Elicitation1.html">Software Requirements</a>
            <a class="dropdown-item" href="../infoPages/QualityAssurance.html">Software Quality</a>
            <a class="dropdown-item" href="../infoPages/ConfigManagement1.html">Software Configuration Management</a>
            <a class="dropdown-item" href="../infoPages/SDLC_Implementation_1.html">Software Process & Life-Cycle</a>
            <a class="dropdown-item" href="../infoPages/maintenance1.html">Software Maintenance Planning</a>
          </div>
        </li>` : ""}
        ${this.renderBookmarkList ? `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" href="#"
            aria-expanded="false" onclick="renderBookmarkList()">Bookmarks</a>
          <div id="bookmarkDropdown" class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          </div>
        </li>` : ""}
        ${this.getAttribute("renderSearch") ? `<li class="nav-item">
        <form autocomplete="off" class="search form-inline my-2 my-lg-2">
        <div class="input-groupNavBar">
            <input aria-label="Search" class="form-control mr-xl-2" name="inputText" id="inputText" placeholder="Search" onkeyup="search()">
        </div>
        <ul id="myUL" class="results"></ul>
        </form>
        </li>` : ""}
          </ul>
          <ul class="navbar-nav">
          <a class="navbar-brand" href="../about.html">About Us</a>
          ${this.renderDarkLightMode ? `
          <label style="padding-right:1%; color :white" class="form-inline">Dark /Light</Label>   
          <input type="checkbox" id="day_night" onchange="myFunction()">
         ` : ""}
         </ul>
          
        </div>
      </nav>`
    }
}

customElements.define("nav-bar", NavBar);
