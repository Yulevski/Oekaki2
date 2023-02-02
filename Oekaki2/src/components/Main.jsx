import React from 'react';
import "./Main.css";
import pic from "./tree_green.png"; 
//import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import Draggable from 'react-draggable';

const Main = ({notes,onUpdateNote}) => {

  const onEditNote =(noteId)=>{
    onUpdateNote({
      id: noteId,
      modDate: Date.now(),
      picturePath:pic,
    });
  };
 
  return (
    <div className='app-main'>
      
                 {notes.map((note)=>(
                 
                 <Draggable defaultPosition={{x: 0, y: 0}}>
                    <div style={{ position: 'absolute' }} className='app-main-note-edit'>
                        <img src={note.picturePath} alt="picture" key={note.id} onClick={()=>onEditNote(note.id)}/> 
                    </div>
                </Draggable>
                        ))}  
     </div>
  );
};

export default Main;