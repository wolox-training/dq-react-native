import React from 'react';
import { Image, View, Text } from 'react-native';
import searchIcon from '@assets/ic_gray_search.png';

import styles from './styles';

interface Props {
  isEmpty: boolean;
  children: JSX.Element;
}

function WithEmptySearch(props: Props) {
  return props.isEmpty ? (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.image} />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subtitle}>Find your favorite writers and books!</Text>
    </View>
  ) : (
    props.children
  );
}

export default WithEmptySearch;
