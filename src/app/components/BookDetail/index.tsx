import React, { useRef, useState } from 'react';
import { Image, Text, View, Animated, TouchableOpacity } from 'react-native';
import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book6.png';
import icon from '@assets/ic_check.png';
import { CERULEAN, DARK_GREEN, WHITE, SUCCESS_GREEN } from '@constants/colors';

import styles from './styles';

interface Props {
  book: Book;
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const ANIMATION_DURATION = 500;

function BookDetail({ book }: Props) {
  const { image, author, title, year, genre } = book;
  const widthAnimation = useRef(new Animated.Value(250)).current;
  const textFadeAnimation = useRef(new Animated.Value(1)).current;
  const checkMarkFadeAnimation = useRef(new Animated.Value(0)).current;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;
  const borderAnimation = useRef(new Animated.Value(0)).current;
  const [bookRented, onBookRented] = useState(false);
  const borderColor = borderAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [CERULEAN, DARK_GREEN]
  });
  const backgroundColor = backgroundAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [WHITE, SUCCESS_GREEN]
  });
  const onPress = () => {
    Animated.parallel([
      Animated.timing(widthAnimation, {
        toValue: 44,
        duration: ANIMATION_DURATION,
        useNativeDriver: false
      }),
      Animated.timing(backgroundAnimation, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: false
      }),
      Animated.timing(borderAnimation, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: false
      })
    ]).start();
    Animated.timing(textFadeAnimation, {
      toValue: 0,
      duration: ANIMATION_DURATION / 2,
      useNativeDriver: true
    }).start(() => {
      onBookRented(true);
      Animated.timing(checkMarkFadeAnimation, {
        toValue: 1,
        duration: ANIMATION_DURATION / 2,
        useNativeDriver: true
      }).start();
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={
            image.url
              ? {
                  uri: image.url
                }
              : placeholder
          }
          style={styles.image}
        />
        <View style={styles.textsContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.availability}>Unavailable</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
      <AnimatedTouchableOpacity
        style={[styles.wishButton, { width: widthAnimation, backgroundColor, borderColor }]}
        onPress={onPress}>
        {bookRented ? (
          <Animated.Image source={icon} style={[styles.checkIcon, { opacity: checkMarkFadeAnimation }]} />
        ) : (
          <Animated.Text style={[styles.wishButtonText, { opacity: textFadeAnimation }]}>
            ADD TO WISHLIST
          </Animated.Text>
        )}
      </AnimatedTouchableOpacity>
      <View style={styles.rentButton}>
        <Text style={styles.rentButtonText}>RENT</Text>
      </View>
    </View>
  );
}

export default BookDetail;
