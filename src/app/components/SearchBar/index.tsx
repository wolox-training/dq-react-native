import React from 'react';
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from '@assets/ic_gray_search.png';
import deleteIcon from '@assets/ic_gray_cross.png';
import { actionCreators } from '@redux/books/actions';
import { AppState } from '@interfaces/redux';

import styles from './styles';

function SearchBar() {
  const dispatch = useDispatch();
  const onChangeText = (text: string) => dispatch(actionCreators.searchBooks(text));
  const onPressDelete = () => dispatch(actionCreators.searchBooks(''));
  const search = useSelector((state: AppState) => state.book.bookSearch);
  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <TextInput value={search} style={styles.input} onChangeText={onChangeText} placeholder="Search" />
      <TouchableOpacity onPress={onPressDelete}>
        <Image style={styles.deleteIcon} source={deleteIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
