// import React from "react";


// class AddNote extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           formNotes:[
//             id,
//             title,
//             content
//           ]
            
//         };
//       }


//     handlerOnChange = (e) => {
//         let formNotesNew = {...this.state.formNotes}
//         formNotesNew[e.target.name]=[e.target.value]
//         this.setState({
//             formNotes: formNotesNew
//         })
//     }

//     handlerOnSubmit = (e) => {
//         e.preventDefault()
//         this.state.formNotes.id = crypto.randomUUID()
//         const form = e.target
//         const formData = new FormData(form)
//         const formJSON = Object.fromEntries(formData)
//         console.log (formJSON)
//     }

//     render() {
//         return (
//             <>
//                 <form onSubmit={this.handlerOnSubmit}>
//                     <input name="title" type="text" placeholder="Title.." value={this.state.formNotes.title} onChange={this.handlerOnChange}/><br />
//                     <input name="content" type="text" placeholder="Content.." value={this.state.formNotes.content} onChange={this.handlerOnChange}/><br />
//                     <button type="submit">Add Notes</button>
//                 </form>
//                 {
//                     this.state.formNotes.map(formNote => {
//                         return (
//                             <li key={this.state.formNotes.id}>
//                                 <h1>{this.state.formNotes.title}</h1>
//                             </li>
                            
//                         )
//                     })
//                 }
//             </>
//         )
//     }
// }

// export default AddNote;

import { useState } from 'react'

export function AddNote( props ){
    const [item, SetNewItem] = useState("")
    const [content, SetNewContent] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        if (item === "") return
        
        props.onSubmit(item,content)
        // props.onSubmit(content)
        
        SetNewItem("")
        SetNewContent("")
      }
      
    return (
        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={e => SetNewItem(e.target.value)} /><br/>
        <input type="text" value={content} onChange={e => SetNewContent(e.target.value)} /><br/>
        <button type='submit'>Tambah</button>
      </form>
    )
}

export default AddNote;