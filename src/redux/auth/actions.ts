import { Dispatch } from 'redux';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAILURE: '@@AUTH/LOG_IN_FAILURE'
} as const;

export const actionCreators = {
  logIn: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.LOG_IN });
    const response = { ok: true, data: { token: 'Fake token' }, problem: null };
    if (response.ok) {
      dispatch({ type: actions.LOG_IN_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actions.LOG_IN_FAILURE, payload: response.problem });
    }
  }
};

export default actionCreators;
