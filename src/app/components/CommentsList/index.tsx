import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Book } from '@interfaces/book';

import { DATA } from './constants';
import styles from './styles';
import CommentCell from './Comment';

interface Props {
  book: Book;
}

// TODO: will need the book when I fetch the comments from the repository
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CommentList({ book }: Props) {
  const [commentList, setCommentList] = useState(DATA.slice(0, 2));
  const [viewingAllComments, setViewingAllComments] = useState(false);

  const onViewAllPressed = () => {
    setCommentList(DATA);
    setViewingAllComments(true);
  };

  return (
    <View style={styles.container}>
      {commentList.map(item => (
        <CommentCell comment={item} key={item.id} />
      ))}
      {!viewingAllComments && (
        <TouchableOpacity onPress={onViewAllPressed}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CommentList;
