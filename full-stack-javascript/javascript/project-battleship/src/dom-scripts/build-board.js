function buildBoard(classSelector) {
  const board = document.createElement('div');
  board.className = 'board';

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 0; j < 10; j++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.dataset.row = i;
      square.dataset.col = j;
      square.textContent = 'x';
      row.appendChild(square);
    }

    board.appendChild(row);
  }

  board.classList.add(classSelector);

  return board;
}

function buildBoards() {
  const player = buildBoard('player');
  const comp = buildBoard('computer');

  const boards = document.createElement('div');
  boards.classList = 'board-container';
  boards.append(player, comp);

  return boards;
}

export default buildBoards;
