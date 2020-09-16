import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

export default function BookDetail({title, subtitle, url}: {title: string, subtitle: string, url: string}) {
  return (
    <View style={styles.container}>
      <Image source={{
          uri: url,
        }} style={styles.image} />
        <View style={styles.textContainer} >
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
  );
}
