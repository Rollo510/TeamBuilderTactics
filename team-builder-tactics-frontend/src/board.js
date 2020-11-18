class Board {

    static allBoards = [];
    boards = [];

    constructor(board_obj) {
        this.name = board_obj.name;
        this.id = board_obj.id;
        Board.allBoards.push(this)
    }


    getGameBoard() {
        let gameBoard = document.querySelectorAll(".builder-bonus builder-board");
        let result = [];
        for (let i = 0; i < 29; i++) {
            result.push(gameBoard.hexes[i])
        }
        return result;
    }


    renderBoardHexes() {        
        for (let i = 0; i < 29; i++) {
            document.querySelector(".board four-row").innerHTML +=
            `<div class="board four-row">
            <div class="hex" position="1" id = "${this.id}">
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
            </div>` 
        }
       }

    renderEmptyBoard() {

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
                    //positions.push(hexposition)
                    debugger                 
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
                    name: name 
                    hex: position (change to int in ruby)
                })
            })
    }


    // clear board
    // make sure no duplicate units?
    

}