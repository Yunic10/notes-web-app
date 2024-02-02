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
import {Input, Textarea, Button, Stack} from '@chakra-ui/react'
import {useToast, Box, Text} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import PropTypes from 'prop-types'

export function AddNote( props ){
    const [item, SetNewItem] = useState("")
    const [content, SetNewContent] = useState("")
    const toast = useToast()

    AddNote.propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };

    function handleSubmit (e) {
        e.preventDefault()
        if (item === "") return
        
        props.onSubmit(item,content)
        // props.onSubmit(content)
        
        SetNewItem("")
        SetNewContent("")

        toast({
            title: 'Note Added',
            description: 'Catatan anda sudah berhasil ditambahkan',
            status: 'success',
            position:'bottom-right',
            duration: 3000,
            isClosable: true,
        })
      }
      
    return (
        <Accordion defaultIndex={[1]} allowMultiple>
            <AccordionItem>
                <Text fontSize={'2xl'}>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} fontSize={'large'}>
                        Add New Note Here!
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>
                    <form action="" onSubmit={handleSubmit}>
                        <Stack spacing={0}>
                            <Input type="text" placeholder='Notes Title...' value={item} onChange={e => SetNewItem(e.target.value)} /><br/>
                            <Textarea type="text" placeholder='Type Your Note Here...' value={content} onChange={e => SetNewContent(e.target.value)} /><br/>
                            <Button type='submit' colorScheme='yellow'>Tambah</Button>
                        </Stack>
                    </form>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
    )
}

export default AddNote;