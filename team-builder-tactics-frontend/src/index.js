const app = new AppContainer
app.getUnits();
app.getBoards();
app.bindEventListeners();
app.hexEventListener();
app.bindBoardUnitEventListeners();
app.resetBoardListener();
document.getElementById("board-unit-form").addEventListener('submit', Board.createNewBoardUnits)
