const board_units_url = "http://localhost:3000/board_units"

class BoardUnit {

    static collection = []

    constructor(obj) {
        this.unit_id = obj.unit_id;
        this.board_id = obj.board_id;
        this.hex = obj.hex;
        BoardUnit.collection.push(this)
        this.renderSingleBoard()
    }
    
    renderSingleBoard() {
        let item = BoardUnit.collection.slice(-1)[0]
        let name = document.getElementById("name").value
        const teamName = document.querySelector(".list-group-item")
            if (!teamName.innerHTML.includes(`<li class="list-group-item" id="${item.board_id}">${name}</li>`)) {
                teamName.insertAdjacentHTML("afterbegin", `<li class="list-group-item" id="${item.board_id}">${name}</li>`)
                document.getElementById("name").value = ""
        }
    }

    getBoardUnits() {
        fetch(this.board_units_url)
            .then(resp => resp.json())
            .then(obj => this.createBoardUnits(obj))
            .catch(err => alert(err))
    }
    
    static createBoardUnits(obj) {
        obj.forEach(unit => new BoardUnit(unit))
    }



}