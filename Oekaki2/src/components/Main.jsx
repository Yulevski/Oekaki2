import React from 'react';
import "./Main.css";
import pic from "./tree_green.png"; 
//import {ReactMarkdown} from "react-markdown/lib/react-markdown";

const Main = ({activeNote,setActiveNote,notes,onUpdateNote}) => {

  const onEditNote =()=>{
    onUpdateNote({
      id: activeNote.id,
      modDate: Date.now(),
      picturePath:pic,
      ...activeNote,
    });
  };

  // if(!activeNote){
  //   return <div className='no-active-note'>no note is selected</div>
  // }

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        {notes.map((note)=>(
               <img src={note.picturePath} alt="picture" key={note.id} 
              //  onClick={()=>setActiveNote(note.id) } 
               onClick={()=>onEditNote(note.id)}
               /> 
          
            ))}       
        {/* <input type="text"/>
        <textarea id="" placeholder='INPUT NOTE'></textarea> */}
      </div>
      {/* <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div> */}
    </div>
  );
};

export default Main;