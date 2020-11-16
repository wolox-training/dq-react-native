import { AuthState } from '@interfaces/auth';
import { onSetValue, createReducer, completeState, completeReducer } from 'redux-recompose';
import { ReduxAction } from '@interfaces/redux';

import { actions as loginActions } from './actions';

const stateDescriptor = {
  headers: null,
  sessionLoading: true
};

const initialState: AuthState = completeState(stateDescriptor, ['sessionLoading']);

const sessionRecoverEffect = () => (state: AuthState, action: ReduxAction) => ({
  ...state,
  sessionLoading: false,
  headers: action.payload
});

const reducerDescription = {
  primaryActions: [loginActions.LOG_IN],
  override: {
    [loginActions.LOG_OUT]: onSetValue(null),
    [loginActions.SESSION_RECOVER]: sessionRecoverEffect()
  }
};

const authReducer = createReducer(initialState, completeReducer(reducerDescription));

export default authReducer;
