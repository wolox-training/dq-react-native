import React from 'react';
import { ScrollView } from 'react-native';
import BookDetail from '@components/BookDetail';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import CommentList from '@app/components/CommentsList';
import { NAV_MARGIN } from '@constants/commonStyles';

import styles from './styles';

function DetailScreen({ route }: Navigation<Book>) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={NAV_MARGIN}>
      <BookDetail book={route.params} />
      <CommentList book={route.params} />
    </ScrollView>
  );
}

export default DetailScreen;
