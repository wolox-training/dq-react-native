import React from 'react';
import { View } from 'react-native';
import BookDetail from '@app/components/BookDetail';
import { Book } from '@interfaces/book';
import { Navigation } from '@interfaces/navigation';
import CommentList from '@app/components/CommentsList';

import styles from './styles';

function DetailScreen({ route }: Navigation<Book>) {
  return (
    <View style={styles.container}>
      <BookDetail book={route.params} />
      <CommentList book={route.params} />
    </View>
  );
}

export default DetailScreen;
