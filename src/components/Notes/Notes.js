import React from 'react'
import { useState, useEffect } from 'react'
import { create, index } from "../../utilities/notes-api"
import Note from '../Note/Note'

export default function Notes({user}) {
    const [text, setText] = useState('')
    const [notes, setNotes] = useState(null)

    useEffect(function effectFunction() {
        async function getNotes() {
            const userNotes = await index(user._id)
            setNotes(userNotes)
        }
        getNotes()
    }, [user._id])

    function handleChange(e) {
        setText(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const note = {text, user: user._id}
        const res = await create(note)
        setNotes([...notes, res])
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleChange} value={text} name="text" placeholder='Enter your note here'></textarea>
            <button>Submit</button>
        </form>
        <div className="notes-container">
            {notes && notes.map((note, index) => (
                <Note text={note.text} createdAt={note.createdAt} key={index}/>
            ))}
        </div>
    </>
  )
}