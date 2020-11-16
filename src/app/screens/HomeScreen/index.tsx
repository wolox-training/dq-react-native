import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@interfaces/redux';
import actionCreators from '@redux/books/actions';
import WithLoader from '@components/WithLoader';
import WithErrorView from '@components/WithErrorView';
import BookList from '@app/components/BookList';

function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);
  const books = useSelector((state: AppState) => state.book.books);
  const loading = useSelector((state: AppState) => state.book.booksLoading);
  const error = useSelector((state: AppState) => state.book.booksError);
  return (
    <WithLoader loading={loading}>
      <WithErrorView error={error}>
        <BookList books={books} />
      </WithErrorView>
    </WithLoader>
  );
}

export default HomeScreen;
