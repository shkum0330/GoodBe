<<<<<<< HEAD
require("dotenv").config();
=======
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const connect = require('./schemas');
const dotenv = require('dotenv');
const path = require('path');
const { renderBoard } = require('./controllers');
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3001" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/gif', express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// 정적 파일 서빙 (CSS, JS, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

//3001번 서버
app.listen(3001, function () {
    console.log("server is on 3001");
});

connect();
const indexRouter = require('./router'); //라우터 모듈을 가져옴
app.use('/', indexRouter);


>>>>>>> cb3ba7f4d6b02ed54d05273b4449e2e31c7083f1
