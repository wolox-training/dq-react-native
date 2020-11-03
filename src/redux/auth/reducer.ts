import { storeToken } from '@services/localStorage';
import { AuthState } from '@interfaces/auth';
import { ReduxAction } from '@interfaces/redux';

import { actions as loginActions } from './actions';

const initialState: AuthState = {
  token: null,
  loginLoading: false,
  loginError: null
};
function booksReducer(state = initialState, action: ReduxAction): AuthState {
  switch (action.type) {
    case loginActions.LOG_IN:
      return { ...state, loginLoading: true };
    case loginActions.LOG_IN_SUCCESS:
      storeToken(action.payload);
      return { ...state, token: action.payload, loginLoading: false, loginError: null };
    case loginActions.LOG_IN_FAILURE:
      return { ...state, loginLoading: false, loginError: action.payload };
    case loginActions.SESSION_RECOVERED:
      return { ...state, token: action.payload, loginLoading: false, loginError: null };
    default:
      return state;
  }
}
export default booksReducer;
