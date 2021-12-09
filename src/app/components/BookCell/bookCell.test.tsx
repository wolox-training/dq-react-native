import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import BookCell from '@components/BookCell';
import { Book } from '@interfaces/book';

const mockedBook: Book = {
  id: 1,
  author: 'Stephen King',
  genre: 'Psychological horror',
  publisher: 'Doubleday',
  title: 'The Shining',
  year: '1977',
  image: {url: null}
};

const mockStore = configureStore([]);
const store = mockStore({});

const onPressBook = jest.fn();
    const renderSingleBook = 
    (<Provider store={store}>
      <BookCell book={mockedBook} onBookPress={onPressBook} />
    </Provider>);
  
describe('single book', () => {
  test('Displays book author and name', () => {
    const { getByText } = render(renderSingleBook);
    expect(getByText(mockedBook.author)).toBeDefined();
    expect(getByText(mockedBook.title)).toBeDefined();
  });

  test('Does not display id nor genre', () => {
    const { queryByText } = render(renderSingleBook);

    expect(queryByText(String(mockedBook.id))).toBeNull();
    expect(queryByText(mockedBook.genre)).toBeNull();
  });
});