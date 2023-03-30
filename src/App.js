import { useState } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';


function App() {
  const[addItem, setAddItem] = useState([]);

  const addNote = (note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    })
    console.log(note);
  }
  const onDelete= (id)=>{
    setAddItem((prevData)=>{
      return prevData.filter((currentData, index)=>{
        return index!=id;
      })
    })
  }
  return (
    <div className="App">
      <Header/>
      <CreateNote passNote={addNote}/>
      <div className="notes-container">
      {addItem.map((val, index)=>{
        return( <Note key={index} id={index} title= {val.title} content={val.content} deleteItem ={onDelete}/>
        );
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
