import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { Book } from '@interfaces/book';
import { Comment } from '@interfaces/comment';

import { DATA } from './constants';
import styles from './styles';
import CommentCell from './Comment';

interface Props {
  book: Book;
}

// will need the book when I fetch the comments from the repository
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CommentList({ book }: Props) {
  const renderBook: ListRenderItem<Comment> = ({ item }) => <CommentCell comment={item} />;
  const keyExtractor = ({ id }: Comment) => String(id);
  return (
    <View style={styles.scrollView}>
      <FlatList<Comment> data={DATA} renderItem={renderBook} keyExtractor={keyExtractor} />
    </View>
  );
}

export default CommentList;
