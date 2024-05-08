import React, { useState } from 'react'

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,

            }
        })
        console.log(note);
    };
    const addEvent = (e) => {
        props.passNote(note);
        e.preventDefault();
        setNote({
            title: '',
            content: ''
        })
    };

    const expandIt = () => {
        setExpand(true);
    }

    const backtoNormal = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="main_note" onDoubleClick={backtoNormal}>
                <form action="">
                    {expand ? <input type="text" name="title" id="" value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' /> : null}
                    <textarea name="" id="" cols="30" rows="10" name="content" value={note.content} onChange={InputEvent} onClick={expandIt} placeholder='Write a note...' autoComplete='off'></textarea>
                    {expand ? <button onClick={addEvent} > + </button> : null}
                </form>
            </div>

        </>
    )
}

export default CreateNote
