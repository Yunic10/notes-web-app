import { Box, Text } from '@chakra-ui/react';
import Search from './Search';
import PropTypes from 'prop-types'
import { useMediaQuery } from '@chakra-ui/react'

export function Header({ onSearchChange }) {
    const [isLargerThan420] = useMediaQuery('(min-width: 420px)');
    Header.propTypes = {
        onSearchChange: PropTypes.func.isRequired,
      };
    return (
    <>
      <Box display={'flex'} borderBottom={'2px'} paddingX={isLargerThan420 ? '6rem' : '2rem'} paddingY={'1rem'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'}>MyNotes</Text>
        <Search onSearchChange={onSearchChange} />
      </Box>
    </>
  );
}
