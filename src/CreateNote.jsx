import React, { useState } from "react";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

const InputEvent=(event)=>{

    // const value=event.target.value;
    // const name=event.target.name;

    const {name,value}= event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]:value,
        };
    });
};

const addEvent =()=>{
props.passNote(note);
setNote({
    title: "",
    content: "",

});
};


    return (
        <>

            <div className="main_note">
                <form>
        
                    <input type="text"
                    name="title"
                     value={note.title}
                     onChange={InputEvent} 
                     placeholder="Title" 
                     autoComplete="off" 
                     /> 
                    <textarea rows=""
                     column="" 
                     name="content"
                     value={note.content}
                     onChange={InputEvent}
                      placeholder="Write a Note">
                      </textarea>
                    
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>

                </form>
            </div>
        </>
    );
    };
export default CreateNote;