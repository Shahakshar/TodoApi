import mongoose, {Schema} from "mongoose"

const todoSchema = new Schema({
    todoTitle: {
        type: String,
        required: true,
        lowercase: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)