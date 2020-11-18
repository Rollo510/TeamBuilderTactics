class AppContainer {

    
    units_url = "http://localhost:3000/units"
    board_units_url = "http://localhost:3000/board_units"


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
        let elements = document.getElementsByClassName("hex");
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function() { 
                if (document.querySelectorAll(".unit-avatar.red-border").length === 1 && !this.querySelector(".hexTop").classList.contains("hide-hex")) {
                    const championImage = document.querySelector(".unit-avatar.red-border").src.slice(52)
                    this.querySelector(".hexTop").classList.toggle("hide-hex")
                    this.querySelector(".hexBottom").classList.toggle("hide-hex")
                    this.innerHTML += `<img src="${championImage}">`
                    this.id = document.querySelector(".unit-avatar.red-border").id
                }
            })
        }
    }


    // createNewBoardUnits() {
    //     document.getElementById("board-unit-form").addEventListener('submit', function (e) {
    //         e.preventDefault()
    //         fetch(this.board_units_url, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json"
    //             },
    //             body: JSON.stringify({
    //                 unit_id: `${unitId}`,
    //                 board_id: `${this.board.id}`,
    //                 hex: 
    //             })
    //         })
    //     })
    // }


    // clear board
    // make sure no duplicate units?


}