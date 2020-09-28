import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookDetail from '@components/BookDetail';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import { DETAILSCREEN } from '@constants/screenNames';

import { DATA } from './constants';
import styles from './styles';

function HomeScreen({ navigation }: Navigation) {
  const onPress: () => void = () => navigation.navigate(DETAILSCREEN);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookDetail book={item} onPress={onPress} />;
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
