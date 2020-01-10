
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import BookCell from './src/app/components/BookCell';

function App ({ prop1, ...props }) {
  return (
    <FlatList
      style={styles.list}
      ItemSeparatorComponent={separator}
      data={[
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"},
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"},
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"},
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"},
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"},
        {title: "Some Looooooooooooooooooooooooooooooooong title", subtitle: "Jhon Doe"}
      ]}
      renderItem={renderBook}
      keyExtractor={getBookKey}
    />
  );
}

function renderBook({item}) {
  return <BookCell title={item.title} subtitle={item.subtitle} ></BookCell>
}

function separator() {
  return <View style={styles.cell} ></View>
}

function getBookKey(item) {
  // TODO: change to book ID
  return item.title + item.subtitle
}

const styles = StyleSheet.create({
  cell: {
    height:10
  },
  list: {
    backgroundColor: "#EAF6FA",
    paddingHorizontal: 20
  }
});

export default App;
