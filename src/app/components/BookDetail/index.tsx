import React from 'react';
import { Text, View, Image } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book6.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface Props {
  book: Book;
  onPress: () => void;
}

function BookDetail({ book, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
    </TouchableOpacity>
  );
}

export default BookDetail;
