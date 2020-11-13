import { Dispatch } from 'redux';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { getHeaders, removeHeaders, storeHeaders } from '@services/LocalStorage';
import AuthService from '@services/AuthService';
import api from '@config/api';

export const actions = createTypes(completeTypes(['LOG_IN'], ['SESSION_RECOVER', 'LOG_OUT']), '@@AUTH');

export const actionCreators = {
  logIn: (user: string, password: string) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.LOG_IN,
      target: 'headers',
      service: AuthService.login,
      payload: { user, password },
      successSelector: (response: any) => {
        const { 'access-token': accessToken, client, uid } = response.headers!;
        const headersObj = { 'access-token': accessToken, client, uid };
        return headersObj;
      },
      injections: [
        withPostSuccess((_: any, response: any) => {
          const { 'access-token': accessToken, client, uid } = response.headers!;
          const headersObj = { 'access-token': accessToken, client, uid };
          api.setHeaders(headersObj);
          storeHeaders(headersObj);
        })
      ]
    });
  },
  rememberUser: () => async (dispatch: Dispatch) => {
    const headers = await getHeaders();
    if (headers) api.setHeaders(headers);
    dispatch({ type: actions.SESSION_RECOVER, payload: headers, target: 'sessionLoading' });
  },
  logOut: () => (dispatch: Dispatch) => {
    removeHeaders();
    ['access-token', 'client', 'uid'].forEach(header => api.deleteHeader(header));
    dispatch({ type: actions.LOG_OUT, target: 'headers' });
  }
};

export default actionCreators;
