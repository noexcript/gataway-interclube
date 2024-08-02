const Task = require('../models/task')

const asyncHandler = require('express-async-handler')
const User = require('../models/user')

const findAll = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })
    res.status(200).json({ object: tasks, message: 'Get all tasks' })
})

const store = asyncHandler(async (req, res) => {
    const { text } = req.body
    if (!text) {
        res.status(400)
        throw new Error('Please enter a task')
    }

    const task = await Task.create({ text, user: req.user.id })
    res.status(200).json({ object: task, message: 'Task created sucessfully' })
    // res.status(204).json({ message: 'Task created sucessfully', object: null })
})

const remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    if (!user) {
        res.status(401)
        throw new Error('No such user found')
    }

    if (task.user.toString() !== User?.id) {
        res.status(401)
        throw new Error('User is not authorized to remove')

    }
    await Task.findByIdAndDelete(id)

    res.status(200).json({ message: 'Task removed sucessfully', object: null })
})
const update = asyncHandler(async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }
    const user = await await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('No such user found')
    }

    if (task.user.toString() !== User?.id) {
        res.status(401)
        throw new Error('User is not authorized to update')
    }
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ message: 'Task updated sucessfully', object: updatedTask })
})

const show = asyncHandler(async (req, res) => {
    const { id } = req.params

    const task = await Task.findById(id)

    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    res.status(200).json({ message: 'Get Task', object: task })
})

module.exports = { findAll, store, remove, update, show }