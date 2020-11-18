const app = new AppContainer
app.getUnits();
app.bindEventListeners();
app.hexEventListener();
// board.createNewBoardUnits();
document.getElementById("board-unit-form").addEventListener('submit', Board.createNewBoardUnits)