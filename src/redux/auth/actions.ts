import { Dispatch } from 'redux';
import { getHeaders, removeHeaders, storeHeaders } from '@services/localStorage';
import AuthService from '@services/AuthService';
import api from '@config/api';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAILURE: '@@AUTH/LOG_IN_FAILURE',
  SESSION_RECOVER: '@@AUTH/SESSION_RECOVER',
  LOG_OUT: '@@AUTH/LOG_OUT'
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
    if (headers) api.setHeaders(headers);
    dispatch({ type: actions.SESSION_RECOVER, payload: headers });
  },
  logOut: () => (dispatch: Dispatch) => {
    removeHeaders();
    ['access-token', 'client', 'uid'].forEach(header => api.deleteHeader(header));
    dispatch({ type: actions.LOG_OUT });
  }
};

export default actionCreators;
