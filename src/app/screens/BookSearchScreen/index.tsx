import React from 'react';
import { useSelector } from 'react-redux';
import WithEmptyResult from '@components/WithEmptyResult';
import WithEmptySearch from '@components/WithEmptySearch';
import BookList from '@components/BookList';

import { searchSelector, search } from './utils';

function BookSearchScreen() {
  const searchWord = useSelector(search);
  const searchResult = useSelector(searchSelector);
  return (
    <WithEmptySearch isEmpty={searchWord.length === 0}>
      <WithEmptyResult isEmpty={searchResult.length === 0}>
        <BookList books={searchResult} />
      </WithEmptyResult>
    </WithEmptySearch>
  );
}

export default BookSearchScreen;
