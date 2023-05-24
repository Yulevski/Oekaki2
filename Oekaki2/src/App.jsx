import { useState } from 'react'
// import './App.css';
import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import uuid from "react-uuid";
// import pic from "./components/tree_green.png"; 

function App() {
  //ノートを追加する為配列として保持
  //notesが複数のノートを保持 setNotesでnotes更新
  const [notes, setNotes] = useState([]);


    const onUpdateNote=(updatedNote)=>{
      //新しいノートの配列を返す
      const updatedNotesArray=notes.map((note)=>{
        if(note.id===updatedNote.id){
          return updatedNote;
        } else{
          return note;
        }
      });
      setNotes(updatedNotesArray);
    };

  return (
    <div className="App">
        {/* <Sidebar 
        onAddNote={onAddNote} 
        notes={notes} 
        onDeleteNote={onDeleteNote}
        /> */}
        <Main
        notes={notes} 
        onUpdateNote={onUpdateNote}
        />
    </div>
  )
}

export default App;