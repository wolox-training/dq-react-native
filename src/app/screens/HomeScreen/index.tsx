import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookCell from '@components/BookCell';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import { DETAIL_SCREEN } from '@constants/routes';
import { NAV_MARGIN } from '@constants/commonStyles';

import { DATA } from './constants';
import styles from './styles';

function HomeScreen({ navigation }: Navigation<Book>) {
  const onBookPress: (book: Book) => void = book => navigation.navigate(DETAIL_SCREEN, book);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;
  const keyExtractor = ({ id }: Book) => String(id);
  return (
    <FlatList<Book>
      style={styles.scrollView}
      data={DATA}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={NAV_MARGIN}
    />
  );
}

export default HomeScreen;
