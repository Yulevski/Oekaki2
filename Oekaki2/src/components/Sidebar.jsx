import React from "react";
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote,activeNote,setActiveNote}) => {
    console.log("Snotes is ", notes);
    console.log("activeNote is",activeNote);
    console.log("setActiveNots is",setActiveNote);
    console.log("notes is", notes);

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
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                key={note.id} //noteのidを送る
                onClick={()=> setActiveNote(note.id)}>
                        {/* setActuveNoteで選択されたノートのidを取得
                        ${note.id === activeNote && "active"}でmap関数でactiveNote(id)と全部のidを比較 */}
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