import { Todo } from "../models/todo.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const getAllTodos = asyncHandler(async (req, res) => {
    const allTodos = await Todo.find()
    res.status(200).json(new ApiResponse(200, allTodos, "Get All Todos Sucessfully"))
})

const insertTodo = asyncHandler(async (req, res) => {

    const { todoTitle, author } = req.body

    if ([todoTitle, author].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const todo = await Todo.create({
        todoTitle: todoTitle,
        author: author
    })

    return res.status(201).json(
        new ApiResponse(200, todo, "Your Todo Inserted successfully")
    )
})

const updateTodo = asyncHandler(async (req, res) => {
    const { _id, todoTitle } = req.body

    if (!todoTitle) {
        throw new ApiError(401, "All Field Required")
    }

    await Todo.findByIdAndUpdate(_id,
        {
            $set: {
                todoTitle: todoTitle
            }
        },
        {
            new: true,
        })

    return res.status(200).json(new ApiResponse(200, "Todo Updated Successfully"))

})

const deleteTodo = asyncHandler(async (req, res) => {

    const {_id} = req.body

    const todo = await Todo.findByIdAndDelete(_id)

    if (todo === null) {
        throw new ApiError(400, "Provide Valid Todo ID !!!")
    }

    return res.status(200).json(new ApiResponse(200, "Todo Deleted Successfully"))

})

export { getAllTodos, insertTodo, updateTodo, deleteTodo }

