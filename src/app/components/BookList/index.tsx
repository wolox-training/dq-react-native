import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAV_MARGIN } from '@constants/commonStyles';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { DETAIL_SCREEN } from '@constants/routes';

import styles from './styles';

interface Props {
  books: Book[];
}

function BookList(props: Props) {
  const navigation = useNavigation();
  const keyExtractor = ({ id }: Book) => String(id);
  const onBookPress: (book: Book) => void = book => navigation.navigate(DETAIL_SCREEN, book);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;
  return (
    <FlatList<Book>
      style={styles.scrollView}
      data={props.books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={NAV_MARGIN}
    />
  );
}

export default BookList;
