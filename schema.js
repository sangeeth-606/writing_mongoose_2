const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim:true
    },

    message:{
        type: String,
        required: true,
        minlength:1,
    },
    commmentedAt:{
        type: Date,
        default: Date.now
    }

})

const blogPostSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true,
        minlength:5,
        trim:true
    },
    content:{
        type: String,
        required: true,
        minlength:50,
        trim:true
    },  
    author:{
        type: String,
        required: true,
        trim:true
    },
    tags: {
        type: [String],
        default: []
      },
      category:{
        type: String,
        default: 'General',

      },
      likes:{
        type: [String],
        default: []
      },
      createdAt:{
        type: Date,
        default: Date.now
      },
        updatedAt:{
            type: Date,
            default: Date.now
        },
        comments:[CommentSchema],

    
})

const BlogPost=mongoose.model('BlogPost',blogPostSchema);
module.exports=BlogPost;