import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface Book {
  title: string;
  subtitle: string;
  url: string;
}

function BookDetail({ title, subtitle, url }: Book) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: url
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export default BookDetail;
