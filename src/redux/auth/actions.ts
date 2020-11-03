import { Dispatch } from 'redux';
import { getHeaders, storeHeaders } from '@services/LocalStorage';
import AuthService from '@services/AuthService';
import api from '@config/api';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAILURE: '@@AUTH/LOG_IN_FAILURE',
  SESSION_RECOVERED: '@@AUTH/SESSION_RECOVERED'
} as const;

export const actionCreators = {
  logIn: (user: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOG_IN });
    const response = await AuthService.login(user, password);
    if (response.ok) {
      const { 'access-token': accessToken, client, uid } = response.headers!;
      const headersObj = { 'access-token': accessToken, client, uid };
      api.setHeaders(headersObj);
      storeHeaders(headersObj);
      dispatch({ type: actions.LOG_IN_SUCCESS, payload: headersObj });
    } else {
      dispatch({ type: actions.LOG_IN_FAILURE, payload: response.problem });
    }
  },
  rememberUser: () => async (dispatch: Dispatch) => {
    const headers = await getHeaders();
    if (headers) {
      dispatch({ type: actions.SESSION_RECOVERED, payload: headers });
    }
  }
};

export default actionCreators;
