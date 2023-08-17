const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {
  createBoard, detailBoard, editBoard, removeBoard, renderBoard, addBoard, renderBoard1
} = require('../controllers');

const router = express.Router();

try {
  fs.readdirSync('uploads');
} catch (err) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 새로운 게시글 추가
router.post('/board', upload.single('gif'), addBoard);

// 라우터 경로 수정
router.get('/board', renderBoard1);

router.get('/board/:id', detailBoard);
router.put('/board/:id', upload.single('gif'), editBoard);
router.delete('/board/:id', removeBoard);

module.exports = router;
