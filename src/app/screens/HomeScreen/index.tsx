import React, { useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BookCell from '@components/BookCell';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import { DETAIL_SCREEN } from '@constants/routes';
import { NAV_MARGIN } from '@constants/commonStyles';
import { AppState } from '@interfaces/redux';
import actionCreators from '@redux/books/actions';

import styles from './styles';

function HomeScreen({ navigation }: Navigation<any>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);
  const books = useSelector((state: AppState) => state.book.books);
  const onBookPress: (book: Book) => void = book => navigation.navigate(DETAIL_SCREEN, book);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;
  const keyExtractor = ({ id }: Book) => String(id);
  return (
    <FlatList<Book>
      style={styles.scrollView}
      data={books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={NAV_MARGIN}
    />
  );
}

export default HomeScreen;
