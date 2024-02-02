import { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

function Search({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm, onSearchChange]);

  return (
    <Input
    w={'40%'}
      placeholder="Search notes"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;
