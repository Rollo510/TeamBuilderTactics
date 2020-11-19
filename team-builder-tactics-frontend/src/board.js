class Board {

    static allBoards = [];
    boards = [];

    constructor(board_obj) {
        this.name = board_obj.name;
        this.id = board_obj.id;
        Board.allBoards.push(this)
    }
    

    // fetch all Boards
    // new Board for each of them
    // display all these new Board names to the DOM
    // create a new Board from the ashes of an old board
    // reset button to clear all tokens
    // make sure user cant select multiple of the same token
    // delete button 


    // renderBoardHexes() {        
    //     for (let i = 0; i < 29; i++) {
    //         document.querySelector(".board four-row").innerHTML +=
    //         `<div class="board four-row">
    //         <div class="hex" position="1" id = "${this.id}">
    //             <div class="hexTop"></div>
    //             <div class="hexBottom"></div>
    //         </div>` 
    //     }
    //    }

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
    }
}