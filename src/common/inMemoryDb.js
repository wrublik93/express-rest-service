const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const User = require('../resources/boards/board.model');

const db = {
  tasks: {},
  users: [
    new User({
      name: 'Ivan',
      login: 'ivan_login',
      password: 'ivan_password'
    }),
    new User({
      name: 'Vladimir',
      login: 'vladimir_login',
      password: 'vladimir_password'
    }),
    new User({
      name: 'Vlad',
      login: 'vlad_login',
      password: 'vlad_password'
    })
  ],
  boards: [
    new Board({
      title: 'board_title_1'
    }),
    new Board({
      title: 'board_title_2'
    }),
    new Board({
      title: 'board_title_3'
    })
  ]
};

// init db
(() => {
  db.tasks[db.boards[0].id] = [];
  db.tasks[db.boards[1].id] = [];
  db.tasks[db.boards[2].id] = [];

  // tasks for board_1
  db.tasks[db.boards[0].id].push(
    new Task({
      title: 'task_title_1',
      order: 0,
      userId: db.users[0].id,
      boardId: db.boards[0].id,
      columnId: db.boards[0].columns[0].id
    })
  );

  // tasks for board_2
  db.tasks[db.boards[1].id].push(
    new Task({
      title: 'task_title_2',
      order: 0,
      userId: db.users[1].id,
      boardId: db.boards[1].id,
      columnId: db.boards[1].columns[0].id
    })
  );

  // tasks for board_3
  db.tasks[db.boards[2].id].push(
    new Task({
      title: 'task_title_3',
      order: 0,
      userId: db.users[2].id,
      boardId: db.boards[2].id,
      columnId: db.boards[2].columns[0].id
    })
  );
})();
