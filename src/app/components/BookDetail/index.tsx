import React from 'react';
import { Image, Text, View } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book6.png';

import styles from './styles';

interface Props {
  book: Book;
}

function BookDetail({ book }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
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
        <View style={styles.textsContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.availability}>Unavailable</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.year}>{book.year}</Text>
          <Text style={styles.genre}>{book.genre}</Text>
        </View>
      </View>
      <View style={styles.wishButton}>
        <Text style={styles.wishButtonText}>ADD TO WISHLIST</Text>
      </View>
      <View style={styles.rentButton}>
        <Text style={styles.rentButtonText}>RENT</Text>
      </View>
    </View>
  );
}

export default BookDetail;
