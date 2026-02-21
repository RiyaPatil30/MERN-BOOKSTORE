import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
    },
    author: {
        type: String,
        requried: true,
    },
    publishYear: {
        type: Number,
        requried: true,
    },

}, 
 {timestamps:true})
const Book = mongoose.model("Book", bookSchema)
export default Book