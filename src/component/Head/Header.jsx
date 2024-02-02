import { Box, Text } from '@chakra-ui/react';
import Search from './Search';
import PropTypes from 'prop-types'

export function Header({ onSearchChange }) {
    Header.propTypes = {
        onSearchChange: PropTypes.func.isRequired,
      };
    return (
    <>
      <Box display={'flex'} borderBottom={'2px'} paddingX={'6rem'} paddingY={'1rem'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'}>MyNotes</Text>
        <Search onSearchChange={onSearchChange} />
      </Box>
    </>
  );
}
