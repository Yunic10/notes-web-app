import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
import {TriangleUpIcon, DeleteIcon, TriangleDownIcon} from '@chakra-ui/icons'
import PropTypes from 'prop-types'

export function NoteItem({id, title ,content, onPin ,date, pin, deleteTodo, variant}) {
    NoteItem.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        onPin: PropTypes.func.isRequired,
        date: PropTypes.string.isRequired,
        pin: PropTypes.bool.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        variant: PropTypes.string,
      };
    return <>
        
        <Card variant={variant}>
            <CardHeader padding={'12px'} paddingBottom={0}>
                <Heading size='md' textAlign={'left'} paddingBottom={0}>{title}</Heading>
            </CardHeader>
            <CardBody padding={'12px'} paddingTop={'0'}>
                <Text textAlign={'left'} fontSize={'small'} paddingBottom={1}>{date}</Text>
                <Text textAlign={'left'}>{content}</Text>
            </CardBody>
            <CardFooter padding={'12px'}>
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