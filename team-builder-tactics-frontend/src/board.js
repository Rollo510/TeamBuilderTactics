class Board {

    static allBoards = [];

    constructor(board_obj) {
        this.name = board_obj.name;
        this.id = board_obj.id;
        Board.allBoards.push(this)
    }


    static createNewBoardUnits(e) {
            e.preventDefault()
            const elements = [];
            const positions = [];
            const name = e.target.querySelector("#name").value
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
            app.renderBoard(name)
        }
}