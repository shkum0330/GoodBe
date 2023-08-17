const Board = require('../schemas/board');

const { removeBoard: removeBoardService } = require('../services'); 

//////////   C

  
  exports.createBoard = async (req, res, next) => {
    try {
      console.log("게시글 등록 시작 중 ...")
      let imageUrl = null;
      
      // 이미지가 업로드되었을 경우
      if (req.file) {
        imageUrl = `/assets/${req.file.filename}`;
      }
  
  
      const newBoard = await Board.create({
        userId: req.body.id,
        title: req.body.title,
        content: req.body.content,
        fileInfo: imageUrl,
        type: req.body.type,
      })
      //detail로 이동
      res.redirect(`/board/${newBoard._id}`);
      
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

////// R
exports.detailBoard = async (req, res, next) => {
  console.log("게시글 조회 시작 중 ...")
  try {
    const board = await Board.findOne({ _id: req.params.id });
    if (!board) {
      return res.redirect('/?error=존재하지 않는 게시글입니다.');
    }

    console.log(board)
   
    return res.render('boardDetail', { board });
  } catch (error) {
    console.error(error);
    return next(error);
  }


};
exports.renderBoard = async (req, res, next) => {
  console.log("게시글 메인 생성중 ...")
  try {
    const boards = await Board.find();
    if (!boards) {
      return res.redirect('/?error=존재하지 않는 게시글입니다.');
    }
    

    console.log("보드 ",boards)
   
    return res.render('boardMain', { boards });
  } catch (error) {
    console.error(error);
    return next(error);
  }


};

///// U
exports.editBoard = async (req, res, next) => {
  console.log("게시글 수정 시작 중 ...")
  try {
    const boardId = req.params._id;
    
    let imageUrl = null;
    
    // 이미지가 업로드되었을 경우
    if (req.file) {
      imageUrl = `/assets/${req.file.filename}`;
    }

    // 게시물 업데이트
    const updatedBoard = await Board.findByIdAndUpdate(boardId, {
      title: req.body.title,
      content: req.body.content,
      fileInfo: imageUrl,
      type: req.body.type,
    });

    if (!updatedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }

    //상세페이지로 이동
    res.redirect(`/board/${boardId}`);
  } catch (error) {
    console.error(error);
    next(error);
  }
};


///// D
exports.removeBoard = async (req, res, next) => {
  console.log("게시글 삭제 시작 중 ...")
  try {
    await removeBoardService(req.params.id);
    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
};


// 새로운 게시글 추가
exports.addBoard = async (req, res, next) => {
  try {
    // 요청에서 필요한 데이터 추출
    const { userId, title, content, type } = req.body;

    // 게시글 생성
    const newBoard = await Board.create({
      userId,
      title,
      content,
      type,
    });

    // 성공 응답
    res.status(201).json({ message: '게시글이 추가되었습니다.', board: newBoard });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// renderBoard 함수 수정
exports.renderBoard = async (req, res, next) => {
  console.log("게시글 메인 생성중 ...");
  try {
    const boards = await Board.find();

    console.log("보드 ", boards);

    return res.render('boardMain', { boards });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

