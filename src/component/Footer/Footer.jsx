import { Box, Text} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box w={'100%'} borderTop={'1px'} marginTop={5} padding={4} position={'absolute'} bottom={'0px'}>
            <Text fontWeight={'bold'}>2023 &copy; Yudith Nico Priambodo</Text>
        </Box>
    )
}

export default Footer;