class BoardUnit {

    static collection = []
    board_units_url = "http://localhost:3000/board_units"

    constructor(obj) {
        this.unit_id = obj.unit_id;
        this.board_id = obj.board_id;
        this.hex = obj.hex;
        BoardUnit.collection.push(this)
    }

    getBoardUnits() {
        fetch(this.board_units_url)
            .then(resp => resp.json())
            .then(obj => this.createBoardUnits(obj))
            .catch(err => alert(err))
    }

    createBoardUnits(obj) {
        obj.forEach(unit => new BoardUnit(unit))
    }




    // new Board(Unit) for each of them
    // create a new Board from the ashes of an old board (if you select a new board it overrides the previous)
    // reset button to clear all tokens
    // make sure user cant select multiple of the same token
    // delete button 





}