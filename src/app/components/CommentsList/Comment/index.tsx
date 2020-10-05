import React from 'react';
import { Text, View, Image } from 'react-native';
import placeholder from '@assets/img_user1.png';
import { Comment } from '@interfaces/comment';

import styles from './styles';

interface Props {
  comment: Comment;
}

function CommentCell({ comment }: Props) {
  const { url, author, text } = comment;
  return (
    <View style={styles.container}>
      <Image
        source={
          url
            ? {
                uri: url
              }
            : placeholder
        }
        style={styles.image}
      />
      <View style={styles.textsContianer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
}

export default CommentCell;
