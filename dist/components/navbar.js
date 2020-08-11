class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src="${this.getAttribute("logoPath")}" width="30" height="30" alt="Sestopia Logo">
        </a>
        <a class="navbar-brand" href="#">Sestopia</a>
    
        ${this.getAttribute("collapse") ? `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>` : ""}
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            ${this.getAttribute("renderHome") ? `<li class="nav-item active">
              <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
            </li>` : ""}
                       
          ${this.getAttribute("renderSkillsDropdown") ? `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Skills</a>
          <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="../infoPages/apiProgramming1.html">API Programming</a>
            <a class="dropdown-item" href="../infoPages/interfaceDesign1.html">Interface Design</a>
            <a class="dropdown-item" href="../infoPages/Software_testing1.html">Writing Unit Tests</a>
            <a class="dropdown-item" href="#">Software Requirements</a>
            <a class="dropdown-item" href="../infoPages/QualityAssurance.html">Software Quality</a>
            <a class="dropdown-item" href="../infoPages/ConfigManagement1.html">Software Configuration Management</a>
            <a class="dropdown-item" href="../infoPages/SDLC_Implementation_1.html">Software Process & Life-Cycle</a>
            <a class="dropdown-item" href="#">Software Maintenance Planning</a>
          </div>
        </li>` : ""}
        ${this.getAttribute("renderSearch") ? `<li class="nav-item">
        <form autocomplete="off" class="search">
        <div class="input-groupNavBar">
            <input aria-label="Search" class="form-control" name="inputText" id="inputText" placeholder="Search" onkeyup="search()">
        </div>
        <ul id="myUL" class="results"></ul>
        </form>
        </li>` : ""}
          </ul>
          <p style="padding-top:1%;padding-right:1%; color :white">Dark Mode/Light Mode</p><input type="checkbox" id="day_night" onchange="myFunction()">
        </div>
      </nav>`
    }
}

customElements.define("nav-bar", NavBar);
