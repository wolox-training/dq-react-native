import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView>
        <BookDetail
          title="A Little Bird Told Me"
          subtitle="Timothy Cross"
          url="https://reactnative.dev/img/tiny_logo.png"
        />
        <BookDetail
          title="When the Doves Disappeared"
          subtitle="Sofi Oksanen"
          url="https://reactnative.dev/img/tiny_logo.png"
        />
        <BookDetail
          title="The Best Book in the World"
          subtitle="Peter Sjernstrom"
          url="https://reactnative.dev/img/tiny_logo.png"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
