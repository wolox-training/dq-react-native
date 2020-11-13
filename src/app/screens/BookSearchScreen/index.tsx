import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, ListRenderItem } from 'react-native';
import BookCell from '@components/BookCell';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import { DETAIL_SCREEN } from '@constants/routes';
import { NAV_MARGIN } from '@constants/commonStyles';
import { AppState } from '@interfaces/redux';
import WithEmptyResult from '@components/WithEmptyResult';
import WithEmptySearch from '@components/WithEmptySearch/index';

import styles from './styles';

function BookSearchScreen({ navigation }: Navigation<Book>) {
  const onBookPress: (book: Book) => void = book => navigation.navigate(DETAIL_SCREEN, book);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;
  const books = useSelector((state: AppState) => state.book.books);
  const search = useSelector((state: AppState) => state.book.bookSearch);
  const searchResult = books.filter(book => book.title.includes(search.toLowerCase()));
  const keyExtractor = ({ id }: Book) => String(id);
  return (
    <WithEmptySearch isEmpty={search.length === 0}>
      <WithEmptyResult isEmpty={searchResult.length === 0}>
        <FlatList<Book>
          style={styles.scrollView}
          data={searchResult}
          renderItem={renderBook}
          keyExtractor={keyExtractor}
          contentContainerStyle={NAV_MARGIN}
        />
      </WithEmptyResult>
    </WithEmptySearch>
  );
}

export default BookSearchScreen;
