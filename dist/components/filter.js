class Filter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="container-fluid">
        <h4 class="label">Contents</h4>
        <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Filters</button>
        <div id="demo" class="collapse">
          <div class="">
            <br>
            <form>
              <div class=" container">
                <div class=row>
                  <label for="cars">Sort by Knowledge Area:</label> &nbsp;
                  <select class="form-control" onchange="kareaChange()" name="kareas" id="kareas">
                    <option value="all" selected>All</option>
                    <hr>
                    <option value="Construction">Software Construction</option>
                    <option value="Design">Software Design</option>
                    <option value="Testing">Writing Unit Tests</option>
                    <option value="Requirements">Software Requirements</option>
                    <option value="Quality">Software Quality</option>
                    <option value="Configuration">Software Configuration Management</option>
                    <option value="Process">Software Process & Life-Cycle</option>
                    <option value="Maintanance">Software Maintenance Planning</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr>
      </div>`
    }
}

customElements.define("skill-filter", Filter);
