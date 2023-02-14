const Note = require("../../models/note")

async function index(req, res, next) {
    try {
        const notes = await Note.find({user: req.params.id})
        res.json(notes)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function create(req, res, next) {
    try {
        const note = await Note.create(req.body)
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json(error)
    }
} 

module.exports = {
    index,
    create
}