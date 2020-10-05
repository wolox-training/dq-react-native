import React, { useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { Book } from '@interfaces/book';
import { Comment } from '@interfaces/comment';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { DATA } from './constants';
import styles from './styles';
import CommentCell from './Comment';

interface Props {
  book: Book;
}

// will need the book when I fetch the comments from the repository
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CommentList({ book }: Props) {
  const renderBook: ListRenderItem<Comment> = ({ item }) => <CommentCell comment={item} />;
  const keyExtractor = ({ id }: Comment) => String(id);

  const data = {
    data: DATA.slice(0, 2),
    viewingAllComments: false
  };
  const [state, setState] = useState(data);

  const onViewAllPressed = () => {
    setState({
      data: DATA,
      viewingAllComments: true
    });
  };

  return (
    <View style={styles.scrollView}>
      <FlatList<Comment> data={state.data} renderItem={renderBook} keyExtractor={keyExtractor} />
      {!state.viewingAllComments && (
        <TouchableOpacity onPress={onViewAllPressed}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CommentList;
