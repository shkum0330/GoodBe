const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {
  renderMain, renderRoom, createRoom, enterRoom, removeRoom, sendChat, sendGif, searchRooms,
} = require('../controllers');

const router = express.Router();

router.get('/chat', renderMain);

router.get('/chat/room', renderRoom);



router.get('/chat/room/:id', enterRoom);

router.delete('/chat/room/:id', removeRoom);

router.post('/chat/room/:id/chat', sendChat);


// 검색 기능을 위한 GET 라우트
router.get('/chat/search', searchRooms);

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

const uploadChatroomImg = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/assets/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});


router.post('/chat/room/:id/gif', upload.single('gif'), sendGif);
router.post('/chat/room', uploadChatroomImg.single('image'), createRoom);


module.exports = router;