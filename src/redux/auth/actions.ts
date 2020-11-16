import { Dispatch } from 'redux';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { getHeaders, removeHeaders, storeHeaders } from '@services/LocalStorage';
import AuthService from '@services/AuthService';
import api from '@config/api';

export const actions = createTypes(completeTypes(['LOG_IN'], ['SESSION_RECOVER', 'LOG_OUT']), '@@AUTH');
const TARGETS = {
  HEADERS: 'headers'
};
const getHeadersObj = (headers: any) => {
  const { 'access-token': accessToken, client, uid } = headers;
  const headersObj = { 'access-token': accessToken, client, uid };
  return headersObj;
};

export const actionCreators = {
  logIn: (user: string, password: string) => ({
    type: actions.LOG_IN,
    target: TARGETS.HEADERS,
    service: AuthService.login,
    payload: { user, password },
    successSelector: (response: any) => getHeadersObj(response.headers!),
    injections: [
      withPostSuccess((_: any, response: any) => {
        const headersObj = getHeadersObj(response.headers!);
        api.setHeaders(headersObj);
        storeHeaders(headersObj);
      })
    ]
  }),
  rememberUser: () => async (dispatch: Dispatch) => {
    const headers = await getHeaders();
    if (headers) api.setHeaders(headers);
    dispatch({ type: actions.SESSION_RECOVER, payload: headers });
  },
  logOut: () => (dispatch: Dispatch) => {
    removeHeaders();
    ['access-token', 'client', 'uid'].forEach(header => api.deleteHeader(header));
    dispatch({ type: actions.LOG_OUT, target: TARGETS.HEADERS });
  }
};

export default actionCreators;
