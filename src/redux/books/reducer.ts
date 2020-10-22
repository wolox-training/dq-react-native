import { DATA } from '@app/screens/HomeScreen/constants';
import { BookState } from '@interfaces/book';

const initialState: BookState = {
  books: DATA
};
function reducer(state = initialState): BookState {
  return state;
}

export default reducer;
