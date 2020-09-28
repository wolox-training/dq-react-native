import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookDetail from '@components/BookDetail';
import { Book } from '@interfaces/book';

import { DATA } from './constants';
import styles from './styles';

function HomeScreen() {
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookDetail book={item} />;
  const keyExtractor = ({ id }: Book) => String(id);
  return (
    <FlatList<Book>
      style={styles.scrollView}
      data={DATA}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
    />
  );
}

export default HomeScreen;
