const units_url = "http://localhost:3000/units"
const board_units_url = "http://localhost:3000/board_units"
const boards_url = "http://localhost:3000/boards"
const show_url = "http://localhost:3000/boards/"

class AppContainer {


    resetBoard() {
        debugger
        const currentBoard = Array.from(document.getElementsByClassName("hex"))
        for (let i = 0; i < currentBoard.length; i++) {
            currentBoard[i].id = "hex_" + i
            currentBoard[i].innerHTML = `<div class="hexTop"></div>
                <div class="hexBottom"></div>`
        }
    }

    getUnits() {
        fetch(units_url)
            .then(resp => resp.json())
            .then(units => this.renderUnits(units))
            .catch(err => alert(err))
    }


    getBoards() {
        fetch(boards_url)
            .then(resp => resp.json())
            .then(boards => this.renderBoards(boards))
            .catch(err => alert(err))
    }


    renderBoards(data) {
        const teamNames = document.querySelector(".list-group-item")
        data.forEach(board => {
            teamNames.innerHTML += `<li class="list-group-item" id="${board.id}">${board.name}</li>`
        })
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

    resetBoardListener() {
        document.getElementById("reset-board").addEventListener("click", this.resetBoard)
    }

    bindBoardUnitEventListeners() {
        const listItems = document.querySelectorAll(".list-group-item")
        for (const listItem of listItems) {
            listItem.addEventListener('click', Board.getTeam)
        }
    }


    hexEventListener() {
        const elements = document.getElementsByClassName("hex")
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function() { 
                if (document.querySelectorAll(".unit-avatar.red-border").length === 1 && !this.querySelector(".hexTop").classList.contains("hide-hex")) {
                    const championImage = document.querySelector(".unit-avatar.red-border").src.slice(89)
                    const elements = Array.from(document.getElementsByClassName("hex"))
                    let hexIds = elements.map(x => x.id)
                    if (!hexIds.includes(document.querySelector(".unit-avatar.red-border").id)) {
                        this.querySelector(".hexTop").classList.toggle("hide-hex")
                        this.querySelector(".hexBottom").classList.toggle("hide-hex")
                        this.innerHTML += `<img src="${championImage}">`
                        this.id = document.querySelector(".unit-avatar.red-border").id
                    }
                }
            })
        }
    }


}