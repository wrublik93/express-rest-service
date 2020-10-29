const uuid = require('uuid');
const mongoose = require('mongoose');

/* class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [
      {
        id: uuid(),
        title: 'BOARD COLUMN',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    return { ...board };
  }
} */

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: {
      type: [
        {
          title: String,
          order: Number,
          _id: {
            type: String,
            default: uuid
          }
        }
      ],
      default: []
    },
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
