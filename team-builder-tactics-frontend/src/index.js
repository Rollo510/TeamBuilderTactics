const app = new AppContainer
app.getUnits();
app.getBoards();
app.bindEventListeners();
app.hexEventListener();
app.bindBoardUnitEventListeners();
document.getElementById("board-unit-form").addEventListener('submit', Board.createNewBoardUnits)
