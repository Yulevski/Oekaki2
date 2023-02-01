import React from 'react';
import "./Main.css";
import pic from "./tree_green.png"; 
//import {ReactMarkdown} from "react-markdown/lib/react-markdown";

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
      <div className='app-main-note-edit'>
        {notes.map((note)=>(
               <img src={note.picturePath} alt="picture" key={note.id} 
             
               onClick={()=>onEditNote(note.id)}
               /> 
          
            ))}       
     
      </div>
     
    </div>
  );
};

export default Main;