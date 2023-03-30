import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './CSS/CreateNote.css'

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content:"",
    })
    const inputEvent = (event)=>{
    
        const {name, value} = event.target;

        setNote((prevValue)=>{
            return{
                ...prevValue,
                [name]: value,
            }
        })
    }
    const addEvent = ()=>{
        props.passNote(note);
        setNote({
            title: "",
            content:"",
        });
    }
  return (
    <div className='main_note'>
        <form className='createnote'>
            <input type="text" name='title' value={note.title} onChange={inputEvent} placeholder='Title'/> <br /><br/>
            <textarea name='content' value={note.content} onChange={inputEvent} placeholder='write a note...'>
            </textarea>
            <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
            </Button>
        </form>
    </div>
  )
}

export default CreateNote;