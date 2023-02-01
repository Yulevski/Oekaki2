import React from "react";
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote}) => {
    // console.log("Snotes is ", notes);
   
    // console.log("notes is", notes);

    const sortedNotes = notes.sort((a,b)=>b.modDate-a.modDate);

  return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>NOTE</h1>
            <button onClick={onAddNote}>ADD</button>
        </div>
          
        <div className="app-sidebar-notes">
            {/* ↓notesの値をnoteへ */}
            {sortedNotes.map((note)=>(
                <div key={note.id}>
              
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <div>
                            <input type="text"/>
                            <textarea id="" placeholder='INPUT explanation'></textarea>
                        </div>
                        {/* arrow関数で書きリロードしたときに作動しないように,引数をとる時 */}
                        <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.content}</p>
                    <small>{new Date(note.modDate).toLocaleDateString("ja-JP",{
                        hour: "2-digit",
                        minute:"2-digit",
                    })}</small>
                </div>

            ))}
           
        </div>
    </div>
 
  );
};

export default Sidebar;