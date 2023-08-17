const mongoose = require('mongoose');

const { Schema } = mongoose;
// const { Types: { ObjectId } } = Schema;
const boardSchema = new Schema({
    userId: {
        type: String,
        // required: true,
        // ref: 'Room', 로그인 유저 확인 제외
    },
    title: {
        type: String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    fileInfo: {
        type: String,
        default: null,
    },
    type:{
        type:Number,
        default:1,
    }
});

module.exports = mongoose.model('Board', boardSchema);

// router.get('/board', renderBoard);