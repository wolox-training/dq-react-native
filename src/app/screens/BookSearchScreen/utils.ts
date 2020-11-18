import { createSelector } from 'reselect';
import { Book } from '@interfaces/book';
import { AppState } from '@interfaces/redux';

const books = (state: AppState) => state.book.books;
export const search = (state: AppState) => state.book.bookSearch;
export const searchSelector = createSelector(books, search, (list: Book[], searchWord: string) =>
  list.filter(book => book.title.includes(searchWord.toLowerCase()))
);
