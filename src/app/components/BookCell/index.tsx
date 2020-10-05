import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  book: Book;
  onBookPress: (book: Book) => void;
}

function BookCell({ book, onBookPress }: Props) {
  const handlePress = () => onBookPress(book);
  const { imageUrl, title, author } = book;
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={
          imageUrl
            ? {
                uri: imageUrl
              }
            : placeholder
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookCell;
