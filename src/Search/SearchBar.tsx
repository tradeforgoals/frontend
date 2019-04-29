import React from 'react';
import { SearchBarForm, SearchBarInput, SearchBarButton } from './SearchStyle';
import { FiSearch } from 'react-icons/fi';

export const SearchBar: React.FunctionComponent = () => {
  return (
    <SearchBarForm>
      <SearchBarInput type="text" placeholder="Search for..." />
      <SearchBarButton as="button" type="submit"><FiSearch /></SearchBarButton>
    </SearchBarForm>
  );
};