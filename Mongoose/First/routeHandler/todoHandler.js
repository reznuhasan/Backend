const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../Schemas/todoSchema')

const Todo = new mongoose.model('Todo', todoSchema)

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({ title: "learn Nodejs" }).exec();
        res.status(200).json({ message: "find successfully", todos });
    } catch (err) {
        res.status(500).json({ error: "server side error" });
    }
})
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "find successfully", todo });
    } catch (err) {
        res.status(500).json({ error: "server side error" });
    }

})
router.post('/', async (req, res) => {
    try {
        const newTodo = await new Todo(req.body)
        newTodo.save()
        res.status(200).json({ message: "sent successfully" })
    } catch (err) {
        res.status(500).json({ error: "server side error" })
    }

})
router.post('/all', async (req, res) => {
    await Todo.insertMany(req.body).then(function () {
        res.status(200).json({ message: "sent successfully" })
    })
        .catch(function (err) {
            res.status(500).json({ error: "server side error" })
        });
})
router.put('/:id', async (req, res) => {
    await Todo.updateOne({ _id: req.params.id, title: 'learn React' }, { title: 'learn mongoose' })
        .then(() => res.status(200).json({ message: "update successfully" }))
        .catch((err) => res.status(500).json({ error: "server side error" }))
})
router.delete('/:id', async (req, res) => {

})

module.exports = router;