const app = new AppContainer
app.getUnits();
app.getBoards();
app.getBoardUnits();
app.bindEventListeners();
app.hexEventListener();
document.getElementById("board-unit-form").addEventListener('submit', Board.createNewBoardUnits)