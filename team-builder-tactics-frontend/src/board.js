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
            if (name === "") {
                alert("Team name can't be blank!")
            }
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
            .catch(err => alert(err))
        }


    static getTeam(e) {
        fetch(show_url + `${e.target.id}`)
            .then(resp => resp.json())
            .then(data => new Board(data))
            .then(board => board.renderTeamImages())
            .catch(err => alert(err))
    }

    renderTeamImages() {
        app.resetBoard();
        const champions = Array.from(document.getElementsByClassName("unit-avatar"))
        for (let i = 0; i < this.board_units.length; i++) {
            for (let x = 0; x < champions.length; x++) {
                if ("unit_" + this.board_units[i].unit_id === champions[x].id) {
                    let hexes = Array.from(document.querySelectorAll(".hex"))
                    for (let y = 0; y < hexes.length; y++) {
                        if ("hex_" + this.board_units[i].hex === hexes[y].id) {
                            let championImage = champions[x].src.slice(89)
                            hexes[y].innerHTML += `<img src="${championImage}">`
                            hexes[y].querySelector(".hexBottom").classList.toggle("hide-hex")
                            hexes[y].querySelector(".hexTop").classList.toggle("hide-hex")
                            hexes[y].id = champions[x].id
                        }
                    }

                } 
            }
        }
    }


}