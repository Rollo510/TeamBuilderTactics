const show_url = "http://localhost:3000/boards/"

class Board {

    static allBoards = [];

    constructor(board_obj) {
        this.name = board_obj.name;
        this.id = board_obj.id;
        this.board_units = board_obj.board_units;
        Board.allBoards.push(this)
    }


    static createNewBoardUnits(e) {
            e.preventDefault()
            const elements = [];
            const positions = [];
            let name = e.target.querySelector("#name").value
            const hexes = document.getElementsByClassName("hex");
            for (let i = 0; i < hexes.length; i++) {
                if (hexes[i].id.includes("unit")) {
                    elements.push(hexes[i].id)
                    positions.push(hexes[i].getAttribute("location"))
                } 
            }                 
            fetch("http://localhost:3000/board_units", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    elements: elements,
                    name: name, 
                    hex: positions
                })
            })
            .then(resp => resp.json())
            .then(obj => BoardUnit.createBoardUnits(obj))
        }


    static getTeam(e) {
        fetch(show_url + `${e.target.id}`)
            .then(resp => resp.json())
            .then(data => new Board(data))
            .then(board => board.renderTeam())
            .catch(err => alert(err))
    }

    renderTeam() {
        
    }






    // create a new Board from the ashes of an old board (if you select a new board it overrides the previous)
    // reset button to clear all tokens
    // delete button 





}