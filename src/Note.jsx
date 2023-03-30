import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './CSS/Note.css'

const Note = (props) => {
  const deleteNote= ()=>{
    props.deleteItem(props.id);
  }
  return (
    <div className="main_note">
        <div className='note'>
        <h2>{props.title}</h2>
        <p className='content'>{props.content}</p>
        <button onClick={deleteNote} className='btn'>
        <DeleteIcon className='deleteIcon'/>
        </button>
        
    </div>

    </div>
    
  )
}

export default Note;