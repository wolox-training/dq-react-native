import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@interfaces/redux';
import WithEmptyResult from '@components/WithEmptyResult';
import WithEmptySearch from '@components/WithEmptySearch';
import BookList from '@components/BookList';

function BookSearchScreen() {
  const books = useSelector((state: AppState) => state.book.books);
  const search = useSelector((state: AppState) => state.book.bookSearch);
  const searchResult = books.filter(book => book.title.includes(search.toLowerCase()));
  return (
    <WithEmptySearch isEmpty={search.length === 0}>
      <WithEmptyResult isEmpty={searchResult.length === 0}>
        <BookList books={searchResult} />
      </WithEmptyResult>
    </WithEmptySearch>
  );
}

export default BookSearchScreen;
