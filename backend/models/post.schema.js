const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title : {
        type : String ,
        required : true 
    },
    description : {
        type : String ,
        required : true
    },
    image: {
        type : mongoose.Schema.Types.Mixed
    },
    owner: {
        type : mongoose.Types.ObjectId, 
        ref : "user"
    }
},{timestamps: { createdAt: true, updatedAt: true }})

const Post = mongoose.model('post',postSchema)
module.exports = Post