class BoardUnit {

    static collection = []

    constructor(obj) {
        this.unit_id = obj.unit_id;
        this.board_id = obj.board_id;
        this.hex = obj.hex;
        BoardUnit.collection.push(this)
    }



}