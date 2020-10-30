import AuthService from '@services/AuthService';
import { Dispatch } from 'redux';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAILURE: '@@AUTH/LOG_IN_FAILURE'
} as const;

export const actionCreators = {
  logIn: (user: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOG_IN });
    const response = await AuthService.login(user, password);
    if (response.ok) {
      dispatch({ type: actions.LOG_IN_SUCCESS, payload: response.headers!['access-token'] });
    } else {
      dispatch({ type: actions.LOG_IN_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
