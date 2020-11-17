class AppContainer {

    units_url = "http://localhost:3000/units"


    getUnits() {
        fetch(this.units_url)
        .then(resp => resp.json())
        .then(units => this.renderUnits(units))
        .catch(err => alert(err))
    }

    renderUnits(units) {
        const championsContainer = document.querySelector(".champions")
        championsContainer.innerHTML = ""
        units.forEach(unit => {
            championsContainer.innerHTML += `<img src="src/images/${unit.image}" class="unit-avatar" id="unit_${unit.id}" />`
        })
    }

    bindEventListeners() {
        document.querySelector(".champion-wrapper").addEventListener("click", function(e) {
            e.target.classList.toggle("red-border")
        })
    }

    hexEventListener() {
        document.querySelector(".builder-bonus.builder-board").addEventListener("click", function(e) {
            debugger
            e.target
        })
    }




}