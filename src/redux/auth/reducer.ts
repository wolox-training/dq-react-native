import { AuthState } from '@interfaces/auth';
import { ReduxAction } from '@interfaces/redux';

import { actions as loginActions } from './actions';

const initialState: AuthState = {
  headers: null,
  loginLoading: false,
  loginError: null,
  sessionLoading: true
};
function booksReducer(state = initialState, action: ReduxAction): AuthState {
  switch (action.type) {
    case loginActions.LOG_IN:
      return { ...state, loginLoading: true };
    case loginActions.LOG_IN_SUCCESS:
      return { ...state, headers: action.payload, loginLoading: false, loginError: null };
    case loginActions.LOG_IN_FAILURE:
      return { ...state, loginLoading: false, loginError: action.payload };
    case loginActions.SESSION_RECOVER:
      return { ...state, headers: action.payload, sessionLoading: false };
    case loginActions.LOG_OUT:
      return { ...state, headers: null };
    default:
      return state;
  }
}
export default booksReducer;
