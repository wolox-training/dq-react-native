import React from 'react';
import { Text, View, Image } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  book: Book;
}

function BookDetail({ book }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={
          book.imageUrl
            ? {
                uri: book.imageUrl
              }
            : placeholder
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {book.title}
        </Text>
        <Text style={styles.subtitle}>{book.author}</Text>
      </View>
    </View>
  );
}

export default BookDetail;
