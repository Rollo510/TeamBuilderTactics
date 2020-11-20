const board_units_url = "http://localhost:3000/board_units"
const show_url = "http://localhost:3000/boards/"

class BoardUnit {

    static collection = []

    constructor(obj) {
        this.unit_id = obj.unit_id;
        this.board_id = obj.board_id;
        this.hex = obj.hex;
        BoardUnit.collection.push(this)
        this.renderSingleBoard()
    }

    getBoardUnits() {
        fetch(this.board_units_url)
            .then(resp => resp.json())
            .then(obj => this.createBoardUnits(obj))
            .catch(err => alert(err))
    }

    
    static displayTeamBoard(e) {
        fetch(show_url + `${e.target.id}`)
        .then(resp => resp.json())
        .then(data => console.log(e.target))
        .catch(err => alert(err))
    }
    
    renderSingleBoard() {
        let item = BoardUnit.collection.slice(-1)[0]
        let name = document.getElementById("name").value
        const teamName = document.querySelector(".list-group-item")
            if (!teamName.innerHTML.includes(`<li class="list-group-item" id="${item.board_id}">${name}</li>`)) {
            teamName.innerHTML += `<li class="list-group-item" id="${item.board_id}">${name}</li>`
        }
    }


    static createBoardUnits(obj) {
        obj.forEach(unit => new BoardUnit(unit))
    }

    // create a new Board from the ashes of an old board (if you select a new board it overrides the previous)
    // reset button to clear all tokens
    // make sure user cant select multiple of the same token
    // delete button 





}