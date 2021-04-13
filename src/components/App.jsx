import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from './Note';
import Error from './Error';
import ClearAll from './ClearAll';
import ConfirmBox from "./ConfirmBox";



function App() {

  // STATE FOR ADDING AND DELETING NOTE
  const [note,setNote]=useState([]);

  const [error,setError]=useState();
 
  const [message,setMessage]=useState();
  

   function addNote(newNote){
     
     if(note===[]){
    return setError(<Error/>);
        }else{
              setNote(prevNotes=>{
                return [...prevNotes,newNote];
              });
            };
          }

  function deleteNote(id) {
    console.log(deleteNote);
    setNote(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
          return index !== id;
        });
    }); 
  };

  function Message(){
    setMessage(<ConfirmBox/>);
  };


  return (
    <div>
      <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <div>{error}</div>
      <ul reverse>
        {note.map((noteItem, index) => {
          return(
          <Note key={index} 
          id={index} 
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote} />
        );
        })}
      </ul>
      <div>{message}</div>
      </div>
      <ClearAll onMessage={Message}/>
      <Footer />
    </div>
  );
}

export default App;
