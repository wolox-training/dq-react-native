import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import styles from './styles';
import { DATA } from './constants';

import BookDetail from '@app/components/BookDetail';
import { Book } from 'src/Interfaces/Book';

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
