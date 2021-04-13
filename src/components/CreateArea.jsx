import React, {useState} from "react";
// import Note from './Note';

function CreateArea(props) {
  // FOR HANDLING INPUTS
  const [note, setNote]=useState({
    title:'',
    content:''
  });

   // FOR HANDLING EMPTY INPUT ERROR

  
  function handleChange(event){
    const {name, value}=event.target;

    setNote(prevNote=>{
      return{
        ...prevNote,
        [name]:value
      };
    });
  };

    function submitNote() {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  
  }

 

 
 

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}  />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        
        <button onClick={ (event)=>{submitNote();event.preventDefault()}} type='button' 
        >Add</button>

      </form>


      
    </div>
  );
};

export default CreateArea;
