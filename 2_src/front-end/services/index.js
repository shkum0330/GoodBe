const Board = require('../schemas/board');

exports.removeBoardService = async (boardId) => {
  try {
    await Board.deleteOne({ _id: boardId });
  } catch (error) {
    throw error;
  }
};