import React from 'react';
import { Text, View, Image } from 'react-native';
import placeholder from '@assets/img_book6.png';
import { Comment } from '@interfaces/comment';

import styles from './styles';

interface Props {
  comment: Comment;
}

function CommentCell({ comment }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={
          comment.url
            ? {
                uri: comment.url
              }
            : placeholder
        }
        style={styles.image}
      />
      <View style={styles.textsContianer}>
        <Text style={styles.author}>{comment.author}</Text>
        <Text style={styles.text}>{comment.text}</Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
}

export default CommentCell;
