import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
import {TriangleUpIcon, DeleteIcon, TriangleDownIcon} from '@chakra-ui/icons'


export function NoteItem({id, title ,content, onPin , pin, deleteTodo, variant}) {
    
    return <>
        
        <Card variant={variant}>
            <CardHeader>
                <Heading size='md' textAlign={'left'}>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text textAlign={'left'}>{content}</Text>
            </CardBody>
            <CardFooter>
                <ButtonGroup margin={'auto'} w={"100%"} >
                    {pin === false ? (
                            <Button w={"100%"} leftIcon={<TriangleUpIcon/>} colorScheme='teal' onClick={() => onPin(id)}>Pin</Button>
                        ) : (
                            <Button w={"100%"} leftIcon={<TriangleDownIcon/>} colorScheme='yellow' onClick={() => onPin(id)}>Unpin</Button>
                        )}
                    <Button w={"100%"} leftIcon={<DeleteIcon/>} colorScheme='red' onClick={() => deleteTodo(id)}>Delete</Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </>
}