import React from 'react'

export default function Note({text, createdAt}) {
  const date = new Date(createdAt)
  return (
    <div>
        <h3>{text}</h3>
        <p>{date.toLocaleString()}</p>
    </div>
  )
}
